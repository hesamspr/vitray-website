import { NextResponse } from 'next/server';
import {
  buildSubmission,
  saveSubmission,
  type ContactSubmission,
  type StoredSubmission,
  type WebhookStatus,
} from '@/lib/contact-store';
import { sendLeadNotification } from '@/lib/notify-email';

// Run on the Node.js runtime (not Edge) — we need fs access for the local store.
export const runtime = 'nodejs';
// Never cache / statically optimize a form endpoint.
export const dynamic = 'force-dynamic';

const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL || 'https://n8n.vitray.ir/webhook/contact-us-form';

const WEBHOOK_TIMEOUT_MS = 10_000;
const MAX_FIELD_LEN = 5000;

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function parse(body: unknown): ContactSubmission | null {
  if (!body || typeof body !== 'object') return null;
  const b = body as Record<string, unknown>;
  const name = str(b.name);
  const email = str(b.email);
  const mobile = str(b.mobile);
  const details = str(b.details);
  const company = str(b.company);

  // Required fields (mirror what the forms mark `required`).
  if (!name || !email || !mobile) return null;
  // Basic email sanity check — keep it lenient, the webhook/CRM is source of truth.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  // Guard against oversized payloads being written to the store.
  for (const v of [name, email, mobile, company, details]) {
    if (v.length > MAX_FIELD_LEN) return null;
  }

  return { name, email, mobile, company, details };
}

// Forward to the downstream webhook. Never throws — returns the outcome so the
// caller can record it alongside the stored submission.
async function forwardToWebhook(
  submission: ContactSubmission,
): Promise<{ status: WebhookStatus; error: string | null }> {
  if (!WEBHOOK_URL) return { status: 'skipped', error: null };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission),
      signal: controller.signal,
    });
    if (!res.ok) {
      return { status: 'failed', error: `HTTP ${res.status}` };
    }
    return { status: 'ok', error: null };
  } catch (err) {
    const error =
      err instanceof Error && err.name === 'AbortError'
        ? 'timeout'
        : err instanceof Error
          ? err.message
          : 'unknown error';
    return { status: 'failed', error };
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const submission = parse(raw);
  if (!submission) {
    return NextResponse.json({ ok: false, error: 'invalid_input' }, { status: 400 });
  }

  const source = str((raw as Record<string, unknown>).source) || 'contact';

  // Attempt the webhook first so we can record its real outcome, then persist.
  // The save is the final, always-reached step — a webhook failure or timeout
  // never prevents the lead from being stored locally.
  const webhook = await forwardToWebhook(submission);

  let record: StoredSubmission;
  try {
    record = buildSubmission(submission, source, webhook.status, webhook.error);
    await saveSubmission(record);
  } catch (err) {
    // Storage is our durability guarantee — if it fails, tell the client so the
    // user can retry rather than silently dropping the lead.
    console.error('[contact] failed to persist submission', err);
    return NextResponse.json({ ok: false, error: 'storage_failed' }, { status: 500 });
  }

  // Lead is safely stored. Email notification is best-effort and never blocks
  // the success response (it self-suppresses errors and no-ops when SMTP is
  // not configured).
  await sendLeadNotification(record);

  // Report success even if the webhook was down — it's captured in the store
  // for later reconciliation.
  return NextResponse.json({ ok: true, webhook: webhook.status });
}
