'use client'

import { m } from 'motion/react'
import { Sparkles, FileSearch2, ArrowUp } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.45, delayChildren: 0.2 } },
}

const bubble = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

function AgentAvatar() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-black shadow-[0_0_18px_-4px_rgba(34,211,238,0.8)]">
      <Sparkles size={13} />
    </span>
  )
}

export function DaanaChatDemo() {
  const { t } = useTranslation()

  const turns = [
    { q: t('daana.demo_q1'), a: t('daana.demo_a1'), src: t('daana.demo_src1') },
    { q: t('daana.demo_q2'), a: t('daana.demo_a2'), src: t('daana.demo_src2') },
  ]

  return (
    <div className="relative">
      {/* Ambient glow behind the chat window */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-cyan-500/10 blur-3xl pointer-events-none"
      />

      <div className="relative rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden shadow-[0_1rem_3rem_-1.5rem_rgba(34,211,238,0.35)]">
        {/* Window header */}
        <div className="flex items-center gap-3 border-b border-border/60 px-5 py-3.5">
          <AgentAvatar />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{t('daana.demo_agent')}</span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI
            </span>
          </div>
        </div>

        {/* Conversation */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-4 px-5 py-6"
        >
          {turns.map((turn) => (
            <div key={turn.q} className="flex flex-col gap-4">
              <m.div variants={bubble} className="self-start max-w-[85%]">
                <div className="rounded-2xl rounded-bl-md bg-muted/70 px-4 py-2.5 text-sm leading-relaxed text-foreground/90">
                  {turn.q}
                </div>
              </m.div>

              <m.div variants={bubble} className="self-end max-w-[90%]">
                <div className="flex items-start gap-2.5">
                  <div className="space-y-2">
                    <div className="rounded-2xl rounded-br-md border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-sm leading-relaxed text-foreground/90">
                      {turn.a}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground">
                      <FileSearch2 size={11} className="text-cyan-300/80" />
                      {turn.src}
                    </span>
                  </div>
                  <AgentAvatar />
                </div>
              </m.div>
            </div>
          ))}
        </m.div>

        {/* Input bar */}
        <div className="border-t border-border/60 px-5 py-4">
          <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 px-4 py-2.5">
            <span className="flex-1 text-sm text-muted-foreground/70">{t('daana.demo_input')}</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/90 text-black shrink-0">
              <ArrowUp size={12} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
