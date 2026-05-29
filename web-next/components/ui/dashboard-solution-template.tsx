import { type ComponentType } from 'react';
import { LazyMeshGradient as MeshGradient } from '@/components/ui/lazy-shaders';
import { BarChart3, CheckCircle2, Layers, Lock, type LucideIcon } from 'lucide-react';

import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { LampContainer } from '@/components/ui/lamp';
import { RelatedDashboardsSection } from '@/components/ui/feature-section-with-card-gradient';
import { BiConsultationButton } from '@/components/ui/bi-consultation-button';
import { Reveal } from '@/components/ui/reveal';
import { getTranslations } from '@/lib/i18n.server';

type Icon = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export interface DashboardSolutionConfig {
  i18nKey: string;
  pageTitleKey: string;
  currentHref: string;
  capabilityIcons: [Icon, Icon, Icon];
  viewIcons: [Icon, Icon, Icon, Icon, Icon, Icon];
}

export async function DashboardSolutionTemplate({ config }: { config: DashboardSolutionConfig }) {
  const { t } = await getTranslations();

  const k = (suffix: string) => `${config.i18nKey}.${suffix}`;

  const capabilities = [
    { id: 'cap1', title: t(k('cap1_title')), description: t(k('cap1_body')), icon: config.capabilityIcons[0] },
    { id: 'cap2', title: t(k('cap2_title')), description: t(k('cap2_body')), icon: config.capabilityIcons[1] },
    { id: 'cap3', title: t(k('cap3_title')), description: t(k('cap3_body')), icon: config.capabilityIcons[2] },
  ];

  const views = [
    { id: '01', title: t(k('view1_title')), description: t(k('view1_body')), icon: config.viewIcons[0] },
    { id: '02', title: t(k('view2_title')), description: t(k('view2_body')), icon: config.viewIcons[1] },
    { id: '03', title: t(k('view3_title')), description: t(k('view3_body')), icon: config.viewIcons[2] },
    { id: '04', title: t(k('view4_title')), description: t(k('view4_body')), icon: config.viewIcons[3] },
    { id: '05', title: t(k('view5_title')), description: t(k('view5_body')), icon: config.viewIcons[4] },
    { id: '06', title: t(k('view6_title')), description: t(k('view6_body')), icon: config.viewIcons[5] },
  ];

  const kpis = [
    t(k('kpi1')),
    t(k('kpi2')),
    t(k('kpi3')),
    t(k('kpi4')),
    t(k('kpi5')),
    t(k('kpi6')),
    t(k('kpi7')),
    t(k('kpi8')),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 520 }}>
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={['#000000', '#3730a3', '#1e1b4b', '#0f172a', '#4338ca']}
          speed={0.3}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-40"
          colors={['#000000', '#ffffff', '#3730a3', '#6366f1']}
          speed={0.2}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <Reveal onMount y={24} delay={0.15} duration={0.9} className="flex flex-col items-center max-w-[640px] text-center space-y-5">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70 w-fit">
              <BarChart3 size={13} />
              {t(k('badge'))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              {t(k('hero_title1'))}
              <br />
              {t(k('hero_title2'))}
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              {t(k('hero_body'))}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="h-24" />

      {/* Capabilities */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t(k('caps_badge'))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t(k('caps_title'))}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t(k('caps_body'))}
          </p>
        </Reveal>

        <AnimatedBackground
          enableHover
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 [&>div]:h-full [&>div>div]:h-full"
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <Reveal
                key={cap.id}
                delay={index * 0.07}
                duration={0.7}
                className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-4">
                  <Icon size={16} className="text-muted-foreground" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </Reveal>
            );
          })}
        </AnimatedBackground>
      </div>

      <div className="h-24" />

      {/* Dashboard Views */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t(k('views_badge'))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t(k('views_title'))}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t(k('views_body'))}
          </p>
        </Reveal>

        <AnimatedBackground
          enableHover
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 [&>div]:h-full [&>div>div]:h-full"
        >
          {views.map((view, index) => {
            const Icon = view.icon;
            return (
              <Reveal
                key={view.id}
                delay={index * 0.07}
                duration={0.7}
                className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{view.id}</span>
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {view.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{view.description}</p>
              </Reveal>
            );
          })}
        </AnimatedBackground>
      </div>

      <div className="h-24" />

      {/* KPIs */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <WarpCard
            colors={['hsl(250,100%,15%)', 'hsl(260,100%,55%)', 'hsl(280,90%,40%)', 'hsl(240,100%,65%)']}
            shape="checks"
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              <div className="space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t(k('kpis_badge'))}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t(k('kpis_title'))}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(k('kpis_body'))}
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kpis.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={15} className="text-white/60 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </WarpCard>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* Tech stack */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-muted/30 shrink-0">
              <Layers size={20} className="text-indigo-400" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="border border-border/60 py-1 px-3 rounded-lg text-xs text-muted-foreground w-fit">
                {t(k('stack_badge'))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {t(k('stack_title'))}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t(k('stack_body'))}
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <Lock size={18} className="text-muted-foreground/60" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Closing lamp */}
      <LampContainer color="purple" className="min-h-[44rem] mb-[-14rem]">
        <Reveal
          y={60}
          fromOpacity={0.5}
          delay={0.3}
          ease="easeInOut"
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t(k('closing_title'))}
          </h2>
          <BiConsultationButton label={t(k('closing_cta'))} />
        </Reveal>
      </LampContainer>

      <div className="h-16" />

      <RelatedDashboardsSection currentHref={config.currentHref} />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
