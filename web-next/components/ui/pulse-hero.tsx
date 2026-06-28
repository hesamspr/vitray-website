'use client'

import { useState } from "react"
import { LazyMeshGradient as MeshGradient } from "@/components/ui/lazy-shaders"
import { ConsultationModal } from "@/components/ui/consultation-modal"
import { m } from "motion/react"
import { useTranslation } from "@/hooks/useTranslation"

export function PulseHero() {
  const { t } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 520 }}
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#c2410c", "#9a3412", "#0f172a", "#ea580c"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-10"
        colors={["#000000", "#c2410c", "#1e1e2e", "#0f172a"]}
        speed={0.15}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-[640px] text-center space-y-5"
        >
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70 w-fit">
            {t('pulse_hero.badge')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            {t('pulse_hero.title')}
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            {t('pulse_hero.body')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://pulse.vitray.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-400 px-6 py-2.5 text-sm font-medium text-white transition-colors"
            >
              {t('pulse_hero.cta_primary')}
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              {t('pulse_hero.cta_secondary')}
            </button>
          </div>
        </m.div>
      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
