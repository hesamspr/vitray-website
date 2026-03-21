import React, { useId } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "@/hooks/useTranslation"

interface DashboardItem {
  title: string
  description: string
  href: string
  pattern: number[][]
}

function getDashboards(t: (k: string) => string): DashboardItem[] {
  return [
    { title: t('dashboards.b2b_title'), description: t('dashboards.b2b_desc'), href: "/bi-dashboards/b2b-sales", pattern: [[8,1],[9,3],[11,2],[10,4],[8,5]] },
    { title: t('dashboards.dist_title'), description: t('dashboards.dist_desc'), href: "/bi-dashboards/distribution-sales", pattern: [[7,2],[10,1],[8,4],[9,5],[11,3]] },
    { title: t('dashboards.finance_title'), description: t('dashboards.finance_desc'), href: "/bi-dashboards/finance", pattern: [[9,1],[8,3],[11,5],[10,2],[7,4]] },
    { title: t('dashboards.hr_title'), description: t('dashboards.hr_desc'), href: "/bi-dashboards/hr", pattern: [[10,2],[7,1],[9,4],[11,3],[8,5]] },
    { title: t('dashboards.warehouse_title'), description: t('dashboards.warehouse_desc'), href: "/bi-dashboards/warehouse", pattern: [[8,2],[11,1],[7,3],[10,5],[9,4]] },
    { title: t('dashboards.production_title'), description: t('dashboards.production_desc'), href: "/bi-dashboards/production", pattern: [[9,2],[8,4],[11,1],[7,5],[10,3]] },
    { title: t('dashboards.maintenance_title'), description: t('dashboards.maintenance_desc'), href: "/bi-dashboards/maintenance", pattern: [[10,1],[8,3],[11,4],[7,2],[9,5]] },
  ]
}

export function DashboardTemplatesSection() {
  const { t } = useTranslation()
  const dashboards = getDashboards(t)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dashboards.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden border border-border/60 hover:border-primary/40 transition-colors group"
        >
          <Grid size={20} pattern={item.pattern} />
          <p className="text-base font-bold text-white relative z-20 group-hover:text-primary transition-colors">{item.title}</p>
          <p className="text-neutral-400 mt-4 text-sm font-normal relative z-20 leading-relaxed">{item.description}</p>
        </Link>
      ))}
    </div>
  )
}

export function RelatedDashboardsSection({ currentHref }: { currentHref: string }) {
  const { t } = useTranslation()
  const others = getDashboards(t).filter((d) => d.href !== currentHref)

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
        <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
          {t('dashboards.related_badge')}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
          {t('dashboards.related_title')}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          {t('dashboards.related_body')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {others.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden border border-border/60 hover:border-primary/40 transition-colors group"
          >
            <Grid size={20} pattern={item.pattern} />
            <p className="text-base font-bold text-white relative z-20 group-hover:text-primary transition-colors">{item.title}</p>
            <p className="text-neutral-400 mt-4 text-sm font-normal relative z-20 leading-relaxed">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern width={size ?? 20} height={size ?? 20} x="-12" y="4" squares={pattern} className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10" />
      </div>
    </div>
  )
}

export function GridPattern({ width, height, x, y, squares, ...props }: { width: number; height: number; x: string; y: string; squares?: number[][]; className?: string }) {
  const patternId = useId()
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]) => (
            <rect strokeWidth="0" key={`${sx}-${sy}`} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
          ))}
        </svg>
      )}
    </svg>
  )
}
