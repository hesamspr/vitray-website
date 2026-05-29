'use client'

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";

interface Logo {
  name: string;
  id: number;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  paused: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

// Each column manages its own cycling — avoids a parent tick re-rendering all children
const LogoColumn: React.FC<LogoColumnProps> = React.memo(({ logos, index, paused }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (paused) return;
    // Stagger column start times so columns don't all swap on the same frame
    const delay = index * 200;
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentIndex((i) => (i + 1) % logos.length);
      }, 2000);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [logos.length, index, paused]);

  const current = logos[currentIndex];

  return (
    <m.div
      className="relative h-20 w-36 overflow-hidden md:h-32 md:w-64"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <m.div
          key={`${current.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: { type: "tween", ease: "easeOut", duration: 0.4 },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { type: "tween", ease: "easeIn", duration: 0.25 },
          }}
        >
          <Image
            src={current.src}
            alt={current.name}
            width={192}
            height={192}
            sizes="(max-width: 768px) 112px, 192px"
            className="max-h-[80%] max-w-[80%] object-contain invert grayscale"
          />
        </m.div>
      </AnimatePresence>
    </m.div>
  );
});

LogoColumn.displayName = "LogoColumn";

interface LogoCarouselProps {
  columnCount?: number;
  mobileColumnCount?: number;
  logos: Logo[];
}

export function LogoCarousel({ columnCount = 2, mobileColumnCount = 3, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeColumnCount = isMobile ? mobileColumnCount : columnCount;

  useEffect(() => {
    setLogoSets(distributeLogos(logos, activeColumnCount));
  }, [logos, activeColumnCount]);

  // Pause cycling when the carousel scrolls off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex gap-4">
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} paused={paused} />
      ))}
    </div>
  );
}
