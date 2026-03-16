"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft } from "lucide-react";

const SERVICES = [
  {
    id: "۰۱",
    title: "اجرای اختصاصی",
    description:
      "پیاده‌سازی کامل هوش تجاری از یکپارچه‌سازی داده‌ها تا ساخت داشبوردهای تعاملی، با تمرکز بر اهداف واقعی کسب‌وکار شما.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: "۰۲",
    title: "پکیج شتاب‌دهی",
    description:
      "راهکاری سریع و مقرون‌به‌صرفه با داشبوردها و الگوهای از پیش ساخته‌شده — نتایج فوری و پایه‌ای قوی برای رشد آینده کسب‌وکار شما.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
  {
    id: "۰۳",
    title: "خدمات مدیریت‌شده",
    description:
      "نگهداری، بهینه‌سازی و به‌روزرسانی مستمر زیرساخت‌های BI شما تا تیمتان بتواند بر تصمیم‌گیری‌های استراتژیک تمرکز کند.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200",
  },
  {
    id: "۰۴",
    title: "آموزش سازمانی",
    description:
      "دوره‌های عملی برای تقویت فرهنگ داده‌محوری در تیم شما — از آموزش Power BI تا کارگاه‌های توسعه داشبورد.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <section className="w-full bg-background py-8 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Right Column: Content (RTL — appears on right) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-2 pt-4">
            <div className="space-y-1 mb-12">
              <h2 className="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-foreground">
                چطور می‌توانیم کمک کنیم
              </h2>
              <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] block">
                (خدمات)
              </span>
            </div>

            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-right transition-all duration-500 border-t border-border/50 first:border-0",
                      isActive ? "text-foreground" : "text-muted-foreground/60 hover:text-foreground"
                    )}
                  >
                    {/* Progress indicator — on the right for RTL */}
                    <div className="absolute right-[-16px] md:right-[-24px] top-0 bottom-0 w-[2px] bg-muted">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-foreground origin-top"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[9px] md:text-[10px] font-medium tabular-nums opacity-50 order-last">
                          /{service.id}
                        </span>
                        <span
                          className={cn(
                            "text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500",
                            isActive ? "text-foreground" : ""
                          )}
                        >
                          {service.title}
                        </span>
                      </div>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Left Column: Image (RTL — appears on left) */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-1">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-muted/30 border border-border/40">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 m-0! p-0! block"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90"
                    aria-label="قبلی"
                  >
                    <ArrowRight size={20} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90"
                    aria-label="بعدی"
                  >
                    <ArrowLeft size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
