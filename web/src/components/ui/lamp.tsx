"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colorMap = {
  blue: {
    conic: 'from-blue-800 via-transparent to-transparent',
    conicRight: 'from-transparent via-transparent to-blue-800',
    glow: 'bg-blue-800',
    inner: 'bg-blue-700',
    line: 'bg-blue-700',
  },
  orange: {
    conic: 'from-orange-700 via-transparent to-transparent',
    conicRight: 'from-transparent via-transparent to-orange-700',
    glow: 'bg-orange-700',
    inner: 'bg-orange-600',
    line: 'bg-orange-600',
  },
  purple: {
    conic: 'from-purple-800 via-transparent to-transparent',
    conicRight: 'from-transparent via-transparent to-purple-800',
    glow: 'bg-purple-800',
    inner: 'bg-purple-700',
    line: 'bg-purple-700',
  },
  cyan: {
    conic: 'from-cyan-700 via-transparent to-transparent',
    conicRight: 'from-transparent via-transparent to-cyan-700',
    glow: 'bg-cyan-700',
    inner: 'bg-cyan-600',
    line: 'bg-cyan-600',
  },
};

export const LampContainer = ({
  children,
  className,
  color = 'blue',
}: {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colorMap;
}) => {
  const c = colorMap[color];
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-background w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn("absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white [--conic-position:from_70deg_at_center_top]", c.conic)}
        >
          <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn("absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white [--conic-position:from_290deg_at_center_top]", c.conicRight)}
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className={cn("absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl", c.glow)}></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={cn("absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl", c.inner)}
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={cn("absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]", c.line)}
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background"></div>
      </div>

      {/* Top fade — smooth transition from page above */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-50 pointer-events-none" />

      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
