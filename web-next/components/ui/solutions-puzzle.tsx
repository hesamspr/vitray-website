'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { DaanaMark } from '@/components/ui/daana-mark'
import { useTranslation } from '@/hooks/useTranslation'
import { cn } from '@/lib/utils'

/* The four products as one 2×2 jigsaw, assembled while the section is pinned.
   Beats: 0 = empty frame (the organisation's four gaps), 1–4 = one piece per
   product in data-path order (Plex → BI → Pulse → Daana), 5 = complete. */

type PieceDef = {
  id: 'plex' | 'bi' | 'pulse' | 'daana'
  color: string
  /** column/row in reading order: column 0 is the reading-start side */
  cell: [number, number]
  /** where the piece floats before it lands (viewBox units, reading-start = +x) and its tilt */
  from: [number, number, number]
  logo: string | null
  href: string
}

const PIECES: PieceDef[] = [
  { id: 'plex', color: '#3B82F6', cell: [0, 0], from: [150, -120, 14], logo: '/product logos/plex fav white.png', href: '/plex' },
  { id: 'bi', color: '#14B8A6', cell: [1, 0], from: [-170, -90, -12], logo: '/fav.png', href: '/bi-solution' },
  { id: 'pulse', color: '#EA580C', cell: [0, 1], from: [160, 140, -10], logo: '/product logos/Pulse Fav W.png', href: '/pulse' },
  { id: 'daana', color: '#8B5CF6', cell: [1, 1], from: [-150, 150, 12], logo: null, href: '/daana' },
]

const BEATS = 6
const VB = 560 // viewBox size
const C = 200 // cell size
const O = 80 // board offset inside the viewBox (room for pieces floating in)
const S = 104 // tab scale
const pct = (v: number) => `${(v / VB) * 100}%`

/* ── jigsaw geometry (same tab curve as the print catalogue's puzzle) ── */
const TAB = [
  [0.43, 0, 0.44, 0.08, 0.41, 0.13],
  [0.36, 0.2, 0.38, 0.32, 0.5, 0.32],
  [0.62, 0.32, 0.64, 0.2, 0.59, 0.13],
  [0.56, 0.08, 0.57, 0, 0.63, 0],
]
const f = (v: number) => +v.toFixed(2)
function edge(x0: number, y0: number, x1: number, y1: number, nx: number, ny: number, k: number) {
  if (!k) return `L${f(x1)} ${f(y1)}`
  const L = Math.hypot(x1 - x0, y1 - y0)
  const dx = (x1 - x0) / L
  const dy = (y1 - y0) / L
  const pt = (u: number, v: number) => {
    const a = 0.5 * L + (u - 0.5) * S
    const b = v * S * k
    return `${f(x0 + dx * a + nx * b)} ${f(y0 + dy * a + ny * b)}`
  }
  let d = `L${pt(0.37, 0)}`
  for (const s of TAB) d += `C${pt(s[0], s[1])} ${pt(s[2], s[3])} ${pt(s[4], s[5])}`
  return `${d}L${f(x1)} ${f(y1)}`
}
type Sides = { t: number; r: number; b: number; l: number }
function piecePath(x: number, y: number, k: Sides) {
  return (
    `M${f(x)} ${f(y)}` +
    edge(x, y, x + C, y, 0, -1, k.t) +
    edge(x + C, y, x + C, y + C, 1, 0, k.r) +
    edge(x + C, y + C, x, y + C, 0, 1, k.b) +
    edge(x, y + C, x, y, -1, 0, k.l) +
    'Z'
  )
}
// +1 = tab outwards, -1 = slot. vE: edge between the two columns per row; hE: edge between rows per column.
const vE = [1, -1]
const hE = [-1, 1]
const sidesOf = (c: number, r: number): Sides => ({
  t: r === 1 ? -hE[c] : 0,
  b: r === 0 ? hE[c] : 0,
  l: c === 1 ? -vE[r] : 0,
  r: c === 0 ? vE[r] : 0,
})

