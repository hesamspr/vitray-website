import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد منابع انسانی با Power BI — ویترای'
const description =
  'داشبورد BI منابع انسانی ویترای: حضور و غیاب، اضافه‌کاری، نرخ ترک خدمت، توسعه مهارت و عملکرد پرسنل به تفکیک واحد. یکپارچه با سیستم‌های حضور، حقوق و دستمزد و ERP.'

const titleEn = 'HR BI Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/hr' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/hr' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد منابع انسانی چه کاربردی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد HR ویترای شاخص‌های کلیدی منابع انسانی از جمله حضور و غیاب، اضافه‌کاری، نرخ ترک خدمت، توسعه مهارت و عملکرد پرسنل را به‌صورت تصویری و تعاملی برای مدیران نمایش می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا داشبورد HR با سیستم‌های حضور و غیاب یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. داشبورد منابع انسانی ویترای با سیستم‌های حضور و غیاب، حقوق و دستمزد، و سیستم‌های ERP مرتبط با HR یکپارچه می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'داشبورد مدیریت منابع انسانی چه شاخص‌هایی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'شاخص‌های کلیدی شامل نرخ غیبت، اضافه‌کاری ماهانه، نرخ ترک خدمت، میانگین سنوات، توزیع پرسنل بر اساس واحد، و شاخص‌های توسعه مهارت است.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
