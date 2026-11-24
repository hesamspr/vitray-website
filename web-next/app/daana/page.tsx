import type { ReactNode } from 'react';
import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { DaanaHero } from '@/components/ui/daana-hero';
import { DaanaMark } from '@/components/ui/daana-mark';
import { CallToAction } from '@/components/ui/cta-3';
import { LampContainer } from '@/components/ui/lamp';
import { McpHub, TrustDiagram } from '@/components/ui/daana-diagrams';
import { Database, Eye, Lock, UserCheck } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { getTranslations } from '@/lib/i18n.server';
import { cn } from '@/lib/utils';

const GRADIENT = 'linear-gradient(90deg, #A07CFE, #FE8FB5, #FFBE7B)';

// Deterministic "audio waveform" bar heights for the meetings visual.
const WAVE = Array.from({ length: 64 }, (_, i) => {
  const seed = Math.sin(i * 12.9898) * 43758.5453;
  const rnd = seed - Math.floor(seed);
  return 18 + Math.round(rnd * 82 * Math.abs(Math.sin(i / 6)));
});

function Cite({ n, active }: { n: string; active?: boolean }) {
  return (
    <sup
      className={cn(
        'mx-0.5 inline-grid h-[17px] w-[17px] place-items-center rounded-[5px] bg-violet-500/30 text-[10px] text-violet-100 align-[3px]',
        active && 'ring-2 ring-violet-400',
      )}
    >
      {n}
    </sup>
  );
}

function Callout({ title, body, className, lineSide }: { title: string; body: string; className?: string; lineSide: 'start' | 'end' }) {
  return (
    <div className={cn('relative text-[13px] leading-7 text-muted-foreground lg:absolute lg:w-48', className)}>
      <span
        aria-hidden="true"
        className={cn('absolute top-3 hidden h-px w-10 bg-violet-400/70 lg:block', lineSide === 'end' ? '-end-12' : '-start-12')}
      />
      <b className="mb-0.5 block font-[Anjoman] text-[15px] font-bold text-white">{title}</b>
      {body}
    </div>
  );
}

