'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode[];
  className?: string;
  enableHover?: boolean;
  defaultValue?: string;
  transition?: object;
}

export function AnimatedBackground({
  children,
  className,
  enableHover = false,
  defaultValue,
  transition = { type: 'spring', bounce: 0.2, duration: 0.3 },
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);

  const handleMouseEnter = (id: string) => {
    if (enableHover) {
      setActiveId(id);
    }
  };

  const handleMouseLeave = () => {
    if (enableHover) {
      setActiveId(null);
    }
  };

  const handleClick = (id: string) => {
    if (!enableHover) {
      setActiveId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <div className={cn('relative', className)}>
      {(children as React.ReactElement[]).map((child, index) => {
        const id = child.props['data-id'] ?? String(index);
        const isActive = activeId === id;

        return (
          <div
            key={id}
            data-id={id}
            className='relative cursor-pointer'
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(id)}
          >
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  layoutId='background'
                  className='absolute inset-0 rounded-2xl bg-white/5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                />
              )}
            </AnimatePresence>
            <div className='relative z-10'>{child}</div>
          </div>
        );
      })}
    </div>
  );
}
