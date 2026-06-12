'use client'

import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { Sparkles, ArrowUp } from 'lucide-react'
import { LazyMeshGradient as MeshGradient } from '@/components/ui/lazy-shaders'
import { useTranslation } from '@/hooks/useTranslation'

const PROMPT_KEYS = ['daana_hero.prompt1', 'daana_hero.prompt2', 'daana_hero.prompt3', 'daana_hero.prompt4']

export function DaanaHero() {
  const { t } = useTranslation()
  const [promptIndex, setPromptIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPromptIndex((i) => (i + 1) % PROMPT_KEYS.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 560 }}
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={['#000000', '#0e7490', '#164e63', '#0f172a', '#06b6d4']}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={['#000000', '#ffffff', '#22d3ee', '#0891b2']}
        speed={0.2}
      />


      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-[680px] text-center space-y-5"
        >
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70 w-fit">
            <Sparkles size={14} className="text-cyan-300" />
            {t('daana_hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
            {t('daana_hero.title')}
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            {t('daana_hero.body')}
          </p>

          {/* Mock prompt bar cycling through example questions */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md px-4 py-3 shadow-[0_0_40px_-12px_rgba(34,211,238,0.45)]">
              <Sparkles size={16} className="text-cyan-300/80 shrink-0" />
              <div className="relative flex-1 h-5 overflow-hidden text-start">
                <AnimatePresence mode="wait">
                  <m.span
                    key={promptIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute inset-0 text-sm text-white/55 truncate"
                  >
                    {t(PROMPT_KEYS[promptIndex])}
                  </m.span>
                </AnimatePresence>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/90 text-black shrink-0">
                <ArrowUp size={14} />
              </span>
            </div>
          </m.div>
        </m.div>
      </div>
    </div>
  )
}
