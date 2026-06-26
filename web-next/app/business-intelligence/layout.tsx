import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({
    fa: 'هوش تجاری چیست؟ + ۸ نمونه داشبورد مدیریتی',
    en: 'What is Business Intelligence? + 8 Management Dashboard Examples',
    description:
      'هوش تجاری (BI) فرآیندی مبتنی بر فناوری برای تحلیل داده و ارائه بینش‌های عملی است. تعریف BI، مراحل پیاده‌سازی، مزایا و ۸ نمونه داشبورد مدیریتی اجرا‌شده توسط تیم ویترای را بشناسید.',
    canonical: '/business-intelligence',
  })
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'هوش تجاری (BI) چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هوش تجاری (Business Intelligence) مجموعه‌ای از فرآیندها، فناوری‌ها و ابزارهایی است که داده‌های خام سازمان را به اطلاعات معنادار و بینش‌های عملی تبدیل می‌کند تا مدیران بتوانند تصمیم‌های بهتری بگیرند.',
      },
    },
    {
      '@type': 'Question',
      name: 'هوش تجاری چه مراحلی دارد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'پیاده‌سازی هوش تجاری معمولاً چهار مرحله دارد: آماده‌سازی داده‌ها (ETL و Data Warehouse)، پرس‌وجو و تحلیل (SSAS و مدل‌سازی)، توزیع شاخص‌های کلیدی (Power BI و گزارش‌ها)، و تأثیر بر تصمیمات تجاری (Insights و Action).',
      },
    },
    {
      '@type': 'Question',
      name: 'مزایای هوش تجاری برای سازمان‌ها چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هوش تجاری به سازمان‌ها کمک می‌کند: تصمیم‌های سریع‌تر و مبتنی بر داده بگیرند، الگوهای پنهان را کشف کنند، هزینه‌ها را کاهش دهند، فرصت‌های رشد را شناسایی کنند، و عملکرد واحدهای مختلف را به‌صورت یکپارچه پایش کنند.',
      },
    },
    {
      '@type': 'Question',
      name: 'تفاوت هوش تجاری (BI) و هوش مصنوعی (AI) چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هوش تجاری بر تحلیل داده‌های تاریخی و گزارش‌دهی تمرکز دارد (چه اتفاقی افتاد؟)، در حالی که هوش مصنوعی از یادگیری ماشین برای پیش‌بینی و خودکارسازی استفاده می‌کند (چه اتفاقی خواهد افتاد؟). بسیاری از پلتفرم‌های مدرن مانند Daana ویترای هر دو قابلیت را ترکیب می‌کنند.',
      },
    },
    {
      '@type': 'Question',
      name: 'Power BI چیست و چه نقشی در هوش تجاری دارد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Power BI ابزار تجسم داده مایکروسافت است که به تیم‌ها امکان می‌دهد داشبوردهای تعاملی و گزارش‌های مدیریتی بسازند. در پروژه‌های هوش تجاری ویترای، Power BI لایه نمایش داده است که به مدل SSAS Tabular متصل می‌شود.',
      },
    },
    {
      '@type': 'Question',
      name: 'پیاده‌سازی هوش تجاری چقدر طول می‌کشد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'بسته به پیچیدگی سازمان و تعداد منابع داده، یک پروژه BI معمولاً بین ۴ تا ۱۶ هفته طول می‌کشد. ویترای پروژه را در پنج مرحله اجرا می‌کند: شناسایی نیاز، جمع‌آوری داده، مدل‌سازی، ساخت داشبورد، و پشتیبانی مستمر.',
      },
    },
    {
      '@type': 'Question',
      name: 'هوش تجاری برای چه صنایعی مناسب است؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هوش تجاری برای تمام صنایع مناسب است. ویترای پروژه‌های BI موفق در صنایع تولیدی، پخش و توزیع، لبنیات و غذایی، فولاد و معدن، انرژی، خدمات مالی، خرده‌فروشی، و هلدینگ‌های سازمانی انجام داده است.',
      },
    },
    {
      '@type': 'Question',
      name: 'داشبورد مدیریتی چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'داشبورد مدیریتی یک صفحه نمایش تعاملی است که شاخص‌های کلیدی عملکرد (KPI) سازمان را به‌صورت تصویری و لحظه‌ای نشان می‌دهد. نمونه‌هایی از داشبوردهای مدیریتی: داشبورد فروش، مالی، HR، تولید، انبار و نگهداری.',
      },
    },
  ],
}

export default function BusinessIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
