'use client'

import { m } from 'motion/react'
import { FileText, BarChart3, Trophy, Rocket, Download, ArrowUpLeft } from 'lucide-react'

const ICONS = { file: FileText, chart: BarChart3, trophy: Trophy, demo: Rocket, download: Download } as const

export type PrIconKey = keyof typeof ICONS

export interface PrLinkItem {
  label: string
  href: string
  hint?: string
}

export function PrLinkCard({
  item,
  index,
  icon,
}: {
  item: PrLinkItem
  index: number
  icon: PrIconKey
}) {
  const Icon = ICONS[icon]
  return (
    <m.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative flex items-center gap-4 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
        <Icon size={16} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{item.label}</p>
        {item.hint && <p className="mt-0.5 text-[11px] text-muted-foreground">{item.hint}</p>}
      </div>
      <ArrowUpLeft
        size={16}
        className="text-muted-foreground/60 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </m.a>
  )
}
