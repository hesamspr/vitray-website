import Link from 'next/link'
import { SiteNav } from '@/components/ui/site-nav'
import { Footer } from '@/components/ui/footer-section'
import { CallToAction } from '@/components/ui/cta-3'
import { Reveal } from '@/components/ui/reveal'
import { BiConsultationButton } from '@/components/ui/bi-consultation-button'
import {
  Building2,
  ChevronDown,
  Cloud,
  FileSpreadsheet,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'نرم‌افزار هوش تجاری: راهنمای انتخاب برای کسب‌وکارهای ایرانی',
  description:
    'بهترین نرم‌افزار و پلتفرم هوش تجاری برای کسب‌وکار شما کدام است؟ راهنمای عملی انتخاب بین پیاده‌سازی آن‌پریمیس، هوش تجاری ابری و ابزارهای سلف‌سرویس — مخصوص واقعیت بازار ایران.',
  inLanguage: 'fa',
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  image: {
    '@type': 'ImageObject',
    url: 'https://vitrayco.com/opengraph-image.png',
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://vitrayco.com/bi-software',
  },
  author: { '@type': 'Organization', name: 'ویترای', url: 'https://vitrayco.com' },
  publisher: {
    '@type': 'Organization',
    name: 'ویترای',
    alternateName: 'Vitray',
    url: 'https://vitrayco.com',
    logo: { '@type': 'ImageObject', url: 'https://vitrayco.com/Vitray.png' },
  },
  url: 'https://vitrayco.com/bi-software',
  about: { '@type': 'Thing', name: 'Business Intelligence Software' },
  keywords: 'نرم‌افزار هوش تجاری، پلتفرم هوش تجاری، هوشمندی کسب و کار، Power BI در ایران، هوش تجاری ابری',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
    { '@type': 'ListItem', position: 2, name: 'هوش تجاری چیست؟', item: 'https://vitrayco.com/business-intelligence' },
    { '@type': 'ListItem', position: 3, name: 'نرم‌افزار هوش تجاری', item: 'https://vitrayco.com/bi-software' },
  ],
}

const paths = [
  {
    icon: Server,
    badge: 'مسیر ۱ — آن‌پریمیس',
    title: 'پیاده‌سازی آن‌پریمیس با Power BI Report Server',
    body: 'تنها مسیر واقعی برای استفاده از موتور Power BI به‌صورت سازمانی در ایران، نسخه Report Server است — چون روی سرورهای خودتان نصب می‌شود و برخلاف Power BI Service، به اشتراک ابری مایکروسافت وابسته نیست. این مسیر برای سازمان‌هایی با حجم داده بالا، چند منبع داده (ERP، CRM، Excel) و نیاز به کنترل کامل روی داده مناسب است.',
    fit: 'مناسب برای: سازمان‌های بزرگ و میان‌رده، هلدینگ‌ها، صنایع تولیدی و پخش با داده حساس',
    href: '/bi-solution',
    cta: 'راهکار هوش تجاری ویترای',
  },
  {
    icon: Cloud,
    badge: 'مسیر ۲ — ابری',
    title: 'هوش تجاری ابری (بدون سرور و تیم IT)',
    body: 'چون سرویس‌های ابری بین‌المللی مثل Power BI Service، Tableau Cloud یا Qlik Cloud به دلیل محدودیت‌های پرداخت و صورتحساب برای کسب‌وکارهای ایرانی عملاً در دسترس نیستند، تنها گزینه واقعی «ابری» یک پلتفرم هوش تجاری است که به‌صورت داخلی میزبانی و پشتیبانی می‌شود.',
    fit: 'مناسب برای: کسب‌وکارهای کوچک و متوسط بدون زیرساخت یا تیم فنی',
    href: '/pixel',
    cta: 'پیکسل — BI ابری ویترای',
  },
  {
    icon: FileSpreadsheet,
    badge: 'وضعیت فعلی اغلب کسب‌وکارها',
    title: 'اکسل و گزارش‌های دستی',
    body: 'اغلب کسب‌وکارهای ایرانی هنوز با فایل‌های اکسل پراکنده و گزارش‌های دستی اداره می‌شوند. این روش برای شروع کار قابل قبول است، اما با رشد سازمان دچار مشکلات جدی می‌شود: نسخه‌های ناهماهنگ، خطای انسانی، نبود یک منبع واحد حقیقت (Single Source of Truth) و گزارش‌های چند روز تا چند هفته عقب‌تر از واقعیت کسب‌وکار.',
    fit: 'کِی باید مهاجرت کرد: وقتی گزارش ماهانه بیش از چند ساعت زمان می‌برد یا دو نفر دو عدد متفاوت برای یک شاخص دارند',
    href: null,
    cta: null,
  },
]

