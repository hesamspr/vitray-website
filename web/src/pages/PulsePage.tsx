import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PulseHero } from '@/components/ui/pulse-hero';
import { WarpCard } from '@/components/ui/warp-card';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';
import {
  BarChart3,
  CalendarDays,
  Globe,
  Link2,
  RefreshCw,
  Share2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';
import { cn } from '@/lib/utils';

export function PulsePage() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);

  usePageTitle('page_titles.pulse');

  const features = [
    {
      id: 'feat1',
      icon: Share2,
      glow: 'orange' as const,
      title: t('pulse.feat1_title'),
      body: t('pulse.feat1_body'),
    },
    {
      id: 'feat2',
      icon: CalendarDays,
      glow: 'blue' as const,
      title: t('pulse.feat2_title'),
      body: t('pulse.feat2_body'),
    },
    {
      id: 'feat3',
      icon: Globe,
      glow: 'purple' as const,
      title: t('pulse.feat3_title'),
      body: t('pulse.feat3_body'),
    },
    {
      id: 'feat4',
      icon: ShieldCheck,
      glow: 'green' as const,
      title: t('pulse.feat4_title'),
      body: t('pulse.feat4_body'),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(25,100%,20%)", "hsl(35,100%,55%)", "hsl(15,90%,40%)", "hsl(45,100%,65%)"]}
            shape="dots"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t('pulse.about_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t('pulse.about_title')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('pulse.about_body')}
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {[
                  { id: 'pill_powerbi', icon: BarChart3, label: t('pulse.pill_powerbi') },
                  { id: 'pill_calendar', icon: CalendarDays, label: t('pulse.pill_calendar') },
                  { id: 'pill_persian', icon: Globe, label: t('pulse.pill_persian') },
                  { id: 'pill_team', icon: Users, label: t('pulse.pill_team') },
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

      {/* Independent software on top of PBRS */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <WarpCard
              colors={["hsl(25,100%,18%)", "hsl(35,100%,50%)", "hsl(15,90%,35%)", "hsl(45,100%,60%)"]}
              shape="checks"
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <Link2 size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('pulse.arch_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('pulse.arch_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('pulse.arch_body')}
                </p>
              </div>
            </WarpCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <WarpCard
              colors={["hsl(15,100%,18%)", "hsl(25,100%,50%)", "hsl(5,90%,35%)", "hsl(35,100%,60%)"]}
              shape="dots"
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <RefreshCw size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('pulse.update_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('pulse.update_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('pulse.update_body')}
                </p>
              </div>
            </WarpCard>
          </motion.div>

        </div>
      </div>

      <div className="h-16" />

      {/* Closing lamp section */}
      <LampContainer color="orange" className="min-h-[44rem] mb-[-14rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('pulse.closing_title')}
          </h2>
          <p className="text-xs text-white/40">
            {t('pulse.closing_body')}
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
