'use client'

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { GlowCard } from '@/components/ui/spotlight-card';
import { motion } from 'motion/react';
import { usePageTitle } from '@/lib/usePageTitle';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';

export function AboutPage() {
  const { t, lang } = useTranslation();
  const navItems = getNavItems(t);
  usePageTitle('page_titles.about');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center space-y-4"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('about.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            {t('about.hero_title')}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('about.hero_body')}
          </p>
        </motion.div>
      </div>

      <div className="h-16" />

      {/* Company overview card */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <GlowCard customSize glowColor="purple" className="flex flex-col p-8 md:p-12 w-full">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
                  {t('about.what_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                  {t('about.what_title')}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.what_body1')}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.what_body2')}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.what_body3')}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { value: t('about.stat_founded_value'), label: t('about.stat_founded') },
                    { value: '+150', label: t('about.stat_projects') },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/40 bg-background/30 p-4 text-center">
                      <div className="text-2xl font-bold tracking-tighter">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>

      <div className="h-24" />

      {/* Brand story */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border/60 bg-card overflow-hidden"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.05), transparent 70%)',
            }}
          />
          <div className="relative px-8 py-12 md:px-16 md:py-16 flex flex-col items-center text-center space-y-6">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('about.story_badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter max-w-xl leading-snug">
              {t('about.story_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              {t('about.story_body')}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="h-24" />

      {/* Data Maturity */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('about.maturity_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t('about.maturity_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('about.maturity_body')}
          </p>
        </motion.div>

        {/* Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              num: '۱',
              glow: 'blue' as const,
              title: t('home.stage1_title'),
              en: 'Data Aware',
              body: t('home.stage1_body'),
            },
            {
              num: '۲',
              glow: 'green' as const,
              title: t('home.stage2_title'),
              en: 'Data Proficient',
              body: t('home.stage2_body'),
            },
            {
              num: '۳',
              glow: 'orange' as const,
              title: t('home.stage3_title'),
              en: 'Data Savvy',
              body: t('home.stage3_body'),
            },
            {
              num: '۴',
              glow: 'purple' as const,
              title: t('home.stage4_title'),
              en: 'Data Driven',
              body: t('home.stage4_body'),
            },
          ].map((stage, index) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <GlowCard customSize glowColor={stage.glow} className="flex flex-col p-6 w-full h-full min-h-[260px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold tracking-tighter text-foreground/20">{stage.num}</span>
                  {lang === 'fa' && (
                    <span className="text-xs text-muted-foreground border border-border/40 px-2 py-0.5 rounded-full" dir="ltr">{stage.en}</span>
                  )}
                </div>
                <h3 className="text-base font-bold mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.body}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/60 bg-card px-8 py-6 text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('about.maturity_closing')}
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage
