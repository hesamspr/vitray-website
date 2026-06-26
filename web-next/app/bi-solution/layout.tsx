import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'راهکار هوش تجاری سازمانی'
const description =
  'پیاده‌سازی کامل هوش تجاری با Power BI و SSAS Tabular — از ETL و مدل‌سازی داده تا داشبوردهای مدیریتی C-Level و گزارش‌های عملیاتی روزانه. بیش از ۱۵۰ پروژه موفق در صنایع تولیدی، پخش و هلدینگ.'

const titleEn = 'Enterprise BI Solution'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-solution' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'راهکار هوش تجاری ویترای',
      alternateName: 'Vitray BI Solution',
      serviceType: 'Business Intelligence Consulting',
      url: 'https://vitrayco.com/bi-solution',
      description,
      provider: { '@type': 'Organization', name: 'ویترای', url: 'https://vitrayco.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ویترای چه خدمات هوش تجاری ارائه می‌دهد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ویترای خدمات کاملی از جمله شناسایی نیاز، مدل‌سازی داده، یکپارچه‌سازی با ERP و CRM، طراحی داشبوردهای مدیریتی، و پشتیبانی مستمر پس از راه‌اندازی ارائه می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'فرآیند پیاده‌سازی راهکار هوش تجاری ویترای چگونه است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'فرآیند پیاده‌سازی ویترای شامل پنج مرحله است: شناسایی نیاز و ارزیابی داده، یکپارچه‌سازی منابع داده، مدل‌سازی و طراحی انبار داده، ساخت داشبوردهای مدیریتی، و بهینه‌سازی مستمر.',
          },
        },
        {
          '@type': 'Question',
          name: 'ویترای با چه سیستم‌هایی یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ویترای با سیستم‌های ERP، CRM، پایگاه داده SQL Server و Oracle، فایل‌های Excel، و سایر منابع داده سازمانی یکپارچه می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا راهکار BI ویترای برای سازمان‌های بزرگ مناسب است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. ویترای تجربه پیاده‌سازی موفق در شرکت‌های بزرگ از جمله هلدینگ‌های صنعتی، شرکت‌های پخش و توزیع، و کسب‌وکارهای تولیدی با حجم داده بالا دارد.',
          },
        },
      ],
    },
  ],
}

export default function BiSolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
