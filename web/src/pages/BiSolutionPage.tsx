import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { WarpCard } from '@/components/ui/warp-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { LampContainer } from '@/components/ui/lamp';
import { DashboardTemplatesSection } from '@/components/ui/feature-section-with-card-gradient';
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from 'motion/react';
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Home,
  Info,
  Layers3,
  LayoutDashboard,
  Lock,
  Mail,
  Package,
  RefreshCw,
  Search,
  Server,
  Share2,
  Users,
  Workflow,
} from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
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

const phases = [
  {
    id: '۰۱',
    title: 'شناسایی نیاز و تعریف اهداف',
    description:
      'با تیم شما جلسات کشف نیاز برگزار می‌کنیم تا الزامات کسب‌وکار را به‌درستی درک کنیم. شاخص‌های کلیدی عملکرد (KPI) و سوالات اصلی تصمیم‌گیری را شناسایی و مستند می‌سازیم.',
    icon: Search,
  },
  {
    id: '۰۲',
    title: 'جمع‌آوری و یکپارچه‌سازی داده',
    description:
      'داده‌ها را از منابع مختلف — سیستم‌های ERP، پایگاه‌های داده، فایل‌های اکسل و APIهای خارجی — گردآوری می‌کنیم. پاک‌سازی و اعتبارسنجی داده برای اطمینان از کیفیت انجام می‌شود.',
    icon: Database,
  },
  {
    id: '۰۳',
    title: 'مدل‌سازی داده',
    description:
      'ساختارها و مدل‌های داده‌ای طراحی می‌کنیم که تحلیل دقیق‌تر و سریع‌تر را ممکن می‌سازند. مدل‌سازی ستاره‌ای و اسنوفلیک برای بهینه‌سازی پرس‌وجوها به‌کار می‌رود.',
    icon: Workflow,
  },
  {
    id: '۰۴',
    title: 'تحلیل و ساخت داشبورد',
    description:
      'داده‌های یکپارچه را به داشبوردها و گزارش‌های تعاملی تبدیل می‌کنیم. تجسم‌های بصری طراحی‌شده برای هر سطح سازمانی، از مدیران ارشد تا تحلیل‌گران عملیاتی.',
    icon: LayoutDashboard,
  },
  {
    id: '۰۵',
    title: 'پشتیبانی و بهبود مستمر',
    description:
      'پس از راه‌اندازی کنارتان می‌مانیم. نیازهای جدید را تحلیل می‌کنیم، داده‌های اضافی یکپارچه می‌سازیم و کارایی سیستم را در طول زمان حفظ می‌کنیم.',
    icon: RefreshCw,
  },
];

const pillars = [
  {
    id: 'integration',
    title: 'یکپارچه‌سازی داده',
    description:
      'اتصال به منابع داده‌ای متنوع و مدیریت یکپارچه داده‌های ساختاریافته و غیرساختاریافته در یک پلتفرم واحد.',
    icon: Database,
  },
  {
    id: 'analytics',
    title: 'تحلیل پیشرفته',
    description:
      'تبدیل داده‌های خام به بینش‌های عملی از طریق مدل‌سازی، پیش‌بینی و گزارش‌دهی بلادرنگ.',
    icon: BarChart3,
  },
  {
    id: 'infra',
    title: 'زیرساخت مقیاس‌پذیر',
    description:
      'راهکارهایی که با رشد کسب‌وکار شما بزرگ می‌شوند و در عین حال امنیت داده و انطباق با مقررات را تضمین می‌کنند.',
    icon: Lock,
  },
  {
    id: 'ux',
    title: 'طراحی کاربرمحور',
    description:
      'داشبوردهای شهودی که نیازی به دانش فنی عمیق ندارند. تصمیم‌گیری بهتر برای همه افراد سازمان.',
    icon: Users,
  },
  {
    id: 'improvement',
    title: 'بهبود مستمر',
    description:
      'بهینه‌سازی مداوم راهکار متناسب با تغییر نیازهای کسب‌وکار، همراه با پشتیبانی فنی تخصصی.',
    icon: RefreshCw,
  },
  {
    id: 'reporting',
    title: 'گزارش‌دهی چندسطحی',
    description:
      'ارائه نمای کامل از عملکرد سازمان در سطوح استراتژیک، تاکتیکی و عملیاتی در یک پلتفرم یکپارچه.',
    icon: Layers3,
  },
];


