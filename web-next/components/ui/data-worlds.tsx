import type { ReactNode } from 'react'
import Image from 'next/image'
import { Database, MessageSquare, ArrowUp, Sparkles } from 'lucide-react'
import { getTranslations } from '@/lib/i18n.server'

export async function DataWorlds() {
  const { t } = await getTranslations()

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* AI chat mock */}
      <div className="flex justify-center">
        <div className="w-full max-w-lg rounded-2xl border border-cyan-400/40 bg-cyan-400/5 px-5 py-4 flex items-center gap-3 shadow-[0_0_40px_rgba(34,211,238,0.08)]" dir="ltr">
          <span dir="ltr" className="flex items-center gap-1.5 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-2.5 py-1.5 shrink-0 shadow-[0_0_14px_rgba(34,211,238,0.6)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-black shrink-0">
              <Sparkles size={11} />
            </span>
            <span className="text-xs font-bold text-cyan-200">Daana</span>
          </span>
          <span className="flex-1 text-sm text-muted-foreground/60 italic select-none text-right" dir="rtl">
            {t('home.dw_placeholder')}
          </span>
          <div className="h-8 w-8 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
            <ArrowUp size={13} className="text-cyan-300" />
          </div>
        </div>
      </div>

      {/* Dashed arrows flowing up into the chat — colors match their destination column */}
      <svg
        width="100%"
        height="64"
        viewBox="0 0 700 64"
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <marker id="dw-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <polygon points="0 0, 8 4, 0 8" fill="rgba(148,163,184,0.4)" />
          </marker>
        </defs>
        <line x1="180" y1="60" x2="330" y2="5"
          stroke="rgba(148,163,184,0.25)" strokeWidth="2" strokeDasharray="7 5"
          markerEnd="url(#dw-arrow)" />
        <line x1="520" y1="60" x2="370" y2="5"
          stroke="rgba(148,163,184,0.25)" strokeWidth="2" strokeDasharray="7 5"
          markerEnd="url(#dw-arrow)" />
      </svg>

      {/* Two worlds — in RTL, DOM-first renders on the right */}
      <div className="grid grid-cols-2 gap-6">

        {/* Structured Data (renders on RIGHT in RTL) */}
        <div className="rounded-2xl border border-blue-400/20 bg-blue-950/20 p-6 sm:p-8 flex flex-col gap-7">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-semibold text-blue-300">{t('home.dw_structured')}</span>
            <Database size={15} className="text-blue-400 shrink-0" />
          </div>

          <div className="flex flex-col gap-2.5 items-center">
            <Label>{t('home.dw_sources')}</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              <SourceChip>CRM</SourceChip>
              <SourceChip>ERP</SourceChip>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center">
            <Label>{t('home.dw_extended')}</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              <ProductChip
                name="Plex"
                logo="/product logos/plex fav white.png"
                colorClass="border-blue-400/35 bg-blue-400/10 text-blue-200"
                glowClass="shadow-[0_0_14px_rgba(96,165,250,0.45)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center">
            <Label>{t('home.dw_visualized')}</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              <ProductChip
                name="Pixel"
                logo="/product logos/Pixel Fav W.png"
                colorClass="border-green-400/35 bg-green-400/10 text-green-200"
                glowClass="shadow-[0_0_14px_rgba(74,222,128,0.45)]"
              />
              <ProductChip
                name="Pulse"
                logo="/product logos/Pulse Fav W.png"
                colorClass="border-orange-400/35 bg-orange-400/10 text-orange-200"
                glowClass="shadow-[0_0_14px_rgba(251,146,60,0.45)]"
              />
              <ProductChip
                name="BI"
                logo="/fav.png"
                colorClass="border-blue-400/35 bg-blue-400/10 text-blue-200"
                glowClass="shadow-[0_0_14px_rgba(96,165,250,0.45)]"
              />
            </div>
          </div>
        </div>

        {/* Org Knowledge (renders on LEFT in RTL) */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-950/20 p-6 sm:p-8 flex flex-col gap-7">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-semibold text-violet-300">{t('home.dw_knowledge')}</span>
            <MessageSquare size={15} className="text-violet-400 shrink-0" />
          </div>

          <div className="flex flex-col gap-2.5 items-center">
            <Label>{t('home.dw_sources')}</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              <SourceChip>{t('home.dw_docs')}</SourceChip>
              <SourceChip>{t('home.dw_notes')}</SourceChip>
              <SourceChip>{t('home.dw_meetings')}</SourceChip>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center">
            <Label>{t('home.dw_captured')}</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              <ProductChip
                name="Daana"
                icon={<Sparkles size={13} />}
                colorClass="border-cyan-400/35 bg-cyan-400/10 text-cyan-200"
                glowClass="shadow-[0_0_14px_rgba(34,211,238,0.45)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center">
            <Label>{t('home.dw_ai')}</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              <FeatureChip>{t('home.dw_summary')}</FeatureChip>
              <FeatureChip>{t('home.dw_transcription')}</FeatureChip>
              <FeatureChip>{t('home.dw_rag')}</FeatureChip>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-medium text-center">
      {children}
    </p>
  )
}

function SourceChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground font-medium" dir="ltr">
      {children}
    </span>
  )
}

function ProductChip({ name, logo, icon, colorClass, glowClass }: {
  name: string
  logo?: string
  icon?: ReactNode
  colorClass: string
  glowClass: string
}) {
  return (
    <span dir="ltr" className={`rounded-lg border px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 ${colorClass} ${glowClass}`}>
      {logo ? (
        <Image src={logo} alt={name} width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
      ) : icon}
      {name}
    </span>
  )
}

function FeatureChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg border border-violet-400/25 bg-violet-400/8 px-3 py-1.5 text-xs text-violet-300/80 font-medium">
      {children}
    </span>
  )
}
