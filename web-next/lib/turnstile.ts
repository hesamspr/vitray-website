// Server-side verification for Cloudflare Turnstile. Deliberately fails open:
// if TURNSTILE_SECRET_KEY is unset, Cloudflare's endpoint is unreachable, or
// the request times out (e.g. during a connectivity outage), verification
// passes rather than blocking a possibly-legitimate lead. The caller is
// responsible for treating a missing token (widget never loaded) the same
// way — see app/api/contact/route.ts.

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const VERIFY_TIMEOUT_MS = 5000;

export async function verifyTurnstileToken(token: string, remoteIp: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), VERIFY_TIMEOUT_MS);
  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token, remoteip: remoteIp }),
      signal: controller.signal,
    });
    if (!res.ok) return true;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return true;
  } finally {
    clearTimeout(timer);
  }
}
