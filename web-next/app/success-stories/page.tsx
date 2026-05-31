import { SiteNav } from '@/components/ui/site-nav'
import { Footer } from '@/components/ui/footer-section'
import { CallToAction } from '@/components/ui/cta-3'
import { Reveal } from '@/components/ui/reveal'
import { StoryCard } from '@/components/ui/success-story-template'
import { getTranslations } from '@/lib/i18n.server'
import { successStories } from '@/lib/successStories'

export default async function SuccessStoriesPage() {
  const { t, lang } = await getTranslations()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 pb-4 pt-28">
        <Reveal onMount className="mx-auto flex max-w-[640px] flex-col items-center justify-center space-y-4 text-center">
          <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
            {t('stories.badge')}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">{t('stories.title')}</h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{t('stories.subtitle')}</p>
        </Reveal>
      </div>

      <div className="h-12" />

      {/* Stories grid */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {successStories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.07} duration={0.7}>
              <StoryCard story={story} lang={lang} t={t} />
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
