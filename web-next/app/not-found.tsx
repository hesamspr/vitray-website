import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, Home, LayoutGrid, TrendingDown } from 'lucide-react'

import { SiteNav } from '@/components/ui/site-nav'
import { Footer } from '@/components/ui/footer-section'
import { Reveal } from '@/components/ui/reveal'
import { getTranslations } from '@/lib/i18n.server'

export const metadata: Metadata = {
  title: 'صفحه پیدا نشد',
  robots: { index: false, follow: false },
}

export default async function NotFound() {
  const { t, lang } = await getTranslations()
  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight

  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.bi'), href: '/bi-solution' },
    { label: t('nav.stories'), href: '/success-stories' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 pb-28 pt-36 md:pb-32 md:pt-44">
        {/* Accent glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundColor: '#01030c',
            backgroundImage: [
              'radial-gradient(ellipse 60% 50% at 50% 18%, rgba(59, 130, 246, 0.28) 0%, transparent 62%)',
              'radial-gradient(ellipse 50% 45% at 85% 95%, rgba(139, 92, 246, 0.14) 0%, transparent 55%)',
            ].join(', '),
          }}
        />
        {/* Dot-grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, black, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, black, transparent 72%)',
          }}
        />
        {/* Fade into background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />

        <Reveal onMount y={24} duration={0.9} className="relative flex w-full max-w-xl flex-col items-center text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur-sm">
            <TrendingDown size={13} />
            {t('notfound.badge')}
          </div>

          {/* "No data" dashboard widget */}
          <div className="mt-12 w-full overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.04] p-7 backdrop-blur-sm md:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/45">
                {t('notfound.widget_label')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-red-400/10 px-2.5 py-1 text-xs font-semibold text-red-300">
                <TrendingDown size={12} />
                {t('notfound.chart_label')}
              </span>
            </div>

            {/* Flatlining chart with the 404 behind it */}
            <div className="relative mt-6 h-44 md:h-52">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/90 to-blue-400/40 bg-clip-text text-[4.5rem] font-bold leading-none tracking-tighter text-transparent sm:text-[7rem] md:text-[9rem]"
              >
                404
              </div>
              <svg
                viewBox="0 0 320 120"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="nf-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                {/* Live signal that collapses */}
                <polyline
                  points="0,70 30,52 58,82 86,40 112,76 138,58 160,86"
                  fill="none"
                  stroke="url(#nf-line)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Flatline — signal lost */}
                <line
                  x1="160"
                  y1="86"
                  x2="320"
                  y2="86"
                  stroke="rgb(248, 113, 113)"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                />
                <circle cx="160" cy="86" r="4" fill="rgb(248, 113, 113)" className="animate-pulse" />
              </svg>
            </div>
          </div>

          <h1 className="mt-14 w-full max-w-md text-balance text-3xl font-bold tracking-tighter md:text-4xl">{t('notfound.title')}</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {t('notfound.body')}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              <Home size={15} />
              {t('notfound.home')}
            </Link>
            <Link
              href="/bi-solution"
              className="group inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LayoutGrid size={15} />
              {t('notfound.explore')}
              <Arrow size={14} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-16 w-full border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">{t('notfound.links_label')}</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border/50 px-3 py-1 text-xs text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  )
}
