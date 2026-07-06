import { NextResponse } from 'next/server';
import {
  buildSubmission,
  saveSubmission,
  type ContactSubmission,
  type StoredSubmission,
  type WebhookStatus,
} from '@/lib/contact-store';
import { sendLeadNotification } from '@/lib/notify-email';
import { isRateLimited } from '@/lib/rate-limit';
import { verifyTurnstileToken } from '@/lib/turnstile';

// Run on the Node.js runtime (not Edge) — we need fs access for the local store.
export const runtime = 'nodejs';
// Never cache / statically optimize a form endpoint.
export const dynamic = 'force-dynamic';

const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL || 'https://n8n.saeidpour.com/webhook/contact-us-form';

const WEBHOOK_TIMEOUT_MS = 10_000;
const MAX_FIELD_LEN = 5000;
// Forms render a timestamp and echo it back on submit. A human can't fill
// name/email/mobile/details faster than this; bots that submit instantly do.
const MIN_FILL_TIME_MS = 1000;

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

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

  const b = raw as Record<string, unknown>;
  const source = str(b.source) || 'contact';
  const ip = clientIp(request);

  // Real users never hit the rate limit; bots hammering the endpoint do.
  // This is checked (and rejected honestly) before the spam heuristics below,
  // which are designed to fail silently instead.
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  // --- Spam heuristics ---------------------------------------------------
  // Any of these tripping means the request is almost certainly a bot. We
  // report success anyway (without storing/forwarding/emailing) so scripted
  // bots get no signal that they were caught and don't adapt.
  const honeypotFilled = str(b.website).length > 0;
  // The client computes its own elapsed time and sends that single number
  // (rather than us diffing a client timestamp against our own clock) so
  // this check can't be thrown off by clock skew between the two machines.
  const elapsedMs = Number(b.elapsed_ms);
  const fillTimeMs = Number.isFinite(elapsedMs) ? elapsedMs : Infinity;
  const tooFast = fillTimeMs < MIN_FILL_TIME_MS;

  const turnstileToken = str(b.turnstile_token);
  // A missing token (widget never loaded — e.g. blocked script, outage) is
  // NOT treated as spam: we only reject when Cloudflare explicitly says the
  // token is invalid.
  const turnstileFailed =
    turnstileToken.length > 0 && !(await verifyTurnstileToken(turnstileToken, ip));

  if (honeypotFilled || tooFast || turnstileFailed) {
    console.warn('[contact] silently dropped suspected spam', {
      ip,
      honeypotFilled,
      tooFast,
      turnstileFailed,
    });
    return NextResponse.json({ ok: true, webhook: 'skipped' });
  }

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
