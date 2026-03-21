import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { PlexHero } from '@/components/ui/plex-hero';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';
import {
  BarChart3,
  Bell,
  Briefcase,
  Cloud,
  GraduationCap,
  Code2,
  Database,
  FileSpreadsheet,
  Home,
  Info,
  Layers3,
  Lock,
  Mail,
  Package,
  Share2,
  ShieldCheck,
  Shuffle,
  Sliders,
  Users,
  Workflow,
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
    icon: Code2,
    glow: 'blue' as const,
    title: 'بدون کدنویسی',
    body: 'بدون نیاز به تیم توسعه یا دانش برنامه‌نویسی، اپلیکیشن‌های سازمانی حرفه‌ای بسازید.',
  },
  {
    icon: Database,
    glow: 'purple' as const,
    title: 'اتصال به هر منبع داده',
    body: 'از دیتابیس‌های خارجی و API گرفته تا CSV و دیتابیس داخلی — همه چیز با یک کلیک.',
  },
  {
    icon: Shuffle,
    glow: 'green' as const,
    title: 'طراحی Drag & Drop',
    body: 'ده‌ها کامپوننت آماده و قالب‌های حرفه‌ای برای طراحی رابط کاربری سریع و آسان.',
  },
  {
    icon: Zap,
    glow: 'orange' as const,
    title: 'خودکارسازی فرآیندها',
    body: 'فرآیندهای دستی و تکراری را حذف کنید و گردش‌کارهایی بسازید که کل سازمان را هوشمند می‌کنند.',
  },
];

const dataSources = [
  { icon: Database, label: 'پایگاه داده خارجی' },
  { icon: Cloud, label: 'API' },
  { icon: FileSpreadsheet, label: 'فایل CSV' },
  { icon: Layers3, label: 'دیتابیس داخلی Plex' },
];

const workflowFeatures = [
  { icon: Zap, label: 'Trigger خودکار' },
  { icon: Bell, label: 'ارسال اعلان' },
  { icon: ShieldCheck, label: 'اعتبارسنجی شرایط' },
  { icon: Workflow, label: 'گردش‌کار تأیید' },
];

const accessLevels = [
  { icon: Sliders, label: 'کنترل سطح سامانه' },
  { icon: Lock, label: 'کنترل سطح جدول' },
  { icon: ShieldCheck, label: 'کنترل سطح ردیف' },
  { icon: Database, label: 'کنترل سطح فیلد' },
];

const portals = [
  {
    id: 'financial',
    title: 'پورتال مالی',
    features: [
      'مدیریت فاکتور و پرداخت',
      'گزارش‌گیری مالی',
      'تأیید هزینه‌ها',
      'پیگیری بودجه',
    ],
  },
  {
    id: 'personnel',
    title: 'پورتال پرسنلی',
    features: [
      'مدیریت کارمندان',
      'درخواست مرخصی',
      'ارزیابی عملکرد',
      'مدیریت حقوق',
    ],
  },
  {
    id: 'legal',
    title: 'پورتال حقوقی',
    features: [
      'مدیریت قراردادها',
      'پیگیری پرونده‌ها',
      'تقویم جلسات حقوقی',
      'آرشیو اسناد',
    ],
  },
  {
    id: 'customers',
    title: 'پورتال مشتریان',
    features: [
      'مدیریت پروفایل مشتری',
      'پیگیری سفارش‌ها',
      'سیستم تیکتینگ',
      'گزارش رضایت‌سنجی',
    ],
  },
];

