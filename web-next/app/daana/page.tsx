import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { DaanaHero } from '@/components/ui/daana-hero';
import { DaanaChatDemo } from '@/components/ui/daana-chat-demo';
import { GradientCard } from '@/components/ui/gradient-card';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { LampContainer } from '@/components/ui/lamp';
import { Reveal } from '@/components/ui/reveal';
import {
  Bot,
  BookOpenText,
  CalendarDays,
  CircleDollarSign,
  FileCode2,
  Layers,
  MessagesSquare,
  Mic,
  Network,
  Plug,
  Quote,
  Search,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Building2,
  Server,
  Languages,
} from 'lucide-react';
import { getTranslations } from '@/lib/i18n.server';
import { cn } from '@/lib/utils';

export async function DaanaPage() {
  const { t } = await getTranslations();

  const features = [
    { id: 'feat1', icon: Bot, title: t('daana.feat1_title'), body: t('daana.feat1_body') },
    { id: 'feat2', icon: MessagesSquare, title: t('daana.feat2_title'), body: t('daana.feat2_body') },
    { id: 'feat3', icon: Mic, title: t('daana.feat3_title'), body: t('daana.feat3_body') },
    { id: 'feat4', icon: Network, title: t('daana.feat4_title'), body: t('daana.feat4_body') },
  ];

  const demoPoints = [
    t('daana.demo_point1'),
    t('daana.demo_point2'),
    t('daana.demo_point3'),
  ];

  const capabilities: BentoItem[] = [
    { title: t('daana.cap1_title'), description: t('daana.cap1_body'), icon: <Layers className="w-4 h-4 text-cyan-400" />, colSpan: 2, hasPersistentHover: true },
    { title: t('daana.cap2_title'), description: t('daana.cap2_body'), icon: <Quote className="w-4 h-4 text-cyan-400" /> },
    { title: t('daana.cap3_title'), description: t('daana.cap3_body'), icon: <Plug className="w-4 h-4 text-cyan-400" /> },
    { title: t('daana.cap4_title'), description: t('daana.cap4_body'), icon: <Workflow className="w-4 h-4 text-cyan-400" /> },
    { title: t('daana.cap5_title'), description: t('daana.cap5_body'), icon: <BookOpenText className="w-4 h-4 text-cyan-400" /> },
    { title: t('daana.cap6_title'), description: t('daana.cap6_body'), icon: <Search className="w-4 h-4 text-cyan-400" /> },
    { title: t('daana.cap7_title'), description: t('daana.cap7_body'), icon: <Network className="w-4 h-4 text-cyan-400" /> },
    { title: t('daana.cap8_title'), description: t('daana.cap8_body'), icon: <FileCode2 className="w-4 h-4 text-cyan-400" />, colSpan: 2 },
  ];

  const aboutPills = [
    { id: 'pill_rtl', icon: Languages, label: t('daana.pill_rtl') },
    { id: 'pill_jalali', icon: CalendarDays, label: t('daana.pill_jalali') },
    { id: 'pill_tenant', icon: Building2, label: t('daana.pill_tenant') },
    { id: 'pill_models', icon: Server, label: t('daana.pill_models') },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <DaanaHero />

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

      {/* Chat with your data — live demo mock */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal x={20} y={0} duration={0.7} className="space-y-5">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('daana.demo_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('daana.demo_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {t('daana.demo_body')}
            </p>
            <ul className="space-y-3 pt-2">
              {demoPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal x={-20} y={0} duration={0.7} delay={0.15}>
            <DaanaChatDemo />
          </Reveal>
        </div>
      </div>

      <div className="h-24" />

      {/* Capabilities bento */}
      <div className="mx-auto max-w-5xl px-6 py-4 space-y-8">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('daana.cap_badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            {t('daana.cap_title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('daana.cap_body')}
          </p>
        </Reveal>

        <Reveal>
          <BentoGrid items={capabilities} />
        </Reveal>
      </div>

      <div className="h-24" />

      {/* About Daana */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <GradientCard
            colors={["hsl(195,100%,16%)", "hsl(190,95%,45%)", "hsl(220,90%,35%)", "hsl(170,90%,55%)"]}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  {t('daana.about_badge')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  {t('daana.about_title')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('daana.about_body')}
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {aboutPills.map(({ id, icon: Icon, label }) => (
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
          </GradientCard>
        </Reveal>
      </div>

      <div className="h-10" />

      {/* Security & cost control */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          <Reveal x={20} y={0} duration={0.7}>
            <GradientCard
              colors={["hsl(220,90%,16%)", "hsl(210,90%,45%)", "hsl(235,80%,35%)", "hsl(190,90%,55%)"]}
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <ShieldCheck size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('daana.sec_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('daana.sec_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('daana.sec_body')}
                </p>
              </div>
            </GradientCard>
          </Reveal>

          <Reveal x={-20} y={0} duration={0.7} delay={0.15}>
            <GradientCard
              colors={["hsl(170,80%,14%)", "hsl(175,85%,40%)", "hsl(190,85%,32%)", "hsl(150,80%,50%)"]}
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <CircleDollarSign size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  {t('daana.cost_badge')}
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">{t('daana.cost_title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('daana.cost_body')}
                </p>
              </div>
            </GradientCard>
          </Reveal>

        </div>
      </div>

      <div className="h-16" />

      {/* Closing lamp section */}
      <LampContainer color="cyan" className="min-h-[44rem] mb-[-14rem]">
        <Reveal
          y={60}
          fromOpacity={0.5}
          delay={0.3}
          ease="easeInOut"
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('daana.closing_title')}
          </h2>
          <p className="text-xs text-white/40">
            {t('daana.closing_body')}
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

export default DaanaPage
