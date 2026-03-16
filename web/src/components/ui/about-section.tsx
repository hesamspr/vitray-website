import { motion } from 'motion/react';
import { Target, Users, Lightbulb, TrendingUp, BarChart3, Layers3, Cloud, Share2 } from 'lucide-react';

const stats = [
  { value: '۱۳۹۸', label: 'سال تأسیس' },
  { value: '۴', label: 'محصول اصلی' },
  { value: '+۱۵۰', label: 'پروژه موفق' },
  { value: '۴', label: 'مرحله بلوغ داده' },
];

const values = [
  {
    icon: Target,
    title: 'آشنایی با کسب‌وکارها',
    description:
      'یکی از مهم‌ترین مزیت‌های ویترای، تجربه عملی و درک عمیقی است که تیم مدیران و متخصصان ما از دل کسب‌وکارها با خود به همراه آورده‌اند. تیم ما با سال‌ها حضور در صنایع مختلف و همکاری با سازمان‌های گوناگون، به‌خوبی با چالش‌ها، نیازها و فرصت‌هایی که در مسیر رشد پیش می‌آیند، آشناست.',
    subItems: [
      {
        title: 'همکاری استراتژیک برای تبدیل چالش‌ها به فرصت‌ها',
        description:
          'در ویترای، نقش ما فراتر از یک مشاور است؛ ما به‌عنوان یک شریک استراتژیک در کنار شما قرار می‌گیریم. تیم ما با بهره‌گیری از دانش و تجربیات واقعی، به شما کمک می‌کند که هر چالشی را به فرصتی برای رشد و نوآوری تبدیل کنید.',
      },
      {
        title: 'تمرکز بر بهره‌وری و ارائه راهکارهای عملی',
        description:
          'ویترای متعهد است که زمان ارزشمند نیروهای شما را صرف مسائل ساده و غیرضروری نکند. رویکرد ما بر شناسایی دقیق مشکلات و ارائه راهکارهای عملی و کاربردی متمرکز است.',
      },
    ],
  },
  {
    icon: TrendingUp,
    title: 'سرعت اجرا',
    description:
      'در ویترای، تجربه گسترده ما در اجرای پروژه‌های متنوع هوش تجاری، برگ برنده‌ای است که به شما کمک می‌کند با سرعت و دقت به نتایج مورد انتظار خود دست یابید.',
    subItems: [
      {
        title: 'آشنایی با دیتابیس‌های نرم‌افزارهای رایج در ایران',
        description:
          'ما با ساختار دیتابیس بسیاری از نرم‌افزارهای موجود در بازار ایران آشنایی کامل داریم. این تجربه به ما امکان می‌دهد تا در پروژه‌های جدید، از همان ابتدا به‌صورت هدفمند و دقیق عمل کنیم و زمان ارزشمند شما را صرفه‌جویی کنیم.',
      },
      {
        title: 'دیتا مدل پایه‌ای، آماده برای کسب‌وکار شما',
        description:
          'ما یک دیتا مدل پایه بر اساس نیازهای عمومی کسب‌وکارها طراحی کرده‌ایم که شامل Measureها و Relationshipهای اساسی و پرکاربرد است. این مدل آماده، باعث صرفه‌جویی چشمگیر در زمان و منابع پروژه می‌شود.',
      },
    ],
  },
  {
    icon: Users,
    title: 'مشتری‌مداری',
    description:
      'در ویترای، موفقیت مشتریانمان نه تنها هدف، بلکه ارزش محوری ماست. ما بر این باوریم که رشد و دستاوردهای شما مستقیماً به پیشرفت و موفقیت ما گره خورده است.',
    subItems: [
      {
        title: 'موفقیت شما، موفقیت ما',
        description:
          'ما با بهره‌گیری از راهکارهای نوآورانه و طراحی شده بر اساس نیازهای واقعی، تلاش می‌کنیم تا سازمان شما را در مسیر موفقیت پایدار یاری کنیم. تعهد ما فراتر از ارائه خدمات است؛ ویترای به عنوان یک شریک استراتژیک در کنار شما ایستاده است تا آینده‌ای روشن‌تر برای کسب‌وکار شما رقم بزند.',
      },
    ],
  },
  {
    icon: Lightbulb,
    title: 'ابزار و رویکرد درست',
    description:
      'در ویترای، رویکرد ما به شکلی طراحی شده که نیازهای سازمان‌های بزرگ و داده‌محور را به بهترین نحو ممکن پاسخ دهد. ما با بهره‌گیری از استانداردهای پیشرفته و کنار گذاشتن روش‌های سنتی، راهکاری ارائه می‌دهیم که فراتر از محدودیت‌های معمول عمل می‌کند.',
    subItems: [
      {
        title: 'Semantic Layer مستقل برای تحلیل پیشرفته',
        description:
          'برخلاف روش‌های متداول، ما یک Semantic Layer مجزا و حرفه‌ای را روی SSAS Tabular پیاده‌سازی می‌کنیم و از Power BI تنها برای بصری‌سازی استفاده می‌کنیم. کاربران می‌توانند با MS Excel، Tableau یا Power BI به مدل داده متصل شوند.',
      },
      {
        title: 'فرآیند ETL پیشرفته و مدل داده بهینه',
        description:
          'فرآیند ETL داده‌ها را با بهترین روش‌های موجود طراحی و اجرا می‌کنیم تا داده‌ها با سرعت و کارایی بی‌نظیری پردازش شوند و سازمان شما در کوتاه‌ترین زمان به داده‌های به‌روز و قابل‌اعتماد دسترسی داشته باشد.',
      },
    ],
  },
];