const comparisonRows = [
  { label: 'مدل استقرار', prs: 'آن‌پریمیس (سرور خودتان)', pixel: 'ابری (میزبانی داخلی)', excel: 'محلی، بدون سرور' },
  { label: 'نیاز به تیم IT', prs: 'بله، برای نصب و نگهداری', pixel: 'خیر', excel: 'خیر' },
  { label: 'زمان راه‌اندازی', prs: 'چند هفته', pixel: 'چند ساعت تا چند روز', excel: '—' },
  { label: 'محل داده', prs: 'کاملاً داخل سازمان', pixel: 'سرور داخلی ویترای', excel: 'فایل‌های محلی پراکنده' },
  { label: 'مقیاس‌پذیری', prs: 'بالا — چند منبع داده، حجم زیاد', pixel: 'متوسط — داشبوردهای آماده', excel: 'پایین' },
  { label: 'مناسب برای', prs: 'سازمان بزرگ، داده حساس', pixel: 'SMB، شروع سریع', excel: 'تیم‌های خیلی کوچک' },
]

const faqs = [
  {
    q: 'آیا Power BI در ایران قابل استفاده است؟',
    a: 'به‌صورت جزئی. Power BI Desktop به‌صورت رایگان قابل دانلود و استفاده فردی است، اما Power BI Service (نسخه ابری مایکروسافت) به دلیل محدودیت‌های پرداخت و صورتحساب برای کسب‌وکارهای ایرانی عملاً در دسترس نیست. مسیر واقعی برای استفاده سازمانی، Power BI Report Server است که به‌صورت آن‌پریمیس روی سرورهای خود سازمان نصب می‌شود.',
  },
  {
    q: 'بهترین نرم‌افزار هوش تجاری برای کسب‌وکارهای کوچک در ایران چیست؟',
    a: 'برای کسب‌وکارهای کوچک و متوسط بدون تیم فنی یا زیرساخت سرور، یک پلتفرم هوش تجاری ابری با داشبوردهای آماده (مثل پیکسل ویترای) معمولاً سریع‌تر و مقرون‌به‌صرفه‌تر از پیاده‌سازی کامل آن‌پریمیس است.',
  },
  {
    q: 'تفاوت هوش تجاری آن‌پریمیس و ابری چیست؟',
    a: 'در مدل آن‌پریمیس، نرم‌افزار و داده‌ها روی سرورهای خود سازمان نصب و نگهداری می‌شوند — کنترل و امنیت بیشتر، اما نیاز به تیم فنی و زیرساخت. در مدل ابری، سرویس روی زیرساخت میزبان اجرا می‌شود و سازمان فقط به‌صورت مشترک (Subscription) از آن استفاده می‌کند — راه‌اندازی سریع‌تر، بدون نیاز به سرور.',
  },
  {
    q: 'آیا می‌توان بدون تیم فنی از نرم‌افزار هوش تجاری استفاده کرد؟',
    a: 'بله، در مدل ابری با داشبوردهای از پیش طراحی‌شده. مدل آن‌پریمیس (مانند Power BI Report Server) معمولاً برای نصب اولیه، مدل‌سازی داده و نگهداری به دانش فنی یا همکاری با یک تیم متخصص نیاز دارد.',
  },
  {
    q: 'چقدر باید برای نرم‌افزار هوش تجاری هزینه کنم؟',
    a: 'هزینه به مدل انتخابی بستگی دارد. پیاده‌سازی آن‌پریمیس معمولاً هزینه پروژه‌ای یک‌باره برای زیرساخت، مدل‌سازی داده و داشبورد دارد. مدل ابری معمولاً به‌صورت اشتراک ماهانه قیمت‌گذاری می‌شود و هزینه اولیه بسیار کمتری دارد.',
  },
]

