import Link from 'next/link'
import { ArrowLeft, ArrowRight, HardHat, PackageCheck, TrendingUp, Truck, Users, Wallet, Wrench, type LucideIcon } from 'lucide-react'

import { SiteNav } from '@/components/ui/site-nav'
import { Footer } from '@/components/ui/footer-section'
import { CallToAction } from '@/components/ui/cta-3'
import { Reveal } from '@/components/ui/reveal'
import { getTranslations } from '@/lib/i18n.server'
import type { Lang } from '@/lib/i18n'

type T = (key: string) => string

const VERTICALS: Array<{ slug: string; icon: LucideIcon; titleKey: string; descKey: string }> = [
  { slug: 'b2b-sales', icon: TrendingUp, titleKey: 'dashboards.b2b_title', descKey: 'dashboards.b2b_desc' },
  { slug: 'distribution-sales', icon: Truck, titleKey: 'dashboards.dist_title', descKey: 'dashboards.dist_desc' },
  { slug: 'finance', icon: Wallet, titleKey: 'dashboards.finance_title', descKey: 'dashboards.finance_desc' },
  { slug: 'hr', icon: Users, titleKey: 'dashboards.hr_title', descKey: 'dashboards.hr_desc' },
  { slug: 'production', icon: HardHat, titleKey: 'dashboards.production_title', descKey: 'dashboards.production_desc' },
  { slug: 'warehouse', icon: PackageCheck, titleKey: 'dashboards.warehouse_title', descKey: 'dashboards.warehouse_desc' },
  { slug: 'maintenance', icon: Wrench, titleKey: 'dashboards.maintenance_title', descKey: 'dashboards.maintenance_desc' },
]

function DashboardCard({ item, lang, t }: { item: (typeof VERTICALS)[number]; lang: Lang; t: T }) {
  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight
  const Icon = item.icon
  return (
    <Link
      href={`/bi-dashboards/${item.slug}`}
      className="group relative flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 transition-colors hover:border-primary/40"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/40">
        <Icon size={20} className="text-primary" />
      </div>
      <h3 className="text-lg font-bold tracking-tight text-white">{t(item.titleKey)}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{t(item.descKey)}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {t('dashboards.index_cta')}
        <Arrow size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

export default async function BiDashboardsIndexPage() {
  const { t, lang } = await getTranslations()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <div className="mx-auto max-w-5xl px-6 pb-4 pt-28">
        <Reveal onMount className="mx-auto flex max-w-[640px] flex-col items-center justify-center space-y-4 text-center">
          <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
            {t('dashboards.index_badge')}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">{t('dashboards.index_title')}</h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{t('dashboards.index_subtitle')}</p>
        </Reveal>
      </div>

      <div className="h-12" />

      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {VERTICALS.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06} duration={0.7}>
              <DashboardCard item={item} lang={lang} t={t} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl overflow-visible px-6 py-20">
        <CallToAction />
      </div>

      <Footer />
    </div>
  )
}
