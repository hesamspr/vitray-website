import { timingSafeEqual } from 'node:crypto';
import { readAllSubmissions, type StoredSubmission } from '@/lib/contact-store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Simple password-protected page to browse stored leads. Protected with HTTP
// Basic Auth against ADMIN_USER / ADMIN_PASSWORD. Disabled (404) until a
// password is configured, so it's never an open endpoint by accident.

function unauthorized(): Response {
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Vitray leads", charset="UTF-8"' },
  });
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

function checkAuth(request: Request, user: string, pass: string): boolean {
  const header = request.headers.get('authorization') || '';
  if (!header.startsWith('Basic ')) return false;
  let decoded: string;
  try {
    decoded = Buffer.from(header.slice(6), 'base64').toString('utf8');
  } catch {
    return false;
  }
  const i = decoded.indexOf(':');
  if (i === -1) return false;
  const gotUser = decoded.slice(0, i);
  const gotPass = decoded.slice(i + 1);
  // Evaluate both comparisons regardless to keep timing uniform.
  const okUser = safeEqual(gotUser, user);
  const okPass = safeEqual(gotPass, pass);
  return okUser && okPass;
}

const esc = (v: unknown): string =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function statusBadge(s: StoredSubmission['webhook_status']): string {
  const color = s === 'ok' ? '#16a34a' : s === 'failed' ? '#dc2626' : '#6b7280';
  return `<span style="display:inline-block;padding:1px 8px;border-radius:9999px;font-size:11px;color:#fff;background:${color}">${esc(s)}</span>`;
}

function renderPage(rows: StoredSubmission[]): string {
  const body = rows
    .map(
      (r) => `<tr>
        <td>${esc(new Date(r.created_at).toLocaleString())}</td>
        <td>${esc(r.source)}</td>
        <td>${esc(r.name)}</td>
        <td><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></td>
        <td dir="ltr">${esc(r.mobile)}</td>
        <td>${esc(r.company)}</td>
        <td class="msg">${esc(r.details)}</td>
        <td>${statusBadge(r.webhook_status)}${r.webhook_error ? `<div class="err">${esc(r.webhook_error)}</div>` : ''}</td>
      </tr>`,
    )
    .join('');

  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Leads (${rows.length})</title>
<style>
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:0;background:#0b0b0f;color:#e5e7eb}
  header{padding:16px 24px;border-bottom:1px solid #1f2937;display:flex;justify-content:space-between;align-items:center}
  h1{font-size:16px;margin:0;font-weight:600}
  .count{color:#9ca3af;font-size:13px}
  .wrap{overflow-x:auto;padding:0 8px}
  table{border-collapse:collapse;width:100%;font-size:13px}
  th,td{text-align:left;padding:10px 12px;border-bottom:1px solid #1f2937;vertical-align:top}
  th{position:sticky;top:0;background:#11131a;color:#9ca3af;font-weight:600;white-space:nowrap}
  td.msg{max-width:360px;white-space:pre-wrap;word-break:break-word}
  .err{color:#f87171;font-size:11px;margin-top:2px}
  tr:hover td{background:#11131a}
  .empty{padding:48px;text-align:center;color:#6b7280}
  a{color:#93c5fd}
</style></head>
<body>
<header><h1>Vitray — Lead submissions</h1><span class="count">${rows.length} total</span></header>
${
  rows.length === 0
    ? '<div class="empty">No submissions yet.</div>'
    : `<div class="wrap"><table>
  <thead><tr>
    <th>Time</th><th>Source</th><th>Name</th><th>Email</th><th>Mobile</th><th>Company</th><th>Message</th><th>Webhook</th>
  </tr></thead>
  <tbody>${body}</tbody>
</table></div>`
}
</body></html>`;
}

export async function GET(request: Request): Promise<Response> {
  const user = process.env.ADMIN_USER || 'admin';
  const pass = process.env.ADMIN_PASSWORD;

  // Refuse to serve unless a password is configured.
  if (!pass) {
    return new Response('Admin view disabled: set ADMIN_PASSWORD to enable.', {
      status: 404,
    });
  }

  if (!checkAuth(request, user, pass)) return unauthorized();

  const rows = await readAllSubmissions();
  return new Response(renderPage(rows), {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
