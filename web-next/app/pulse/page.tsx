import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PulseHero } from '@/components/ui/pulse-hero';
import { LampContainer } from '@/components/ui/lamp';
import { Reveal } from '@/components/ui/reveal';
import {
  Activity,
  BarChart3,
  Copy,
  Database,
  Eye,
  Globe,
  History,
  Layers,
  Link2,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { getTranslations } from '@/lib/i18n.server';
import { cn } from '@/lib/utils';

export async function PulsePage() {
  const { t } = await getTranslations();

  const features = [
    {
      id: 'feat1',
      icon: Globe,
      glow: 'orange' as const,
      title: t('pulse.feat1_title'),
      body: t('pulse.feat1_body'),
    },
    {
      id: 'feat2',
      icon: ShieldCheck,
      glow: 'blue' as const,
      title: t('pulse.feat2_title'),
      body: t('pulse.feat2_body'),
    },
    {
      id: 'feat3',
      icon: Users,
      glow: 'purple' as const,
      title: t('pulse.feat3_title'),
      body: t('pulse.feat3_body'),
    },
    {
      id: 'feat4',
      icon: BarChart3,
      glow: 'green' as const,
      title: t('pulse.feat4_title'),
      body: t('pulse.feat4_body'),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <PulseHero />

      <div id="features" className="h-4" />

      {/* Core features */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-2xl border border-border/60 overflow-hidden">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isLastRow = index >= features.length - (features.length % 4 || 4);
            return (
              <div
                key={feat.id}
                className={cn(
                  "flex flex-col py-10 relative group/feature border-border/60",
                  "lg:border-r",
                  (index === 0) && "lg:border-l",
                  !isLastRow && "lg:border-b",
                  index < 2 && "sm:border-b lg:border-b-0",
                  index % 2 === 0 && index < features.length - 1 && "sm:border-r lg:border-r-0",
                )}
              >
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/60 to-transparent pointer-events-none" />
                <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                  <Icon size={22} />
                </div>
                <div className="text-base font-bold mb-2 relative z-10 px-10">
                  <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-foreground">
                    {feat.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
                  {feat.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-24" />

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

      {/* Administration features */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-2xl border border-border/60 overflow-hidden">
          {([
            { id: 'adm1', icon: Layers, title: t('pulse.adm1_title'), body: t('pulse.adm1_body') },
            { id: 'adm2', icon: Copy, title: t('pulse.adm2_title'), body: t('pulse.adm2_body') },
            { id: 'adm3', icon: Database, title: t('pulse.adm3_title'), body: t('pulse.adm3_body') },
            { id: 'adm4', icon: Activity, title: t('pulse.adm4_title'), body: t('pulse.adm4_body') },
          ] as const).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col py-10 relative group/feature border-border/60",
                  "lg:border-r",
                  index === 0 && "lg:border-l",
                  index < 2 && "sm:border-b lg:border-b-0",
                  index % 2 === 0 && index < 3 && "sm:border-r lg:border-r-0",
                )}
              >
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/60 to-transparent pointer-events-none" />
                <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                  <Icon size={22} />
                </div>
                <div className="text-base font-bold mb-2 relative z-10 px-10">
                  <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-foreground">
                    {item.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
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