function Chapter({ num, title, body, flip, children, id }: { num: string; title: string; body: string; flip?: boolean; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t border-white/[0.07] py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-6 md:grid-cols-[5fr_6fr] md:gap-24 md:px-8">
        <Reveal className={cn(flip && 'md:order-2')}>
          <div className="mb-5 flex items-center gap-3.5 font-[Anjoman] text-xl text-violet-400">
            {num}
            <span className="h-px w-12 bg-violet-400/60" />
          </div>
          <h3 className="mb-5 text-3xl font-bold tracking-tight text-white md:text-[40px] md:leading-tight">{title}</h3>
          <p className="max-w-md text-base leading-8 text-muted-foreground md:text-[16.5px]">{body}</p>
        </Reveal>
        <Reveal delay={0.25} className="flex min-h-[240px] items-center justify-center">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export async function DaanaPage() {
  const { t } = await getTranslations();

  const bars = [1, 2, 3, 4, 5].map((i) => ({ label: t(`daana.r${i}`), value: t(`daana.v${i}`) }));
  const barWidths = [100, 45, 42, 36, 19];
  const actions = [1, 2, 3].map((i) => ({ item: t(`daana.ch2_item${i}`), who: t(`daana.ch2_who${i}`) }));
  const trustIcons = [Lock, Eye, UserCheck];
  const trustTones = ['text-[#FFBE7B] bg-[#FFBE7B]/10', 'text-violet-300 bg-violet-500/10', 'text-[#FE8FB5] bg-[#FE8FB5]/10'];
  const trust = [1, 2, 3].map((i) => ({ title: t(`daana.trust${i}_title`), body: t(`daana.trust${i}_body`) }));
  const mcpSources = [1, 2, 3, 4].map((i) => t(`daana.mcp_src${i}`));

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      {/* 1 — Hero: one message, one action */}
      <DaanaHero />

      {/* 2 — The problem, in one sentence */}
      <section className="py-36 md:py-52">
        <Reveal className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="max-w-4xl font-[Anjoman] text-3xl font-bold !leading-[1.45] text-slate-600 sm:text-4xl md:text-[54px]">
            {t('daana.statement_dim')} <span className="text-white">{t('daana.statement_em')}</span>
          </p>
        </Reveal>
      </section>

      {/* 3 — The core promise: answers with sources */}
      <section className="pb-36 pt-6 md:pb-52">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal className="mb-16 text-center md:mb-20">
            <p className="text-sm text-violet-400">{t('daana.answer_kicker')}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-[44px] md:leading-tight">
              {t('daana.answer_title')}
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="relative mx-auto max-w-6xl">
            <div className="mx-auto w-full max-w-[620px] rounded-3xl border border-white/[0.08] bg-[#07060f] p-5 shadow-[0_40px_120px_-40px_rgba(124,58,237,0.55)] sm:p-8">
              <div className="w-fit max-w-[85%] rounded-2xl rounded-se-md bg-[#17152a] px-4 py-2.5 text-sm">
                {t('daana.answer_q')}
              </div>
              <div className="mt-6 flex gap-3">
                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-white">
                  <DaanaMark className="h-[17px] w-[17px]" color="#000" />
                </span>
                <div className="text-[14.5px] leading-[2.1] text-white/90">
                  {t('daana.answer_a1')}
                  <Cite n={t('daana.cite1')} active />
                  {t('daana.answer_a2')}
                  <Cite n={t('daana.cite2')} />
                  {t('daana.answer_a3')}
                  <Cite n={t('daana.cite3')} />
                  {t('daana.answer_a4')}
                  <div className="mt-4 grid gap-1 border-t border-white/[0.08] pt-3.5 text-xs text-muted-foreground">
                    <span>{t('daana.cite1')} · {t('daana.src1')}</span>
                    <span>{t('daana.cite2')} · {t('daana.src2')}</span>
                    <span>{t('daana.cite3')} · {t('daana.src3')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 grid max-w-[620px] gap-6 sm:grid-cols-3 lg:mt-0 lg:block lg:max-w-none">
              <Callout className="lg:start-0 lg:top-10" lineSide="end" title={t('daana.call1_title')} body={t('daana.call1_body')} />
              <Callout className="lg:end-0 lg:top-28" lineSide="start" title={t('daana.call2_title')} body={t('daana.call2_body')} />
              <Callout className="lg:start-0 lg:top-60" lineSide="end" title={t('daana.call3_title')} body={t('daana.call3_body')} />
            </div>
          </Reveal>

          <p className="mt-6 text-center text-[11px] text-slate-500">{t('daana.demo_note')}</p>
        </div>
      </section>

      {/* 4 — Four chapters: one idea and one visual each */}
      <Chapter id="how" num={t('daana.ch1_num')} title={t('daana.ch1_title')} body={t('daana.ch1_body')}>
        <div className="w-full max-w-md">
          <div className="mb-5 flex justify-between text-[13px] text-muted-foreground">
            <span>{t('daana.ch1_chart')}</span>
            <span>{t('daana.ch1_unit')}</span>
          </div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
            <Database size={13} strokeWidth={1.75} />
            {t('daana.ch1_source')}
          </p>
          {bars.map((bar, i) => (
            <div key={bar.label} className="my-3.5 grid grid-cols-[64px_1fr_36px] items-center gap-3.5 text-[13px]">
              <span>{bar.label}</span>
              <div className="h-1.5 rounded-full bg-[#141224]">
                <div className="h-full rounded-full" style={{ width: `${barWidths[i]}%`, background: GRADIENT }} />
              </div>
              <span className="font-medium">{bar.value}</span>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter flip num={t('daana.ch2_num')} title={t('daana.ch2_title')} body={t('daana.ch2_body')}>
        <div className="w-full max-w-md">
          <div className="mb-7 flex h-14 items-center gap-[3px]" aria-hidden="true">
            {WAVE.map((h, i) => (
              <i key={i} className={cn('flex-1 rounded-sm bg-violet-400/55', i > 40 && 'opacity-35')} style={{ height: `${h}%` }} />
            ))}
          </div>
          {actions.map((a) => (
            <div key={a.item} className="flex justify-between gap-4 border-b border-white/[0.08] py-3.5 text-sm">
              {a.item}
              <span className="shrink-0 text-[13px] text-muted-foreground">{a.who}</span>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter num={t('daana.ch3_num')} title={t('daana.ch3_title')} body={t('daana.ch3_body')}>
        <div className="w-full max-w-md">
          <p className="font-[Anjoman] text-5xl font-bold leading-none text-white md:text-6xl">{t('daana.ch3_when')}</p>
          <p className="mt-3 text-base text-muted-foreground">{t('daana.ch3_ready')}</p>
          <div className="mt-10 rounded-2xl border border-[#FFBE7B]/35 px-5 py-4 text-[13.5px] text-white/80">
            <p className="mb-1.5 text-xs text-[#FFBE7B]">{t('daana.ch3_pending')}</p>
            {t('daana.ch3_action')}
            <div className="mt-3.5 flex gap-2 text-xs" aria-hidden="true">
              <span className="rounded-lg bg-white px-3.5 py-1 text-black">{t('daana.ch3_approve')}</span>
              <span className="rounded-lg border border-white/10 px-3.5 py-1">{t('daana.ch3_edit')}</span>
              <span className="rounded-lg border border-white/10 px-3.5 py-1">{t('daana.ch3_reject')}</span>
            </div>
          </div>
        </div>
      </Chapter>

      <Chapter flip num={t('daana.ch4_num')} title={t('daana.ch4_title')} body={t('daana.ch4_body')}>
        <McpHub sources={mcpSources} hubLabel="MCP" />
      </Chapter>

      {/* 5 — Trust: the architecture itself is the argument */}
      <section className="border-t border-white/[0.07] py-28 md:py-44">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal className="mb-16 text-center md:mb-24">
            <p className="text-sm text-violet-400">{t('daana.trust_kicker')}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-[44px] md:leading-tight">
              {t('daana.trust_title')}
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <TrustDiagram
              copy={{
                network: t('daana.trust_from'),
                cloud: t('daana.trust_to'),
                ssas: t('daana.node_ssas'),
                db: t('daana.node_db'),
                ad: 'Active Directory',
                gateway: t('daana.node_gateway'),
                link: t('daana.link_label'),
                inboundClosed: t('daana.trust1_title'),
                readOnly: t('daana.trust2_title'),
                asUser: t('daana.trust3_title'),
              }}
            />
          </Reveal>

          <div className="mt-20 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-12">
            {trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <Reveal key={item.title} delay={0.1 + i * 0.1} className="flex gap-4">
                  <span className={cn('grid h-10 w-10 shrink-0 place-items-center rounded-xl', trustTones[i])}>
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 — Closing: same lamp section and shared CTA as the other product pages */}
      <LampContainer color="violet" className="mb-[-14rem] min-h-[44rem]">
        <Reveal
          y={60}
          fromOpacity={0.5}
          delay={0.3}
          ease="easeInOut"
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white md:text-3xl">{t('daana.closing_title')}</h2>
        </Reveal>
      </LampContainer>

      <div className="mx-auto max-w-5xl overflow-visible px-6 py-20">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}

export default DaanaPage;
