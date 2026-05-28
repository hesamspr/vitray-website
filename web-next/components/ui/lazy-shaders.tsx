'use client'

import dynamic from "next/dynamic"

// Pulls @paper-design/shaders-react (~150 KB gzip) out of the initial bundle
// so product/dashboard pages don't pay for the shader runtime up front.
// Heros render a black placeholder until the chunk loads — the shaders start
// from black anyway, so the swap is unobtrusive.

const ShaderFallback = () => <div className="absolute inset-0 bg-black" />

export const LazyMeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => ({ default: m.MeshGradient })),
  { ssr: false, loading: ShaderFallback },
)

export const LazyWarp = dynamic(
  () => import("@paper-design/shaders-react").then((m) => ({ default: m.Warp })),
  { ssr: false, loading: ShaderFallback },
)
