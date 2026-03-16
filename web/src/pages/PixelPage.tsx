import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PixelHero } from '@/components/ui/pixel-hero';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { GradientButton } from '@/components/ui/gradient-button';
import { motion } from 'motion/react';
import {
  BarChart3,
  Bell,
  CheckCircle2,
  Cloud,
  GraduationCap,
  Database,
  Globe,
  Home,
  Info,
  Layers3,
  Lock,
  Mail,
  Package,
  RefreshCw,
  Server,
  Share2,
  ShieldCheck,
  Sliders,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'خانه', url: '/', icon: Home },
  {
    name: 'راهکارها',
    url: '/#products',
    icon: Package,
    subItems: [
      { name: 'هوش تجاری', url: '/bi-solution', icon: BarChart3 },
      { name: 'پیکسل', url: '/pixel', icon: Cloud },
      { name: 'پالس', url: '/pulse', icon: Share2 },
      { name: 'پلکس', url: '/plex', icon: Layers3 },
      { name: 'آکادمی', url: 'https://academy.vitrayco.com', icon: GraduationCap },
    ],
  },
  { name: 'درباره ما', url: '/about', icon: Info },
  { name: 'تماس با ما', url: '/contact', icon: Mail },
];

const capabilities = [
  {
    icon: Server,
    title: 'بی‌نیاز از زیرساخت',
    body: 'هیچ سرور، راه‌اندازی یا نگهداری لازم نیست. همه‌چیز در فضای ابری امن پیکسل اجرا می‌شود.',
  },
  {
    icon: Zap,
    title: 'راه‌اندازی چند ساعتی',
    body: 'تنها چند ساعت پس از عقد قرارداد، داشبوردهای مدیریتی در اختیار شما خواهند بود.',
  },
  {
    icon: TrendingUp,
    title: 'پرداخت ماهانه',
    body: 'بدون هزینه‌های سنگین پیاده‌سازی — تنها یک اشتراک ماهانه شفاف و قابل پیش‌بینی.',
  },
  {
    icon: ShieldCheck,
    title: 'امنیت و پایداری',
    body: 'تمام داده‌ها رمزگذاری‌شده ذخیره و منتقل می‌شوند، با استانداردهای امنیتی حرفه‌ای.',
  },
];

const keyBenefits = [
  { icon: Globe, label: 'دسترسی از هر مکان' },
  { icon: RefreshCw, label: 'به‌روزرسانی خودکار' },
  { icon: Users, label: 'چند کاربره' },
  { icon: BarChart3, label: 'گزارش‌های آماده' },
];

const dataSources = [
  { icon: Database, label: 'پایگاه داده' },
  { icon: Cloud, label: 'فضای ابری' },
  { icon: Sliders, label: 'فایل Excel' },
  { icon: Globe, label: 'API خارجی' },
];

const dashboardFeatures = [
  { icon: BarChart3, label: 'نمودار خطی' },
  { icon: TrendingUp, label: 'نمودار میله‌ای' },
  { icon: Users, label: 'جدول تعاملی' },
  { icon: Bell, label: 'هشدار خودکار' },
];

const comparisonRows = [
  { label: 'زمان راه‌اندازی', traditional: 'چند ماه', pixel: 'چند ساعت' },
  { label: 'نیاز به سرور', traditional: 'بله', pixel: 'خیر' },
  { label: 'هزینه اولیه', traditional: 'بسیار بالا', pixel: 'بدون هزینه' },
  { label: 'پرداخت', traditional: 'یکجا', pixel: 'ماهانه' },
  { label: 'نگهداری IT', traditional: 'نیاز دارد', pixel: 'ندارد' },
  { label: 'مقیاس‌پذیری', traditional: 'سخت', pixel: 'آسان' },
];

const dashboards = [
  {
    id: 'sales',
    title: 'داشبورد فروش',
    icon: TrendingUp,
    features: [
      'تحلیل روند فروش',
      'مقایسه دوره‌ای',
      'پیش‌بینی درآمد',
      'عملکرد تیم فروش',
    ],
  },
  {
    id: 'finance',
    title: 'داشبورد مالی',
    icon: BarChart3,
    features: [
      'گزارش سود و زیان',
      'جریان نقدینگی',
      'بودجه در مقابل واقعی',
      'تحلیل هزینه',
    ],
  },
  {
    id: 'hr',
    title: 'داشبورد منابع انسانی',
    icon: Users,
    features: [
      'شاخص‌های پرسنلی',
      'نرخ ترک خدمت',
      'ارزیابی عملکرد',
      'حضور و غیاب',
    ],
  },
  {
    id: 'operations',
    title: 'داشبورد عملیات',
    icon: Sliders,
    features: [
      'پایش فرآیندها',
      'شاخص‌های کیفی',
      'زمان‌بندی پروژه‌ها',
      'ظرفیت و بهره‌وری',
    ],
  },
];

