'use client'

import React, { ReactNode, useEffect } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange" | "cyan";
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  cyan: { base: 185, spread: 180 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
} as const;

// Injected once per page for all GlowCard instances
const GLOW_CSS = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

let glowStylesInjected = false;

// Pointer position is viewport-global — the same for every card. We track it once
// on :root and let cards inherit --x/--xp/--y/--yp through the CSS cascade. This
// replaces N listeners × 4 style writes per pointermove with 1 listener × 4 writes,
// rAF-coalesced so we write at most once per frame regardless of pointer poll rate.
let trackerRefCount = 0;
let detachTracker: (() => void) | null = null;

function attachPointerTracker() {
  if (detachTracker) return;
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  // Touch-only / hover-less devices: park the spotlight at center and skip tracking
  if (!window.matchMedia("(hover: hover)").matches) {
    root.style.setProperty("--x", String(window.innerWidth / 2));
    root.style.setProperty("--xp", "0.5");
    root.style.setProperty("--y", String(window.innerHeight / 2));
    root.style.setProperty("--yp", "0.5");
    detachTracker = () => {};
    return;
  }

  let rafId = 0;
  let pendingX = 0;
  let pendingY = 0;

  const flush = () => {
    rafId = 0;
    root.style.setProperty("--x", pendingX.toFixed(2));
    root.style.setProperty("--xp", (pendingX / window.innerWidth).toFixed(2));
    root.style.setProperty("--y", pendingY.toFixed(2));
    root.style.setProperty("--yp", (pendingY / window.innerHeight).toFixed(2));
  };

  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    pendingX = e.clientX;
    pendingY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(flush);
  };

  document.addEventListener("pointermove", onPointerMove, { passive: true });

  detachTracker = () => {
    document.removeEventListener("pointermove", onPointerMove);
    if (rafId) cancelAnimationFrame(rafId);
  };
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
}) => {
  useEffect(() => {
    if (!glowStylesInjected) {
      const style = document.createElement("style");
      style.textContent = GLOW_CSS;
      document.head.appendChild(style);
      glowStylesInjected = true;
    }

    trackerRefCount++;
    if (trackerRefCount === 1) attachPointerTracker();

    return () => {
      trackerRefCount--;
      if (trackerRefCount === 0 && detachTracker) {
        detachTracker();
        detachTracker = null;
      }
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const inlineStyles = {
    "--base": String(base),
    "--spread": String(spread),
    "--radius": "14",
    "--border": "3",
    "--backdrop": "hsl(0 0% 60% / 0.12)",
    "--backup-border": "var(--backdrop)",
    "--size": "200",
    "--outer": "1",
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
    touchAction: "pan-y",
  } as React.CSSProperties;

  return (
    <div
      data-glow
      style={inlineStyles}
      className={`relative grid grid-rows-[1fr_auto] gap-4 rounded-2xl p-4 shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px] ${className}`}
    >
      <div data-glow />
      {children}
    </div>
  );
};

export { GlowCard };
