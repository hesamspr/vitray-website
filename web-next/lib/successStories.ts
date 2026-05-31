import type { Lang } from '@/lib/i18n'

export interface Bilingual {
  fa: string
  en: string
}

export interface StoryFact {
  value: Bilingual
  label: Bilingual
}

export interface StoryResult {
  value: Bilingual
  label: Bilingual
}

export interface StoryTestimonial {
  quote: Bilingual
  name: Bilingual
  role: Bilingual
}

export type StoryAccent = 'blue' | 'purple' | 'green' | 'orange'

export interface SuccessStory {
  slug: string
  /** Company name, shown as the headline subject. */
  company: Bilingual
  /** Industry — used as the hero badge. */
  industry: Bilingual
  /** One-line summary used on the listing card. */
  summary: Bilingual
  /** Short hero subtitle on the story page. */
  intro: Bilingual
  /** Key facts strip (employees, factories, software, …). */
  facts: StoryFact[]
  /** A paragraph (or two, separated by \n\n) introducing the company. */
  about: Bilingual
  challenge: Bilingual
  solution: Bilingual
  /** Quantified outcomes shown as tiles. */
  results: StoryResult[]
  testimonials: StoryTestimonial[]
  accent: StoryAccent
  metaDescription: Bilingual
}

export const successStories: SuccessStory[] = [
  {
    slug: 'haraz-dairy',
    company: { fa: 'لبنیات هراز', en: 'Haraz Dairy' },
    industry: { fa: 'تولید و پخش لبنیات', en: 'Dairy Production & Distribution' },
    summary: {
      fa: 'تبدیل حجم عظیم داده‌های FMCG به داشبوردهای مدیریتی و توانمندسازی بیش از ۲۰۰ کاربر سازمانی.',
      en: 'Turning massive FMCG data volumes into management dashboards and empowering 200+ enterprise users.',
    },
    intro: {
      fa: 'چگونه دوشه آمل با راهکار هوش تجاری ویترای، گزارش‌های کند و پرخطا را به داشبوردهای لحظه‌ای برای بیش از ۲۰۰ کاربر تبدیل کرد.',
      en: 'How Doosheh Amol replaced slow, error-prone reports with real-time dashboards for 200+ users using Vitray BI.',
    },
    facts: [
      { value: { fa: '+۲٬۲۰۰', en: '2,200+' }, label: { fa: 'کارمند', en: 'Employees' } },
      { value: { fa: '۷', en: '7' }, label: { fa: 'کارخانه', en: 'Factories' } },
      { value: { fa: '+۲۰۰', en: '200+' }, label: { fa: 'کاربر داشبورد', en: 'Dashboard users' } },
      { value: { fa: 'ورانگر + راهکاران', en: 'Voronger + Rahkaran' }, label: { fa: 'نرم‌افزار سازمانی', en: 'Enterprise software' } },
    ],
    about: {
      fa: 'شرکت لبنیات دوشه آمل از مرداد ۱۳۸۶ با برندهای هراز، سبو و دوشه فعالیت خود را آغاز کرد. این شرکت که با ۳۰ کارمند در شهرک صنعتی آمل شروع به کار کرد، در کمتر از یک دهه به ۷ واحد تولیدی و بیش از ۲٬۲۰۰ کارمند مستقیم رسید.\n\nمحصولات هراز علاوه بر بازار داخلی، به کشورهای عراق، قطر، بحرین، ترکمنستان و کانادا صادر می‌شود. نوآوری در محصول، پایش سلامت مصرف‌کننده و حفظ استانداردهای بین‌المللی (ISO 9001، ISO 14001، ISO 22000 و ISO 10002) از اولویت‌های اصلی این مجموعه است.',
      en: 'Doosheh Amol Dairy began operations in August 2007 under the Haraz, Sebo and Doosheh brands. Starting with 30 employees in Amol’s industrial zone, it grew within a decade to 7 production facilities and more than 2,200 direct employees.\n\nBeyond the domestic market, Haraz exports to Iraq, Qatar, Bahrain, Turkmenistan and Canada. Product innovation, monitoring consumer health and upholding international standards (ISO 9001, ISO 14001, ISO 22000 and ISO 10002) are among its core priorities.',
    },
    challenge: {
      fa: 'صنعت لبنیات با حجم عظیمی از داده‌های کالاهای تندگردش (FMCG) سر و کار دارد. این حجم بالا باعث تأخیر در گزارش‌گیری و افزایش نرخ خطا می‌شد و پایش لحظه‌ای کسب‌وکار را — با وجود اهمیت استراتژیک آن برای جهت‌گیری سازمان — دشوار می‌کرد.',
      en: 'The dairy industry handles enormous volumes of fast-moving consumer goods (FMCG) data. That volume created reporting delays and a higher error rate, making real-time monitoring difficult despite its strategic importance for steering the organization.',
    },
    solution: {
      fa: 'تیم ویترای یک انبار داده (Data Warehouse) طراحی و سرویس‌های تحلیلی مایکروسافت را پیاده‌سازی کرد. ابتدا داشبوردهای مدیریت ارشد ساخته شد و سپس آموزش سراسری برای گزارش‌سازی اختصاصی در کل سازمان انجام گرفت. امروز بیش از ۲۰۰ کاربر از راهکار ویترای استفاده می‌کنند.',
      en: 'Vitray designed a data warehouse and implemented Microsoft analytics services. Senior-management dashboards were built first, followed by organization-wide training for custom reporting. Today, more than 200 users rely on the Vitray solution.',
    },
    results: [
      { value: { fa: '+۲۰۰', en: '200+' }, label: { fa: 'کاربر فعال گزارش‌گیری', en: 'Active reporting users' } },
      { value: { fa: 'تا ۳٪', en: 'up to 3%' }, label: { fa: 'مدیریت هزینه پخش', en: 'Distribution cost managed' } },
      { value: { fa: 'لحظه‌ای', en: 'Real-time' }, label: { fa: 'پایش کسب‌وکار', en: 'Business monitoring' } },
    ],
    testimonials: [
      {
        quote: {
          fa: 'ما با همراهی ویترای توانستیم تا ۳٪ هزینه پخش را مدیریت کنیم.',
          en: 'With Vitray alongside us, we managed to control up to 3% of distribution costs.',
        },
        name: { fa: 'مهندس دادگر', en: 'Eng. Dadgar' },
        role: { fa: 'معاون لبنیات هراز', en: 'Deputy Director, Haraz Dairy' },
      },
    ],
    accent: 'blue',
    metaDescription: {
      fa: 'داستان موفقیت لبنیات هراز با ویترای: ساخت انبار داده و داشبوردهای مدیریتی برای بیش از ۲۰۰ کاربر و مدیریت تا ۳٪ هزینه پخش.',
      en: 'Haraz Dairy success story with Vitray: building a data warehouse and management dashboards for 200+ users and managing up to 3% of distribution costs.',
    },
  },
  {
    slug: 'gerad',
    company: { fa: 'گراد (گروه راهبرد آتی دانا)', en: 'Grad (Rahbord Ati Dana Group)' },
    industry: { fa: 'تولید و خرده‌فروشی پوشاک', en: 'Apparel Manufacturing & Retail' },
    summary: {
      fa: 'یکپارچه‌سازی داده‌های پراکنده ۲۲ شعبه در داشبوردهای واحد و خودکارسازی تصمیم‌گیری تجاری.',
      en: 'Unifying scattered data across 22 branches into single dashboards and automating commercial decision-making.',
    },
    intro: {
      fa: 'چگونه گراد داده‌های پراکنده فروش، بازاریابی و انبار را در داشبوردهای یکپارچه گرد آورد و تصمیم‌گیری را خودکار کرد.',
      en: 'How Grad consolidated fragmented sales, marketing and warehouse data into unified dashboards and automated decision-making.',
    },
    facts: [
      { value: { fa: '۱۳۷۰', en: '1991' }, label: { fa: 'سال تأسیس', en: 'Founded' } },
      { value: { fa: '۲۲', en: '22' }, label: { fa: 'شعبه', en: 'Branches' } },
      { value: { fa: '۶۰۰', en: '600' }, label: { fa: 'کارمند', en: 'Employees' } },
      { value: { fa: 'راهکاران', en: 'Rahkaran ERP' }, label: { fa: 'سیستم ERP', en: 'ERP system' } },
    ],
    about: {
      fa: 'گراد (گروه راهبرد آتی دانا) تولیدکننده پوشاک مردانه است که از سال ۱۳۷۰ فعالیت می‌کند و امروز با ۲۲ شعبه در تهران و شهرستان‌ها و حدود ۶۰۰ کارمند به مشتریان خود خدمت می‌دهد.',
      en: 'Grad (Rahbord Ati Dana Group) is a menswear manufacturer that has operated since 1991. Today it serves customers through 22 branches across Tehran and other provinces with around 600 employees.',
    },
    challenge: {
      fa: 'گراد در مدیریت تعامل با مشتریان در بسترهای مختلف — وب‌سایت، شبکه‌های اجتماعی و ایمیل — بدون داشتن دید یکپارچه از داده‌ها دچار مشکل بود. پراکندگی داده‌های مشتری و کسب‌وکار در سیستم‌های متعدد، تصمیم‌گیری را دشوار می‌کرد.',
      en: 'Grad struggled to manage customer interactions across multiple platforms — website, social media and email — without an integrated view of its data. Customer and business data fragmented across many systems made decision-making difficult.',
    },
    solution: {
      fa: 'تیم هوش تجاری ویترای داده‌های سیستم ERP را در داشبوردهای یکپارچه گرد آورد تا تعامل شخصی‌سازی‌شده با مشتری و تصمیم‌گیری استراتژیک فروش ممکن شود؛ همراه با دید لحظه‌ای به ارقام فروش، گزارش‌های مالی، کمپین‌های بازاریابی و اطلاعات پرسنلی.',
      en: 'Vitray’s BI team consolidated data from the ERP system into unified dashboards, enabling personalized customer engagement and strategic sales decisions, with real-time visibility into sales figures, financial reports, marketing campaigns and HR records.',
    },
    results: [
      { value: { fa: '۷ روز کاری', en: '7 business days' }, label: { fa: 'داشبورد فروش', en: 'Sales dashboard' } },
      { value: { fa: '۷ روز کاری', en: '7 business days' }, label: { fa: 'داشبورد بازاریابی', en: 'Marketing dashboard' } },
      { value: { fa: '۱۰ روز کاری', en: '10 business days' }, label: { fa: 'داشبورد انبار', en: 'Warehouse dashboard' } },
    ],
    testimonials: [
      {
        quote: {
          fa: 'تحلیل داده اکنون خودکار و بهینه است و فرایند تصمیم‌گیری تجاری و برتری‌های رقابتی ما را بهبود بخشید.',
          en: 'Data analysis is now optimized and automatic, improving our business decisions and competitive advantages.',
        },
        name: { fa: 'مهندس جوادیان', en: 'Eng. Javadian' },
        role: { fa: 'مدیر راهکاران ERP گراد', en: 'ERP Solutions Manager, Grad' },
      },
      {
        quote: {
          fa: 'ویترای نیازهای ما را به‌خوبی شناسایی کرد؛ با سرعت بالای طراحی داشبورد و پشتیبانی فوق‌العاده.',
          en: 'Vitray identified our needs well, with excellent dashboard design speed and exceptional support.',
        },
        name: { fa: 'مهندس روبیک آسواطوریان', en: 'Eng. Robik Asvatoorian' },
        role: { fa: 'مدیر فناوری اطلاعات', en: 'IT Manager' },
      },
    ],
    accent: 'purple',
    metaDescription: {
      fa: 'داستان موفقیت گراد با ویترای: یکپارچه‌سازی داده‌های ۲۲ شعبه در داشبوردهای فروش، بازاریابی و انبار و خودکارسازی تصمیم‌گیری تجاری.',
      en: 'Grad success story with Vitray: unifying data across 22 branches into sales, marketing and warehouse dashboards and automating commercial decisions.',
    },
  },
  {
    slug: 'behnoush-iran',
    company: { fa: 'بهنوش ایران', en: 'Behnoush Iran' },
    industry: { fa: 'تولید نوشیدنی (FMCG)', en: 'Beverage Manufacturing (FMCG)' },
    summary: {
      fa: 'تعریف شاخص‌های کلیدی و داشبوردهای داده برای بزرگ‌ترین تولیدکننده ماءالشعیر ایران و صرفه‌جویی در زمان.',
      en: 'Defining KPIs and data dashboards for Iran’s largest malt-beverage producer and saving time.',
    },
    intro: {
      fa: 'چگونه بهنوش ایران از تولید انبوه داده به استفاده هوشمند از آن رسید و داده‌های چند منبع را در داشبوردهای واحد تجمیع کرد.',
      en: 'How Behnoush Iran moved from generating data in bulk to using it intelligently, consolidating multiple sources into unified dashboards.',
    },
    facts: [
      { value: { fa: '۹', en: '9' }, label: { fa: 'کارخانه', en: 'Factories' } },
      { value: { fa: '+۲٬۰۰۰', en: '2,000+' }, label: { fa: 'پرسنل', en: 'Personnel' } },
      { value: { fa: '۲۲۰', en: '220' }, label: { fa: 'نوع محصول', en: 'Product varieties' } },
      { value: { fa: 'راهکاران سیستم', en: 'Rahkaran System' }, label: { fa: 'نرم‌افزار سازمانی', en: 'Enterprise software' } },
    ],
    about: {
      fa: 'بهنوش ایران بزرگ‌ترین تولیدکننده ماءالشعیر کشور است که در سال ۱۳۴۵ با نام «مالت ایران» تأسیس شد. پس از انقلاب اسلامی به تولید نوشیدنی‌های بدون الکل روی آورد و با نام بهنوش ایران ادامه فعالیت داد.\n\nاین مجموعه با یک کارخانه و یک خط تولید آغاز کرد و امروز با ۹ کارخانه و ۱۸ خط تولید در سراسر ایران، ۲۲۰ نوع نوشیدنی (ماءالشعیر، دوغ، آبمیوه، نوشابه، انواع نوشیدنی میوه‌ای، آب و نوشیدنی انرژی‌زا) تولید می‌کند.',
      en: 'Behnoush Iran is the country’s largest malt-beverage producer, founded in 1966 as “Malt Iran.” After the Islamic Revolution it shifted to non-alcoholic beverages and continued under the Behnoush Iran name.\n\nStarting with a single factory and one production line, it now operates 9 factories with 18 production lines across Iran, producing 220 beverage varieties (malt beverages, doogh, juice, soda, fruit drinks, water and energy drinks).',
    },
    challenge: {
      fa: 'تصمیم‌گیران صنعت FMCG برای اجرای مؤثر استراتژی به توان علم داده نیاز دارند. با وجود تولید فراوان داده، بهنوش در استفاده هوشمند از داده‌ها برای سنجش اثربخشی بازاریابی، کاهش هزینه و بهبود بهره‌وری با چالش روبه‌رو بود.',
      en: 'Decision-makers in the FMCG industry need data-science capability to execute strategy effectively. Despite generating abundant data, Behnoush struggled to use it intelligently for measuring marketing effectiveness, reducing costs and improving efficiency.',
    },
    solution: {
      fa: 'ویترای نیازهای گزارش‌دهی را شناسایی و شاخص‌های کلیدی عملکرد را پیشنهاد داد که امکان کنترل کسب‌وکار از طریق داشبوردهای داده را فراهم می‌کرد و داده‌های چند منبع را به‌صورت خودکار کنار هم تجمیع می‌کرد.',
      en: 'Vitray identified the reporting needs and proposed key performance indicators that enabled business control through data dashboards, automatically consolidating data from multiple sources side by side.',
    },
    results: [
      { value: { fa: '۷ روز کاری', en: '7 business days' }, label: { fa: 'تحویل داشبورد فروش', en: 'Sales dashboard delivery' } },
      { value: { fa: '۳ روز کاری', en: '3 business days' }, label: { fa: 'تحویل داشبورد بودجه', en: 'Budget dashboard delivery' } },
      { value: { fa: 'خودکار', en: 'Automated' }, label: { fa: 'جمع‌آوری داده از چند منبع', en: 'Multi-source data collection' } },
    ],
    testimonials: [
      {
        quote: {
          fa: 'داشبوردها داده‌ها را به‌صورت خودکار از چندین منبع جمع‌آوری می‌کنند.',
          en: 'The dashboards automatically collect data from multiple sources.',
        },
        name: { fa: 'مهندس شاه‌مرادی', en: 'Eng. Shahmoradi' },
        role: { fa: 'مدیر فناوری اطلاعات', en: 'IT Manager' },
      },
      {
        quote: {
          fa: 'داشبوردها به ما این امکان را دادند تا همه داده‌ها را در کنار یکدیگر تجمیع کنیم و در زمان ما صرفه‌جویی کردند.',
          en: 'The dashboards enabled us to consolidate all our data together and saved us time.',
        },
        name: { fa: 'مهندس اسکندری', en: 'Eng. Eskandari' },
        role: { fa: 'مدیر پیاده‌سازی نرم‌افزار راهکاران', en: 'Rahkaran Implementation Manager' },
      },
    ],
    accent: 'green',
    metaDescription: {
      fa: 'داستان موفقیت بهنوش ایران با ویترای: تعریف شاخص‌های کلیدی و داشبوردهای داده برای بزرگ‌ترین تولیدکننده ماءالشعیر کشور و صرفه‌جویی در زمان.',
      en: 'Behnoush Iran success story with Vitray: defining KPIs and data dashboards for the country’s largest malt-beverage producer and saving time.',
    },
  },
  {
    slug: 'telavang',
    company: { fa: 'صنایع تخم‌مرغ تلاونگ', en: 'Telavang Egg Industries' },
    industry: { fa: 'تولید و پخش تخم‌مرغ', en: 'Egg Production & Distribution' },
    summary: {
      fa: 'داشبوردهای BI برای پاسخ دقیق به نوسان هزینه، تقاضا و کنترل کیفیت در صنعت تخم‌مرغ.',
      en: 'BI dashboards for precise responses to cost swings, demand volatility and quality control in the egg industry.',
    },
    intro: {
      fa: 'چگونه تلاونگ با هوش تجاری به نوسان هزینه تولید، تقاضا و کنترل کیفیت پاسخی دقیق و داده‌محور داد.',
      en: 'How Telavang used business intelligence to respond precisely and data-driven to production-cost swings, demand and quality control.',
    },
    facts: [
      { value: { fa: '۱۳۵۶', en: '1977' }, label: { fa: 'سال تأسیس', en: 'Founded' } },
      { value: { fa: '۵۰۰', en: '500' }, label: { fa: 'کارمند', en: 'Employees' } },
      { value: { fa: 'اولین در ایران', en: 'First in Iran' }, label: { fa: 'بسته‌بندی خودکار تخم‌مرغ', en: 'Automated egg packaging' } },
      { value: { fa: 'SSIS · SSAS · Power BI', en: 'SSIS · SSAS · Power BI' }, label: { fa: 'استک هوش تجاری', en: 'BI stack' } },
    ],
    about: {
      fa: 'صنایع تخم‌مرغ تلاونگ در سال ۱۳۵۶ تأسیس شد و نخستین تولیدکننده تخم‌مرغ بسته‌بندی‌شده به‌صورت خودکار در ایران است. این مجموعه در سال ۱۳۸۴ نیز به‌عنوان نخستین تولیدکننده تخم‌مرغ مایع پاستوریزه در کشور فعالیت خود را گسترش داد.',
      en: 'Telavang Egg Industries was founded in 1977 and is the first producer of automatically packaged eggs in Iran. In 2005 it expanded further as the country’s first producer of pasteurized liquid eggs.',
    },
    challenge: {
      fa: 'صنعت تولید تخم‌مرغ با موانع عملیاتی متعددی روبه‌روست؛ از نوسان هزینه تولید و تقاضا تا مدیریت موجودی و کنترل کیفیت. افزون بر این، گزارش‌گیری از واحدهای مختلف زمان‌بر بود و ناسازگاری و تفاوت در قالب گزارش‌ها اصطکاک ایجاد می‌کرد.',
      en: 'The egg-production industry faces numerous operational obstacles — from production-cost and demand volatility to inventory management and quality control. On top of that, reporting from different departments was time-consuming, and inconsistent, differently-formatted reports created friction.',
    },
    solution: {
      fa: 'داشبوردهای هوش تجاری و سیستم‌های گزارش‌دهی به تیم‌های مختلف امکان دسترسی به داده‌های لحظه‌ای را دادند. این پیاده‌سازی به مدیران ارشد کمک کرد الگوهای کلیدی را شناسایی کنند و در مدیریت موجودی، تولید و فرایندهای کنترل کیفیت بهبودهای داده‌محور ایجاد کنند.',
      en: 'BI dashboards and reporting systems gave the various teams access to real-time data. The implementation helped senior managers identify critical patterns and make data-driven improvements across inventory management, production and quality-control processes.',
    },
    results: [
      { value: { fa: 'لحظه‌ای', en: 'Real-time' }, label: { fa: 'دسترسی تیم‌ها به داده', en: 'Team data access' } },
      { value: { fa: 'داده‌محور', en: 'Data-driven' }, label: { fa: 'مدیریت موجودی و تولید', en: 'Inventory & production' } },
      { value: { fa: 'یکپارچه', en: 'Standardized' }, label: { fa: 'گزارش‌های واحدها', en: 'Departmental reports' } },
    ],
    testimonials: [
      {
        quote: {
          fa: 'استفاده از هوش تجاری به ما این امکان را می‌دهد تا با دقت به چالش‌های موجود در صنعت پاسخ دهیم.',
          en: 'Using business intelligence lets us respond precisely to the challenges that exist in the industry.',
        },
        name: { fa: 'محمد معصومی', en: 'Mohammad Massoumi' },
        role: { fa: 'مدیرعامل صنایع تخم‌مرغ تلاونگ', en: 'CEO, Telavang Egg Industries' },
      },
    ],
    accent: 'orange',
    metaDescription: {
      fa: 'داستان موفقیت صنایع تخم‌مرغ تلاونگ با ویترای: داشبوردهای هوش تجاری برای پاسخ دقیق به نوسان هزینه، تقاضا و کنترل کیفیت.',
      en: 'Telavang Egg Industries success story with Vitray: business-intelligence dashboards for precise responses to cost swings, demand and quality control.',
    },
  },
]

export function getStory(slug: string): SuccessStory | undefined {
  return successStories.find((s) => s.slug === slug)
}

export function pick(value: Bilingual, lang: Lang): string {
  return lang === 'en' ? value.en : value.fa
}