export function PixelPage() {
  usePageTitle('پیکسل');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      <PixelHero />

      <div id="features" className="h-4" />

      {/* Core capabilities */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-2xl border border-border/60 overflow-hidden">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isLastRow = index >= capabilities.length - (capabilities.length % 4 || 4);
            return (
              <div
                key={cap.title}
                className={cn(
                  "flex flex-col py-10 relative group/feature border-border/60",
                  "lg:border-r",
                  (index === 0) && "lg:border-l",
                  !isLastRow && "lg:border-b",
                  index < 2 && "sm:border-b lg:border-b-0",
                  index % 2 === 0 && index < capabilities.length - 1 && "sm:border-r lg:border-r-0",
                )}
              >
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/60 to-transparent pointer-events-none" />
                <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                  <Icon size={22} />
                </div>
                <div className="text-base font-bold mb-2 relative z-10 px-10">
                  <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-foreground">
                    {cap.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
                  {cap.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-12" />

      {/* Why Pixel — main WarpCard */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(190,100%,15%)", "hsl(195,100%,45%)", "hsl(185,90%,30%)", "hsl(200,100%,60%)"]}
            shape="dots"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  مزایای کلیدی
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  چرا پیکسل برای کسب‌وکار شما؟
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  پیکسل به کسب‌وکارهای کوچک و متوسط امکان می‌دهد بدون هیچ سرمایه‌گذاری زیرساختی،
                  از قدرت هوش تجاری بهره‌مند شوند. فقط داده‌هایتان را وصل کنید و از بینش‌های
                  آماده لذت ببرید.
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {keyBenefits.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <Icon size={18} className="text-white/80" />
                    <span className="text-xs text-white/50">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </WarpCard>
        </motion.div>
      </div>

      <div className="h-4" />

      {/* Data sources + Interactive dashboards — side by side */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Data sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <WarpCard
              colors={["hsl(270,100%,15%)", "hsl(280,100%,55%)", "hsl(300,90%,40%)", "hsl(260,100%,65%)"]}
              shape="checks"
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <Lock size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  منابع داده
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">اتصال به منابع داده</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  پیکسل به سادگی به منابع داده‌ای مختلف وصل می‌شود — از سیستم‌های ERP و فایل‌های
                  Excel گرفته تا APIها و پایگاه‌های داده. بدون پیچیدگی فنی، داده‌هایتان را یکجا ببینید.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {dataSources.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Icon size={13} className="text-white/70 shrink-0" />
                      <span className="text-xs text-white/50">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WarpCard>
          </motion.div>

          {/* Interactive dashboards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <WarpCard
              colors={["hsl(25,100%,20%)", "hsl(35,100%,55%)", "hsl(15,90%,40%)", "hsl(45,100%,65%)"]}
              shape="dots"
              className="h-full"
            >
              <div className="flex flex-col p-7 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 mb-4">
                  <BarChart3 size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  تجسم داده
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">داشبوردهای تعاملی</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  داشبوردهای پیکسل تعاملی، بصری و قابل سفارشی‌سازی هستند. فیلتر کنید، حفاری کنید
                  و بینش‌های واقعی را از داده‌هایتان استخراج کنید — بدون نیاز به دانش فنی.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {dashboardFeatures.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Icon size={13} className="text-white/70 shrink-0" />
                      <span className="text-xs text-white/50">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WarpCard>
          </motion.div>
        </div>
      </div>

      <div className="h-8" />

      {/* Comparison section */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              مقایسه
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
              مقایسه پیکسل با روش‌های سنتی
            </h2>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-4 border-b border-border/60 text-muted-foreground" />
              <div className="p-4 border-b border-r border-border/60 text-center text-muted-foreground">
                روش سنتی
              </div>
              <div className="p-4 border-b border-border/60 text-center bg-primary/5 text-foreground">
                پیکسل
              </div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-3 text-sm",
                  index % 2 === 1 && "bg-muted/20",
                  index < comparisonRows.length - 1 && "border-b border-border/60",
                )}
              >
                <div className="p-4 font-medium text-foreground/80">{row.label}</div>
                <div className="p-4 border-r border-border/60 text-center text-muted-foreground">
                  <span className="text-destructive/70">✗</span>{' '}{row.traditional}
                </div>
                <div className="p-4 text-center bg-primary/5">
                  <span className="inline-flex items-center justify-center gap-1.5 text-foreground/80">
                    <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                    {row.pixel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-8" />

      {/* Dashboard examples */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
                نمونه‌های واقعی
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                چند نمونه از داشبوردهای توسعه داده شده توسط تیم ویترای:
              </h2>
            </div>

            <AnimatedBackground
              enableHover
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {dashboards.map((dashboard) => {
                const Icon = dashboard.icon;
                return (
                  <div
                    key={dashboard.id}
                    data-id={dashboard.id}
                    className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                        <Icon size={16} className="text-muted-foreground" />
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {dashboard.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {dashboard.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-border" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </AnimatedBackground>

            {/* Closing card */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 flex flex-col items-center gap-4 text-center">
              <p className="text-lg font-bold tracking-tight text-foreground">
                ... و هر KPI که برای کسب‌وکار شما اهمیت دارد
              </p>
              <GradientButton asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  مشاهده دمو
                </a>
              </GradientButton>
              <p className="text-xs text-muted-foreground" dir="ltr">
                user: <span className="font-medium text-foreground/70">user</span>
                {' '}|{' '}
                pass: <span className="font-medium text-foreground/70">user</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h-8" />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
