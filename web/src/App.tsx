import { Link } from 'react-router-dom';
import { PremiumHero } from '@/components/ui/hero';
import { Button } from '@/components/ui/button';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Briefcase, Home, Info, Lightbulb, Mail, Package, Target, TrendingUp } from 'lucide-react';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { CallToAction } from '@/components/ui/cta-3';
import { Footer } from '@/components/ui/footer-section';
import { FocusCards } from '@/components/ui/focus-cards';
import { motion } from 'motion/react';
import { usePageTitle } from '@/lib/usePageTitle';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';

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
  {
    title: "شرکت هرار",
    src: "/customer success/SCR-20260315-lfys.png",
  },
  {
    title: "پوشاک گراد",
    src: "/customer success/SCR-20260315-lgbx.png",
  },
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
  { name: '202 Food',               id:  1, img: imgLogo('/logos/202 Food.png',               '202 Food') },
  { name: 'A U X',                  id:  2, img: imgLogo('/logos/A U X.png',                  'A U X') },
  { name: 'Abadan',                 id:  3, img: imgLogo('/logos/Abadan (1).png',              'Abadan') },
  { name: 'Alima',                  id:  4, img: imgLogo('/logos/Alima.png',                  'Alima') },
  { name: 'Alis',                   id:  5, img: imgLogo('/logos/Alis.png',                   'Alis') },
  { name: 'Ani Pakhsh',             id:  6, img: imgLogo('/logos/Ani Pakhsh.png',             'Ani Pakhsh') },
  { name: 'Behnoosh',               id:  7, img: imgLogo('/logos/Behnoosh.png',               'Behnoosh') },
  { name: 'Candy',                  id:  8, img: imgLogo('/logos/Candy.png',                  'Candy') },
  { name: 'Chador Maloo',           id:  9, img: imgLogo('/logos/Chador Maloo.png',           'Chador Maloo') },
  { name: 'Coca Cola',              id: 10, img: imgLogo('/logos/Coca Cola.png',              'Coca Cola') },
  { name: 'Coral',                  id: 11, img: imgLogo('/logos/Coral.png',                  'Coral') },
  { name: 'Damavand',               id: 12, img: imgLogo('/logos/Damavand.png',               'Damavand') },
  { name: 'Delester',               id: 13, img: imgLogo('/logos/Delester.png',               'Delester') },
  { name: 'Depoint',                id: 14, img: imgLogo('/logos/Depoint.png',                'Depoint') },
  { name: 'Doogh Abali',            id: 15, img: imgLogo('/logos/Doogh Abali.png',            'Doogh Abali') },
  { name: 'Efes',                   id: 16, img: imgLogo('/logos/Efes.png',                   'Efes') },
  { name: 'Fazl Azabayjan',         id: 17, img: imgLogo('/logos/Fazl Azabayjan.png',         'Fazl Azabayjan') },
  { name: 'GFT',                    id: 18, img: imgLogo('/logos/GFT.png',                    'GFT') },
  { name: 'Gemco',                  id: 19, img: imgLogo('/logos/Gemco.png',                  'Gemco') },
  { name: 'Gerad',                  id: 20, img: imgLogo('/logos/Gerad.png',                  'Gerad') },
  { name: 'Ghadir',                 id: 21, img: imgLogo('/logos/Ghadir.png',                 'Ghadir') },
  { name: 'Goloomak Sazeh',         id: 22, img: imgLogo('/logos/Goloomak Sazeh.png',         'Goloomak Sazeh') },
  { name: 'Haraz',                  id: 23, img: imgLogo('/logos/Haraz.png',                  'Haraz') },
  { name: 'JTI',                    id: 24, img: imgLogo('/logos/JTI.png',                    'JTI') },
  { name: 'KhavarDasht',            id: 25, img: imgLogo('/logos/KhavarDasht.png',            'KhavarDasht') },
  { name: 'Khoshgovar',             id: 26, img: imgLogo('/logos/Khoshgovar.png',             'Khoshgovar') },
  { name: 'Kowsar Saba',            id: 27, img: imgLogo('/logos/Kowsar Saba.png',            'Kowsar Saba') },
  { name: 'Leefood',                id: 28, img: imgLogo('/logos/Leefood.png',                'Leefood') },
  { name: 'Maral',                  id: 29, img: imgLogo('/logos/Maral.png',                  'Maral') },
  { name: 'Midia',                  id: 30, img: imgLogo('/logos/Midia.png',                  'Midia') },
  { name: 'Paak',                   id: 31, img: imgLogo('/logos/Paak.png',                   'Paak') },
  { name: 'Paknaz',                 id: 32, img: imgLogo('/logos/Paknaz.png',                 'Paknaz') },
  { name: 'Pakshoma',               id: 33, img: imgLogo('/logos/Pakshoma.png',               'Pakshoma') },
  { name: 'Parmidaa',               id: 34, img: imgLogo('/logos/Parmidaa.png',               'Parmidaa') },
  { name: 'Sara tel',               id: 35, img: imgLogo('/logos/Sara tel.png',               'Sara tel') },
  { name: 'Shahab',                 id: 36, img: imgLogo('/logos/Shahab.png',                 'Shahab') },
  { name: 'Simcut',                 id: 37, img: imgLogo('/logos/Simcut.png',                 'Simcut') },
  { name: 'Simia cable',            id: 38, img: imgLogo('/logos/Simia cable.png',            'Simia cable') },
  { name: 'Tara',                   id: 39, img: imgLogo('/logos/Tara.png',                   'Tara') },
  { name: 'Techno Life',            id: 40, img: imgLogo('/logos/Techno Life.png',            'Techno Life') },
  { name: 'Tehran Electriv',        id: 41, img: imgLogo('/logos/Tehran Electriv.png',        'Tehran Electriv') },
  { name: 'Telavang',               id: 42, img: imgLogo('/logos/Telavang.png',               'Telavang') },
  { name: 'Tohfe Food',             id: 43, img: imgLogo('/logos/Tohfe Food.png',             'Tohfe Food') },
  { name: 'Vitana',                 id: 44, img: imgLogo('/logos/Vitana.png',                 'Vitana') },
  { name: 'Vitrinnet',              id: 45, img: imgLogo('/logos/Vitrinnet.png',              'Vitrinnet') },
  { name: 'Zarrin Zorrat',          id: 46, img: imgLogo('/logos/Zarrin Zorrat.png',          'Zarrin Zorrat') },
  { name: 'Zerowatt',               id: 47, img: imgLogo('/logos/Zerowatt.png',               'Zerowatt') },
  { name: 'camel',                  id: 48, img: imgLogo('/logos/camel.png',                  'camel') },
  { name: 'jungle',                 id: 49, img: imgLogo('/logos/jungle.png',                 'jungle') },
  { name: 'winston',                id: 50, img: imgLogo('/logos/winston.png',                'winston') },
  { name: 'ایرانول',               id: 51, img: imgLogo('/logos/ایرانول.png',               'ایرانول') },
  { name: 'توسعه اقتصاد ملل',     id: 52, img: imgLogo('/logos/توسعه اقتصاد ملل.png',     'توسعه اقتصاد ملل') },
  { name: 'توسعه سنگ آهن سام',    id: 53, img: imgLogo('/logos/توسعه سنگ آهن سام.png',    'توسعه سنگ آهن سام') },
  { name: 'رسانا کابل',           id: 54, img: imgLogo('/logos/رسانا کابل.png',           'رسانا کابل') },
  { name: 'زنجیره ای رقاه',       id: 55, img: imgLogo('/logos/زنجیره ای رقاه.png',       'زنجیره ای رقاه') },
  { name: 'سرای ایرانی',          id: 56, img: imgLogo('/logos/سرای ایرانی.png',          'سرای ایرانی') },
  { name: 'سمیه',                  id: 57, img: imgLogo('/logos/سمیه.png',                  'سمیه') },
  { name: 'فناوران',               id: 58, img: imgLogo('/logos/فناوران.png',               'فناوران') },
  { name: 'فولاد مشیز بردسیر',   id: 59, img: imgLogo('/logos/فولاد مشیز بردسیر.png',   'فولاد مشیز بردسیر') },
  { name: 'ماهشام',                id: 60, img: imgLogo('/logos/ماهشام.png',                'ماهشام') },
  { name: 'مشفق',                  id: 61, img: imgLogo('/logos/مشفق.png',                  'مشفق') },
  { name: 'میدکو',                 id: 62, img: imgLogo('/logos/میدکو.png',                 'میدکو') },
  { name: 'پاک',                   id: 63, img: imgLogo('/logos/پاک.png',                   'پاک') },
  { name: 'پتروشیمی لاله',        id: 64, img: imgLogo('/logos/پتروشیمی لاله.png',        'پتروشیمی لاله') },
  { name: 'پتروشیمی مهر',         id: 65, img: imgLogo('/logos/پتروشیمی مهر.png',         'پتروشیمی مهر') },
  { name: 'پدیده کاوش ایرانیان', id: 66, img: imgLogo('/logos/پدیده کاوش ایرانیان.png', 'پدیده کاوش ایرانیان') },
  { name: 'پرسی گاز',             id: 67, img: imgLogo('/logos/پرسی گاز.png',             'پرسی گاز') },
];

const customerLogosLoop = Array.from({ length: 3 }).flatMap((_, rep) =>
  customerLogos.map((logo) => ({
    ...logo,
    id: logo.id + rep * 100,
  })),
);

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
            <LogoCarousel columnCount={5} mobileColumnCount={3} logos={customerLogosLoop} />
          </div>
        </section>

        <div className="h-12" />

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

        <div className="h-12" />

        <section id="testimonials" className="relative -mx-6">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
            >
              <div className="flex justify-center">
                <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground">
                  نظرات مشتریان
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mt-5 text-center">
                مشتریان ما چه می‌گویند
              </h2>
              <p className="text-center mt-4 text-muted-foreground text-sm md:text-base">
                تجربه واقعی کسب‌وکارهایی که با راهکارهای ما رشد کرده‌اند.
              </p>
            </motion.div>

            <div className="flex justify-center mt-10">
              <FocusCards cards={customerSuccessCards} />
            </div>
          </div>
        </section>

        <div className="h-12" />

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

      </main>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}

