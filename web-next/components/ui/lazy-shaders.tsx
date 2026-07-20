'use client'

import dynamic from "next/dynamic"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { useLowPerformance } from "@/hooks/useLowPerformance"

// Pulls @paper-design/shaders-react (~150 KB gzip) out of the initial bundle
// so product/dashboard pages don't pay for the shader runtime up front.
// Heros render a black placeholder until the chunk loads — the shaders start
// from black anyway, so the swap is unobtrusive.

const ShaderFallback = () => <div className="absolute inset-0 bg-black" />

export const LazyMeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => ({ default: m.MeshGradient })),
  { ssr: false, loading: ShaderFallback },
)

// The shader-mount runtime only pauses its render loop on tab-hidden, not on
// scroll-away — a hero's WebGL canvases keep rendering underneath the rest of
// the page for as long as it's mounted. This unmounts them (dropping the
// GL context entirely) once scrolled well past, and remounts on the way back.
// It also unmounts for good — no remount — once the page is measured to be
// struggling (low FPS, long tasks, or a low-core-count device).
export function ShaderVisibilityGate({
  children,
  fallback,
}: {
  children: ReactNode
  // A static CSS background (e.g. a linear-gradient built from the same colors
  // as the shader) shown in place of the WebGL canvas. Defaults to plain black.
  fallback?: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)
  const lowPerformance = useLowPerformance()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      {inView && !lowPerformance ? children : (fallback ?? <ShaderFallback />)}
    </div>
  )
}
