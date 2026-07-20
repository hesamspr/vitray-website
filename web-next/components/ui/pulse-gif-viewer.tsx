'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, X } from 'lucide-react'

interface PulseGifViewerProps {
  src: string
  alt: string
}

export function PulseGifViewer({ src, alt }: PulseGifViewerProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  // GIF decoding is CPU-bound and un-pausable, so we only keep the <img> mounted
  // while its card is near the viewport — everything scrolled away stops decoding.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full block text-start cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 bg-black/20"
      >
        {/* padding-top 56.25% = 16:9 — reliable in all grid/flex contexts */}
        <div ref={containerRef} className="relative w-full" style={{ paddingTop: '56.25%' }}>
          {inView && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="absolute top-0 left-0 w-full h-full object-contain block"
            />
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-white/80 text-xs">
              <Maximize2 size={13} />
              بزرگ‌نمایی
            </div>
          </div>
        </div>
      </button>

      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10">
              <span className="text-sm text-white/50">{alt}</span>
              <button
                onClick={close}
                className="flex items-center justify-center h-7 w-7 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={15} />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="w-full h-auto block" />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
