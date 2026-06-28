import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PulseHero } from '@/components/ui/pulse-hero';
import { LampContainer } from '@/components/ui/lamp';
import { Reveal } from '@/components/ui/reveal';
import { PulseGifViewer } from '@/components/ui/pulse-gif-viewer';
import {
  Activity,
  BarChart3,
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
  UserCheck,
  Users,
} from 'lucide-react';
import { getTranslations } from '@/lib/i18n.server';

export async function PulsePage() {
  const { t } = await getTranslations();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <PulseHero />

      <div id="features" className="h-12" />

      {/* ── Group 1: The Portal ── */}
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-8 text-center">
          <p className="text-xs text-orange-400/60 font-medium tracking-widest uppercase mb-2">
            {t('pulse.group1_badge')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
            {t('pulse.group1_title')}
          </h2>
        </Reveal>

        {/* Hero 1: Jalali calendar — text right, GIF left */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-3">
            <span className="inline-block text-[10px] font-medium tracking-widest uppercase text-orange-400/60 border border-orange-500/20 rounded-md px-2 py-0.5">
              {t('pulse.cal_badge')}
            </span>
            <h3 className="text-xl font-bold tracking-tighter text-foreground">{t('pulse.cal_title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('pulse.cal_body')}</p>
          </div>
          <div className="md:col-span-2">
            <PulseGifViewer src="/pulse/farsi-calendar.gif" alt={t('pulse.cal_title')} />
          </div>
        </div>

        <div className="h-6" />

        {/* Hero 2: Multi-tab — text right, GIF left */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tighter text-foreground">{t('pulse.tab_title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('pulse.tab_body')}</p>
          </div>
          <div className="md:col-span-2">
            <PulseGifViewer src="/pulse/multi-tab.gif" alt={t('pulse.tab_title')} />
          </div>
        </div>

        <div className="h-6" />

        {/* Strip card: Persian RTL */}
        <Reveal fromOpacity={0.2}>
          <div className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            <Globe size={17} className="text-orange-400/70 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tighter text-foreground">{t('pulse.feat1_title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('pulse.feat1_body')}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-20" />

      {/* ── Group 2: Security & Access ── */}
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-8 text-center">
          <p className="text-xs text-orange-400/60 font-medium tracking-widest uppercase mb-2">
            {t('pulse.group2_badge')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
            {t('pulse.group2_title')}
          </h2>
        </Reveal>

        {/* Hero 1: Security — text right, GIF left */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-3">
            <ShieldCheck size={22} className="text-orange-400/70" />
            <h3 className="text-xl font-bold tracking-tighter text-foreground">{t('pulse.feat2_title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('pulse.feat2_body')}</p>
          </div>
          <div className="md:col-span-2">
            <PulseGifViewer src="/pulse/security.gif" alt={t('pulse.feat2_title')} />
          </div>
        </div>

        <div className="h-6" />

        {/* Hero 2: Access management — text right, GIF left */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-3">
            <Layers size={22} className="text-orange-400/70" />
            <h3 className="text-xl font-bold tracking-tighter text-foreground">{t('pulse.adm1_title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('pulse.adm1_body')}</p>
          </div>
          <div className="md:col-span-2">
            <PulseGifViewer src="/pulse/access-management.gif" alt={t('pulse.adm1_title')} />
          </div>
        </div>

        <div className="h-6" />

        {/* Mini-cards: feat3, adm2, adm3 */}
        <Reveal fromOpacity={0.2}>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { id: 'copyfrom', icon: <UserCheck size={15} />, title: t('pulse.copyfrom_title'), body: t('pulse.copyfrom_body') },
              { id: 'adm2', icon: <Copy size={15} />, title: t('pulse.adm2_title'), body: t('pulse.adm2_body') },
              { id: 'adm3', icon: <Database size={15} />, title: t('pulse.adm3_title'), body: t('pulse.adm3_body') },
            ].map(f => (
              <div key={f.id} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
                <div className="space-y-3">
                  <div className="text-orange-400/70">{f.icon}</div>
                  <h3 className="text-xl font-bold tracking-tighter text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="h-20" />

      {/* ── Group 3: Analytics ── */}
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-8 text-center">
          <p className="text-xs text-orange-400/60 font-medium tracking-widest uppercase mb-2">
            {t('pulse.group3_badge')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
            {t('pulse.group3_title')}
          </h2>
        </Reveal>

        {/* Hero: Usage analytics — text right, GIF left */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-3">
            <Activity size={22} className="text-orange-400/70" />
            <h3 className="text-xl font-bold tracking-tighter text-foreground">{t('pulse.adm4_title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('pulse.adm4_body')}</p>
          </div>
          <div className="md:col-span-2">
            <PulseGifViewer src="/pulse/analytics.gif" alt={t('pulse.adm4_title')} />
          </div>
        </div>

        <div className="h-6" />

        {/* Mini-cards: feat4, perm, ver */}
        <Reveal fromOpacity={0.2}>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { id: 'feat4', icon: <BarChart3 size={15} />, title: t('pulse.feat4_title'), body: t('pulse.feat4_body') },
              { id: 'perm', icon: <Eye size={15} />, title: t('pulse.perm_title'), body: t('pulse.perm_body') },
              { id: 'ver', icon: <History size={15} />, title: t('pulse.ver_title'), body: t('pulse.ver_body') },
            ].map(f => (
              <div key={f.id} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
                <div className="space-y-3">
                  <div className="text-orange-400/70">{f.icon}</div>
                  <h3 className="text-xl font-bold tracking-tighter text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
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
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/50 mb-1 text-center">{t('pulse.tier_standard_tagline')}</p>
                <h3 className="text-xl font-bold tracking-tighter text-foreground mb-4 text-center pb-4 border-b border-white/10">{t('pulse.tier_standard_name')}</h3>
                <ul className="space-y-3 flex-1">
                  {['feat1','feat2','feat3','feat4','feat5'].map(k => (
                    <li key={k} className="flex items-start gap-2.5">
                      <Check size={13} className="text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground/80">{t(`pulse.tier_standard_${k}`)}</span>
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
                <p className="text-[10px] font-medium tracking-widest uppercase text-orange-400/50 mb-1 text-center">{t('pulse.tier_advanced_tagline')}</p>
                <h3 className="text-xl font-bold tracking-tighter text-foreground mb-4 text-center pb-4 border-b border-white/10">{t('pulse.tier_advanced_name')}</h3>
                <ul className="space-y-3 flex-1">
                  {['feat1','feat2','feat3','feat4','feat5'].map(k => (
                    <li key={k} className="flex items-start gap-2.5">
                      <Check size={13} className="text-orange-400/70 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground/80">{t(`pulse.tier_advanced_${k}`)}</span>
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
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/50 mb-1 text-center">{t('pulse.tier_premium_tagline')}</p>
                <h3 className="text-xl font-bold tracking-tighter text-foreground mb-4 text-center pb-4 border-b border-white/10">{t('pulse.tier_premium_name')}</h3>
                <ul className="space-y-3 flex-1">
                  {['feat1','feat2','feat3','feat4','feat5'].map(k => (
                    <li key={k} className="flex items-start gap-2.5">
                      <Check size={13} className="text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground/80">{t(`pulse.tier_premium_${k}`)}</span>
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
