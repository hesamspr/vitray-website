import Image from 'next/image'
import Link from 'next/link'
import { PremiumHero } from '@/components/ui/hero'
import { Button } from '@/components/ui/button'
import { GlowCard } from '@/components/ui/spotlight-card'
import { BarChart2, Briefcase, Database, Lightbulb, Sparkles, Target, TrendingUp } from 'lucide-react'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { SiteNav } from '@/components/ui/site-nav'
import { CallToAction } from '@/components/ui/cta-3'
import { Footer } from '@/components/ui/footer-section'
import { FocusCards } from '@/components/ui/focus-cards'
import { Reveal } from '@/components/ui/reveal'
import { CategoryList, type Category } from '@/components/ui/category-list'
import { cn } from '@/lib/utils'
import { getTranslations } from '@/lib/i18n.server'
import { DataWorlds } from '@/components/ui/data-worlds'

// Brand names are intentionally kept in Persian — proper nouns, not translated
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
]

const customerLogos = [
  { name: '202 Food',             id:  1, src: '/logos/202 Food.png' },
  { name: 'Abadan',               id:  2, src: '/logos/Abadan.png' },
  { name: 'Alima',                id:  3, src: '/logos/Alima.png' },
  { name: 'Aysan Pakhsh',         id:  4, src: '/logos/Aysan Pakhsh.png' },
  { name: 'Badr',                 id:  5, src: '/logos/Badr.png' },
  { name: 'Behin Pakhsh',         id:  6, src: '/logos/Behin Pakhsh.png' },
  { name: 'Behnoosh',             id:  7, src: '/logos/Behnoosh.png' },
  { name: 'Chador Maloo',         id:  8, src: '/logos/Chador Maloo.png' },
  { name: 'Clever',               id:  9, src: '/logos/Clever.png' },
  { name: 'Coca Cola',            id: 10, src: '/logos/Coca Cola.png' },
  { name: 'Damavand',             id: 11, src: '/logos/Damavand.png' },
  { name: 'Dana Pakhsh',          id: 12, src: '/logos/Dana Pakhsh.png' },
  { name: 'Darik',                id: 13, src: '/logos/Darik.png' },
  { name: 'Delester',             id: 14, src: '/logos/Delester.png' },
  { name: 'Depoint',              id: 15, src: '/logos/Depoint.png' },
  { name: 'Doogh Abali',          id: 16, src: '/logos/Doogh Abali.png' },
  { name: 'Dorpad Tabriz',        id: 17, src: '/logos/Dorpad Tabriz.png' },
  { name: 'Fanavaran',            id: 18, src: '/logos/Fanavaran.png' },
  { name: 'Foolad Saeb',          id: 19, src: '/logos/Foolad Saeb.png' },
  { name: 'GFT',                  id: 20, src: '/logos/GFT.png' },
  { name: 'Gerad',                id: 21, src: '/logos/Gerad.png' },
  { name: 'Ghadir',               id: 22, src: '/logos/Ghadir.png' },
  { name: 'Haraz',                id: 23, src: '/logos/Haraz.png' },
  { name: 'Khoshgovar',           id: 24, src: '/logos/Khoshgovar.png' },
  { name: 'Laleh',                id: 25, src: '/logos/Laleh.png' },
  { name: 'Mahsham',              id: 26, src: '/logos/Mahsham.png' },
  { name: 'Maral',                id: 27, src: '/logos/Maral.png' },
  { name: 'Mashiz',               id: 28, src: '/logos/Mashiz.png' },
  { name: 'Mehr',                 id: 29, src: '/logos/Mehr.png' },
  { name: 'Midhco',               id: 30, src: '/logos/Midhco.png' },
  { name: 'Miva',                 id: 31, src: '/logos/Miva.png' },
  { name: 'Padide Kavosh',        id: 32, src: '/logos/Padide Kavosh.png' },
  { name: 'Pak Dairy',            id: 33, src: '/logos/Pak Dairy.png' },
  { name: 'Pak',                  id: 34, src: '/logos/Pak.png' },
  { name: 'Paknaz',               id: 35, src: '/logos/Paknaz.png' },
  { name: 'Pakshooma',            id: 36, src: '/logos/Pakshooma.png' },
  { name: 'Parmidaa',             id: 37, src: '/logos/Parmidaa.png' },
  { name: 'Persi Gas',            id: 38, src: '/logos/Persi Gas.png' },
  { name: 'Resana',               id: 39, src: '/logos/Resana.png' },
  { name: 'Saam',                 id: 40, src: '/logos/Saam.png' },
  { name: 'Saba Energy',          id: 41, src: '/logos/Saba Energy.png' },
  { name: 'Salamat Pakhsh',       id: 42, src: '/logos/Salamat Pakhsh.png' },
  { name: 'Sara tel',             id: 43, src: '/logos/Sara tel.png' },
  { name: 'Simia cable',          id: 44, src: '/logos/Simia cable.png' },
  { name: 'Somaye',               id: 45, src: '/logos/Somaye.png' },
  { name: 'Taban Pakhsh Salamat', id: 46, src: '/logos/Taban Pakhsh Salamat.png' },
  { name: 'Tara',                 id: 47, src: '/logos/Tara.png' },
  { name: 'Telavang Pakhsh',      id: 48, src: '/logos/Telavang Pakhsh.png' },
  { name: 'Telavang',             id: 49, src: '/logos/Telavang.png' },
  { name: 'Tohfe Food',           id: 50, src: '/logos/Tohfe Food.png' },
  { name: 'Vitana',               id: 51, src: '/logos/Vitana.png' },
  { name: 'Yaghoot Sanat Tabriz', id: 52, src: '/logos/Yaghoot Sanat Tabriz.png' },
]

