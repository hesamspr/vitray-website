'use client'

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PixelHero } from '@/components/ui/pixel-hero';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';
import {
  BarChart3,
  Bell,
  CheckCircle2,
  Cloud,
  Database,
  Globe,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Sliders,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';
import { cn } from '@/lib/utils';

export function PixelPage() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);

  usePageTitle('page_titles.pixel');

  const capabilities = [
    {
      id: 'cap1',
      icon: Server,
      title: t('pixel.cap1_title'),
      body: t('pixel.cap1_body'),
    },
    {
      id: 'cap2',
      icon: Zap,
      title: t('pixel.cap2_title'),
      body: t('pixel.cap2_body'),
    },
    {
      id: 'cap3',
      icon: TrendingUp,
      title: t('pixel.cap3_title'),
      body: t('pixel.cap3_body'),
    },
    {
      id: 'cap4',
      icon: ShieldCheck,
      title: t('pixel.cap4_title'),
      body: t('pixel.cap4_body'),
    },
  ];

  const keyBenefits = [
    { icon: Globe, label: t('pixel.benefit1') },
    { icon: RefreshCw, label: t('pixel.benefit2') },
    { icon: Users, label: t('pixel.benefit3') },
    { icon: BarChart3, label: t('pixel.benefit4') },
  ];

  const dataSources = [
    { icon: Database, label: t('pixel.datasource1') },
    { icon: Cloud, label: t('pixel.datasource2') },
    { icon: Sliders, label: t('pixel.datasource3') },
    { icon: Globe, label: t('pixel.datasource4') },
  ];

  const dashboardFeatures = [
    { icon: BarChart3, label: t('pixel.dashfeat1') },
    { icon: TrendingUp, label: t('pixel.dashfeat2') },
    { icon: Users, label: t('pixel.dashfeat3') },
    { icon: Bell, label: t('pixel.dashfeat4') },
  ];

  const comparisonRows = [
    { id: 'setup', label: t('pixel.cmp_setup_label'), traditional: t('pixel.cmp_setup_traditional'), pixel: t('pixel.cmp_setup_pixel') },
    { id: 'server', label: t('pixel.cmp_server_label'), traditional: t('pixel.cmp_server_traditional'), pixel: t('pixel.cmp_server_pixel') },
    { id: 'cost', label: t('pixel.cmp_cost_label'), traditional: t('pixel.cmp_cost_traditional'), pixel: t('pixel.cmp_cost_pixel') },
    { id: 'payment', label: t('pixel.cmp_payment_label'), traditional: t('pixel.cmp_payment_traditional'), pixel: t('pixel.cmp_payment_pixel') },
    { id: 'it', label: t('pixel.cmp_it_label'), traditional: t('pixel.cmp_it_traditional'), pixel: t('pixel.cmp_it_pixel') },
    { id: 'scale', label: t('pixel.cmp_scale_label'), traditional: t('pixel.cmp_scale_traditional'), pixel: t('pixel.cmp_scale_pixel') },
  ];

  const dashboards = [
    {
      id: 'sales',
      title: t('pixel.dash_sales_title'),
      icon: TrendingUp,
      features: [
        t('pixel.dash_sales_feat1'),
        t('pixel.dash_sales_feat2'),
        t('pixel.dash_sales_feat3'),
        t('pixel.dash_sales_feat4'),
      ],
    },
    {
      id: 'finance',
      title: t('pixel.dash_finance_title'),
      icon: BarChart3,
      features: [
        t('pixel.dash_finance_feat1'),
        t('pixel.dash_finance_feat2'),
        t('pixel.dash_finance_feat3'),
        t('pixel.dash_finance_feat4'),
      ],
    },
    {
      id: 'hr',
      title: t('pixel.dash_hr_title'),
      icon: Users,
      features: [
        t('pixel.dash_hr_feat1'),
        t('pixel.dash_hr_feat2'),
        t('pixel.dash_hr_feat3'),
        t('pixel.dash_hr_feat4'),
      ],
    },
    {
      id: 'operations',
      title: t('pixel.dash_ops_title'),
      icon: Sliders,
      features: [
        t('pixel.dash_ops_feat1'),
        t('pixel.dash_ops_feat2'),
        t('pixel.dash_ops_feat3'),
        t('pixel.dash_ops_feat4'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      <PixelHero />

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

      {/* Why Pixel — main WarpCard */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(190,100%,15%)", "hsl(195,100%,45%)", "hsl(185,90%,30%)", "hsl(200,100%,60%)"]}
            shape="checks"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t('pixel.why_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t('pixel.why_title')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('pixel.why_body')}
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {keyBenefits.map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
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

      {/* Data sources + Interactive dashboards — side by side */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Data sources */}
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
                  {t('pixel.sources_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('pixel.sources_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {t('pixel.sources_body')}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {dataSources.map(({ icon: Icon, label }, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Icon size={13} className="text-white/70 shrink-0" />
                      <span className="text-xs text-white/50">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WarpCard>
          </motion.div>

          {/* Interactive dashboards */}
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
                  <BarChart3 size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('pixel.viz_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('pixel.viz_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {t('pixel.viz_body')}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {dashboardFeatures.map(({ icon: Icon, label }, index) => (
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

      {/* Comparison section */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('pixel.cmp_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
              {t('pixel.cmp_title')}
            </h2>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-4 border-b border-border/60 text-muted-foreground" />
              <div className="p-4 border-b border-r border-border/60 text-center text-muted-foreground">
                {t('pixel.cmp_traditional_col')}
              </div>
              <div className="p-4 border-b border-border/60 text-center bg-primary/5 text-foreground">
                {t('pixel.cmp_pixel_col')}
              </div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={row.id}
                className={cn(
                  "grid grid-cols-3 text-sm",
                  index % 2 === 1 && "bg-muted/20",
                  index < comparisonRows.length - 1 && "border-b border-border/60",
                )}
              >
                <div className="p-4 font-medium text-foreground/80">{row.label}</div>
                <div className="p-4 border-r border-border/60 text-center text-muted-foreground">
                  <span className="text-destructive/70">✗</span>{' '}{row.traditional}
                </div>
                <div className="p-4 text-center bg-primary/5">
                  <span className="inline-flex items-center justify-center gap-1.5 text-foreground/80">
                    <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                    {row.pixel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-16" />

      {/* Dashboard examples */}
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
                {t('pixel.examples_badge')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                {t('pixel.examples_title')}
              </h2>
            </div>

            <AnimatedBackground
              enableHover
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {dashboards.map((dashboard) => {
                const Icon = dashboard.icon;
                return (
                  <div
                    key={dashboard.id}
                    data-id={dashboard.id}
                    className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                        <Icon size={16} className="text-muted-foreground" />
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {dashboard.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {dashboard.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-border" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </AnimatedBackground>

          </div>
        </motion.div>
      </div>

      {/* Closing lamp section */}
      <LampContainer color="cyan" className="min-h-[44rem] mb-[-14rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('pixel.closing_title')}
          </h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            {t('pixel.closing_demo')}
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

export default PixelPage
