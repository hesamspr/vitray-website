import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { GradientCard } from '@/components/ui/gradient-card';
import { Reveal } from '@/components/ui/reveal';
import { Cpu, Download, DownloadCloud, HardDrive, Server, ShieldCheck } from 'lucide-react';
import { getTranslations } from '@/lib/i18n.server';

interface PlexContent {
  badge: string;
  hero_title: string;
  hero_body: string;
  hw_badge: string;
  hw_title: string;
  hw_head: string[];
  hw_rows: string[][];
  sw_badge: string;
  sw_title: string;
  sw_body: string;
  cmp_head: string[];
  cmp_rows: string[][];
  ubuntu_cta: string;
  ubuntu_caption: string;
  docker_badge: string;
  docker_title: string;
  docker_head: string[];
  docker_rows: string[][];
  docker_note: string;
  access_badge: string;
  access_title: string;
  access_body: string;
  access_1: string;
  access_2: string;
}

const UBUNTU_URL = 'https://ubuntu.com/download/server';

function SectionHeader({ badge, title, body }: { badge: string; title: string; body?: string }) {
  return (
    <Reveal className="mx-auto mb-8 flex max-w-[640px] flex-col items-center justify-center space-y-4 text-center">
      <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">
        {badge}
      </div>
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{title}</h2>
      {body && <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>}
    </Reveal>
  );
}

function DataTable({
  head,
  rows,
  highlightLastCol,
}: {
  head: string[];
  rows: string[][];
  highlightLastCol?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border/60 bg-muted/30">
            {head.map((cell, i) => (
              <th
                key={i}
                className={`px-4 py-5 text-start font-bold tracking-tight text-foreground ${
                  highlightLastCol && i === head.length - 1 ? 'text-indigo-300' : ''
                }`}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-border/40 last:border-0 transition-colors hover:bg-muted/20">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`px-4 py-6 align-top leading-relaxed ${
                    c === 0
                      ? 'font-semibold text-foreground'
                      : highlightLastCol && c === row.length - 1
                        ? 'text-indigo-200/90'
                        : 'text-muted-foreground'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PlexServerPage() {
  const { dict } = await getTranslations();
  const p = dict['plexserver'] as unknown as PlexContent;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero — fully static, CSS-built (matches /pbi-download) */}
      <div className="relative w-full overflow-hidden bg-[#05060f]" style={{ height: '62vh', minHeight: 440 }}>
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
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-600/25 blur-[90px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          {[
            { label: 'Docker', className: 'left-[10%] top-[24%]', delay: 0.3 },
            { label: 'Ubuntu', className: 'right-[12%] top-[20%]', delay: 0.4 },
            { label: 'PostgreSQL', className: 'left-[16%] bottom-[22%]', delay: 0.5 },
            { label: 'Node.js', className: 'right-[15%] bottom-[26%]', delay: 0.6 },
            { label: 'Docker Compose', className: 'left-[6%] top-[52%]', delay: 0.45 },
            { label: 'Git', className: 'right-[7%] bottom-[48%]', delay: 0.55 },
          ].map((chip) => (
            <Reveal key={chip.label} onMount y={0} fromOpacity={0} delay={chip.delay} duration={1} className={`absolute ${chip.className}`}>
              <span
                dir="ltr"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/45 backdrop-blur-sm"
              >
                <Server size={11} className="text-indigo-300/70" />
                {chip.label}
              </span>
            </Reveal>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <Reveal onMount y={24} delay={0.15} duration={0.9} className="flex max-w-[720px] flex-col items-center space-y-5 text-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur-sm">
              <Server size={13} />
              {p.badge}
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white md:text-5xl">{p.hero_title}</h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">{p.hero_body}</p>
          </Reveal>
        </div>
      </div>

      <div className="h-6" />

      {/* Hardware */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <SectionHeader badge={p.hw_badge} title={p.hw_title} />
        <Reveal delay={0.1}>
          <DataTable head={p.hw_head} rows={p.hw_rows} />
        </Reveal>
        <Reveal delay={0.2} className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            { icon: Cpu, label: 'CPU' },
            { icon: HardDrive, label: 'Storage' },
            { icon: Server, label: 'RAM' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/20 px-4 py-2 text-sm text-muted-foreground">
              <Icon size={13} className="text-indigo-400" />
              {label}
            </div>
          ))}
        </Reveal>
      </div>

      <div className="h-20" />

      {/* Software prerequisites + comparison */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <SectionHeader badge={p.sw_badge} title={p.sw_title} body={p.sw_body} />
        <Reveal delay={0.1}>
          <DataTable head={p.cmp_head} rows={p.cmp_rows} highlightLastCol />
        </Reveal>

        {/* Ubuntu download */}
        <Reveal delay={0.2} className="mt-6">
          <a
            href={UBUNTU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-5 transition-colors hover:border-indigo-500/50 hover:bg-muted/20"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-indigo-400 transition-colors group-hover:border-indigo-500/40">
              <DownloadCloud size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-bold tracking-tight text-foreground" dir="ltr">
                Ubuntu
              </h3>
              <p className="truncate text-sm text-muted-foreground">{p.ubuntu_caption}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300 transition-colors group-hover:bg-indigo-500/20">
              <Download size={13} />
              {p.ubuntu_cta}
            </span>
          </a>
        </Reveal>
      </div>

      <div className="h-20" />

      {/* Docker hosting software */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <SectionHeader badge={p.docker_badge} title={p.docker_title} />
        <Reveal delay={0.1}>
          <DataTable head={p.docker_head} rows={p.docker_rows} />
        </Reveal>
        <Reveal delay={0.2} className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.06] p-5 text-center text-sm leading-relaxed text-muted-foreground">
          {p.docker_note}
        </Reveal>
      </div>

      <div className="h-20" />

      {/* Access requirements */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <GradientCard
            colors={['hsl(250,100%,15%)', 'hsl(260,100%,55%)', 'hsl(280,90%,40%)', 'hsl(240,100%,65%)']}
            className="w-full"
          >
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div className="space-y-4">
                <div className="w-fit rounded-lg border border-white/20 px-4 py-1 text-sm text-white/60">{p.access_badge}</div>
                <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl">{p.access_title}</h2>
                <p className="text-sm leading-relaxed text-white/60">{p.access_body}</p>
              </div>
              <ul className="space-y-3">
                {[p.access_1, p.access_2].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-white/60" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GradientCard>
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
