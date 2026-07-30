import Link from 'next/link';
import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { GradientCard } from '@/components/ui/gradient-card';
import { Reveal } from '@/components/ui/reveal';
import { ArrowLeft, Download, DownloadCloud, ShieldCheck } from 'lucide-react';
import { getTranslations } from '@/lib/i18n.server';

interface DownloadItem {
  name: string;
  caption: string;
  href: string;
}

export default async function PbiDownloadPage() {
  const { t } = await getTranslations();

  const powerBi: DownloadItem[] = [
    {
      name: 'Power BI Report Server',
      caption: t('pbi_download.prs_caption'),
      href: 'https://download.microsoft.com/download/3/7/5/3754bf6e-e422-46ec-b9f8-fb3dc3993cab/PowerBIReportServer.exe',
    },
    {
      name: 'Power BI Desktop RS (x64)',
      caption: t('pbi_download.pbidesktop_caption'),
      href: 'https://download.microsoft.com/download/3/7/5/3754bf6e-e422-46ec-b9f8-fb3dc3993cab/PBIDesktopSetupRS_x64.exe',
    },
  ];

  const visualStudio: DownloadItem[] = [
    {
      name: 'Visual Studio',
      caption: t('pbi_download.vs_caption'),
      href: 'https://dl2.soft98.ir/programing/Microsoft.Visual.Studio.2022.v17.10.5.html',
    },
    {
      name: 'SQL Server 2022',
      caption: t('pbi_download.sql_caption'),
      href: 'https://dl2.soft98.ir/programing/Microsoft.SQL.Server.2022.Enterprise.x64.rar',
    },
    {
      name: 'SSMS',
      caption: t('pbi_download.ssms_caption'),
      href: 'https://aka.ms/ssmsfullsetup',
    },
    {
      name: 'SSAS',
      caption: t('pbi_download.ssas_caption'),
      href: 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/ProBITools/vsextensions/MicrosoftAnalysisServicesModelingProjects2022/3.0.3/vspackage',
    },
    {
      name: 'SSIS',
      caption: t('pbi_download.ssis_caption'),
      href: 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/SSIS/vsextensions/SqlServerIntegrationServicesProjects/4.5/vspackage',
    },
  ];

  const renderCard = (item: DownloadItem, index: number) => (
    <Reveal
      key={item.name}
      delay={index * 0.06}
      duration={0.7}
      className="h-full"
    >
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-5 transition-colors hover:border-indigo-500/50 hover:bg-muted/20"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-indigo-400 transition-colors group-hover:border-indigo-500/40">
          <DownloadCloud size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold tracking-tight text-foreground" dir="ltr">
            {item.name}
          </h3>
          <p className="truncate text-sm text-muted-foreground">{item.caption}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300 transition-colors group-hover:bg-indigo-500/20">
          <Download size={13} />
          {t('pbi_download.cta')}
        </span>
      </a>
    </Reveal>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero — fully static, CSS-built */}
      <div
        className="relative w-full overflow-hidden bg-[#05060f]"
        style={{ height: '62vh', minHeight: 440 }}
      >
        {/* Layered radial "mesh" (static) */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 50% 60% at 18% 18%, rgba(67,56,202,0.45) 0%, transparent 60%)',
              'radial-gradient(ellipse 45% 55% at 82% 28%, rgba(99,102,241,0.38) 0%, transparent 55%)',
              'radial-gradient(ellipse 65% 60% at 50% 100%, rgba(49,46,129,0.55) 0%, transparent 62%)',
            ].join(', '),
          }}
        />
        {/* Masked grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 42%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 42%, black 30%, transparent 75%)',
          }}
        />
        {/* Soft glow orbs */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-600/25 blur-[90px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

        {/* Floating tool chips (decorative, md+) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          {[
            { label: 'Power BI', className: 'left-[10%] top-[24%]', delay: 0.3 },
            { label: 'SQL Server', className: 'right-[12%] top-[20%]', delay: 0.4 },
            { label: 'SSAS', className: 'left-[16%] bottom-[22%]', delay: 0.5 },
            { label: 'SSIS', className: 'right-[15%] bottom-[26%]', delay: 0.6 },
            { label: 'SSMS', className: 'left-[6%] top-[52%]', delay: 0.45 },
            { label: 'Report Server', className: 'right-[6%] bottom-[48%]', delay: 0.55 },
          ].map((chip) => (
            <Reveal
              key={chip.label}
              onMount
              y={0}
              fromOpacity={0}
              delay={chip.delay}
              duration={1}
              className={`absolute ${chip.className}`}
            >
              <span
                dir="ltr"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/45 backdrop-blur-sm"
              >
                <DownloadCloud size={11} className="text-indigo-300/70" />
                {chip.label}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Bottom fade into page background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <Reveal onMount y={24} delay={0.15} duration={0.9} className="flex max-w-[680px] flex-col items-center space-y-5 text-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur-sm">
              <DownloadCloud size={13} />
              {t('pbi_download.badge')}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white md:text-6xl">
              {t('pbi_download.hero_title')}
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
              {t('pbi_download.hero_body')}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="h-20" />

      {/* Power BI */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <GradientCard
            colors={['hsl(250,100%,15%)', 'hsl(260,100%,55%)', 'hsl(280,90%,40%)', 'hsl(240,100%,65%)']}
            className="w-full"
          >
            <div className="space-y-6 p-8 md:p-10">
              <div className="max-w-2xl space-y-4">
                <div className="w-fit rounded-lg border border-white/20 px-4 py-1 text-sm text-white/60">
                  {t('pbi_download.pbi_badge')}
                </div>
                <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl">
                  {t('pbi_download.pbi_title')}
                </h2>
                <p className="text-sm leading-relaxed text-white/60">
                  {t('pbi_download.pbi_body')}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {powerBi.map(renderCard)}
              </div>
            </div>
          </GradientCard>
        </Reveal>
      </div>

      <div className="h-16" />

      {/* Report Server → Pulse cross-link */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-8 md:flex-row md:items-center md:p-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-indigo-400">
              <ShieldCheck size={22} />
            </div>
            <div className="flex-1 space-y-2">
              <div className="w-fit rounded-lg border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                {t('pbi_download.prs_section_badge')}
              </div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                {t('pbi_download.prs_section_title')}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t('pbi_download.prs_section_body')}
              </p>
            </div>
            <Link
              href="/pulse"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border/60 bg-muted/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              {t('pbi_download.prs_section_cta')}
              <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="h-16" />

      {/* Visual Studio + Extensions */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="mx-auto mb-10 flex max-w-[640px] flex-col items-center justify-center space-y-4 text-center">
          <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
            {t('pbi_download.vs_badge')}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            {t('pbi_download.vs_title')}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {t('pbi_download.vs_body')}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visualStudio.map(renderCard)}
        </div>
        <Reveal delay={0.2} className="mt-8 text-center text-sm text-muted-foreground">
          {t('pbi_download.note')}
        </Reveal>
      </div>

      <div className="h-24" />

      <div className="mx-auto max-w-5xl overflow-visible px-6 py-20">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
