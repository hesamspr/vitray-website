'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, Maximize2 } from 'lucide-react'

const DURATION = 7000

export interface ShowcaseFeature {
  id: string
  icon: React.ReactNode
  title: string
  body: string
  badge?: string
  media?: {
    src: string
    width: number
    height: number
    alt: string
  }
}

export function PulseFeatureShowcase({ features }: { features: ShowcaseFeature[] }) {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const rafRef = useRef<number>(undefined)
  const pausedRef = useRef(false)
  const pauseStartRef = useRef(0)
  const totalPausedRef = useRef(0)
  const lightboxPausedRef = useRef(false)
  const lightboxOpenTimeRef = useRef(0)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const start = Date.now()
    totalPausedRef.current = 0
    if (pausedRef.current) pauseStartRef.current = start
    setProgress(0)

    const tick = () => {
      if (pausedRef.current || lightboxPausedRef.current) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const elapsed = Date.now() - start - totalPausedRef.current
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setActive(prev => (prev + 1) % features.length)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [active, features.length])

  const handleMouseEnter = useCallback(() => {
    if (!pausedRef.current) {
      pausedRef.current = true
      pauseStartRef.current = Date.now()
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (pausedRef.current) {
      totalPausedRef.current += Date.now() - pauseStartRef.current
      pausedRef.current = false
    }
  }, [])

  const openLightbox = useCallback(() => {
    setLightboxOpen(true)
    lightboxPausedRef.current = true
    lightboxOpenTimeRef.current = Date.now()
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    if (lightboxPausedRef.current) {
      totalPausedRef.current += Date.now() - lightboxOpenTimeRef.current
      lightboxPausedRef.current = false
    }
  }, [])

  const feature = features[active]

  return (
    <>
      <div
        className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_40%] h-[500px]">

          {/* Tab list — second column = right side in RTL */}
          <div className="overflow-y-auto flex flex-col divide-y divide-white/[0.05] border-b md:border-b-0 md:border-l border-white/[0.05]">
            {features.map((f, index) => {
              const isActive = active === index
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(index)}
                  className={`relative flex flex-col px-5 py-3.5 text-start transition-colors duration-200 ${
                    isActive ? 'bg-white/[0.05]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-y-0 start-0 w-0.5 bg-orange-500/80 rounded-full" />
                  )}
                  <div className="flex items-center gap-3">
                    <span className={`flex-shrink-0 transition-colors duration-200 ${isActive ? 'text-orange-400/80' : 'text-muted-foreground/40'}`}>
                      {f.icon}
                    </span>
                    <span className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-foreground' : 'text-muted-foreground/70'}`}>
                      {f.title}
                    </span>
                    {f.badge && (
                      <span className="ms-auto flex-shrink-0 text-[10px] border border-orange-500/20 text-orange-400/50 rounded-md px-1.5 py-0.5">
                        {f.badge}
                      </span>
                    )}
                  </div>

                  {/* Smooth expand */}
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground/80 leading-relaxed ps-7 pt-2 pb-1">
                        {f.body}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="mt-2 h-0.5 w-full bg-white/10 overflow-hidden rounded-full transition-opacity duration-200"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <div
                      className="h-full bg-orange-500/80 rounded-full"
                      style={{ width: `${isActive ? progress : 0}%`, transition: 'none' }}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content panel — left column */}
          {feature?.media ? (
            <div
              className="group relative flex items-center justify-center overflow-hidden cursor-zoom-in"
              onClick={openLightbox}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.media.src}
                alt={feature.media.alt}
                className="w-full h-full object-contain block"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-white/80 text-xs">
                  <Maximize2 size={13} />
                  بزرگ‌نمایی
                </div>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col justify-center p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 end-0 w-72 h-72 bg-orange-500/[0.04] blur-3xl rounded-full pointer-events-none" />
              <div className="relative space-y-4">
                <div className="w-8 h-0.5 bg-orange-500/50 mb-2" />
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  {feature?.body}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      {mounted && lightboxOpen && feature?.media && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10">
              <span className="text-sm text-white/60">{feature.title}</span>
              <button
                onClick={closeLightbox}
                className="flex items-center justify-center h-7 w-7 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={15} />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={feature.media.src}
              alt={feature.media.alt}
              className="w-full h-auto block"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
