import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PulseHero } from '@/components/ui/pulse-hero';
import { LampContainer } from '@/components/ui/lamp';
import { Reveal } from '@/components/ui/reveal';
import { PulseFeatureShowcase } from '@/components/ui/pulse-feature-showcase';
import {
  Activity,
  BarChart3,
  CalendarDays,
  Check,
  Copy,
  Database,
  Eye,
  Globe,
  History,
  Layers,
  LayoutTemplate,
  Link2,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { getTranslations } from '@/lib/i18n.server';

export async function PulsePage() {
  const { t } = await getTranslations();

  const showcaseFeatures = [
    {
      id: 'cal',
      icon: <CalendarDays size={18} />,
      title: t('pulse.cal_title'),
      body: t('pulse.cal_body'),
      media: { src: '/pulse/farsi-calendar.gif', width: 572, height: 444, alt: t('pulse.cal_title') },
    },
    {
      id: 'tab',
      icon: <LayoutTemplate size={18} />,
      title: t('pulse.tab_title'),
      body: t('pulse.tab_body'),
      media: { src: '/pulse/multi-tab.gif', width: 718, height: 468, alt: t('pulse.tab_title') },
    },
    {
      id: 'feat1',
      icon: <Globe size={18} />,
      title: t('pulse.feat1_title'),
      body: t('pulse.feat1_body'),
    },
    {
      id: 'feat2',
      icon: <ShieldCheck size={18} />,
      title: t('pulse.feat2_title'),
      body: t('pulse.feat2_body'),
      media: { src: '/pulse/security.gif', width: 1800, height: 938, alt: t('pulse.feat2_title') },
    },
    {
      id: 'feat3',
      icon: <Users size={18} />,
      title: t('pulse.feat3_title'),
      body: t('pulse.feat3_body'),
    },
    {
      id: 'feat4',
      icon: <BarChart3 size={18} />,
      title: t('pulse.feat4_title'),
      body: t('pulse.feat4_body'),
    },
    {
      id: 'adm1',
      icon: <Layers size={18} />,
      title: t('pulse.adm1_title'),
      body: t('pulse.adm1_body'),
      media: { src: '/pulse/access-management.gif', width: 1798, height: 978, alt: t('pulse.adm1_title') },
    },
    {
      id: 'adm2',
      icon: <Copy size={18} />,
      title: t('pulse.adm2_title'),
      body: t('pulse.adm2_body'),
    },
    {
      id: 'adm3',
      icon: <Database size={18} />,
      title: t('pulse.adm3_title'),
      body: t('pulse.adm3_body'),
    },
    {
      id: 'adm4',
      icon: <Activity size={18} />,
      title: t('pulse.adm4_title'),
      body: t('pulse.adm4_body'),
      media: { src: '/pulse/analytics.gif', width: 1800, height: 976, alt: t('pulse.adm4_title') },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <PulseHero />

      <div id="features" className="h-4" />

      {/* Feature showcase */}
      <div className="mx-auto max-w-5xl px-6 py-4 space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-xs text-orange-400/60 font-medium tracking-wide uppercase">
            {t('pulse.features_badge')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
            {t('pulse.features_title')}
          </h2>
        </div>
        <PulseFeatureShowcase features={showcaseFeatures} />
      </div>

      <div className="h-16" />

      {/* Tier section */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="space-y-2 text-center mb-8">
          <p className="text-xs text-orange-400/60 font-medium tracking-wide uppercase">
            {t('pulse.tier_badge')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
            {t('pulse.tier_title')}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            {t('pulse.tier_body')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Standard */}
          <Reveal x={20} y={0} duration={0.7}>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden h-full">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex flex-col p-6 h-full">
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/50 mb-1">{t('pulse.tier_standard_tagline')}</p>
                <h3 className="text-lg font-bold text-foreground mb-4">{t('pulse.tier_standard_name')}</h3>
                <ul className="space-y-2.5 flex-1">
                  {['feat1','feat2','feat3','feat4','feat5'].map(k => (
                    <li key={k} className="flex items-start gap-2.5">
                      <Check size={13} className="text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground/80">{t(`pulse.tier_standard_${k}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Advanced */}
          <Reveal y={0} duration={0.7} delay={0.1}>
            <div className="relative rounded-3xl border border-orange-500/25 bg-orange-500/[0.04] backdrop-blur-sm overflow-hidden h-full">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="flex flex-col p-6 h-full">
                <p className="text-[10px] font-medium tracking-widest uppercase text-orange-400/50 mb-1">{t('pulse.tier_advanced_tagline')}</p>
                <h3 className="text-lg font-bold text-foreground mb-4">{t('pulse.tier_advanced_name')}</h3>
                <ul className="space-y-2.5 flex-1">
                  {['feat1','feat2','feat3','feat4','feat5'].map(k => (
                    <li key={k} className="flex items-start gap-2.5">
                      <Check size={13} className="text-orange-400/70 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground/80">{t(`pulse.tier_advanced_${k}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Premium */}
          <Reveal x={-20} y={0} duration={0.7} delay={0.2}>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden h-full">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex flex-col p-6 h-full">
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/50 mb-1">{t('pulse.tier_premium_tagline')}</p>
                <h3 className="text-lg font-bold text-foreground mb-4">{t('pulse.tier_premium_name')}</h3>
                <ul className="space-y-2.5 flex-1">
                  {['feat1','feat2','feat3','feat4','feat5'].map(k => (
                    <li key={k} className="flex items-start gap-2.5">
                      <Check size={13} className="text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground/80">{t(`pulse.tier_premium_${k}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h-10" />

      {/* Main description */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden w-full">
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-orange-500/25 py-1 px-4 rounded-lg text-sm text-orange-400/70 w-fit">
                  {t('pulse.about_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
                  {t('pulse.about_title')}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('pulse.about_body')}
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {[
                  { id: 'pill_powerbi', icon: BarChart3, label: t('pulse.pill_powerbi') },
                  { id: 'pill_calendar', icon: Users, label: t('pulse.pill_calendar') },
                  { id: 'pill_persian', icon: Globe, label: t('pulse.pill_persian') },
                  { id: 'pill_team', icon: Server, label: t('pulse.pill_team') },
                ].map(({ id, icon: Icon, label }) => (
                  <div
                    key={id}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/[0.04] p-4 text-center"
                  >
                    <Icon size={18} className="text-orange-400/80" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-10" />

      {/* Architecture */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal x={20} y={0} duration={0.7}>
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden w-full">
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            <div className="flex flex-col p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/5 mb-4">
                <Link2 size={18} className="text-orange-400/80" />
              </div>
              <div className="border border-orange-500/20 py-1 px-3 rounded-lg text-xs text-orange-400/60 w-fit mb-3">
                {t('pulse.arch_badge')}
              </div>
              <h3 className="text-xl font-bold tracking-tighter mb-2 text-foreground">{t('pulse.arch_title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('pulse.arch_body')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-10" />

      {/* Permissions + Version history */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          <Reveal x={20} y={0} duration={0.7}>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden h-full">
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/5 mb-4">
                  <Eye size={18} className="text-orange-400/80" />
                </div>
                <div className="border border-orange-500/20 py-1 px-3 rounded-lg text-xs text-orange-400/60 w-fit mb-3">
                  {t('pulse.perm_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-foreground">{t('pulse.perm_title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('pulse.perm_body')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal x={-20} y={0} duration={0.7} delay={0.15}>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden h-full">
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/5 mb-4">
                  <History size={18} className="text-orange-400/80" />
                </div>
                <div className="border border-orange-500/20 py-1 px-3 rounded-lg text-xs text-orange-400/60 w-fit mb-3">
                  {t('pulse.ver_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-foreground">{t('pulse.ver_title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('pulse.ver_body')}
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      <div className="h-16" />

      {/* Closing lamp section */}
      <LampContainer color="orange" className="min-h-[44rem] mb-[-14rem]">
        <Reveal
          y={60}
          fromOpacity={0.5}
          delay={0.3}
          ease="easeInOut"
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('pulse.closing_title')}
          </h2>
          <a
            href="https://pulse.vitray.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            {t('pulse.closing_demo')}
          </a>
          <p className="text-xs text-white/40">
            {t('pulse.closing_body')}
          </p>
        </Reveal>
      </LampContainer>

      <div className="h-16" />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}

export default PulsePage