const maturityStages = [
  { step: '۱', title: 'آگاهی از داده', description: 'گردآوری دستی از منابع مختلف و استانداردسازی گزارش‌ها' },
  { step: '۲', title: 'تسلط بر داده', description: 'پلتفرم متمرکز برای گزارش‌دهی و پایش شاخص‌های کلیدی' },
  { step: '۳', title: 'هوشمندی داده', description: 'داده به منبع اصلی تصمیم‌گیری‌های کلیدی تبدیل می‌شود' },
  { step: '۴', title: 'داده‌محوری', description: 'داده در تمامی فرآیندها و تصمیمات سازمان نهادینه می‌شود' },
];

export function AboutSection() {
  return (
    <section id="about" className="space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
      >
        <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
          درباره ما
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
          داده را به تصمیم تبدیل می‌کنیم
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          ویترای با هدف کمک به سازمان‌ها در تبدیل داده‌های خام به بینش‌های عملی و قابل اجرا تأسیس شده است. تیم ما از متخصصان حوزه‌های فناوری و کسب‌وکار تشکیل شده که راه‌حل‌های نوآورانه هوش تجاری را ارائه می‌دهند.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-border/60 bg-card space-y-1"
          >
            <span className="text-3xl font-bold tracking-tighter text-foreground">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Mission — brand story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="rounded-3xl border border-border/60 bg-card p-8 md:p-12 space-y-4 text-center"
      >
        <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit mx-auto">
          داستان ما
        </div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
          ویترای، هنری است برای بخشیدن جان به شیشه‌ها
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          ما در ویترای نیز با همان روح هنرمندانه، به داده‌های شما معنا می‌بخشیم و آن‌ها را به تصاویری روشن و قابل درک تبدیل می‌کنیم — تصاویری که تصمیم‌گیری را آسان‌تر و آینده را شفاف‌تر می‌سازند.
        </p>
      </motion.div>

      {/* Data Maturity Model */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            رویکرد ما
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            همراه شما از آگاهی تا داده‌محوری
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            رویکرد ما بر پایه مدل بلوغ داده طراحی شده است. هر سازمان باید متناسب با جایگاه فعلی خود در این مسیر، برنامه‌ریزی کند.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {maturityStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-border/60 bg-card space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground/20">{stage.step}</span>
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              </div>
              <h3 className="text-base font-semibold">{stage.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Vitray */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            چرا ویترای
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            مزیت‌هایی که ما را متمایز می‌کنند
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            موفقیت مشتریانمان نه‌تنها هدف، بلکه ارزش محوری ماست.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border/60 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-xl border border-border/60 bg-background p-2.5">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                {value.subItems.length > 0 && (
                  <div className="space-y-3 border-t border-border/40 pt-4">
                    {value.subItems.map((sub) => (
                      <div key={sub.title} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                          <h4 className="text-sm font-medium">{sub.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pr-3">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            صنایع
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            صنایعی که به آن‌ها خدمت می‌کنیم
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            'صنعت غذا و نوشیدنی',
            'نفت، گاز و پتروشیمی',
            'فولاد و معدن',
            'هلدینگ و شرکت‌داری',
            'صنعت پخش',
            'لوازم خانگی',
            'پوشاک',
            'سیم و کابل',
            'سایر صنایع',
          ].map((industry) => (
            <div
              key={industry}
              className="border border-border/60 py-1.5 px-4 rounded-lg text-sm text-muted-foreground bg-card"
            >
              {industry}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
