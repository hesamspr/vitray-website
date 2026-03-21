import { Link } from 'react-router-dom';
import { PremiumHero } from '@/components/ui/hero';
import { Button } from '@/components/ui/button';
import { GlowCard } from '@/components/ui/spotlight-card';
import { BarChart2, Briefcase, Database, Home, Info, Lightbulb, Mail, Package, Target, TrendingUp } from 'lucide-react';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { CallToAction } from '@/components/ui/cta-3';
import { Footer } from '@/components/ui/footer-section';
import { FocusCards } from '@/components/ui/focus-cards';
import { motion } from 'motion/react';
import { usePageTitle } from '@/lib/usePageTitle';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';

const BiNavIcon = ({ className }: { className?: string }) => <img src="/fav.png" alt="هوش تجاری" className={className} />;
const PlexNavIcon = ({ className }: { className?: string }) => <img src="/product%20logos/plex%20fav%20white.png" alt="پلکس" className={className} />;
const PixelNavIcon = ({ className }: { className?: string }) => <img src="/product%20logos/Pixel%20Fav%20W.png" alt="پیکسل" className={className} />;
const PulseNavIcon = ({ className }: { className?: string }) => <img src="/product%20logos/Pulse%20Fav%20W.png" alt="پالس" className={className} />;
const AcademyNavIcon = ({ className }: { className?: string }) => <img src="/product%20logos/Academy%20FAV%20White.png" alt="آکادمی" className={className} />;

const navItems = [
  { name: 'خانه', url: '#home', icon: Home },
  {
    name: 'راهکارها',
    url: '#products',
    icon: Package,
    subItems: [
      { name: 'هوش تجاری', url: '/bi-solution', icon: BiNavIcon },
      { name: 'پلکس', url: '/plex', icon: PlexNavIcon },
      { name: 'پالس', url: '/pulse', icon: PulseNavIcon },
      { name: 'پیکسل', url: '/pixel', icon: PixelNavIcon },
      { name: 'آکادمی', url: 'https://academy.vitrayco.com', icon: AcademyNavIcon },
    ],
  },
  { name: 'درباره ما', url: '/about', icon: Info },
  { name: 'تماس با ما', url: '/contact', icon: Mail },
];

const customerSuccessCards = [
  { title: "آب معدنی دماوند",           src: "/customer success/آب معدنی دماوند.webp" },
  { title: "بهداشتی پاکناز",            src: "/customer success/بهداشتی پاکناز.webp" },
  { title: "بهین پخش",                  src: "/customer success/بهین پخش.webp" },
  { title: "تلاونگ",                    src: "/customer success/تلاونگ.webp" },
  { title: "دانا پخش",                  src: "/customer success/دانا پخش.webp" },
  { title: "رسانا کابل",                src: "/customer success/رسانا کابل.webp" },
  { title: "غذایی 202",                 src: "/customer success/غذایی 202.webp" },
  { title: "غذایی خوشگوار",             src: "/customer success/غذایی خوشگوار.webp" },
  { title: "لبنیات هراز",               src: "/customer success/لبنیات هراز.webp" },
  { title: "لبنیات پاک",                src: "/customer success/لبنیات پاک.webp" },
  { title: "لوازم خانگی پاکشوما",       src: "/customer success/لوازم خانگی پاکشوما.webp" },
  { title: "مارال چرم",                 src: "/customer success/مارال چرم.webp" },
  { title: "معدنی و صنعتی چادرملو",     src: "/customer success/معدنی و صنعتی چادرملو.webp" },
  { title: "نوشیدنی بهنوش ایران",       src: "/customer success/نوشیدنی بهنوش ایران.webp" },
  { title: "هلدینگ صبا انرژی",          src: "/customer success/هلدینگ صبا انرژی.webp" },
  { title: "هلدینگ میدکو",              src: "/customer success/هلدینگ میدکو.webp" },
  { title: "پخش آیسان تکنام پویا",      src: "/customer success/پخش آیسان تکنام پویا.webp" },
  { title: "پوشاک گراد",                src: "/customer success/پوشاک گراد.webp" },
  { title: "پیشرو فرآیند بدر",          src: "/customer success/پیشرو فرآیند بدر.webp" },
  { title: "کایل سیمیا",                src: "/customer success/کایل سیمیا.webp" },
];

