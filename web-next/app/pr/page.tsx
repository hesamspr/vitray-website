import { SiteNav } from '@/components/ui/site-nav';
import { Footer } from '@/components/ui/footer-section';
import { Reveal } from '@/components/ui/reveal';
import { PrLinkCard, type PrLinkItem } from '@/components/ui/pr-link-card';

const contents: PrLinkItem[] = [
  { label: 'فایل ارائه', href: '/Vitray%20Intro%20V2.1.pdf', hint: 'PDF' },
  { label: 'فایل ارائه نهایی', href: '/Vitray%20Presentation/Vitray-Presentation.html', hint: 'HTML' },
  { label: 'BI Adoption Roadmap', href: '/Power-BI-Adoption.pdf', hint: 'PDF' },
];

const stories: PrLinkItem[] = [
  { label: 'داستان موفقیت هراز', href: 'https://vitrayco.com/haraz-dairy/' },
  { label: 'داستان موفقیت گراد', href: 'https://vitrayco.com/gerad-succuss-story/' },
  { label: 'داستان موفقیت تلاونگ', href: 'https://vitrayco.com/telavang-cs/' },
];

const demos: PrLinkItem[] = [
  { label: 'Plex', href: 'https://plexdemo.vitray.ir/' },
  { label: 'Plex (on-prem host)', href: 'https://demo.vitray.ir' },
  { label: 'Pulse', href: 'https://pulse.vitray.ir' },
  { label: 'Vortex', href: 'https://qa.daana.app/' },
];

const dashboards: PrLinkItem[] = [
  { label: 'داشبورد بازاریابی', href: 'https://app.powerbi.com/view?r=eyJrIjoiOTllMzU0YTYtYjRiOC00NDE5LTk5MWEtMDAyMGI4ODYyYjljIiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9' },
  { label: 'داشبورد فروش', href: 'https://app.powerbi.com/view?r=eyJrIjoiODRhZjJjY2YtYjY0Ni00ZjM4LThiOTktMGRlNDI3M2M2NGY5IiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection879071a21508da2e80b1' },
  { label: 'داشبورد تولید', href: 'https://app.powerbi.com/view?r=eyJrIjoiNTkwY2U1N2YtZDVlNi00ZTcxLThjMTItZmJiYTJkMDllZDEzIiwidCI6IjU2ODY3ODhjLWYxYmQtNDkyOC1iNjMzLTliMTc4Zjc5MmNmMCJ9&embedImagePlaceholder=true' },
  { label: 'داشبورد نگهداری و تعمیرات', href: 'https://app.powerbi.com/view?r=eyJrIjoiZDcxOWJlZjMtZWJmNy00NDcyLWI1MzAtNGE1ZDUyZTY0YTJiIiwidCI6IjU2ODY3ODhjLWYxYmQtNDkyOC1iNjMzLTliMTc4Zjc5MmNmMCJ9' },
  { label: 'داشبورد انبار', href: 'https://app.powerbi.com/view?r=eyJrIjoiNTJlMDA3NTQtOWViNy00M2MxLTg3ZGItMTAzNjQ4MTUxMjYwIiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection' },
  { label: 'داشبورد پخش', href: 'https://app.powerbi.com/view?r=eyJrIjoiYmRhOGIyM2QtMjZlYy00NGIwLWJiMTYtZDUzYjYyMTc3NTU0IiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection' },
  { label: 'داشبورد خدمات پس از فروش', href: 'https://app.powerbi.com/view?r=eyJrIjoiMDUwNzdlOTgtM2YzMy00MGFjLWFkY2EtYmJhNzllMjFlYmI4IiwidCI6IjU2ODY3ODhjLWYxYmQtNDkyOC1iNjMzLTliMTc4Zjc5MmNmMCJ9' },
  { label: 'داشبورد مالی', href: 'https://app.powerbi.com/view?r=eyJrIjoiYjc4ODI5ZTItMzBiYy00ZDk3LTk2M2YtMjVlMTM1ZjRiZTA5IiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection' },
  { label: 'داشبورد منابع انسانی', href: 'https://app.powerbi.com/view?r=eyJrIjoiNWJmOTYyZmEtNGUxZS00ZWExLWI1MjktMWFiMDczZWI3ZWVjIiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection' },
  { label: 'داشبورد منابع انسانی v2.0', href: 'https://app.powerbi.com/view?r=eyJrIjoiMjk1NmIzMGEtNDg1MS00NjU1LTkwN2ItZTZmZTc1MjdiOGI4IiwidCI6IjU2ODY3ODhjLWYxYmQtNDkyOC1iNjMzLTliMTc4Zjc5MmNmMCJ9' },
  { label: 'داشبورد انبار v2.0', href: 'https://app.powerbi.com/view?r=eyJrIjoiYWYxZDM1NWQtY2IyZC00NWE2LWI1ZTMtYTExNDdmMjc3MjZiIiwidCI6IjU2ODY3ODhjLWYxYmQtNDkyOC1iNjMzLTliMTc4Zjc5MmNmMCJ9' },
];

export default function PrPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* محتواها */}
      <div className="mx-auto max-w-5xl px-6 pt-32 py-8">
        <Reveal duration={0.7} className="mb-8 flex flex-col items-center gap-2 text-center">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            بخش اول
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">محتواها</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contents.map((item, i) => (
            <PrLinkCard key={item.href} item={item} index={i} icon="file" />
          ))}
          {stories.map((item, i) => (
            <PrLinkCard key={item.href} item={item} index={contents.length + i} icon="trophy" />
          ))}
        </div>
      </div>

      <div className="h-12" />

      {/* نمونه داشبوردها */}
      <div className="mx-auto max-w-5xl px-6 py-8">
        <Reveal duration={0.7} className="mb-8 flex flex-col items-center gap-2 text-center">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            بخش دوم
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">نمونه داشبوردها</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dashboards.map((item, i) => (
            <PrLinkCard key={item.href} item={item} index={i} icon="chart" />
          ))}
        </div>
      </div>

      <div className="h-12" />

      {/* دمو محصولات */}
      <div className="mx-auto max-w-5xl px-6 py-8">
        <Reveal duration={0.7} className="mb-8 flex flex-col items-center gap-2 text-center">
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            بخش سوم
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">دمو محصولات</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {demos.map((item, i) => (
            <PrLinkCard key={item.href} item={item} index={i} icon="demo" />
          ))}
        </div>
      </div>

      <div className="h-16" />

      <Footer />
    </div>
  );
}