export default async function HomePage() {
  const { t } = await getTranslations()

  const whyItems: Category[] = [
    { id: 1, icon: <Briefcase className="w-5 h-5" />, title: t('home.why_business'), subtitle: t('home.why_business_body'), featured: true },
    { id: 2, icon: <TrendingUp className="w-5 h-5" />, title: t('home.why_speed'), subtitle: t('home.why_speed_body') },
    { id: 3, icon: <Target className="w-5 h-5" />, title: t('home.why_customer'), subtitle: t('home.why_customer_body') },
    { id: 4, icon: <Lightbulb className="w-5 h-5" />, title: t('home.why_tools'), subtitle: t('home.why_tools_body') },
  ]

  const maturityStages = [
    { icon: Database, title: t('home.stage1_title'), en: 'Data Aware', body: t('home.stage1_body') },
    { icon: BarChart2, title: t('home.stage2_title'), en: 'Data Proficient', body: t('home.stage2_body') },
    { icon: Lightbulb, title: t('home.stage3_title'), en: 'Data Savvy', body: t('home.stage3_body') },
    { icon: Target, title: t('home.stage4_title'), en: 'Data Driven', body: t('home.stage4_body') },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav variant="home" />
      <div id="home">
        <PremiumHero />
      </div>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section id="customers" className="space-y-8">
          <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('home.customers_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('home.customers_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('home.customers_body')}
            </p>
          </Reveal>

          <div className="flex justify-center py-2">
            <LogoCarousel columnCount={5} mobileColumnCount={3} logos={customerLogos} />
          </div>
        </section>

        <div className="h-24" />

        <section id="products" className="space-y-8">
          <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('home.solutions_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('home.solutions_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('home.solutions_body')}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* DAANA — temporarily hidden until product is ready
            <GlowCard customSize glowColor="cyan" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  <Sparkles size={12} />
                  {t('home.daana_badge')}
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
                  <Sparkles size={16} />
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">{t('home.daana_title')}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t('home.daana_body')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/daana">{t('home.learn_more')}</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>
            */}

            <GlowCard customSize glowColor="purple" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {t('home.bi_badge')}
                </div>
                <Image src="/fav.png" alt="BI" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">{t('home.bi_title')}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t('home.bi_body')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/bi-solution">{t('home.learn_more')}</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {t('home.plex_badge')}
                </div>
                <Image src="/product logos/plex fav white.png" alt="Plex" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">{t('home.plex_title')}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t('home.plex_body')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/plex">{t('home.learn_more')}</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="orange" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {t('home.pulse_badge')}
                </div>
                <Image src="/product logos/Pulse Fav W.png" alt="Pulse" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">{t('home.pulse_title')}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t('home.pulse_body')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/pulse">{t('home.learn_more')}</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="green" className="h-[360px] w-full">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {t('home.pixel_badge')}
                </div>
                <Image src="/product logos/Pixel Fav W.png" alt="Pixel" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">{t('home.pixel_title')}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t('home.pixel_body')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/pixel">{t('home.learn_more')}</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="blue" className="h-[360px] w-full md:col-span-2">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {t('home.academy_badge')}
                </div>
                <Image src="/product logos/Academy FAV White.png" alt="Academy" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">{t('home.academy_title')}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t('home.academy_body')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Button variant="secondary" size="sm" asChild>
                    <a href="https://academy.vitrayco.com" target="_blank" rel="noopener noreferrer">
                      {t('home.academy_link')}
                    </a>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ECOSYSTEM SECTION — temporarily hidden
        <div className="h-24" />

        <section id="ecosystem" className="space-y-10">
          <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('home.ecosystem_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('home.ecosystem_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('home.ecosystem_body')}
            </p>
          </Reveal>

          <Reveal>
            <DataWorlds />
          </Reveal>
        </section>

        <div className="h-24" />
        */}

        <section id="testimonials" className="space-y-8">
          <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('home.testimonials_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('home.testimonials_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('home.testimonials_body')}
            </p>
          </Reveal>

          <FocusCards cards={customerSuccessCards} />
        </section>

        <div className="h-24" />

        <section className="space-y-8">
          <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('home.why_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('home.why_diff_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('home.why_diff_body')}
            </p>
          </Reveal>

          <CategoryList categories={whyItems} className="max-w-3xl mx-auto" />
        </section>

        <div className="h-24" />

        {/* Data Maturity */}
        <section className="space-y-8">
          <Reveal className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4">
            <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
              {t('home.maturity_badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              {t('home.maturity_title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {t('home.maturity_body')}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-2xl border border-border/60 overflow-hidden">
            {maturityStages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div
                  key={stage.en}
                  className={cn(
                    "flex flex-col py-10 relative group/feature border-border/60",
                    "lg:border-r",
                    index === 0 && "lg:border-l",
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
              )
            })}
          </div>
        </section>

      </main>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </div>
  )
}