const whyItems: BentoItem[] = [
  {
    icon: <Briefcase className="w-4 h-4 text-primary" />,
    title: 'آشنایی با کسب‌وکارها',
    description: 'تیم ما با سال‌ها حضور در صنایع مختلف و همکاری با سازمان‌های گوناگون، به‌خوبی با چالش‌ها، نیازها و فرصت‌هایی که در مسیر رشد پیش می‌آیند، آشناست.',
    hasPersistentHover: true,
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-primary" />,
    title: 'سرعت اجرا',
    description: 'تجربه گسترده ما در اجرای پروژه‌های متنوع هوش تجاری، برگ برنده‌ای است که به شما کمک می‌کند با سرعت و دقت به نتایج مورد انتظار دست یابید.',
  },
  {
    icon: <Target className="w-4 h-4 text-primary" />,
    title: 'مشتری‌مداری',
    description: 'در ویترای، موفقیت مشتریانمان نه تنها هدف، بلکه ارزش محوری ماست. رشد و دستاوردهای شما مستقیماً به پیشرفت ما گره خورده است.',
  },
  {
    icon: <Lightbulb className="w-4 h-4 text-primary" />,
    title: 'ابزار و رویکرد درست',
    description: 'رویکرد ما با Semantic Layer مستقل روی SSAS Tabular و فرآیند ETL پیشرفته، نیازهای سازمان‌های بزرگ را فراتر از محدودیت‌های معمول پاسخ می‌دهد.',
  },
];


function imgLogo(src: string, alt: string) {
  return function LogoImg({ className }: { className?: string }) {
    return <img src={src} alt={alt} className={className} style={{ objectFit: 'contain' }} />;
  };
}

const customerLogos = [
  { name: '202 Food',             id:  1, img: imgLogo('/logos/202 Food.png',             '202 Food') },
  { name: 'Abadan',               id:  2, img: imgLogo('/logos/Abadan.png',               'Abadan') },
  { name: 'Alima',                id:  3, img: imgLogo('/logos/Alima.png',                'Alima') },
  { name: 'Aysan Pakhsh',         id:  4, img: imgLogo('/logos/Aysan Pakhsh.png',         'Aysan Pakhsh') },
  { name: 'Badr',                 id:  5, img: imgLogo('/logos/Badr.png',                 'Badr') },
  { name: 'Behin Pakhsh',         id:  6, img: imgLogo('/logos/Behin Pakhsh.png',         'Behin Pakhsh') },
  { name: 'Behnoosh',             id:  7, img: imgLogo('/logos/Behnoosh.png',             'Behnoosh') },
  { name: 'Chador Maloo',         id:  8, img: imgLogo('/logos/Chador Maloo.png',         'Chador Maloo') },
  { name: 'Clever',               id:  9, img: imgLogo('/logos/Clever.png',               'Clever') },
  { name: 'Coca Cola',            id: 10, img: imgLogo('/logos/Coca Cola.png',            'Coca Cola') },
  { name: 'Damavand',             id: 11, img: imgLogo('/logos/Damavand.png',             'Damavand') },
  { name: 'Dana Pakhsh',          id: 12, img: imgLogo('/logos/Dana Pakhsh.png',          'Dana Pakhsh') },
  { name: 'Darik',                id: 13, img: imgLogo('/logos/Darik.png',                'Darik') },
  { name: 'Delester',             id: 14, img: imgLogo('/logos/Delester.png',             'Delester') },
  { name: 'Depoint',              id: 15, img: imgLogo('/logos/Depoint.png',              'Depoint') },
  { name: 'Doogh Abali',          id: 16, img: imgLogo('/logos/Doogh Abali.png',          'Doogh Abali') },
  { name: 'Dorpad Tabriz',        id: 17, img: imgLogo('/logos/Dorpad Tabriz.png',        'Dorpad Tabriz') },
  { name: 'Fanavaran',            id: 18, img: imgLogo('/logos/Fanavaran.png',            'Fanavaran') },
  { name: 'Foolad Saeb',          id: 19, img: imgLogo('/logos/Foolad Saeb.png',          'Foolad Saeb') },
  { name: 'GFT',                  id: 20, img: imgLogo('/logos/GFT.png',                  'GFT') },
  { name: 'Gerad',                id: 21, img: imgLogo('/logos/Gerad.png',                'Gerad') },
  { name: 'Ghadir',               id: 22, img: imgLogo('/logos/Ghadir.png',               'Ghadir') },
  { name: 'Haraz',                id: 23, img: imgLogo('/logos/Haraz.png',                'Haraz') },
  { name: 'Khoshgovar',           id: 24, img: imgLogo('/logos/Khoshgovar.png',           'Khoshgovar') },
  { name: 'Laleh',                id: 25, img: imgLogo('/logos/Laleh.png',                'Laleh') },
  { name: 'Mahsham',              id: 26, img: imgLogo('/logos/Mahsham.png',              'Mahsham') },
  { name: 'Maral',                id: 27, img: imgLogo('/logos/Maral.png',                'Maral') },
  { name: 'Mashiz',               id: 28, img: imgLogo('/logos/Mashiz.png',               'Mashiz') },
  { name: 'Mehr',                 id: 29, img: imgLogo('/logos/Mehr.png',                 'Mehr') },
  { name: 'Midhco',               id: 30, img: imgLogo('/logos/Midhco.png',               'Midhco') },
  { name: 'Miva',                 id: 31, img: imgLogo('/logos/Miva.png',                 'Miva') },
  { name: 'Padide Kavosh',        id: 32, img: imgLogo('/logos/Padide Kavosh.png',        'Padide Kavosh') },
  { name: 'Pak Dairy',            id: 33, img: imgLogo('/logos/Pak Dairy.png',            'Pak Dairy') },
  { name: 'Pak',                  id: 34, img: imgLogo('/logos/Pak.png',                  'Pak') },
  { name: 'Paknaz',               id: 35, img: imgLogo('/logos/Paknaz.png',               'Paknaz') },
  { name: 'Pakshooma',            id: 36, img: imgLogo('/logos/Pakshooma.png',            'Pakshooma') },
  { name: 'Parmidaa',             id: 37, img: imgLogo('/logos/Parmidaa.png',             'Parmidaa') },
  { name: 'Persi Gas',            id: 38, img: imgLogo('/logos/Persi Gas.png',            'Persi Gas') },
  { name: 'Resana',               id: 39, img: imgLogo('/logos/Resana.png',               'Resana') },
  { name: 'Saam',                 id: 40, img: imgLogo('/logos/Saam.png',                 'Saam') },
  { name: 'Saba Energy',          id: 41, img: imgLogo('/logos/Saba Energy.png',          'Saba Energy') },
  { name: 'Salamat Pakhsh',       id: 42, img: imgLogo('/logos/Salamat Pakhsh.png',       'Salamat Pakhsh') },
  { name: 'Sara tel',             id: 43, img: imgLogo('/logos/Sara tel.png',             'Sara tel') },
  { name: 'Simia cable',          id: 44, img: imgLogo('/logos/Simia cable.png',          'Simia cable') },
  { name: 'Somaye',               id: 45, img: imgLogo('/logos/Somaye.png',               'Somaye') },
  { name: 'Taban Pakhsh Salamat', id: 46, img: imgLogo('/logos/Taban Pakhsh Salamat.png','Taban Pakhsh Salamat') },
  { name: 'Tara',                 id: 47, img: imgLogo('/logos/Tara.png',                 'Tara') },
  { name: 'Telavang Pakhsh',      id: 48, img: imgLogo('/logos/Telavang Pakhsh.png',      'Telavang Pakhsh') },
  { name: 'Telavang',             id: 49, img: imgLogo('/logos/Telavang.png',             'Telavang') },
  { name: 'Tohfe Food',           id: 50, img: imgLogo('/logos/Tohfe Food.png',           'Tohfe Food') },
  { name: 'Vitana',               id: 51, img: imgLogo('/logos/Vitana.png',               'Vitana') },
  { name: 'Yaghoot Sanat Tabriz', id: 52, img: imgLogo('/logos/Yaghoot Sanat Tabriz.png','Yaghoot Sanat Tabriz') },
];


