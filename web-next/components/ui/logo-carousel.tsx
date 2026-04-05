'use client'

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Logo {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
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

// Each column manages its own cycling — avoids a 100ms parent tick re-rendering all children
const LogoColumn: React.FC<LogoColumnProps> = React.memo(({ logos, index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Stagger column start times to match original columnDelay behaviour
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
  }, [logos.length, index]);

  const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex]);

  return (
    <motion.div
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
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          <CurrentLogo className="h-28 w-28 max-h-[80%] max-w-[80%] object-contain md:h-48 md:w-48 invert grayscale" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

interface LogoCarouselProps {
  columnCount?: number;
  mobileColumnCount?: number;
  logos: Logo[];
}

export function LogoCarousel({ columnCount = 2, mobileColumnCount = 3, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="flex gap-4">
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} />
      ))}
    </div>
  );
}
