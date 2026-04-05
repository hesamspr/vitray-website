'use client'

import type React from "react";
import { Warp } from "@paper-design/shaders-react";

type WarpColors = string[];

interface WarpCardProps {
  children: React.ReactNode;
  colors: WarpColors;
  className?: string;
  shape?: "checks" | "stripes" | "edge";
  speed?: number;
}

const defaultConfig = {
  proportion: 0.38,
  softness: 0.95,
  distortion: 0.17,
  swirl: 0.8,
  swirlIterations: 10,
  shapeScale: 0.1,
  scale: 1,
  rotation: 0,
};

export function WarpCard({ children, colors, className = "", shape = "checks", speed = 0.7 }: WarpCardProps) {
  return (
    <div className={`relative rounded-3xl overflow-hidden ${className}`}>
      {/* Shader background */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          colors={colors}
          shape={shape}
          speed={speed}
          {...defaultConfig}
        />
      </div>
      {/* Content overlay */}
      <div className="relative z-10 h-full bg-black/75 border border-white/10 rounded-3xl backdrop-blur-[2px]">
        {children}
      </div>
    </div>
  );
}
