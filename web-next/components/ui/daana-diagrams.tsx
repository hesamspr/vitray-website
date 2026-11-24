import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Building2,
  Database,
  Eye,
  FileText,
  Lock,
  Mic,
  Network,
  NotebookPen,
  Server,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { DaanaMark } from '@/components/ui/daana-mark';
import { cn } from '@/lib/utils';

/* ───────────────────────── MCP hub ─────────────────────────
   Organisation knowledge (start side) → Daana over MCP → AI tools (end side).
   Connector SVGs are drawn left-to-right and mirrored in RTL so the flow
   always runs from the sources toward the tools. SSAS is deliberately absent:
   MCP exposes meetings, notes, files and the knowledge graph only. */

const ROW_H = 72;
const ROWS = 4;
const COL_H = ROW_H * ROWS;
const CONNECTOR_W = 56;
const rowY = (i: number) => ROW_H * i + ROW_H / 2;

function Connector({ converge }: { converge: boolean }) {
  const mid = COL_H / 2;
  return (
    <svg
      aria-hidden="true"
      width={CONNECTOR_W}
      height={COL_H}
      viewBox={`0 0 ${CONNECTOR_W} ${COL_H}`}
      className="shrink-0 rtl:-scale-x-100"
      fill="none"
    >
      {Array.from({ length: ROWS }, (_, i) => {
        const y = rowY(i);
        const [y0, y1] = converge ? [y, mid] : [mid, y];
        const d = `M0 ${y0} C ${CONNECTOR_W / 2} ${y0}, ${CONNECTOR_W / 2} ${y1}, ${CONNECTOR_W} ${y1}`;
        return (
          <g key={i}>
            <path d={d} stroke="rgba(167,139,250,0.18)" strokeWidth={1} />
            <path
              d={d}
              stroke="#a78bfa"
              strokeWidth={1.25}
              strokeDasharray="3 13"
              strokeLinecap="round"
              className="motion-safe:animate-daana-flow"
              style={{ animationDelay: `${i * -0.25}s` }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function McpHub({ sources, hubLabel }: { sources: string[]; hubLabel: string }) {
  const icons: LucideIcon[] = [Mic, NotebookPen, FileText, Network];
  const tools = ['Claude', 'ChatGPT', 'Hermes', 'OpenClaw'];

  return (
    <div className="flex w-full max-w-[540px] items-center justify-center">
      <ul className="grid min-w-0 flex-1" style={{ gridTemplateRows: `repeat(${ROWS}, ${ROW_H}px)` }}>
        {sources.map((label, i) => {
          const Icon = icons[i];
          return (
            <li key={label} className="flex items-center justify-end gap-2.5 text-[13px] text-white/85 sm:text-sm">
              <span className="truncate">{label}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Icon size={16} strokeWidth={1.75} />
              </span>
            </li>
          );
        })}
      </ul>

      <Connector converge />

      <div className="flex shrink-0 flex-col items-center gap-2.5">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-[0_0_60px_-6px_rgba(139,92,246,0.9)]">
          <DaanaMark className="h-8 w-8" color="#000" />
        </span>
        <span dir="ltr" className="rounded-md border border-violet-400/30 px-2 py-0.5 font-mono text-[11px] tracking-widest text-violet-300">
          {hubLabel}
        </span>
      </div>

      <Connector converge={false} />

      <ul className="grid min-w-0 flex-1" style={{ gridTemplateRows: `repeat(${ROWS}, ${ROW_H}px)` }}>
        {tools.map((tool) => (
          <li key={tool} className="flex items-center">
            <span
              dir="ltr"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 font-sans text-[13px] font-semibold text-white sm:px-4 sm:text-[15px]"
            >
              {tool}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────── Gateway architecture ─────────────────────────
   Inside the org network: SSAS, databases and Active Directory feed a
   lightweight gateway. The gateway opens one outbound, encrypted connection
   to the organisation's workspace in Daana (SaaS). Nothing comes in. */

export type TrustCopy = {
  network: string;
  cloud: string;
  ssas: string;
  db: string;
  ad: string;
  gateway: string;
  link: string;
  inboundClosed: string;
  readOnly: string;
  asUser: string;
};

const TAG = {
  violet: 'border-violet-400/30 bg-violet-500/10 text-violet-200',
  peach: 'border-[#FFBE7B]/35 bg-[#FFBE7B]/10 text-[#FFD7AE]',
  pink: 'border-[#FE8FB5]/35 bg-[#FE8FB5]/10 text-[#FFC2D8]',
} as const;

function Tag({ tone, icon: Icon, children }: { tone: keyof typeof TAG; icon: LucideIcon; children: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-[11px]', TAG[tone])}>
      <Icon size={11} strokeWidth={2} />
      {children}
    </span>
  );
}

function Node({ icon: Icon, label, ltr, tag }: { icon: LucideIcon; label: string; ltr?: boolean; tag?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-2xl border border-white/[0.08] bg-[#0b0a14] px-3.5 py-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-white/80">
        <Icon size={15} strokeWidth={1.75} />
      </span>
      <span dir={ltr ? 'ltr' : undefined} className="text-[13.5px] text-white">
        {label}
      </span>
      {tag && <span className="ms-auto">{tag}</span>}
    </div>
  );
}

export function TrustDiagram({ copy }: { copy: TrustCopy }) {
  return (
    <div className="flex w-full flex-col items-stretch md:flex-row md:items-center">
      {/* Organisation network */}
      <div className="relative flex-1 rounded-[28px] border border-dashed border-white/20 p-5 pt-12 sm:p-7 sm:pt-14">
        <p className="absolute start-6 top-5 flex items-center gap-2 text-xs text-muted-foreground sm:start-7">
          <Building2 size={14} />
          {copy.network}
        </p>

        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <div className="grid flex-1 gap-2.5">
            <Node icon={Database} label={copy.ssas} tag={<Tag tone="violet" icon={Eye}>{copy.readOnly}</Tag>} />
            <Node icon={Server} label={copy.db} tag={<Tag tone="violet" icon={Eye}>{copy.readOnly}</Tag>} />
            <Node icon={UserCheck} label={copy.ad} ltr tag={<Tag tone="pink" icon={UserCheck}>{copy.asUser}</Tag>} />
          </div>

          {/* bracket joining the three systems to the gateway */}
          <div aria-hidden="true" className="hidden items-center self-stretch sm:flex">
            <span className="my-7 w-4 self-stretch rounded-e-xl border-y border-e border-violet-400/35" />
            <span className="h-px w-4 bg-violet-400/35" />
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-violet-400/40 bg-violet-500/[0.08] px-5 py-4 text-center shadow-[0_0_50px_-14px_rgba(139,92,246,0.7)]">
            <ShieldCheck size={22} className="text-violet-300" strokeWidth={1.75} />
            <span className="text-sm font-semibold text-white">{copy.gateway}</span>
          </div>
        </div>
      </div>

      {/* Outbound, encrypted link — packets only travel away from the org */}
      <div className="relative mx-auto flex h-36 w-px items-center md:mx-0 md:h-px md:w-44 lg:w-56">
        <span className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(180deg, #A07CFE, #FE8FB5, #FFBE7B)' }} />
        <span className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(90deg, #A07CFE, #FE8FB5, #FFBE7B)' }} />
        <span className="absolute inset-0 hidden rtl:md:block" style={{ background: 'linear-gradient(270deg, #A07CFE, #FE8FB5, #FFBE7B)' }} />
        <span className="absolute -start-[3.5px] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_2px_rgba(254,143,181,0.8)] motion-safe:animate-daana-packet-y md:hidden" />
        <span className="absolute -top-[3.5px] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_12px_2px_rgba(254,143,181,0.8)] motion-safe:animate-daana-packet-x md:block" />
        <ArrowRight aria-hidden="true" size={14} className="absolute -bottom-2 -start-[6.5px] rotate-90 text-[#FFBE7B] md:hidden" />
        <ArrowRight aria-hidden="true" size={14} className="absolute -end-2 -top-[6.5px] hidden text-[#FFBE7B] rtl:rotate-180 md:block" />

        {/* labels: beside the line on mobile, above/below it on desktop */}
        <span className="absolute end-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] text-white/60 md:hidden">{copy.link}</span>
        <span className="absolute start-5 top-1/2 -translate-y-1/2 md:hidden">
          <Tag tone="peach" icon={Lock}>{copy.inboundClosed}</Tag>
        </span>
        <span className="absolute inset-x-0 -top-8 hidden justify-center whitespace-nowrap text-[11px] text-white/60 md:flex">{copy.link}</span>
        <span className="absolute inset-x-0 top-4 hidden justify-center md:flex">
          <Tag tone="peach" icon={Lock}>{copy.inboundClosed}</Tag>
        </span>
      </div>

      {/* Daana workspace (SaaS) */}
      <div
        className="relative flex flex-col items-center gap-4 rounded-[28px] border border-violet-400/40 px-8 py-10 text-center md:w-56"
        style={{ background: 'radial-gradient(80% 80% at 50% 0%, rgba(124,58,237,0.35), rgba(124,58,237,0.06))' }}
      >
        <DaanaMark className="h-10 w-10" />
        <span className="text-sm leading-6 text-white">{copy.cloud}</span>
      </div>
    </div>
  );
}
