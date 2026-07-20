'use client'

import { useEffect, useState } from 'react'

// Once a session is flagged degraded, every later page in the same tab starts
// degraded immediately instead of re-measuring — otherwise a fresh product
// page would spin up its shaders again before the monitor had a chance to react.
const STORAGE_KEY = 'vitray:degraded-motion'

const FPS_SAMPLE_FRAMES = 90       // ~1.5s at 60fps per sampling window
const FPS_TRIP_THRESHOLD = 24      // window average below this counts as "bad"
const BAD_WINDOWS_TO_TRIP = 2      // consecutive bad windows before flagging
const LONGTASK_WINDOW_MS = 5000
const LONGTASK_BUDGET_MS = 600     // total blocking time allowed inside the window
const MONITOR_LIFESPAN_MS = 20000  // stop sampling after this long — a fine session stays fine

let degraded = false
let started = false
let refCount = 0
const listeners = new Set<(v: boolean) => void>()

function notify() {
  listeners.forEach((l) => l(degraded))
}

function trip() {
  if (degraded) return
  degraded = true
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // sessionStorage unavailable (private mode etc.) — degraded still holds for this page
  }
  notify()
}

// ?lite=1 forces the lightweight path on (persists for the tab, via STORAGE_KEY,
// so it follows you across pages); ?lite=0 clears a previously-tripped flag so
// you can preview the normal experience again without opening a new tab.
function readForceParam(): boolean | null {
  try {
    const params = new URLSearchParams(window.location.search)
    if (!params.has('lite')) return null
    return params.get('lite') !== '0'
  } catch {
    return null
  }
}

function startMonitor() {
  if (started || typeof window === 'undefined') return
  started = true

  const forced = readForceParam()
  if (forced === true) {
    trip()
    return
  }
  if (forced === false) {
    degraded = false
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
    return
  }

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      degraded = true
      return
    }
  } catch {
    // ignore — fall through to measuring
  }

  // Budget laptops that struggle with WebGL are overwhelmingly low-core-count.
  // This is a coarse signal but cheap and immediate, before any jank is felt.
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    trip()
    return
  }

  let frameCount = 0
  let windowSum = 0
  let badWindows = 0
  let last = performance.now()
  let rafId = 0

  const tick = (now: number) => {
    windowSum += now - last
    last = now
    frameCount++

    if (frameCount >= FPS_SAMPLE_FRAMES) {
      const avgFps = 1000 / (windowSum / frameCount)
      badWindows = avgFps < FPS_TRIP_THRESHOLD ? badWindows + 1 : 0
      frameCount = 0
      windowSum = 0
      if (badWindows >= BAD_WINDOWS_TO_TRIP) {
        trip()
        return
      }
    }
    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)

  let longtaskTotal = 0
  let windowStart = performance.now()
  let observer: PerformanceObserver | undefined

  try {
    observer = new PerformanceObserver((list) => {
      const now = performance.now()
      if (now - windowStart > LONGTASK_WINDOW_MS) {
        longtaskTotal = 0
        windowStart = now
      }
      for (const entry of list.getEntries()) longtaskTotal += entry.duration
      if (longtaskTotal > LONGTASK_BUDGET_MS) trip()
    })
    observer.observe({ type: 'longtask', buffered: false })
  } catch {
    // longtask not supported in this browser — FPS sampling still covers us
  }

  setTimeout(() => {
    cancelAnimationFrame(rafId)
    observer?.disconnect()
  }, MONITOR_LIFESPAN_MS)
}

// Shared across every caller — one rAF loop and one PerformanceObserver for the
// whole page, regardless of how many shaders/heroes are mounted at once.
export function useLowPerformance(): boolean {
  const [value, setValue] = useState(degraded)

  useEffect(() => {
    refCount++
    if (refCount === 1) startMonitor()
    listeners.add(setValue)
    setValue(degraded) // in case it tripped between render and this effect

    return () => {
      refCount--
      listeners.delete(setValue)
    }
  }, [])

  return value
}
