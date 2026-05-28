'use client'

import { motion } from 'motion/react';
import {
  FileText,
  BarChart3,
  Trophy,
  ArrowUpLeft,
} from 'lucide-react';

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';
import { usePageTitle } from '@/lib/usePageTitle';

type LinkItem = {
  label: string;
  href: string;
  hint?: string;
};

const contents: LinkItem[] = [
  { label: 'فایل ارائه', href: 'https://vitrayco.com/wp-content/uploads/2022/05/Vitray-Intro-V2.1.pdf', hint: 'PDF' },
  { label: 'BI Adoption Roadmap', href: 'https://vitrayco.com/wp-content/uploads/2022/07/Power-BI-Adoption.pdf', hint: 'PDF' },
  { label: 'راهکار پالـس', href: 'https://vitrayco.com/wp-content/uploads/2023/09/Pulse.pdf', hint: 'PDF' },
];

const stories: LinkItem[] = [
  { label: 'داستان موفقیت هراز', href: 'https://vitrayco.com/haraz-dairy/' },
  { label: 'داستان موفقیت گراد', href: 'https://vitrayco.com/gerad-succuss-story/' },
  { label: 'داستان موفقیت تلاونگ', href: 'https://vitrayco.com/telavang-cs/' },
];

const dashboards: LinkItem[] = [
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

function LinkCard({
  item,
  index,
  icon: Icon,
}: {
  item: LinkItem;
  index: number;
  icon: typeof FileText;
}) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative flex items-center gap-4 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
        <Icon size={16} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{item.label}</p>
        {item.hint && (
          <p className="mt-0.5 text-[11px] text-muted-foreground">{item.hint}</p>
        )}
      </div>
      <ArrowUpLeft
        size={16}
        className="text-muted-foreground/60 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

export default function PrPage() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  usePageTitle();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      {/* محتواها */}
      <div className="mx-auto max-w-5xl px-6 pt-32 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-start gap-2"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            بخش اول
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">محتواها</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contents.map((item, i) => (
            <LinkCard key={item.href} item={item} index={i} icon={FileText} />
          ))}
          {stories.map((item, i) => (
            <LinkCard key={item.href} item={item} index={contents.length + i} icon={Trophy} />
          ))}
        </div>
      </div>

      <div className="h-12" />

      {/* نمونه داشبوردها */}
      <div className="mx-auto max-w-5xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-start gap-2"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            بخش دوم
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">نمونه داشبوردها</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dashboards.map((item, i) => (
            <LinkCard key={item.href} item={item} index={i} icon={BarChart3} />
          ))}
        </div>
      </div>

      <div className="h-16" />

      <Footer />
    </div>
  );
}