export function PlexPage() {
  usePageTitle('پلکس');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      <PlexHero />

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

      <div className="h-24" />

      {/* Convert data to app highlight */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(200,100%,15%)", "hsl(210,100%,55%)", "hsl(190,90%,40%)", "hsl(220,100%,65%)"]}
            shape="dots"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  ساخت سریع
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  تبدیل داده‌ها به اپلیکیشن؛ فقط با یک کلیک
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  در چند ثانیه اپلیکیشن‌ها، فرم‌ها و گردش‌کارهای قدرتمند بسازید — بدون حتی یک خط
                  کدنویسی. Plex برای تیم‌هایی ساخته شده که می‌خواهند سریع‌تر بسازند، کمتر هزینه
                  کنند، و راهکارهای دیجیتال حرفه‌ای ارائه دهند.
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-[220px]">
                {[
                  { icon: Code2, label: 'بدون کد' },
                  { icon: Zap, label: 'سریع' },
                  { icon: Shuffle, label: 'سفارشی' },
                  { icon: ShieldCheck, label: 'امن' },
                ].map(({ icon: Icon, label }) => (
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

      <div className="h-10" />

      {/* Access control + Workflow — side by side */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Access control */}
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
                  امنیت
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">سطوح دسترسی</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  کنترل دسترسی، ستون اصلی هر سیستم سازمانی است. Plex با ارائه‌ی سیستم سطح‌به‌سطح و
                  دقیقِ مدیریت دسترسی — از سطح کل سامانه تا جزئی‌ترین فیلد — امنیت و کنترل کامل
                  داده‌ها را در تمام سناریوها تضمین می‌کند.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {accessLevels.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Icon size={13} className="text-white/70 shrink-0" />
                      <span className="text-xs text-white/50">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WarpCard>
          </motion.div>

          {/* Workflow */}
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
                  <Workflow size={18} className="text-white/80" />
                </div>
                <div className="border border-white/20 py-1 px-3 rounded-lg text-xs text-white/50 w-fit mb-3">
                  اتوماسیون
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">گردش کار</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Workflow قلب اتوماسیون فرآیندهای کسب‌وکار است. با ترکیب Triggerها و Actionها، Plex
                  امکان اجرای خودکار و هوشمند انواع فرآیندها را فراهم می‌کند — از به‌روزرسانی
                  داده‌ها و ارسال اعلان‌ها گرفته تا اعتبارسنجی شرایط و گردش‌کارهای تأیید.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {workflowFeatures.map(({ icon: Icon, label }) => (
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

      <div className="h-16" />

      {/* Data sources */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(140,100%,15%)", "hsl(150,100%,45%)", "hsl(120,90%,30%)", "hsl(160,100%,60%)"]}
            shape="checks"
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              <div className="space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  اتصال داده
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  به هر منبع داده وصل شوید؛ یا دیتابیس خودتان را بسازید
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  به پایگاه داده خارجی متصل شوید، داده‌ها را از API دریافت کنید، فایل‌های CSV را
                  وارد کنید، یا با دیتابیس داخلی Plex از ابتدا شروع کنید.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {dataSources.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                  >
                    <Icon size={22} className="text-white/80" />
                    <span className="text-sm font-medium text-white/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </WarpCard>
        </motion.div>
      </div>

      <div className="h-16" />

      {/* Portal examples */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
                نمونه‌های واقعی
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                چند نمونه از راهکارهای توسعه داده شده توسط تیم ویترای:
              </h2>
            </div>

            <AnimatedBackground
              enableHover
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {portals.map((portal) => (
                <div
                  key={portal.id}
                  data-id={portal.id}
                  className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      {portal.id === 'financial' && <Briefcase size={16} className="text-muted-foreground" />}
                      {portal.id === 'personnel' && <Users size={16} className="text-muted-foreground" />}
                      {portal.id === 'legal' && <ShieldCheck size={16} className="text-muted-foreground" />}
                      {portal.id === 'customers' && <BarChart3 size={16} className="text-muted-foreground" />}
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {portal.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {portal.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-border" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedBackground>

          </div>
        </motion.div>
      </div>

      {/* Closing lamp section */}
      <LampContainer className="min-h-[44rem] mb-[-14rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            و این شروع ماجراست ...
          </h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            مشاهده دمو
          </a>
          <p className="text-xs text-white/40" dir="ltr">
            user: <span className="text-white/60">user</span>
            {' '}|{' '}
            pass: <span className="text-white/60">user</span>
          </p>
        </motion.div>
      </LampContainer>

      <div className="h-16" />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