const dataSources = [
  {
    id: 1,
    title: 'ERP',
    date: 'SAP / Dynamics',
    content: 'اتصال مستقیم به سیستم‌های ERP نظیر SAP، Microsoft Dynamics و سیستم‌های بومی برای استخراج داده‌های مالی، تولید و زنجیره تأمین.',
    category: 'Enterprise',
    icon: Building2,
    relatedIds: [2, 6, 7],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'CRM',
    date: 'Salesforce / HubSpot',
    content: 'یکپارچه‌سازی با پلتفرم‌های مدیریت ارتباط با مشتری برای تحلیل فروش، رفتار مشتری و پیش‌بینی درآمد.',
    category: 'Sales',
    icon: Users,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 95,
  },
  {
    id: 3,
    title: 'Plex',
    date: 'Vitray Plex',
    content: 'اتصال بومی به پلتفرم پلکس ویترای برای یکپارچه‌سازی داده‌های تولید، کنترل کیفیت و عملیات کارخانه.',
    category: 'Manufacturing',
    icon: Layers3,
    relatedIds: [1, 2, 6],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 4,
    title: 'Excel',
    date: 'Microsoft Excel',
    content: 'وارد کردن و به‌روزرسانی خودکار فایل‌های Excel و گزارش‌های دستی بدون نیاز به وارد کردن مجدد داده.',
    category: 'Files',
    icon: FileSpreadsheet,
    relatedIds: [5],
    status: 'completed' as const,
    energy: 90,
  },
  {
    id: 5,
    title: 'CSV',
    date: 'Flat Files',
    content: 'پشتیبانی از فایل‌های CSV، TSV و دیگر فرمت‌های متنی ساختاریافته برای ورودی داده‌های دوره‌ای یا یک‌باره.',
    category: 'Files',
    icon: FileText,
    relatedIds: [4],
    status: 'completed' as const,
    energy: 85,
  },
  {
    id: 6,
    title: 'SQL DB',
    date: 'SQL Server / MySQL',
    content: 'اتصال به پایگاه‌های داده رابطه‌ای نظیر SQL Server، MySQL، PostgreSQL و MariaDB از طریق کانکتورهای بهینه.',
    category: 'Database',
    icon: Database,
    relatedIds: [1, 3, 7],
    status: 'completed' as const,
    energy: 98,
  },
  {
    id: 7,
    title: 'Oracle DB',
    date: 'Oracle Database',
    content: 'یکپارچه‌سازی با پایگاه داده Oracle برای سازمان‌های بزرگ با حجم داده بالا و الزامات امنیتی سطح سازمانی.',
    category: 'Database',
    icon: Server,
    relatedIds: [1, 6],
    status: 'completed' as const,
    energy: 95,
  },
];

const deliverables = [
  'داشبورد مدیریت ارشد (C-Level)',
  'گزارش‌های عملیاتی روزانه',
  'تحلیل روند و پیش‌بینی',
  'مدل داده یکپارچه',
  'مستندات فنی کامل',
  'آموزش تیم داخلی',
  'پشتیبانی پس از راه‌اندازی',
  'بهینه‌سازی دوره‌ای',
];

export function BiSolutionPage() {
  usePageTitle('راهکار هوش تجاری');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 520 }}>
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#000000", "#3730a3", "#1e1b4b", "#0f172a", "#4338ca"]}
          speed={0.3}
          backgroundColor="#000000"
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-40"
          colors={["#000000", "#ffffff", "#3730a3", "#6366f1"]}
          speed={0.2}
          wireframe="true"
          backgroundColor="transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-[640px] text-center space-y-5"
          >
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70 w-fit">
              <BarChart3 size={13} />
              راهکار هوش تجاری
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              هوش تجاری،
              <br />
              قدم به قدم با شما
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              از شناسایی نیاز تا داشبوردهای عملیاتی، تیم ویترای در تمام مراحل پیاده‌سازی BI
              کنارتان می‌ماند تا داده‌هایتان به بینش‌های واقعی تبدیل شوند.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="h-12" />

      {/* Data Sources */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-4"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            منابع داده
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            اتصال به هر منبع داده‌ای
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            راهکار BI ما به تمام سیستم‌ها و منابع داده سازمان شما متصل می‌شود تا تصویری یکپارچه از کسب‌وکارتان داشته باشید.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/60 bg-black overflow-hidden"
        >
          <RadialOrbitalTimeline timelineData={dataSources} />
        </motion.div>
      </div>

      <div className="h-12" />

      {/* Process */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            فرآیند اجرا
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            پنج گام تا هوشمندی سازمانی
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            رویکرد ساختارمند ما تضمین می‌کند که هر مرحله از پروژه با کیفیت و شفافیت کامل انجام شود.
          </p>
        </motion.div>

        <AnimatedBackground
          enableHover
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 [&>div]:h-full [&>div>div]:h-full"
        >
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.id}
                data-id={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{phase.id}</span>
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
              </motion.div>
            );
          })}
        </AnimatedBackground>
      </div>

      <div className="h-12" />

      {/* Pillars */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            اصول راهکار
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            ستون‌های راهکار هوش تجاری ما
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            هر پروژه BI بر شش اصل پایه‌ای استوار است که با هم یک راهکار جامع و پایدار می‌سازند.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <AnimatedBackground
            enableHover
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 [&>div]:h-full [&>div>div]:h-full"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  data-id={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-4">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </AnimatedBackground>
        </motion.div>
      </div>

      <div className="h-12" />

      {/* Deliverables */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <WarpCard
            colors={["hsl(250,100%,15%)", "hsl(260,100%,55%)", "hsl(280,90%,40%)", "hsl(240,100%,65%)"]}
            shape="checks"
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              <div className="space-y-4">
                <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-white/60 w-fit">
                  خروجی‌های پروژه
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                  چه چیزی تحویل می‌گیرید؟
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  در پایان هر پروژه، مجموعه‌ای کامل از مستندات، داشبوردها و دانش فنی به تیم شما
                  تحویل داده می‌شود تا بتوانند به‌صورت مستقل از سیستم استفاده کنند.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={15} className="text-white/60 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </WarpCard>
        </motion.div>
      </div>

      <div className="h-12" />

      {/* Dashboard Templates */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            نمونه داشبورد ها
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            داشبوردهای آماده برای هر صنعت
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            قالب‌های داشبورد اختصاصی برای صنایع مختلف که قابل سفارشی‌سازی کامل بر اساس نیاز کسب‌وکار شما هستند.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <DashboardTemplatesSection />
        </motion.div>
      </div>

      {/* Closing lamp section */}
      <LampContainer color="purple" className="min-h-[44rem] mb-[-14rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            هوش تجاری، سرمایه‌گذاری با بازده واقعی
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            درخواست مشاوره رایگان
          </a>
        </motion.div>
      </LampContainer>

      <div className="h-8" />

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
