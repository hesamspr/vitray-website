import nodemailer, { type Transporter } from 'nodemailer';
import type { StoredSubmission } from '@/lib/contact-store';

// Sends a notification email for each new lead. Fully optional: if the SMTP
// environment variables are not set, this is a no-op (so nothing breaks before
// credentials are configured). Never throws into the request path — failures
// are logged and swallowed; the lead is already persisted regardless.
//
// Required env to enable:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEADS_NOTIFY_TO
// Optional:
//   SMTP_SECURE ("true" for implicit TLS / port 465), LEADS_NOTIFY_FROM

let cached: Transporter | null = null;

function getTransporter(): Transporter | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return cached;
}

export async function sendLeadNotification(record: StoredSubmission): Promise<void> {
  const to = process.env.LEADS_NOTIFY_TO;
  const transporter = getTransporter();
  if (!transporter || !to) return; // notifications disabled

  const from = process.env.LEADS_NOTIFY_FROM || process.env.SMTP_USER!;
  const subject = `New lead (${record.source}): ${record.name}`;
  const lines = [
    `Name:    ${record.name}`,
    `Email:   ${record.email}`,
    `Mobile:  ${record.mobile}`,
    `Company: ${record.company || '—'}`,
    `Source:  ${record.source}`,
    `Webhook: ${record.webhook_status}${record.webhook_error ? ` (${record.webhook_error})` : ''}`,
    `Time:    ${record.created_at}`,
    `ID:      ${record.id}`,
    '',
    'Message:',
    record.details || '—',
  ];

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: record.email || undefined,
      subject,
      text: lines.join('\n'),
    });
  } catch (err) {
    console.error('[contact] lead notification email failed', err);
  }
}
