import Image from 'next/image'
import { SiteNav } from '@/components/ui/site-nav'
import { Footer } from '@/components/ui/footer-section'
import { CallToAction } from '@/components/ui/cta-3'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Reveal } from '@/components/ui/reveal'
import { BiConsultationButton } from '@/components/ui/bi-consultation-button'
import { Grid } from '@/components/ui/feature-section-with-card-gradient'
import Link from 'next/link'
import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Database,
  DollarSign,
  GraduationCap,
  Heart,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Package,
  Rocket,
  Search,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'هوش تجاری چیست؟ + ۸ نمونه داشبورد مدیریتی',
  description:
    'هوش تجاری (BI) فرآیندی مبتنی بر فناوری برای تحلیل داده و ارائه بینش‌های عملی است. تعریف، مراحل پیاده‌سازی، مزایا و ۸ نمونه داشبورد مدیریتی اجرا‌شده توسط تیم ویترای.',
  inLanguage: 'fa',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
  image: {
    '@type': 'ImageObject',
    url: 'https://vitrayco.com/opengraph-image.png',
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://vitrayco.com/business-intelligence',
  },
  author: {
    '@type': 'Organization',
    name: 'ویترای',
    url: 'https://vitrayco.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ویترای',
    alternateName: 'Vitray',
    url: 'https://vitrayco.com',
    logo: { '@type': 'ImageObject', url: 'https://vitrayco.com/Vitray.png' },
  },
  url: 'https://vitrayco.com/business-intelligence',
  about: { '@type': 'Thing', name: 'Business Intelligence' },
  keywords: 'هوش تجاری، Business Intelligence، BI، Power BI، داشبورد مدیریتی، SSAS، ETL',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
    { '@type': 'ListItem', position: 2, name: 'هوش تجاری چیست؟', item: 'https://vitrayco.com/business-intelligence' },
  ],
}

function AparatEmbed({ hash, title }: { hash: string; title: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border/60"
      style={{ paddingTop: '57%' }}
    >
      <iframe
        src={`https://www.aparat.com/video/video/embed/videohash/${hash}/vt/frame`}
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        title={title}
      />
    </div>
  )
}

function VideoPlayer({ src, title }: { src: string; title: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border/60 bg-black">
      <video controls preload="metadata" className="w-full" controlsList="nodownload">
        <source src={src} type="video/mp4" />
      </video>
      <p className="text-sm text-muted-foreground px-4 py-3">{title}</p>
    </div>
  )
}

const processSteps = [
  {
    id: '۰۱',
    title: 'آماده‌سازی داده‌ها',
    description:
      'مجموعه داده‌ها از منابع مختلف (ERP، CRM، فایل‌های Excel و پایگاه‌های داده) جمع‌آوری، ادغام و برای تجزیه و تحلیل مدل‌سازی می‌شوند تا یکپارچگی اطلاعات تضمین شود.',
    icon: Database,
  },
  {
    id: '۰۲',
    title: 'پرس‌وجو و تحلیل',
    description:
      'درخواست‌های تحلیلی روی داده‌های آماده‌شده اجرا می‌شوند تا الگوها، روندها و بینش‌های کلیدی کسب‌وکار استخراج و قابل بهره‌برداری شوند.',
    icon: BarChart3,
  },
  {
    id: '۰۳',
    title: 'توزیع شاخص‌های کلیدی',
    description:
      'KPIها و یافته‌های تحلیلی از طریق داشبوردهای تعاملی و گزارش‌های خودکار در اختیار مدیران و کاربران تجاری قرار می‌گیرند.',
    icon: Workflow,
  },
  {
    id: '۰۴',
    title: 'تأثیر بر تصمیمات تجاری',
    description:
      'بینش‌های استخراج‌شده برای پیش‌برد تصمیمات استراتژیک و عملیاتی به کار گرفته می‌شوند و به افزایش درآمد، بهره‌وری و مزیت رقابتی منجر می‌شوند.',
    icon: LayoutDashboard,
  },
]

