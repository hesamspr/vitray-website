// Simple in-memory fixed-window rate limiter, keyed by caller (e.g. client IP).
// The app runs as a single pm2 fork process (see contact-store.ts), so an
// in-memory map is sufficient — no cross-process/Redis coordination needed.

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 8;

const hits = new Map<string, { count: number; windowStart: number }>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(key, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

// Forget stale entries periodically so the map doesn't grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now - entry.windowStart > WINDOW_MS) hits.delete(key);
  }
}, WINDOW_MS).unref();
