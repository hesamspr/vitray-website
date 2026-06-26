import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد انبار و موجودی با Power BI — ویترای'
const description =
  'داشبورد BI انبار ویترای: روزهای ماندگاری موجودی (DIO)، نرخ گردش کالا، سرمایه گیرافتاده، کالاهای راکد و کند، و پوشش موجودی. یکپارچه با WMS و ERP — برای کنترل سرمایه در گردش.'

const titleEn = 'Warehouse & Inventory BI Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/warehouse' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/warehouse' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد انبار چه شاخص‌هایی را اندازه‌گیری می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد انبار ویترای شاخص‌هایی مانند روزهای ماندگاری موجودی، نرخ گردش کالا، سرمایه گیرافتاده در موجودی راکد، پوشش موجودی، و کالاهای در معرض انقضا را پایش می‌کند.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا داشبورد انبار با سیستم انبارداری یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. داشبورد انبار ویترای با سیستم‌های انبارداری (WMS)، ERP و نرم‌افزارهای حسابداری کالایی یکپارچه می‌شود و داده‌ها را به‌صورت خودکار و لحظه‌ای دریافت می‌کند.',
          },
        },
        {
          '@type': 'Question',
          name: 'چطور داشبورد BI به مدیریت انبار کمک می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد هوش تجاری انبار کمک می‌کند موجودی مازاد شناسایی شود، نقاط سفارش‌گذاری مجدد بهینه شوند، سرمایه در گردش آزاد شود، و از کمبود کالا در زمان اوج تقاضا جلوگیری شود.',
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