export function App() {
  usePageTitle();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      <div id="home">
        <PremiumHero />
      </div>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section id="customers" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
          >
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              مشتریان ما
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              برندهایی که به ما اعتماد کرده‌اند
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              از تیم‌های کوچک تا سازمان‌های بزرگ، همه با ما رشد می‌کنند.
            </p>
          </motion.div>

          <div className="flex justify-center py-2">
            <LogoCarousel columnCount={5} mobileColumnCount={3} logos={customerLogos} />
          </div>
        </section>

        <div className="h-24" />

        <section id="products" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
          >
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              راهکارها
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              ابزارهایی برای هر نیاز کسب‌وکار
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              مجموعه‌ای از راهکارها برای ساخت محصول، تحلیل داده و انتشار گزارش‌ها—از تیم‌های کوچک تا سازمان‌های بزرگ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <GlowCard customSize glowColor="purple" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  هوش تجاری
                </div>
                <img src="/fav.png" alt="هوش تجاری ویترای" className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">هوش تجاری</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  پیاده‌سازی کاملاً سفارشی هوش تجاری برای سازمان‌ها: مدل داده، یکپارچه‌سازی منابع، داشبوردهای مدیریتی و استانداردسازی
                  گزارش‌ها با تمرکز بر کیفیت و حاکمیت داده.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bi-solution">بیشتر بدانید</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  بدون کد
                </div>
                <img src="/product%20logos/plex%20fav%20white.png" alt="پلکس" className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">پلکس (Plex)</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  ابزار توسعه اپلیکیشن بدون کدنویسی برای ساخت سریع پنل‌ها، فرم‌ها و گردش‌کارها—مناسب برای تیم‌هایی که سرعت اجرای
                  ایده برایشان حیاتی است.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/plex">بیشتر بدانید</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="orange" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  اشتراک گذاری
                </div>
                <img src="/product%20logos/Pulse%20Fav%20W.png" alt="پالس" className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">پالس (Pulse)</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  پلتفرم فارسی برای انتشار و اشتراک‌گذاری گزارش‌ها و داشبوردهای BI؛ با مدیریت دسترسی، لینک‌های اشتراک امن و تجربه‌ای
                  مناسب برای ارائه به مدیران و مشتریان.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/pulse">بیشتر بدانید</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="green" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  ابری
                </div>
                <img src="/product%20logos/Pixel%20Fav%20W.png" alt="پیکسل" className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">پیکسل (Pixel)</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  راهکار اقتصادی و میزبانی‌شده در فضای ابری برای کسب‌وکارهای کوچک؛ با راه‌اندازی سریع، هزینه نگهداری پایین و داشبوردهای
                  آماده برای تصمیم‌گیری روزانه.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/pixel">بیشتر بدانید</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <div className="col-span-1 md:col-span-2 flex justify-center">
              <GlowCard customSize glowColor="blue" className="h-[360px] w-full md:w-[calc(50%-8px)]">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                    آموزش
                  </div>
                  <img src="/product%20logos/Academy%20FAV%20White.png" alt="آکادمی ویترای" className="h-8 w-8 object-contain" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl">آکادمی ویترای</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    یادگیری عملی هوش تجاری، مدل‌سازی داده و Power BI با دوره‌های تخصصی فارسی؛ از مبتدی تا حرفه‌ای—مناسب برای تحلیلگران، مدیران و تیم‌های فناوری اطلاعات.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <Button variant="secondary" size="sm" asChild>
                      <a href="https://academy.vitrayco.com" target="_blank" rel="noopener noreferrer">
                        ورود به آکادمی
                      </a>
                    </Button>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        <div className="h-24" />

        <section id="testimonials" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
          >
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              نظرات مشتریان
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              مشتریان ما چه می‌گویند
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              تجربه واقعی کسب‌وکارهایی که با راهکارهای ما رشد کرده‌اند.
            </p>
          </motion.div>

          <FocusCards cards={customerSuccessCards} />
        </section>

        <div className="h-24" />

        <section className="space-y-8">
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
              چه چیزی ما را متفاوت می‌کند
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              چهار دلیل اصلی که سازمان‌ها ویترای را به‌عنوان شریک داده‌ای خود انتخاب می‌کنند.
            </p>
          </motion.div>

          <BentoGrid items={whyItems} />
        </section>

        <div className="h-24" />

        {/* Data Maturity */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-2xl border border-border/60 overflow-hidden">
            {[
              {
                icon: Database,
                title: 'آگاهی از داده',
                en: 'Data Aware',
                body: 'داده‌ها به‌صورت دستی از منابع مختلف گردآوری می‌شوند. تمرکز بر ایجاد درک اولیه از ارزش داده و استانداردسازی گزارش‌هاست.',
              },
              {
                icon: BarChart2,
                title: 'تسلط بر داده',
                en: 'Data Proficient',
                body: 'سازمان از یک پلتفرم متمرکز برای گزارش‌دهی استفاده می‌کند و شاخص‌های کلیدی عملکرد خود را به شکل منظم پایش می‌کند.',
              },
              {
                icon: Lightbulb,
                title: 'هوشمندی داده',
                en: 'Data Savvy',
                body: 'داده‌ها به منبع اصلی تصمیم‌گیری‌های کلیدی تبدیل می‌شوند و تحلیل‌ها نقش تعیین‌کننده در جهت‌گیری‌های سازمان دارند.',
              },
              {
                icon: Target,
                title: 'داده‌محوری',
                en: 'Data Driven',
                body: 'داده در تمامی فرآیندها و تصمیمات سازمان نهادینه می‌شود و تصمیمی بدون اتکا به داده گرفته نمی‌شود.',
              },
            ].map((stage, index) => {
              const Icon = stage.icon;
              const isLastRow = index >= 4 - (4 % 4 || 4);
              return (
                <div
                  key={stage.title}
                  className={cn(
                    "flex flex-col py-10 relative group/feature border-border/60",
                    "lg:border-r",
                    index === 0 && "lg:border-l",
                    !isLastRow && "lg:border-b",
                    index < 2 && "sm:border-b lg:border-b-0",
                    index % 2 === 0 && index < 3 && "sm:border-r lg:border-r-0",
                  )}
                >
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/60 to-transparent pointer-events-none" />
                  <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                    <Icon size={22} />
                  </div>
                  <div className="text-base font-bold mb-2 relative z-10 px-10">
                    <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                    <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-foreground">
                      {stage.title}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
                    {stage.body}
                  </p>
                  <div className="mt-4 relative z-10 px-10">
                    <span className="text-xs text-muted-foreground/50 border border-border/40 px-2 py-0.5 rounded-full" dir="ltr">{stage.en}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}

