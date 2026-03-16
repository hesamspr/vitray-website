import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

export function PulseHero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 520 }}
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#c2410c", "#9a3412", "#0f172a", "#ea580c"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={["#000000", "#ffffff", "#f97316", "#ea580c"]}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-[640px] text-center space-y-5"
        >
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70 w-fit">
            پالس (Pulse)
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
            تجربه‌ای جدید در مدیریت و اشتراک‌گذاری گزارش‌های Power BI
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            پورتالی متمرکز برای مدیریت و اشتراک‌گذاری گزارش‌های Power BI — با رابط کاملاً فارسی، تقویم شمسی، و کنترل دسترسی دقیق.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
