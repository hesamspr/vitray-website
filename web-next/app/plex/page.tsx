'use client'

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PlexHero } from '@/components/ui/plex-hero';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';
import {
  BarChart3,
  Bell,
  Briefcase,
  Code2,
  Database,
  FileSpreadsheet,
  Layers3,
  Lock,
  ShieldCheck,
  Shuffle,
  Sliders,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';
import { cn } from '@/lib/utils';

export function PlexPage() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);

  usePageTitle('page_titles.plex');

  const capabilities = [
    {
      id: 'cap1',
      icon: Code2,
      glow: 'blue' as const,
      title: t('plex.cap1_title'),
      body: t('plex.cap1_body'),
    },
    {
      id: 'cap2',
      icon: Database,
      glow: 'purple' as const,
      title: t('plex.cap2_title'),
      body: t('plex.cap2_body'),
    },
    {
      id: 'cap3',
      icon: Shuffle,
      glow: 'green' as const,
      title: t('plex.cap3_title'),
      body: t('plex.cap3_body'),
    },
    {
      id: 'cap4',
      icon: Zap,
      glow: 'orange' as const,
      title: t('plex.cap4_title'),
      body: t('plex.cap4_body'),
    },
  ];

  const dataSources = [
    { icon: Database, label: t('plex.source1') },
    { icon: Layers3, label: t('plex.source2') },
    { icon: FileSpreadsheet, label: t('plex.source3') },
    { icon: Layers3, label: t('plex.source4') },
  ];

  const workflowFeatures = [
    { icon: Zap, label: t('plex.workflow1') },
    { icon: Bell, label: t('plex.workflow2') },
    { icon: ShieldCheck, label: t('plex.workflow3') },
    { icon: Workflow, label: t('plex.workflow4') },
  ];

  const accessLevels = [
    { icon: Sliders, label: t('plex.access1') },
    { icon: Lock, label: t('plex.access2') },
    { icon: ShieldCheck, label: t('plex.access3') },
    { icon: Database, label: t('plex.access4') },
  ];

  const portals = [
    {
      id: 'financial',
      title: t('plex.portal_financial_title'),
      features: [
        t('plex.portal_financial_feat1'),
        t('plex.portal_financial_feat2'),
        t('plex.portal_financial_feat3'),
        t('plex.portal_financial_feat4'),
      ],
    },
    {
      id: 'personnel',
      title: t('plex.portal_personnel_title'),
      features: [
        t('plex.portal_personnel_feat1'),
        t('plex.portal_personnel_feat2'),
        t('plex.portal_personnel_feat3'),
        t('plex.portal_personnel_feat4'),
      ],
    },
    {
      id: 'legal',
      title: t('plex.portal_legal_title'),
      features: [
        t('plex.portal_legal_feat1'),
        t('plex.portal_legal_feat2'),
        t('plex.portal_legal_feat3'),
        t('plex.portal_legal_feat4'),
      ],
    },
    {
      id: 'customers',
      title: t('plex.portal_customers_title'),
      features: [
        t('plex.portal_customers_feat1'),
        t('plex.portal_customers_feat2'),
        t('plex.portal_customers_feat3'),
        t('plex.portal_customers_feat4'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      <PlexHero />

      <div id="features" className="h-4" />

      {/* Core capabilities */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-2xl border border-border/60 overflow-hidden">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isLastRow = index >= capabilities.length - (capabilities.length % 4 || 4);
            return (
              <div
                key={cap.id}
                className={cn(
                  "flex flex-col py-10 relative group/feature border-border/60",
                  "lg:border-r",
                  (index === 0) && "lg:border-l",
                  !isLastRow && "lg:border-b",
                  index < 2 && "sm:border-b lg:border-b-0",
                  index % 2 === 0 && index < capabilities.length - 1 && "sm:border-r lg:border-r-0",
                )}
              >
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/60 to-transparent pointer-events-none" />
                <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                  <Icon size={22} />
                </div>
                <div className="text-base font-bold mb-2 relative z-10 px-10">
                  <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-foreground">
                    {cap.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
                  {cap.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-24" />

      {/* Convert data to app highlight */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(200,100%,15%)", "hsl(210,100%,55%)", "hsl(190,90%,40%)", "hsl(220,100%,65%)"]}
            shape="checks"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t('plex.convert_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t('plex.convert_title')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('plex.convert_body')}
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {[
                  { id: 'pill_nocode', icon: Code2, label: t('plex.pill_nocode') },
                  { id: 'pill_fast', icon: Zap, label: t('plex.pill_fast') },
                  { id: 'pill_custom', icon: Shuffle, label: t('plex.pill_custom') },
                  { id: 'pill_secure', icon: ShieldCheck, label: t('plex.pill_secure') },
                ].map(({ id, icon: Icon, label }) => (
                  <div
                    key={id}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <Icon size={18} className="text-white/80" />
                    <span className="text-xs text-white/50">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </WarpCard>
        </motion.div>
      </div>

      <div className="h-10" />

      {/* Access control + Workflow — side by side */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Access control */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <WarpCard
              colors={["hsl(270,100%,15%)", "hsl(280,100%,55%)", "hsl(300,90%,40%)", "hsl(260,100%,65%)"]}
              shape="checks"
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <Lock size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('plex.access_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('plex.access_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {t('plex.access_body')}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {accessLevels.map(({ icon: Icon, label }, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Icon size={13} className="text-white/70 shrink-0" />
                      <span className="text-xs text-white/50">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WarpCard>
          </motion.div>

          {/* Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <WarpCard
              colors={["hsl(25,100%,20%)", "hsl(35,100%,55%)", "hsl(15,90%,40%)", "hsl(45,100%,65%)"]}
              shape="checks"
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <Workflow size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('plex.workflow_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('plex.workflow_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {t('plex.workflow_body')}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {workflowFeatures.map(({ icon: Icon, label }, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Icon size={13} className="text-white/70 shrink-0" />
                      <span className="text-xs text-white/50">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WarpCard>
          </motion.div>
        </div>
      </div>

      <div className="h-16" />

      {/* Data sources */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(140,100%,15%)", "hsl(150,100%,45%)", "hsl(120,90%,30%)", "hsl(160,100%,60%)"]}
            shape="checks"
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              <div className="space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t('plex.datasources_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t('plex.datasources_title')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('plex.datasources_body')}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {dataSources.map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                  >
                    <Icon size={22} className="text-white/80" />
                    <span className="text-sm font-medium text-white/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </WarpCard>
        </motion.div>
      </div>

      <div className="h-16" />

      {/* Portal examples */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
                {t('plex.portals_badge')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                {t('plex.portals_title')}
              </h2>
            </div>

            <AnimatedBackground
              enableHover
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {portals.map((portal) => (
                <div
                  key={portal.id}
                  data-id={portal.id}
                  className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      {portal.id === 'financial' && <Briefcase size={16} className="text-muted-foreground" />}
                      {portal.id === 'personnel' && <Users size={16} className="text-muted-foreground" />}
                      {portal.id === 'legal' && <ShieldCheck size={16} className="text-muted-foreground" />}
                      {portal.id === 'customers' && <BarChart3 size={16} className="text-muted-foreground" />}
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {portal.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {portal.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-border" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedBackground>

          </div>
        </motion.div>
      </div>

      {/* Closing lamp section */}
      <LampContainer className="min-h-[44rem] mb-[-14rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('plex.closing_title')}
          </h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            {t('plex.closing_demo')}
          </a>
          <p className="text-xs text-white/40" dir="ltr">
            user: <span className="text-white/60">user</span>
            {' '}|{' '}
            pass: <span className="text-white/60">user</span>
          </p>
        </motion.div>
      </LampContainer>

      <div className="h-16" />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}

export default PlexPage