export default function BiSoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <SiteNav />

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '86vh' }}>
        <div className="absolute inset-0" style={{ background: '#07071a' }} />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 55% at 50% 0%, #2d2a6e 0%, transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
        />

        <div className="relative z-20 flex flex-col items-center max-w-[760px] mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm py-1 px-4 rounded-lg text-sm text-white/70">
            <Sparkles size={13} />
            نرم‌افزار هوش تجاری
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            کدام نرم‌افزار هوش تجاری
            <br />
            <span className="text-indigo-300">برای کسب‌وکار شما در ایران مناسب است؟</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
            اغلب راهنماهای «انتخاب نرم‌افزار هوش تجاری» بر اساس بازار جهانی نوشته می‌شوند — جایی که Power BI Service، Tableau Cloud و Qlik در دسترس همه هستند. برای کسب‌وکارهای ایرانی، واقعیت متفاوت است.
          </p>
          <BiConsultationButton label="دریافت مشاوره رایگان" />
        </div>
      </div>

      <div className="h-24" />

      {/* ─── Reality check ────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            واقعیت بازار ایران
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            چرا مقایسه‌های معمول «بهترین نرم‌افزار BI» به کار کسب‌وکار ایرانی نمی‌آید؟
          </h2>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9}>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-8 md:p-10 space-y-5 text-sm md:text-base leading-8 text-muted-foreground">
            <p>
              تقریباً هر مقاله انگلیسی درباره انتخاب نرم‌افزار هوش تجاری، گزینه‌ها را بین <strong className="text-foreground">Power BI Service</strong>،{' '}
              <strong className="text-foreground">Tableau Cloud</strong>، <strong className="text-foreground">Qlik Sense Cloud</strong> و{' '}
              <strong className="text-foreground">Looker</strong> مقایسه می‌کند. مشکل این است که هیچ‌کدام از این سرویس‌های ابری، به دلیل محدودیت‌های پرداخت بین‌المللی و صورتحساب، برای یک سازمان ایرانی عملاً قابل خرید و پشتیبانی رسمی نیستند.
            </p>
            <p>
              این یعنی سؤال واقعی برای یک کسب‌وکار ایرانی «Power BI یا Tableau؟» نیست — سؤال واقعی این است: آیا هوش تجاری را{' '}
              <strong className="text-foreground">روی زیرساخت خودتان (آن‌پریمیس)</strong> پیاده می‌کنید، یا از یک{' '}
              <strong className="text-foreground">پلتفرم ابری میزبانی‌شده داخلی</strong> استفاده می‌کنید؟ سه مسیر واقعی پیش‌روی شماست که در ادامه هرکدام را بررسی می‌کنیم.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── The 3 real paths ─────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            گزینه‌های واقعی
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            سه مسیر واقعی هوش تجاری برای کسب‌وکار ایرانی
          </h2>
        </Reveal>

        <div className="space-y-4">
          {paths.map((path, index) => {
            const Icon = path.icon
            return (
              <Reveal key={path.title} delay={index * 0.08} duration={0.8}>
                <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-indigo-400">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="w-fit rounded-lg border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                        {path.badge}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">{path.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{path.body}</p>
                      <p className="text-xs text-indigo-300/80">{path.fit}</p>
                    </div>
                    {path.href && (
                      <Link
                        href={path.href}
                        className="group flex shrink-0 items-center gap-2 self-start rounded-xl border border-border/60 bg-muted/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 md:self-center"
                      >
                        {path.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="h-24" />

      {/* ─── Comparison table ─────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            مقایسه
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            مقایسه سریع سه گزینه
          </h2>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9} className="overflow-x-auto rounded-2xl border border-border/60">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20">
                <th className="px-5 py-4 text-right font-bold text-muted-foreground">معیار</th>
                <th className="px-5 py-4 text-right font-bold text-foreground">آن‌پریمیس (BI Solution)</th>
                <th className="px-5 py-4 text-right font-bold text-foreground">ابری (Pixel)</th>
                <th className="px-5 py-4 text-right font-bold text-muted-foreground">اکسل</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'}>
                  <td className="px-5 py-4 font-medium text-muted-foreground whitespace-nowrap">{row.label}</td>
                  <td className="px-5 py-4 text-foreground">{row.prs}</td>
                  <td className="px-5 py-4 text-foreground">{row.pixel}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.excel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>

      <div className="h-24" />

      {/* ─── Already on PBRS? Pulse cross-link ────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-8 md:flex-row md:items-center md:p-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-indigo-400">
              <ShieldCheck size={22} />
            </div>
            <div className="flex-1 space-y-2">
              <div className="w-fit rounded-lg border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                از قبل Report Server دارید؟
              </div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                اگر Power BI Report Server دارید اما پورتال آن انگلیسی و محدود است
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                پالس (Pulse) ویترای یک رابط فارسی جایگزین برای Power BI Report Server است — با احراز هویت چندعاملی، مدیریت گروه‌های Active Directory و کنترل دسترسی دقیق، بدون نیاز به مهاجرت یا تغییر زیرساخت.
              </p>
            </div>
            <Link
              href="/pulse"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border/60 bg-muted/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              آشنایی با پالس
            </Link>
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
            سوالات متداول درباره نرم‌افزار هوش تجاری
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

      {/* ─── Next steps — all 3 products ──────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            گام بعدی
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            محصولات هوش تجاری ویترای
          </h2>
        </Reveal>

        <Reveal y={16} delay={0.1} duration={0.9}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="/bi-solution"
              className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-7 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-5">
                <Building2 size={18} className="text-indigo-400" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2">آن‌پریمیس</span>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-indigo-300 transition-colors">
                BI Solution
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                پیاده‌سازی کامل و اختصاصی روی زیرساخت خودتان — برای سازمان‌های بزرگ با داده حساس.
              </p>
              <span className="mt-5 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">مشاهده راهکار ←</span>
            </Link>

            <Link
              href="/pixel"
              className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-7 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-5">
                <Cloud size={18} className="text-indigo-400" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2">ابری</span>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-indigo-300 transition-colors">
                Pixel
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                هوش تجاری ابری، بدون سرور و تیم IT — برای کسب‌وکارهای کوچک و متوسط.
              </p>
              <span className="mt-5 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">مشاهده پیکسل ←</span>
            </Link>

            <Link
              href="/pulse"
              className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-indigo-950/30 via-background to-background p-7 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30 mb-5">
                <MonitorSmartphone size={18} className="text-indigo-400" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2">مدیریت PBRS</span>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-indigo-300 transition-colors">
                Pulse
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                رابط فارسی و امن جایگزین پرتال پیش‌فرض Power BI Report Server.
              </p>
              <span className="mt-5 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">مشاهده پالس ←</span>
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
