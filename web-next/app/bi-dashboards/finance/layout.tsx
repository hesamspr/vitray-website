import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد مالی سازمانی با Power BI — ویترای'
const description =
  'داشبورد هوش تجاری مالی ویترای: پایش روند درآمد، کنترل هزینه (OPEX)، نقدینگی، مانده حساب، چک‌های آتی و پیر شدن مطالبات. یکپارچه با سیستم‌های ERP و حسابداری — از جمله سیستم‌های ایرانی.'

const titleEn = 'Finance BI Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/finance' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/finance' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد مالی چه اطلاعاتی نشان می‌دهد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد مالی ویترای روند درآمد، کنترل هزینه، نقدینگی، چک‌های آتی، سود و زیان، و شاخص‌های کلیدی مالی سازمان را به‌صورت لحظه‌ای و تصویری نمایش می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا داشبورد مالی با سیستم‌های ERP یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. داشبورد مالی ویترای با انواع سیستم‌های ERP از جمله SAP، Oracle، و سیستم‌های حسابداری ایرانی یکپارچه می‌شود و داده‌ها را مستقیم از منبع دریافت می‌کند.',
          },
        },
        {
          '@type': 'Question',
          name: 'داشبورد مالی Power BI چه مزیتی نسبت به گزارش‌های سنتی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد مالی Power BI به‌روزرسانی خودکار دارد، امکان drill-down تا سطح تراکنش را می‌دهد، و تحلیل‌های تعاملی ارائه می‌کند — در حالی که گزارش‌های سنتی ایستا و زمان‌بر هستند.',
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