const benefits = [
  { icon: Rocket, text: 'تسریع و بهبود تصمیم‌گیری' },
  { icon: Workflow, text: 'بهینه‌سازی فرآیندهای تجاری داخلی' },
  { icon: TrendingUp, text: 'افزایش سودمندی عملیاتی و بهره‌وری' },
  { icon: Zap, text: 'برطرف کردن مشکلات تجاری لحظه‌ای' },
  { icon: Lightbulb, text: 'شناسایی روندهای نوظهور تجارت و بازار' },
  { icon: Target, text: 'توسعه قوی‌تر استراتژی‌های تجاری' },
  { icon: DollarSign, text: 'فروش بالاتر و کسب درآمد جدید' },
  { icon: Search, text: 'ایجاد برتری نسبت به شرکت‌های رقیب' },
]

const industries = [
  {
    title: 'خدمات مالی و بیمه',
    description:
      'تجزیه و تحلیل ریسک در مراحل وام و تصویب سیاست، شناسایی فرصت‌های فروش متقاطع محصولات به مشتریان موجود بر اساس پرتفوی فعلی.',
    icon: DollarSign,
  },
  {
    title: 'خرده‌فروشی',
    description:
      'مدیریت بازاریابی، برنامه‌ریزی تبلیغات و کنترل موجودی کالا برای بهینه‌سازی زنجیره فروش و افزایش سودآوری.',
    icon: Package,
  },
  {
    title: 'تولید و صنعت',
    description:
      'تجزیه و تحلیل تاریخچه و عملیات کارخانه به‌صورت real-time، مدیریت برنامه‌ریزی تولید، تأمین مواد و توزیع محصولات.',
    icon: Layers,
  },
  {
    title: 'هواپیمایی و هتلداری',
    description:
      'ردیابی ظرفیت پرواز و تعداد اتاق‌های رزرو شده، تنظیم قیمت‌گذاری پویا و برنامه‌ریزی بهینه منابع انسانی.',
    icon: TrendingUp,
  },
  {
    title: 'بهداشت و درمان',
    description:
      'کمک به تشخیص بیماری‌ها و شرایط پزشکی، بهبود مراقبت از بیماران و بهینه‌سازی نتایج درمانی از طریق تحلیل داده.',
    icon: Heart,
  },
  {
    title: 'آموزش و پرورش',
    description:
      'نظارت بر معیارهای عملکردی دانش‌آموزان و دانشجویان، شناسایی افرادی که ممکن است به حمایت و توجه ویژه نیاز داشته باشند.',
    icon: GraduationCap,
  },
]

const dashboards = [
  {
    title: 'داشبورد فروش B2B',
    description: 'تحلیل فروش، پایپ‌لاین مشتریان و عملکرد تیم فروش',
    href: '/bi-dashboards/b2b-sales',
    pattern: [[8, 1], [9, 3], [11, 2], [10, 4], [8, 5]],
  },
  {
    title: 'داشبورد پخش و توزیع',
    description: 'مدیریت زنجیره توزیع، عملکرد رانندگان و تحلیل مسیرها',
    href: '/bi-dashboards/distribution-sales',
    pattern: [[7, 2], [10, 1], [8, 4], [9, 5], [11, 3]],
  },
  {
    title: 'داشبورد مالی',
    description: 'گزارش‌های مالی، سود و زیان، جریان نقدی و تحلیل بودجه',
    href: '/bi-dashboards/finance',
    pattern: [[9, 1], [8, 3], [11, 5], [10, 2], [7, 4]],
  },
  {
    title: 'داشبورد RFM Segmentation',
    description: 'خوشه‌بندی مشتریان بر اساس Recency، Frequency و Monetary Value',
    href: '/bi-solution',
    pattern: [[10, 2], [7, 1], [9, 4], [11, 3], [8, 5]],
  },
  {
    title: 'داشبورد نرخ بازگشت مشتریان',
    description: 'تحلیل Cohort، نرخ ریزش و بازگشت مشتریان در طول زمان',
    href: '/bi-solution',
    pattern: [[8, 2], [11, 1], [7, 3], [10, 5], [9, 4]],
  },
  {
    title: 'داشبورد تحلیل سبد خرید',
    description: 'Market Basket Analysis برای شناسایی الگوهای خرید مشتریان',
    href: '/bi-solution',
    pattern: [[9, 2], [8, 4], [11, 1], [7, 5], [10, 3]],
  },
  {
    title: 'داشبورد تولید',
    description: 'نظارت بر خطوط تولید، OEE، ضایعات و کارایی ماشین‌آلات',
    href: '/bi-dashboards/production',
    pattern: [[10, 1], [8, 3], [11, 4], [7, 2], [9, 5]],
  },
  {
    title: 'داشبورد منابع انسانی',
    description: 'مدیریت نیروی کار، حقوق، غیبت‌ها و شاخص‌های عملکرد کارکنان',
    href: '/bi-dashboards/hr',
    pattern: [[8, 1], [11, 2], [9, 3], [7, 5], [10, 4]],
  },
]

