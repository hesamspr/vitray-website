import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { CallToAction } from '@/components/ui/cta-3';
import { GlowCard } from '@/components/ui/spotlight-card';
import { motion } from 'motion/react';
import {
  BarChart3,
  Cloud,
  GraduationCap,
  Home,
  Info,
  Layers3,
  Mail,
  Package,
  Share2,
} from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';

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

export function AboutPage() {
  usePageTitle('درباره ما');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center space-y-4"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            درباره ما
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            داده را به تصمیم تبدیل می‌کنیم
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            شرکت ویترای با هدف کمک به سازمان‌ها در تبدیل داده‌های خام به بینش‌های عملی و قابل اجرا
            در سال ۱۳۹۸ تأسیس شده است. تیم ما متشکل از متخصصان حوزه‌های فناوری و کسب‌وکار است که
            راه‌حل‌های نوآورانه هوش تجاری را ارائه می‌دهند.
          </p>
        </motion.div>
      </div>

      <div className="h-8" />

      {/* Company overview card */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <GlowCard customSize glowColor="purple" className="flex flex-col p-8 md:p-12 w-full">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
                  ما چه می‌کنیم
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                  هوش تجاری در خدمت سازمان شما
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  با بهره‌گیری از ابزارهای پیشرفته‌ای همچون Microsoft Power BI و دیگر فناوری‌های
                  تحلیلی، داده‌های شما را به گزارش‌ها و داشبوردهای بصری تبدیل می‌کنیم تا
                  تصمیم‌گیری سریع‌تر، دقیق‌تر و مبتنی بر داده ممکن شود.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تمرکز ما بر توانمندسازی سازمان‌ها برای پیشرفت در بازارهای رقابتی است. ما برای
                  هر صنعت راهکارهای اختصاصی ارائه می‌دهیم تا نیازهای خاص آن را پوشش دهیم.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  هدف نهایی ویترای ایجاد تحول دیجیتال و تقویت نوآوری‌های مبتنی بر داده در
                  سازمان‌هاست.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { value: '۱۳۹۸', label: 'سال تأسیس' },
                    { value: '+150', label: 'پروژه موفق' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/40 bg-background/30 p-4 text-center">
                      <div className="text-2xl font-bold tracking-tighter">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>

      <div className="h-12" />

      {/* Brand story */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border/60 bg-card overflow-hidden"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.05), transparent 70%)',
            }}
          />
          <div className="relative px-8 py-12 md:px-16 md:py-16 flex flex-col items-center text-center space-y-6">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              داستان ما
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter max-w-xl leading-snug">
              ویترای، هنری است برای بخشیدن جان به شیشه‌ها
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              ما در ویترای نیز با همان روح هنرمندانه، به داده‌های شما معنا می‌بخشیم و آن‌ها را به
              تصاویری روشن و قابل درک تبدیل می‌کنیم؛ تصاویری که تصمیم‌گیری را آسان‌تر و آینده را
              شفاف‌تر می‌سازند.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="h-12" />

      {/* Data Maturity */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            مدل بلوغ داده
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            همراه شما از آگاهی تا داده‌محوری
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            حرکت به‌سوی تصمیم‌گیری مبتنی بر داده سفری تدریجی و هدفمند است. در ویترای، رویکرد ما بر
            پایه‌ی مدل بلوغ داده طراحی شده — مدلی که مسیر حرکت سازمان‌ها از آگاهی اولیه تا
            تصمیم‌گیری کاملاً داده‌محور را ترسیم می‌کند.
          </p>
        </motion.div>

        {/* Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              num: '۱',
              glow: 'blue' as const,
              title: 'آگاهی از داده',
              en: 'Data Aware',
              body: 'داده‌ها به‌صورت دستی از منابع مختلف گردآوری می‌شوند. تمرکز بر ایجاد درک اولیه از ارزش داده و استانداردسازی گزارش‌هاست.',
            },
            {
              num: '۲',
              glow: 'green' as const,
              title: 'تسلط بر داده',
              en: 'Data Proficient',
              body: 'سازمان از یک پلتفرم متمرکز برای گزارش‌دهی استفاده می‌کند و شاخص‌های کلیدی عملکرد خود را به شکل منظم پایش می‌کند.',
            },
            {
              num: '۳',
              glow: 'orange' as const,
              title: 'هوشمندی داده',
              en: 'Data Savvy',
              body: 'داده‌ها به منبع اصلی تصمیم‌گیری‌های کلیدی تبدیل می‌شوند و تحلیل‌ها نقش تعیین‌کننده در جهت‌گیری‌های سازمان دارند.',
            },
            {
              num: '۴',
              glow: 'purple' as const,
              title: 'داده‌محوری',
              en: 'Data Driven',
              body: 'داده در تمامی فرآیندها و تصمیمات سازمان نهادینه می‌شود و تصمیمی بدون اتکا به داده گرفته نمی‌شود.',
            },
          ].map((stage, index) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <GlowCard customSize glowColor={stage.glow} className="flex flex-col p-6 w-full h-full min-h-[260px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold tracking-tighter text-foreground/20">{stage.num}</span>
                  <span className="text-xs text-muted-foreground border border-border/40 px-2 py-0.5 rounded-full" dir="ltr">{stage.en}</span>
                </div>
                <h3 className="text-base font-bold mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.body}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/60 bg-card px-8 py-6 text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            در این مسیر، ویترای نقش مشاور و همراه قابل اعتماد شما را ایفا می‌کند — از شناسایی
            جایگاه فعلی سازمان در مدل بلوغ داده، تا طراحی راهکارهای فنی و تحلیلی متناسب با
            نیازها و اهداف آینده‌ی شما.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