/** Geometry in physical (left-to-right) coordinates for the current reading direction. */
function layout(rtl: boolean) {
  return PIECES.map((p) => {
    const c = rtl ? 1 - p.cell[0] : p.cell[0]
    const r = p.cell[1]
    const x = O + c * C
    const y = O + r * C
    const sign = rtl ? 1 : -1
    return {
      ...p,
      d: piecePath(x, y, sidesOf(c, r)),
      cx: x + C / 2 + (c ? 6 : -6),
      cy: y + C / 2 + (r ? 6 : -6),
      fromX: p.from[0] * sign,
      fromY: p.from[1],
      tilt: p.from[2] * sign,
    }
  })
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

export function SolutionsPuzzle() {
  const { t, lang } = useTranslation()
  const rtl = lang !== 'en'
  const pieces = layout(rtl)

  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  const [beat, setBeat] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setBeat(v * BEATS))

  const reduceMotion = useReducedMotion()

  /** Scroll to the beat where piece i has landed and its story is showing. */
  const goTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const range = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (range * (i + 1.5)) / BEATS, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const active = Math.min(BEATS - 1, Math.floor(beat))
  const complete = beat >= BEATS - 1

  return (
    <div ref={trackRef} className="relative h-[480vh] overflow-x-clip">
      <div className="sticky top-0 grid h-[100svh] grid-cols-1 grid-rows-[minmax(0,40svh)_auto] content-start gap-2 pt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:grid-rows-1 md:content-center md:items-center md:gap-10 md:pt-0">
        {/* ── copy ── */}
        <div className="relative order-2 h-[38svh] md:order-none md:h-[440px]">
          <Step on={active === 0}>
            <Badge>{t('home.solutions_badge')}</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-[40px] md:leading-[1.35]">
              {t('home.puzzle_title')}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-base md:leading-8">{t('home.puzzle_lead')}</p>
          </Step>

          {pieces.map((p, i) => (
            <Step key={p.id} on={active === i + 1}>
              <div className="flex items-center gap-3 font-display text-[15px]" style={{ color: p.color }}>
                {t(`home.puzzle_${p.id}_num`)}
                <span className="h-px w-11 opacity-60" style={{ background: p.color }} />
              </div>
              <p className="mt-4 text-xs text-slate-500 md:mt-5 md:text-[13px]">{t('home.puzzle_gap_label')}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-200 md:text-[26px]">{t(`home.puzzle_${p.id}_gap`)}</h3>
              <p className="relative mt-3 hidden max-w-[420px] ps-4 text-[14.5px] leading-7 text-slate-500 md:block">
                <span className="absolute inset-y-1.5 start-0 w-0.5 rounded bg-slate-700" />
                {t(`home.puzzle_${p.id}_today`)}
              </p>
              <div
                className="mt-4 max-w-[440px] rounded-2xl border px-4 py-3.5 md:mt-7 md:px-5 md:py-5"
                style={{
                  borderColor: `${p.color}66`,
                  background: `linear-gradient(135deg, ${p.color}24, transparent 70%)`,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <PieceLogo logo={p.logo} className="h-6 w-6" />
                  <span className="font-display text-lg font-bold text-white md:text-[22px]">{t(`home.puzzle_${p.id}_name`)}</span>
                  <span className="ms-auto rounded-full border px-2.5 py-0.5 text-xs" style={{ color: p.color, borderColor: `${p.color}73` }}>
                    {t(`home.puzzle_${p.id}_verb`)}
                  </span>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-7 text-slate-300 md:text-[14.5px]">{t(`home.puzzle_${p.id}_body`)}</p>
                <Link href={p.href} className="mt-2.5 inline-block border-b border-white/30 pb-0.5 text-[13px] text-white hover:border-white">
                  {t('home.learn_more')}
                </Link>
              </div>
            </Step>
          ))}

          <Step on={active === BEATS - 1}>
            <Badge>{t('home.puzzle_final_badge')}</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-[40px] md:leading-[1.35]">
              {t('home.puzzle_final_title')}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-base md:leading-8">{t('home.puzzle_final_body')}</p>
          </Step>
        </div>

        {/* ── board ── */}
        <div className="relative mx-auto aspect-square h-full max-h-[40svh] md:h-auto md:max-h-[68svh] md:w-full" aria-hidden="true">
          {/* empty slots, labelled with the gap each product fills */}
          <svg viewBox={`0 0 ${VB} ${VB}`} className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <clipPath id="pz-board">
                <rect x={O} y={O} width={2 * C} height={2 * C} rx={22} />
              </clipPath>
            </defs>
            {pieces.map((p) => (
              <path key={p.id} d={p.d} clipPath="url(#pz-board)" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth={1.2} strokeDasharray="5 7" />
            ))}
          </svg>
          {pieces.map((p) => (
            <span
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] text-slate-600 md:text-[13px]"
              style={{ left: pct(p.cx), top: pct(p.cy) }}
            >
              {t(`home.puzzle_${p.id}_gap`)}
            </span>
          ))}

          {/* pieces */}
          {pieces.map((p, i) => {
            const local = clamp(beat - (i + 0.6))
            const e = easeOut(clamp(local / 0.75))
            const flash = clamp(1 - Math.abs(local - 0.85) * 6)
            return (
              <div
                key={p.id}
                className="absolute inset-0 will-change-transform"
                style={{
                  opacity: clamp(local * 3),
                  transform: `translate(${pct(p.fromX * (1 - e))}, ${pct(p.fromY * (1 - e))}) rotate(${p.tilt * (1 - e)}deg)`,
                  transformOrigin: `${pct(p.cx)} ${pct(p.cy)}`,
                }}
              >
                <svg viewBox={`0 0 ${VB} ${VB}`} className="absolute inset-0 h-full w-full overflow-visible">
                  <defs>
                    <filter id={`pz-blur-${p.id}`} x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="18" />
                    </filter>
                    <linearGradient id={`pz-fill-${p.id}`} x1={p.cx > VB / 2 ? 1 : 0} y1={p.cy > VB / 2 ? 1 : 0} x2={p.cx > VB / 2 ? 0 : 1} y2={p.cy > VB / 2 ? 0 : 1}>
                      <stop offset="0" stopColor={p.color} stopOpacity={0.38} />
                      <stop offset="1" stopColor={p.color} stopOpacity={0.06} />
                    </linearGradient>
                  </defs>
                  <g clipPath="url(#pz-board)">
                    <path d={p.d} fill={p.color} filter={`url(#pz-blur-${p.id})`} style={{ opacity: flash * 0.9 }} />
                    {complete && (
                      <path
                        d={p.d}
                        fill={p.color}
                        filter={`url(#pz-blur-${p.id})`}
                        className="opacity-0 motion-safe:animate-puzzle-pulse"
                        style={{ animationDelay: `${i * 0.9}s` }}
                      />
                    )}
                    <path d={p.d} fill="#07080d" />
                    <path d={p.d} fill={`url(#pz-fill-${p.id})`} stroke={p.color} strokeWidth={1.6} strokeLinejoin="round" />
                  </g>
                </svg>
                <div
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
                  style={{ left: pct(p.cx), top: pct(p.cy) }}
                >
                  <PieceLogo logo={p.logo} className="h-5 w-5 md:h-8 md:w-8" />
                  <span className="mt-1 font-display text-sm font-bold leading-tight text-white md:mt-2 md:text-[21px]">{t(`home.puzzle_${p.id}_name`)}</span>
                  <span className="mt-0.5 text-[10px] leading-tight md:mt-1 md:text-[13px]" style={{ color: p.color }}>
                    {t(`home.puzzle_${p.id}_verb`)}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Vitray mark where the four pieces meet */}
          <div
            className={cn(
              'absolute left-1/2 top-1/2 grid h-[11%] w-[11%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[1.5px] border-white/85 bg-[#05060b] transition-all duration-700',
              complete ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
            )}
          >
            <Image src="/fav.png" alt="" width={32} height={32} className="h-1/2 w-1/2 object-contain" />
          </div>
        </div>

        {/* product rail: progress per piece, and a shortcut to each product's beat */}
        <nav
          aria-label={t('home.solutions_badge')}
          className="absolute inset-x-0 bottom-3 grid grid-cols-4 gap-1 md:bottom-8 md:gap-3"
        >
          {pieces.map((p, i) => {
            const fill = clamp((beat - (i + 0.6)) / 0.75)
            const reached = fill >= 1
            const current = active === i + 1
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => goTo(i)}
                aria-current={current ? 'step' : undefined}
                className="group relative rounded-xl px-1.5 pb-2 pt-3.5 text-start outline-none transition-colors hover:bg-white/[0.03] focus-visible:ring-1 focus-visible:ring-white/40 md:px-3 md:pb-3 md:pt-4"
              >
                {/* progress track */}
                <span className="absolute inset-x-1.5 top-0 h-0.5 overflow-hidden rounded-full bg-white/[0.08] transition-colors group-hover:bg-white/[0.16] md:inset-x-3">
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${fill * 100}%`,
                      background: p.color,
                      boxShadow: current ? `0 0 12px 1px ${p.color}` : undefined,
                    }}
                  />
                </span>

                <span className="flex flex-col items-center gap-1.5 md:flex-row md:gap-2.5">
                  <span
                    className={cn(
                      'grid h-6 w-6 shrink-0 place-items-center rounded-md border transition-all duration-300 md:h-8 md:w-8 md:rounded-lg',
                      reached || current ? 'opacity-100' : 'border-white/[0.06] bg-white/[0.03] opacity-50 grayscale group-hover:opacity-90 group-hover:grayscale-0',
                    )}
                    style={reached || current ? { borderColor: `${p.color}59`, background: `${p.color}1f` } : undefined}
                  >
                    <PieceLogo logo={p.logo} className="h-3 w-3 md:h-4 md:w-4" />
                  </span>
                  <span className="min-w-0 text-center md:text-start">
                    <span
                      className={cn(
                        'block whitespace-nowrap font-display text-[10.5px] font-bold leading-tight transition-colors md:truncate md:text-sm',
                        current ? 'text-white' : reached ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-300',
                      )}
                    >
                      {t(`home.puzzle_${p.id}_name`)}
                    </span>
                    <span
                      className={cn('mt-0.5 hidden truncate text-[11.5px] leading-tight transition-colors md:block', !current && 'text-slate-600')}
                      style={current ? { color: p.color } : undefined}
                    >
                      {t(`home.puzzle_${p.id}_num`)} · {t(`home.puzzle_${p.id}_verb`)}
                    </span>
                  </span>
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

function Step({ on, children }: { on: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex flex-col justify-start transition-all duration-500 ease-out md:justify-center',
        on ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      {children}
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <div className="w-fit rounded-lg border border-border/60 px-4 py-1 text-sm text-muted-foreground">{children}</div>
}

function PieceLogo({ logo, className }: { logo: string | null; className?: string }) {
  if (!logo) return <DaanaMark className={className} />
  return <Image src={logo} alt="" width={32} height={32} className={cn('object-contain', className)} />
}
