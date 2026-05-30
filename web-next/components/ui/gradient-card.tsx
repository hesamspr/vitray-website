import type React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  colors: string[];
  className?: string;
}

const fade = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, transparent)`;
const darken = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, black)`;

export function GradientCard({ children, colors, className = "" }: GradientCardProps) {
  const [base, mid1, mid2, highlight] = colors;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border border-white/10 ${className}`}
      style={{
        backgroundColor: darken(base, 45),
        backgroundImage: [
          `radial-gradient(ellipse 60% 70% at 15% 10%, ${fade(mid1, 40)} 0%, transparent 60%)`,
          `radial-gradient(ellipse 55% 65% at 90% 90%, ${fade(mid2, 38)} 0%, transparent 55%)`,
          `radial-gradient(ellipse 40% 50% at 70% 20%, ${fade(highlight, 28)} 0%, transparent 60%)`,
        ].join(", "),
      }}
    >
      {children}
    </div>
  );
}
