import { promises as fs } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

// Append-only JSONL store for contact / consultation submissions.
//
// Every submission is persisted here *before* we report success to the user, so
// leads are never lost even if the downstream webhook (n8n) is down. One JSON
// object per line keeps writes crash-safe (a partial append can only ever
// corrupt the final line) and trivially exportable / greppable on the server.
//
// Location: `<cwd>/data/contact-submissions.jsonl` by default. On the VPS the
// app runs from /var/www/website/web-next, so the file lives at
// /var/www/website/web-next/data/... and survives deploys (git reset --hard
// does not touch untracked, git-ignored files). Override with CONTACT_DATA_FILE.

export type WebhookStatus = 'ok' | 'failed' | 'skipped';

export interface ContactSubmission {
  name: string;
  email: string;
  mobile: string;
  company: string;
  details: string;
}

export interface StoredSubmission extends ContactSubmission {
  id: string;
  created_at: string;
  source: string;
  webhook_status: WebhookStatus;
  webhook_error: string | null;
}

// Resolved lazily (not at module scope) so the build's file tracer doesn't
// follow process.cwd() and trace the whole project.
function dataFile(): string {
  return (
    process.env.CONTACT_DATA_FILE ||
    path.join(process.cwd(), 'data', 'contact-submissions.jsonl')
  );
}

// Serialize writes within this process so concurrent requests can't interleave
// partial lines. The app runs as a single pm2 fork, so an in-process chain is
// sufficient (no cross-process locking needed).
let writeChain: Promise<void> = Promise.resolve();

export async function saveSubmission(record: StoredSubmission): Promise<void> {
  const line = JSON.stringify(record) + '\n';
  const run = writeChain.then(async () => {
    await fs.mkdir(path.dirname(dataFile()), { recursive: true });
    await fs.appendFile(dataFile(), line, 'utf8');
  });
  // Keep the chain alive even if this write rejects, but surface the error to
  // the caller.
  writeChain = run.catch(() => {});
  return run;
}

// Read all stored submissions, newest first. Tolerates a missing file (returns
// []) and skips any malformed/partial line rather than throwing.
export async function readAllSubmissions(): Promise<StoredSubmission[]> {
  let content: string;
  try {
    content = await fs.readFile(dataFile(), 'utf8');
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw err;
  }
  const rows: StoredSubmission[] = [];
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      rows.push(JSON.parse(trimmed) as StoredSubmission);
    } catch {
      // skip corrupt line
    }
  }
  return rows.reverse();
}

export function buildSubmission(
  input: ContactSubmission,
  source: string,
  webhook_status: WebhookStatus,
  webhook_error: string | null,
): StoredSubmission {
  return {
    id: randomUUID(),
    created_at: new Date().toISOString(),
    source,
    name: input.name,
    email: input.email,
    mobile: input.mobile,
    company: input.company,
    details: input.details,
    webhook_status,
    webhook_error,
  };
}
