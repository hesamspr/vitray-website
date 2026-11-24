'use client'

import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { LazyMeshGradient as MeshGradient, ShaderVisibilityGate } from '@/components/ui/lazy-shaders'
import { DaanaMark } from '@/components/ui/daana-mark'
import { useTranslation } from '@/hooks/useTranslation'

const PROMPT_KEYS = ['daana_hero.prompt1', 'daana_hero.prompt2', 'daana_hero.prompt3', 'daana_hero.prompt4']
const EASE = [0.16, 1, 0.3, 1] as const

export function DaanaHero() {
  const { t } = useTranslation()
  const [promptIndex, setPromptIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPromptIndex((i) => (i + 1) % PROMPT_KEYS.length), 3600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 640 }}>
      <ShaderVisibilityGate
        fallback={
          <div
            className="absolute inset-0 h-full w-full"
            style={{ background: 'linear-gradient(160deg, #000000, #2e1065 45%, #0a0618)' }}
          />
        }
      >
        <MeshGradient
          className="absolute inset-0 h-full w-full"
          colors={['#000000', '#4c1d95', '#2e1065', '#0f0a1f', '#7c3aed']}
          speed={0.3}
        />
        <MeshGradient
          className="absolute inset-0 h-full w-full opacity-30"
          colors={['#000000', '#ffffff', '#a78bfa', '#6d28d9']}
          speed={0.2}
        />
      </ShaderVisibilityGate>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-56"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="flex w-full max-w-xl flex-col items-center text-center"
        >
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur-sm">
            <DaanaMark className="h-3.5 w-3.5" />
            {t('daana_hero.by')}
          </div>
          <h1 className="text-7xl font-bold leading-none tracking-tighter text-white md:text-8xl">
            {t('daana_hero.title')}
          </h1>
          <p className="mt-5 text-xl text-white/85 md:text-2xl">{t('daana_hero.tagline')}</p>

          {/* Prompt bar cycling through sample questions */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="mt-14 w-full"
            aria-hidden="true"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/40 px-5 py-4 shadow-[0_0_80px_-20px_rgba(139,92,246,0.8)] backdrop-blur-md">
              <div className="relative h-6 flex-1 overflow-hidden text-start">
                <AnimatePresence mode="wait">
                  <m.span
                    key={promptIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute inset-0 truncate text-[15px] text-white/70"
                  >
                    {t(PROMPT_KEYS[promptIndex])}
                  </m.span>
                </AnimatePresence>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
                <ArrowUp size={15} />
              </span>
            </div>
          </m.div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
            <a
              href="#how"
              className="inline-flex items-center gap-1.5 border-b border-white/25 pb-0.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              {t('daana_hero.how')}
              <ArrowDown size={14} />
            </a>
          </div>
        </m.div>
      </div>
    </div>
  )
}