const faqs = [
  {
    q: 'هوش تجاری (BI) چیست؟',
    a: 'هوش تجاری (Business Intelligence) مجموعه‌ای از فرآیندها، فناوری‌ها و ابزارهایی است که داده‌های خام سازمان را به اطلاعات معنادار و بینش‌های عملی تبدیل می‌کند تا مدیران بتوانند تصمیم‌های بهتری بگیرند.',
  },
  {
    q: 'هوش تجاری چه مراحلی دارد؟',
    a: 'پیاده‌سازی هوش تجاری معمولاً چهار مرحله دارد: آماده‌سازی داده‌ها (ETL و Data Warehouse)، پرس‌وجو و تحلیل (SSAS و مدل‌سازی)، توزیع شاخص‌های کلیدی (Power BI و گزارش‌ها)، و تأثیر بر تصمیمات تجاری (Insights و Action).',
  },
  {
    q: 'مزایای هوش تجاری برای سازمان‌ها چیست؟',
    a: 'هوش تجاری به سازمان‌ها کمک می‌کند: تصمیم‌های سریع‌تر و مبتنی بر داده بگیرند، الگوهای پنهان را کشف کنند، هزینه‌ها را کاهش دهند، فرصت‌های رشد را شناسایی کنند، و عملکرد واحدهای مختلف را به‌صورت یکپارچه پایش کنند.',
  },
  {
    q: 'تفاوت هوش تجاری (BI) و هوش مصنوعی (AI) چیست؟',
    a: 'هوش تجاری بر تحلیل داده‌های تاریخی و گزارش‌دهی تمرکز دارد (چه اتفاقی افتاد؟)، در حالی که هوش مصنوعی از یادگیری ماشین برای پیش‌بینی و خودکارسازی استفاده می‌کند (چه اتفاقی خواهد افتاد؟). بسیاری از پلتفرم‌های مدرن مانند Daana ویترای هر دو قابلیت را ترکیب می‌کنند.',
  },
  {
    q: 'Power BI چیست و چه نقشی در هوش تجاری دارد؟',
    a: 'Power BI ابزار تجسم داده مایکروسافت است که به تیم‌ها امکان می‌دهد داشبوردهای تعاملی و گزارش‌های مدیریتی بسازند. در پروژه‌های هوش تجاری ویترای، Power BI لایه نمایش داده است که به مدل SSAS Tabular متصل می‌شود.',
  },
  {
    q: 'پیاده‌سازی هوش تجاری چقدر طول می‌کشد؟',
    a: 'بسته به پیچیدگی سازمان و تعداد منابع داده، یک پروژه BI معمولاً بین ۴ تا ۱۶ هفته طول می‌کشد. ویترای پروژه را در پنج مرحله اجرا می‌کند: شناسایی نیاز، جمع‌آوری داده، مدل‌سازی، ساخت داشبورد، و پشتیبانی مستمر.',
  },
  {
    q: 'هوش تجاری برای چه صنایعی مناسب است؟',
    a: 'هوش تجاری برای تمام صنایع مناسب است. ویترای پروژه‌های BI موفق در صنایع تولیدی، پخش و توزیع، لبنیات و غذایی، فولاد و معدن، انرژی، خدمات مالی، خرده‌فروشی، و هلدینگ‌های سازمانی انجام داده است.',
  },
  {
    q: 'داشبورد مدیریتی چیست؟',
    a: 'داشبورد مدیریتی یک صفحه نمایش تعاملی است که شاخص‌های کلیدی عملکرد (KPI) سازمان را به‌صورت تصویری و لحظه‌ای نشان می‌دهد. نمونه‌هایی از داشبوردهای مدیریتی: داشبورد فروش، مالی، HR، تولید، انبار و نگهداری.',
  },
]

