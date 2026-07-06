'use client'

import { useEffect, useRef } from 'react'

// Loads Cloudflare Turnstile in fully invisible mode (no checkbox, no visible
// puzzle for most visitors) and exposes a getToken() that resolves a token on
// demand at submit time.
//
// Fails open by design: if the site key isn't configured, the script is
// blocked, or the widget doesn't produce a token within TOKEN_TIMEOUT_MS
// (e.g. during a connectivity outage), getToken() resolves to null instead of
// rejecting — callers should submit anyway and let the server fall back to
// its other spam signals (see app/api/contact/route.ts).

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          size: 'invisible'
          callback: (token: string) => void
          'error-callback'?: () => void
        },
      ) => string
      execute: (widgetId: string) => void
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
const TOKEN_TIMEOUT_MS = 3000

let scriptLoadPromise: Promise<void> | null = null

function loadScript(): Promise<void> {
  if (scriptLoadPromise) return scriptLoadPromise
  scriptLoadPromise = new Promise((resolve, reject) => {
    if (window.turnstile) return resolve()
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('turnstile script failed')))
      return
    }
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('turnstile script failed'))
    document.head.appendChild(script)
  })
  return scriptLoadPromise
}

export function useTurnstile() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)
  // The single render-time callback forwards each token/error to whichever
  // getToken() call is currently pending (execute() re-fires it per call).
  const pendingRef = useRef<((token: string | null) => void) | null>(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey || !containerRef.current) return
    let cancelled = false

    loadScript()
      .then(() => {
        if (cancelled || !window.turnstile || !containerRef.current) return
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          size: 'invisible',
          callback: (token: string) => pendingRef.current?.(token),
          'error-callback': () => pendingRef.current?.(null),
        })
      })
      .catch(() => {
        // Script blocked/unreachable — widgetIdRef stays null, getToken()
        // below falls through to the fail-open path.
      })

    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [siteKey])

  async function getToken(): Promise<string | null> {
    const widgetId = widgetIdRef.current
    if (!siteKey || !window.turnstile || !widgetId) return null

    return new Promise<string | null>((resolve) => {
      let settled = false
      const settle = (result: string | null) => {
        if (settled) return
        settled = true
        pendingRef.current = null
        resolve(result)
      }

      const timer = setTimeout(() => settle(null), TOKEN_TIMEOUT_MS)
      pendingRef.current = (token) => {
        clearTimeout(timer)
        settle(token)
      }

      try {
        window.turnstile!.execute(widgetId)
      } catch {
        clearTimeout(timer)
        settle(null)
      }
    })
  }

  return { containerRef, getToken }
}
