import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد نگهداری و تعمیرات (نت) با Power BI — ویترای'
const description =
  'داشبورد BI نت ویترای: MTTR، MTBF، نرخ تکمیل PM، هزینه تعمیرات به تفکیک دارایی، و نقشه بحرانیت تجهیزات. یکپارچه با CMMS و ERP — از نگهداری واکنشی به نگهداری پیش‌بینانه.'

const titleEn = 'Maintenance BI Dashboard (CMMS + Power BI)'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/maintenance' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/maintenance' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد نگهداری و تعمیرات (نت) چه کاربردی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد نت ویترای تاریخچه خرابی‌ها، هزینه تعمیرات، چرخه نگهداری پیشگیرانه، زمان توقف تجهیزات و سلامت ماشین‌آلات را پایش می‌کند تا مدیران بتوانند از نگهداری واکنشی به نگهداری پیش‌بینانه حرکت کنند.',
          },
        },
        {
          '@type': 'Question',
          name: 'تفاوت نگهداری پیشگیرانه و پیش‌بینانه چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نگهداری پیشگیرانه بر اساس برنامه زمانی ثابت انجام می‌شود، در حالی که نگهداری پیش‌بینانه با استفاده از داده‌های لحظه‌ای تجهیزات، دقیقاً پیش از وقوع خرابی مداخله می‌کند و هزینه‌ها را کاهش می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'داشبورد نت با چه سیستم‌هایی یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد نگهداری و تعمیرات ویترای با سیستم‌های CMMS، ERP، و داده‌های حسگرهای تجهیزات یکپارچه می‌شود.',
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