export default function BusinessIntelligencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SiteNav />

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '92vh' }}>
        {/* Static gradient — zero JS, no WebGL */}
        <div className="absolute inset-0" style={{ background: '#07071a' }} />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 55% at 50% 0%, #2d2a6e 0%, transparent 70%)' }}
        />
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />

        <div className="relative z-20 flex flex-col items-center max-w-[720px] mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70">
            <BarChart3 size={13} />
            هوش تجاری (Business Intelligence)
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            اهمیت هوش تجاری در کسب‌وکار شما
            <br />
            <span className="text-indigo-300">+ ۸ نمونه داشبورد مدیریتی</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
            هوش تجاری داده‌های خام را به بینش‌های عملی تبدیل می‌کند تا مدیران بتوانند آگاهانه‌تر تصمیم بگیرند، درآمد را افزایش دهند و مزیت رقابتی ایجاد کنند.
          </p>
          {/* CTA — only animated element in the hero */}
          <style>{`
            @keyframes hero-cta-glow {
              0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
              50%       { box-shadow: 0 0 28px 10px rgba(99,102,241,0.38); }
            }
            .hero-cta-glow { animation: hero-cta-glow 2.8s ease-in-out infinite; border-radius: 0.75rem; }
          `}</style>
          <div className="hero-cta-glow mt-2">
            <BiConsultationButton label="دریافت مشاوره رایگان" />
          </div>
        </div>
      </div>

      <div className="h-24" />

      {/* ─── Definition ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            تعریف
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            تعریف هوش تجاری (Business Intelligence)
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            برای اینکه بدانیم هوش تجاری (BI) چیست، لازم است از تعریف آن شروع کنیم.
          </p>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9}>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-8 md:p-10 space-y-5 text-sm md:text-base leading-8 text-muted-foreground">
            <p>
              <strong className="text-foreground">هوش تجاری (BI)</strong> یک فرآیند مبتنی بر فناوری است که به منظور تجزیه و تحلیل داده‌ها و ارائه اطلاعات عملی استفاده می‌شود تا به مدیران کمک کند تا آگاهانه‌تر تصمیمات تجاری خود را اتخاذ کنند. به عنوان بخشی از فرایند هوش تجاری، سازمان‌ها داده‌ها را از نرم‌افزارهای داخلی IT و منابع خارجی جمع‌آوری می‌کنند، آن‌ها را برای تجزیه و تحلیل آماده می‌کنند، کوئری‌ها را اجرا می‌کنند، داده‌ها را به تصویر می‌کشند و داشبوردها را ایجاد می‌کنند تا نتایج تجزیه و تحلیل را برای تصمیم‌گیری عملیاتی و برنامه‌ریزی استراتژیک در اختیار کاربران تجاری قرار دهند.
            </p>
            <p>
              هدف نهایی هوش تجاری یا BI اخذ تصمیمات تجاری بهتر است؛ به‌طوری که سازمان‌ها را قادر به افزایش درآمد، بهبود بهره‌وری عملیاتی و کسب مزیت‌های رقابتی نسبت به رقبای تجاری‌شان می‌کند. برای دستیابی به این هدف، هوش تجاری ترکیبی از تجزیه و تحلیل، مدیریت داده، ابزار گزارش‌نویسی و روش‌های مختلف برای مدیریت و تجزیه و تحلیل داده‌ها را در بر می‌گیرد.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── Process ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            فرآیند
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            فرآیند کار هوش تجاری چگونه است؟
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            معماری هوش تجاری شامل بیش از یک نرم‌افزار است. داده‌ها معمولاً در انبار داده‌ای که برای کل سازمان ساخته شده ذخیره می‌شوند و قبل از استفاده، ادغام و مدیریت کیفیت می‌شوند.
          </p>
        </Reveal>

        <AnimatedBackground
          enableHover
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 [&>div]:h-full [&>div>div]:h-full"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal
                key={step.id}
                delay={index * 0.07}
                duration={0.7}
                className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{step.id}</span>
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Reveal>
            )
          })}
        </AnimatedBackground>

        {/* Aparat video — overview of BI self-service */}
        <Reveal y={16} delay={0.15} duration={0.9} className="mt-10">
          <AparatEmbed hash="MV87R" title="آموزش هوش تجاری — ویترای" />
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── Self-Service BI Videos ───────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            BI سلف‌سرویس
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            BI سلف‌سرویس چگونه کار می‌کند؟
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            به لطف توسعه BI سلف‌سرویس و ابزارهای کشف داده، تحلیلگران و مدیران به‌طور فزاینده‌ای از سیستم‌های هوش تجاری برای طراحی داشبوردهای خود استفاده می‌کنند.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal y={16} delay={0.1} duration={0.8}>
            <VideoPlayer
              src="https://vitrayco.com/wp-content/uploads/2021/10/power-bi.mp4"
              title="نحوه کار BI سلف‌سرویس در Power BI"
            />
          </Reveal>
          <Reveal y={16} delay={0.2} duration={0.8}>
            <VideoPlayer
              src="https://vitrayco.com/wp-content/uploads/2021/10/excel.mp4"
              title="نحوه کار BI سلف‌سرویس در Microsoft Excel"
            />
          </Reveal>
        </div>
      </div>

      <div className="h-24" />

      {/* ─── Why BI Matters ───────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            اهمیت
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            چرا هوش تجاری مهم است؟
          </h2>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9}>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-8 md:p-10 space-y-5 text-sm md:text-base leading-8 text-muted-foreground">
            <p>
              به طور کلی نقش هوش تجاری بهبود عملکردهای تجاری سازمان از طریق استفاده از داده‌های مرتبط است. شرکت‌هایی که به‌طور مؤثر از ابزارها و تکنیک‌های هوش تجاری استفاده می‌کنند، می‌توانند داده‌های جمع‌آوری‌شده خود را به بینش‌های ارزشمندی در مورد فرآیندها و استراتژی‌های تجاری تبدیل کنند. سپس می‌توان از چنین بینشی برای تصمیم‌گیری بهتر در زمینه تجارت استفاده کرد که باعث افزایش بهره‌وری و درآمد می‌شود و منجر به تسریع رشد کسب‌وکار و سود بیشتر می‌شود.
            </p>
            <p>
              بدون هوش تجاری، سازمان‌ها نمی‌توانند به‌راحتی از تصمیم‌گیری مبتنی بر داده استفاده کنند. در عوض، مدیران و کارمندان تصمیمات خود را بر اساس دانش قبلی، تجربیات، شهود و حس ششم اتخاذ می‌کنند. گرچه این روش‌ها می‌توانند تصمیمات خوبی ایجاد کنند، اما به دلیل کمبود داده‌های زیربنایی مملو از خطا و مراحل اشتباه هستند.
            </p>
            <p>
              یک برنامه موفقیت‌آمیز هوش تجاری مزایای تجاری مختلفی را برای یک سازمان ایجاد می‌کند. به‌عنوان مثال هوش تجاری به مدیران سازمان‌ها و دپارتمان‌ها این امکان را می‌دهد تا به‌طور مداوم عملکرد کسب‌وکار را نظارت کنند تا در صورت بروز مشکل یا فرصت‌ها بتوانند سریعاً عمل کنند. تنگناهای زنجیره تامین، تولید و توزیع را می‌توان قبل از ایجاد خسارات مالی شناسایی کرد.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── Benefits ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            مزایا
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            مزایای هوش تجاری برای کسب‌وکار
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            به طور کلی مزایای اصلی که هوش تجاری برای کسب‌وکارها می‌تواند به همراه داشته باشد شامل موارد زیر می‌شوند:
          </p>
        </Reveal>

        <Reveal>
          <AnimatedBackground
            enableHover
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 [&>div]:h-full [&>div>div]:h-full"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Reveal
                  key={benefit.text}
                  delay={index * 0.06}
                  duration={0.7}
                  className="rounded-2xl border border-border/60 bg-gradient-to-b from-primary/5 via-transparent to-transparent p-5 h-full flex flex-col items-start gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{benefit.text}</p>
                </Reveal>
              )
            })}
          </AnimatedBackground>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── Industry Applications ────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            کاربردها
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            نمونه‌هایی از کاربردهای هوش تجاری
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            موارد استفاده و کاربردهای خاص هوش تجاری در صنایع مختلف متفاوت است. در ادامه نمونه‌هایی از پیاده‌سازی BI در صنایع گوناگون را مشاهده می‌کنید.
          </p>
        </Reveal>

        <Reveal>
          <AnimatedBackground
            enableHover
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 [&>div]:h-full [&>div>div]:h-full"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Reveal
                  key={industry.title}
                  delay={index * 0.07}
                  duration={0.7}
                  className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 h-full flex flex-col"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-4">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </Reveal>
              )
            })}
          </AnimatedBackground>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── 8 Dashboard Examples ─────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            نمونه داشبوردها
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            ۸ نمونه داشبورد مدیریتی اجراشده توسط تیم ویترای
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            تیم ویترای داشبوردهای مدیریتی تخصصی در حوزه‌های مختلف پیاده‌سازی کرده است. روی هر داشبورد کلیک کنید تا نمونه کامل را مشاهده کنید.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dashboards.map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden border border-border/60 hover:border-indigo-500/40 transition-colors group"
              >
                <Grid size={20} pattern={item.pattern} />
                <p className="text-base font-bold text-white relative z-20 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </p>
                <p className="text-neutral-400 mt-4 text-sm font-normal relative z-20 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            پرسش‌های متداول
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            سوالات متداول درباره هوش تجاری
          </h2>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none px-6 py-5 font-bold text-foreground text-sm md:text-base">
                  {faq.q}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-5 pt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── Next steps ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            گام بعدی
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            هوش تجاری را در سازمان خود پیاده کنید
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            از اجرای پروژه BI تا انتشار حرفه‌ای گزارش‌ها — ویترای برای هر مرحله از مسیر داده‌محوری راهکاری دارد.
          </p>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              href="/bi-solution"
              className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-8 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-5 overflow-hidden">
                <Image src="/fav.png" alt="راهکار هوش تجاری ویترای" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2">راهکار پیاده‌سازی</span>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-indigo-300 transition-colors">
                راهکار هوش تجاری ویترای
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                از جمع‌آوری داده تا تحویل داشبورد — تیم ویترای پروژه BI را از صفر تا صد، در کنار شما اجرا می‌کند.
              </p>
              <span className="mt-6 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                مشاهده راهکار ←
              </span>
            </Link>

            <Link
              href="/pulse"
              className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-8 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-5 overflow-hidden">
                <Image src="/product logos/Pulse Fav W.png" alt="Pulse" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2">پرتال BI سازمانی</span>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-indigo-300 transition-colors">
                Pulse — پرتال فارسی Power BI
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                رابط پیش‌فرض Power BI Report Server را با یک تجربه مدرن و فارسی‌محور جایگزین کنید — نصب روی سرورهای خودتان با مدیریت دسترسی سازمانی.
              </p>
              <span className="mt-6 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                بیشتر درباره Pulse ←
              </span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  )
}
