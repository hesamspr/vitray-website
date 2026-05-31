import Link from 'next/link'
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Quote, Target, Wrench } from 'lucide-react'

import { SiteNav } from '@/components/ui/site-nav'
import { Footer } from '@/components/ui/footer-section'
import { CallToAction } from '@/components/ui/cta-3'
import { Reveal } from '@/components/ui/reveal'
import { getTranslations } from '@/lib/i18n.server'
import type { Lang } from '@/lib/i18n'
import { pick, successStories, type SuccessStory } from '@/lib/successStories'

type T = (key: string) => string

/** RGB triplets used for inline accent glows in the hero (kept literal for clarity). */
const ACCENT_RGB: Record<SuccessStory['accent'], string> = {
  blue: '59, 130, 246',
  purple: '139, 92, 246',
  green: '16, 185, 129',
  orange: '249, 115, 22',
}

/** Full literal Tailwind class strings so the JIT can see them. */
const ACCENT_STYLE: Record<SuccessStory['accent'], { chip: string; value: string }> = {
  blue: { chip: 'border-blue-400/30 bg-blue-400/10 text-blue-200', value: 'from-white to-blue-300' },
  purple: { chip: 'border-purple-400/30 bg-purple-400/10 text-purple-200', value: 'from-white to-purple-300' },
  green: { chip: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200', value: 'from-white to-emerald-300' },
  orange: { chip: 'border-orange-400/30 bg-orange-400/10 text-orange-200', value: 'from-white to-orange-300' },
}

/** A single story card used on the listing page and the related-stories rail. */
export function StoryCard({ story, lang, t }: { story: SuccessStory; lang: Lang; t: T }) {
  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight
  return (
    <Link
      href={`/success-stories/${story.slug}`}
      className="group relative flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 transition-colors hover:border-primary/40"
    >
      <div className="mb-5">
        <div className="text-xs text-muted-foreground">{pick(story.industry, lang)}</div>
        <h3 className="mt-1 text-lg font-bold tracking-tight text-white">{pick(story.company, lang)}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-neutral-400">{pick(story.summary, lang)}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {t('stories.read')}
        <Arrow size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

export function RelatedStoriesSection({ currentSlug, lang, t }: { currentSlug: string; lang: Lang; t: T }) {
  const others = successStories.filter((s) => s.slug !== currentSlug)
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mx-auto mb-12 flex max-w-[540px] flex-col items-center justify-center space-y-4 text-center">
        <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
          {t('stories.related_badge')}
        </div>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t('stories.related_title')}</h2>
        <p className="text-sm text-muted-foreground md:text-base">{t('stories.related_body')}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {others.map((story) => (
          <StoryCard key={story.slug} story={story} lang={lang} t={t} />
        ))}
      </div>
    </div>
  )
}

export async function SuccessStoryTemplate({ story }: { story: SuccessStory }) {
  const { t, lang } = await getTranslations()
  const aboutParagraphs = pick(story.about, lang).split('\n\n')
  const rgb = ACCENT_RGB[story.accent]
  const accent = ACCENT_STYLE[story.accent]
  const highlight = story.results[0]
  const lead = story.testimonials[0]
  const BackArrow = lang === 'fa' ? ArrowRight : ArrowLeft

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero — editorial case-study header */}
      <header className="relative w-full overflow-hidden">
        {/* Base + per-story accent glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundColor: '#01030c',
            backgroundImage: [
              `radial-gradient(ellipse 70% 60% at 82% 8%, rgba(${rgb}, 0.30) 0%, transparent 60%)`,
              `radial-gradient(ellipse 55% 55% at 8% 100%, rgba(${rgb}, 0.14) 0%, transparent 55%)`,
              'radial-gradient(ellipse 110% 60% at 50% -12%, rgba(59, 130, 246, 0.10) 0%, transparent 60%)',
            ].join(', '),
          }}
        />
        {/* Dot-grid texture, masked toward the accent corner */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 75% 80% at 78% 18%, black, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 80% at 78% 18%, black, transparent 72%)',
          }}
        />
        {/* Fade into the page background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />

        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-32 md:pb-16">
          {/* Breadcrumb back-link */}
          <Reveal onMount y={14} duration={0.7}>
            <Link
              href="/success-stories"
              className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
            >
              <BackArrow size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              {t('stories.badge')}
            </Link>
          </Reveal>

          <div className="mt-8 grid items-end gap-10 md:grid-cols-12">
            {/* Lead text */}
            <Reveal onMount y={24} delay={0.1} duration={0.9} className="space-y-5 md:col-span-7">
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${accent.chip}`}>
                <BarChart3 size={12} />
                {pick(story.industry, lang)}
              </span>
              <h1 className="text-4xl font-bold leading-[1.15] tracking-tighter text-white md:text-6xl">
                {pick(story.company, lang)}
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">{pick(story.intro, lang)}</p>
            </Reveal>

            {/* Key-result highlight card */}
            {highlight && (
              <Reveal onMount y={24} delay={0.25} duration={0.9} className="md:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.04] p-7 backdrop-blur-sm">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                    style={{ backgroundColor: `rgba(${rgb}, 0.35)` }}
                  />
                  <div className="relative">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/45">{t('stories.results_label')}</div>
                    <div className={`mt-3 bg-gradient-to-br bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-6xl ${accent.value}`}>
                      {pick(highlight.value, lang)}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{pick(highlight.label, lang)}</div>
                    {lead && (
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-sm leading-relaxed text-white/75">«{pick(lead.quote, lang)}»</p>
                        <div className="mt-3 text-xs text-white/50">
                          {pick(lead.name, lang)} — {pick(lead.role, lang)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Facts ribbon */}
          <Reveal onMount y={20} delay={0.35} duration={0.8}>
            <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
              {story.facts.map((fact) => (
                <div key={pick(fact.label, lang)} className="px-2 sm:px-5">
                  <dt className="text-lg font-bold tracking-tighter text-white md:text-2xl">{pick(fact.value, lang)}</dt>
                  <dd className="mt-1 text-xs text-white/55">{pick(fact.label, lang)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="h-20" />

      {/* About */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="mx-auto mb-10 flex max-w-[540px] flex-col items-center justify-center space-y-4 text-center">
          <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
            {t('stories.about_label')}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{pick(story.company, lang)}</h2>
        </Reveal>
        <Reveal className="mx-auto max-w-3xl space-y-4">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      <div className="h-20" />

      {/* Challenge + Solution */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal duration={0.7}>
            <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                <Target size={18} className="text-orange-300" />
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight">{t('stories.challenge_label')}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pick(story.challenge, lang)}</p>
            </div>
          </Reveal>
          <Reveal duration={0.7} delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                <Wrench size={18} className="text-blue-300" />
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight">{t('stories.solution_label')}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pick(story.solution, lang)}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h-20" />

      {/* Results */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <div
            className="relative w-full overflow-hidden rounded-3xl border border-white/10"
            style={{
              backgroundColor: '#070b18',
              backgroundImage: [
                'radial-gradient(ellipse 60% 70% at 15% 10%, hsl(220 100% 22% / 0.85) 0%, transparent 60%)',
                'radial-gradient(ellipse 55% 65% at 90% 90%, hsl(210 90% 30% / 0.75) 0%, transparent 55%)',
                'radial-gradient(ellipse 40% 50% at 70% 20%, hsl(230 100% 35% / 0.55) 0%, transparent 60%)',
              ].join(', '),
            }}
          >
            <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">
              <div className="space-y-4">
                <div className="w-fit rounded-lg border border-white/20 px-4 py-1 text-sm text-white/60">
                  {t('stories.results_label')}
                </div>
                <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl">{t('stories.results_title')}</h2>
                <p className="text-sm leading-relaxed text-white/60">{t('stories.results_body')}</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {story.results.map((r) => (
                  <div key={pick(r.label, lang)} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-lg font-bold tracking-tighter text-white">
                      <CheckCircle2 size={14} className="shrink-0 text-white/50" />
                      {pick(r.value, lang)}
                    </div>
                    <div className="mt-1.5 text-xs leading-snug text-white/70">{pick(r.label, lang)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-20" />

      {/* Testimonials */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="mx-auto mb-10 flex max-w-[540px] flex-col items-center justify-center space-y-4 text-center">
          <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
            {t('stories.testimonial_label')}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t('stories.testimonial_title')}</h2>
        </Reveal>
        <div className={`grid gap-4 ${story.testimonials.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-2xl'}`}>
          {story.testimonials.map((item, i) => (
            <Reveal key={i} duration={0.7} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-7">
                <Quote size={22} className="mb-4 text-primary/50" />
                <p className="flex-1 text-base leading-relaxed text-foreground/90">«{pick(item.quote, lang)}»</p>
                <div className="mt-5 border-t border-border/40 pt-4">
                  <div className="text-sm font-bold text-foreground">{pick(item.name, lang)}</div>
                  <div className="text-xs text-muted-foreground">{pick(item.role, lang)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="h-12" />

      <RelatedStoriesSection currentSlug={story.slug} lang={lang} t={t} />

      <div className="mx-auto max-w-5xl overflow-visible px-6 py-20">
        <CallToAction />
      </div>

      <Footer />
    </div>
  )
}
