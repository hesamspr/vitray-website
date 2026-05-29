'use client'

import { m, type Easing } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Animation start delay in seconds. */
  delay?: number
  duration?: number
  /** Horizontal travel distance in px. */
  x?: number
  /** Vertical travel distance in px. */
  y?: number
  /** Starting opacity (defaults to fully transparent). */
  fromOpacity?: number
  ease?: Easing
  /** Play on mount instead of when scrolled into view. */
  onMount?: boolean
}

const DEFAULT_EASE: Easing = [0.16, 1, 0.3, 1]

export function Reveal({
  children,
  className,
  delay = 0.1,
  duration = 0.8,
  x = 0,
  y = 20,
  fromOpacity = 0,
  ease = DEFAULT_EASE,
  onMount = false,
}: RevealProps) {
  const target = { opacity: 1, x: 0, y: 0 }
  return (
    <m.div
      className={className}
      initial={{ opacity: fromOpacity, x, y }}
      {...(onMount
        ? { animate: target }
        : { whileInView: target, viewport: { once: true } })}
      transition={{ duration, delay, ease }}
    >
      {children}
    </m.div>
  )
}
