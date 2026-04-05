'use client'

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { LampContainer } from '@/components/ui/lamp';
import { DashboardTemplatesSection } from '@/components/ui/feature-section-with-card-gradient';
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from 'motion/react';
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  Lock,
  MapPin,
  RefreshCw,
  Search,
  Server,
  Smartphone,
  Tablet,
  Users,
  Workflow,
  Zap,
  Layers3,
} from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { usePageTitle } from '@/lib/usePageTitle';
import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/consultation-modal';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';

export function BiSolutionPage() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  usePageTitle('page_titles.bi');
  const [modalOpen, setModalOpen] = useState(false);

  const phases = [
    {
      id: '01',
      title: t('bi.phase1_title'),
      description: t('bi.phase1_body'),
      icon: Search,
    },
    {
      id: '02',
      title: t('bi.phase2_title'),
      description: t('bi.phase2_body'),
      icon: Database,
    },
    {
      id: '03',
      title: t('bi.phase3_title'),
      description: t('bi.phase3_body'),
      icon: Workflow,
    },
    {
      id: '04',
      title: t('bi.phase4_title'),
      description: t('bi.phase4_body'),
      icon: LayoutDashboard,
    },
    {
      id: '05',
      title: t('bi.phase5_title'),
      description: t('bi.phase5_body'),
      icon: RefreshCw,
    },
  ];

  const pillars = [
    {
      id: 'integration',
      title: t('bi.pillar_integration_title'),
      description: t('bi.pillar_integration_body'),
      icon: Database,
    },
    {
      id: 'analytics',
      title: t('bi.pillar_analytics_title'),
      description: t('bi.pillar_analytics_body'),
      icon: BarChart3,
    },
    {
      id: 'infra',
      title: t('bi.pillar_infra_title'),
      description: t('bi.pillar_infra_body'),
      icon: Lock,
    },
    {
      id: 'ux',
      title: t('bi.pillar_ux_title'),
      description: t('bi.pillar_ux_body'),
      icon: Users,
    },
    {
      id: 'improvement',
      title: t('bi.pillar_improvement_title'),
      description: t('bi.pillar_improvement_body'),
      icon: RefreshCw,
    },
    {
      id: 'reporting',
      title: t('bi.pillar_reporting_title'),
      description: t('bi.pillar_reporting_body'),
      icon: Layers3,
    },
  ];

  const dataSources = [
    {
      id: 1,
      title: 'ERP',
      date: t('bi.source_erp_date'),
      content: t('bi.source_erp_content'),
      category: 'Enterprise',
      icon: Building2,
      relatedIds: [2, 6, 7],
      status: 'completed' as const,
      energy: 100,
    },
    {
      id: 2,
      title: 'CRM',
      date: t('bi.source_crm_date'),
      content: t('bi.source_crm_content'),
      category: 'Sales',
      icon: Users,
      relatedIds: [1, 3],
      status: 'completed' as const,
      energy: 95,
    },
    {
      id: 3,
      title: 'Plex',
      date: 'Vitray Plex',
      content: t('bi.source_plex_content'),
      category: 'Manufacturing',
      icon: Layers3,
      relatedIds: [1, 2, 6],
      status: 'completed' as const,
      energy: 100,
    },
    {
      id: 4,
      title: 'Excel',
      date: 'Microsoft Excel',
      content: t('bi.source_excel_content'),
      category: 'Files',
      icon: FileSpreadsheet,
      relatedIds: [5],
      status: 'completed' as const,
      energy: 90,
    },
    {
      id: 5,
      title: 'CSV',
      date: 'Flat Files',
      content: t('bi.source_csv_content'),
      category: 'Files',
      icon: FileText,
      relatedIds: [4],
      status: 'completed' as const,
      energy: 85,
    },
    {
      id: 6,
      title: 'SQL DB',
      date: 'SQL Server / MySQL',
      content: t('bi.source_sqldb_content'),
      category: 'Database',
      icon: Database,
      relatedIds: [1, 3, 7],
      status: 'completed' as const,
      energy: 98,
    },
    {
      id: 7,
      title: 'Oracle DB',
      date: 'Oracle Database',
      content: t('bi.source_oracledb_content'),
      category: 'Database',
      icon: Server,
      relatedIds: [1, 6],
      status: 'completed' as const,
      energy: 95,
    },
  ];

  const deliverables = [
    t('bi.deliverable_1'),
    t('bi.deliverable_2'),
    t('bi.deliverable_3'),
    t('bi.deliverable_4'),
    t('bi.deliverable_5'),
    t('bi.deliverable_6'),
    t('bi.deliverable_7'),
    t('bi.deliverable_8'),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 520 }}>
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#000000", "#3730a3", "#1e1b4b", "#0f172a", "#4338ca"]}
          speed={0.3}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-40"
          colors={["#000000", "#ffffff", "#3730a3", "#6366f1"]}
          speed={0.2}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-[640px] text-center space-y-5"
          >
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70 w-fit">
              <BarChart3 size={13} />
              {t('bi.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              {t('bi.hero_title1')}
              <br />
              {t('bi.hero_title2')}
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              {t('bi.hero_body')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="h-24" />

      {/* Data Sources */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-4"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('bi.sources_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t('bi.sources_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('bi.sources_body')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="rounded-2xl bg-black overflow-hidden"
        >
          <RadialOrbitalTimeline timelineData={dataSources} />
        </motion.div>
      </div>

      <div className="h-24" />

      {/* Anywhere Access */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-14"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('bi.access_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white">
            {t('bi.access_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('bi.access_body')}
          </p>
        </motion.div>

        {/* Device showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative flex items-end justify-center gap-5 pb-0"
        >
          {/* glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-28 rounded-full"
            style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.22) 0%, transparent 70%)' }}
          />

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="relative w-[72px] h-[140px] rounded-[14px] border border-indigo-500/40 bg-gradient-to-b from-[#13111f] to-[#1e1b3a] overflow-hidden shadow-[0_8px_32px_rgba(99,102,241,0.18)]">
              <div className="w-6 h-[3px] bg-white/10 rounded-full mx-auto mt-2" />
              <div className="p-2 mt-1 flex flex-col gap-1.5">
                <div className="h-[3px] w-10 rounded bg-white/10" />
                <div className="h-8 rounded bg-indigo-500/20 relative overflow-hidden">
                  <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-indigo-500/30 to-transparent" />
                </div>
                <div className="flex gap-1">
                  <div className="h-4 flex-1 rounded bg-indigo-500/20" />
                  <div className="h-4 w-8 rounded bg-indigo-500/20" />
                </div>
                <div className="h-[2px] w-11 rounded bg-white/10" />
                <div className="h-[2px] w-8 rounded bg-white/8" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-400 uppercase tracking-wide">
              <Smartphone size={11} />
              {t('bi.access_mobile')}
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mb-3"
          >
            <div className="relative w-[110px] h-[152px] rounded-[14px] border border-indigo-500/40 bg-gradient-to-b from-[#13111f] to-[#1e1b3a] overflow-hidden shadow-[0_8px_32px_rgba(99,102,241,0.18)]">
              <div className="p-2.5 mt-1 flex flex-col gap-1.5">
                <div className="h-[3px] w-16 rounded bg-white/10" />
                <div className="flex gap-1.5">
                  <div className="h-10 flex-1 rounded bg-indigo-500/20" />
                  <div className="h-10 flex-1 rounded bg-indigo-500/20" />
                </div>
                <div className="h-11 rounded bg-indigo-500/15 relative overflow-hidden">
                  <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-indigo-500/28 to-transparent" />
                </div>
                <div className="h-[2px] w-full rounded bg-white/10" />
                <div className="h-[2px] w-16 rounded bg-white/8" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-400 uppercase tracking-wide">
              <Tablet size={11} />
              {t('bi.access_tablet')}
            </div>
          </motion.div>

          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-0 mb-7"
          >
            <div className="relative w-[180px] h-[116px] rounded-t-[10px] border border-indigo-500/40 border-b-0 bg-gradient-to-b from-[#13111f] to-[#1e1b3a] overflow-hidden shadow-[0_8px_32px_rgba(99,102,241,0.22)]">
              <div className="w-7 h-[3px] bg-white/10 rounded-full mx-auto mt-1.5" />
              <div className="p-2.5 mt-1 flex flex-col gap-1.5">
                <div className="flex gap-1.5">
                  <div className="h-6 flex-1 rounded bg-indigo-500/20" />
                  <div className="h-6 flex-1 rounded bg-indigo-500/20" />
                  <div className="h-6 flex-1 rounded bg-indigo-500/20" />
                </div>
                <div className="h-14 rounded bg-indigo-500/15 relative overflow-hidden">
                  <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-indigo-500/28 to-transparent" />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-[2px] flex-1 rounded bg-white/10" />
                  <div className="h-[2px] flex-1 rounded bg-white/8" />
                </div>
              </div>
            </div>
            <div className="w-[200px] h-2 rounded-b-md bg-gradient-to-b from-[#2a2440] to-[#1a1630] border border-t-0 border-indigo-500/35" />
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-400 uppercase tracking-wide mt-3">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              {t('bi.access_laptop')}
            </div>
          </motion.div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {[
            { icon: MapPin, label: t('bi.pill_anywhere') },
            { icon: Zap, label: t('bi.pill_realtime') },
            { icon: Smartphone, label: t('bi.pill_responsive') },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 border border-border/50 bg-muted/20 rounded-full px-4 py-2 text-sm text-muted-foreground"
            >
              <Icon size={13} className="text-indigo-400" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="h-24" />

      {/* Process */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('bi.process_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t('bi.process_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('bi.process_body')}
          </p>
        </motion.div>

        <AnimatedBackground
          enableHover
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 [&>div]:h-full [&>div>div]:h-full"
        >
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.id}
                data-id={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{phase.id}</span>
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
              </motion.div>
            );
          })}
        </AnimatedBackground>
      </div>

      <div className="h-24" />

      {/* Pillars */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('bi.pillars_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t('bi.pillars_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('bi.pillars_body')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <AnimatedBackground
            enableHover
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 [&>div]:h-full [&>div>div]:h-full"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  data-id={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-4">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </AnimatedBackground>
        </motion.div>
      </div>

      <div className="h-24" />

      {/* Deliverables */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(250,100%,15%)", "hsl(260,100%,55%)", "hsl(280,90%,40%)", "hsl(240,100%,65%)"]}
            shape="checks"
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              <div className="space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t('bi.deliverables_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t('bi.deliverables_title')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('bi.deliverables_body')}
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={15} className="text-white/60 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </WarpCard>
        </motion.div>
      </div>

      <div className="h-24" />

      {/* Dashboard Templates */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('bi.templates_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t('bi.templates_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('bi.templates_body')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <DashboardTemplatesSection />
        </motion.div>
      </div>

      {/* Closing lamp section */}
      <LampContainer color="purple" className="min-h-[44rem] mb-[-14rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('bi.closing_title')}
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            {t('bi.closing_cta')}
          </button>
        </motion.div>
      </LampContainer>

      <div className="h-16" />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default BiSolutionPage
