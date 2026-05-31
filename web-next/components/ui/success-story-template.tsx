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

function Monogram({ label, accent }: { label: string; accent: SuccessStory['accent'] }) {
  const ring: Record<SuccessStory['accent'], string> = {
    blue: 'from-blue-500/30 to-blue-500/5 text-blue-200',
    purple: 'from-purple-500/30 to-purple-500/5 text-purple-200',
    green: 'from-emerald-500/30 to-emerald-500/5 text-emerald-200',
    orange: 'from-orange-500/30 to-orange-500/5 text-orange-200',
  }
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br ${ring[accent]} text-xl font-bold`}
      aria-hidden="true"
    >
      {label}
    </div>
  )
}

/** A single story card used on the listing page and the related-stories rail. */
export function StoryCard({ story, lang, t }: { story: SuccessStory; lang: Lang; t: T }) {
  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight
  return (
    <Link
      href={`/success-stories/${story.slug}`}
      className="group relative flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 transition-colors hover:border-primary/40"
    >
      <div className="mb-5 flex items-center gap-3">
        <Monogram label={pick(story.company, lang).slice(0, 2)} accent={story.accent} />
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground">{pick(story.industry, lang)}</div>
          <h3 className="truncate text-lg font-bold tracking-tight text-white">{pick(story.company, lang)}</h3>
        </div>
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '58vh', minHeight: 440 }}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundColor: '#01030c',
            backgroundImage: [
              'radial-gradient(ellipse 65% 50% at 50% 42%, rgba(30, 64, 175, 0.32) 0%, transparent 72%)',
              'radial-gradient(ellipse 95% 3% at 50% 42%, rgba(147, 197, 253, 0.75) 0%, rgba(59, 130, 246, 0.35) 22%, transparent 60%)',
              'radial-gradient(ellipse 5% 18% at 50% 42%, rgba(219, 234, 254, 0.85) 0%, transparent 75%)',
            ].join(', '),
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <Reveal onMount y={24} delay={0.15} duration={0.9} className="flex max-w-[680px] flex-col items-center space-y-5 text-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur-sm">
              <BarChart3 size={13} />
              {pick(story.industry, lang)}
            </div>
            <h1 className="text-4xl font-bold leading-[1.4] tracking-tighter text-white md:text-6xl md:leading-[1.4]">
              {pick(story.company, lang)}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">{pick(story.intro, lang)}</p>
          </Reveal>
        </div>
      </div>

      {/* Key facts strip */}
      <div className="relative z-30 mx-auto -mt-16 max-w-5xl px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border/60 bg-card/80 p-4 backdrop-blur-sm sm:grid-cols-4 md:p-6">
            {story.facts.map((fact) => (
              <div key={pick(fact.label, lang)} className="rounded-2xl border border-border/40 bg-background/40 p-4 text-center">
                <div className="text-lg font-bold tracking-tighter md:text-2xl">{pick(fact.value, lang)}</div>
                <div className="mt-1 text-xs text-muted-foreground">{pick(fact.label, lang)}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

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
