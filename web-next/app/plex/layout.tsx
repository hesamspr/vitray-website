import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پلکس — پلتفرم نو-کد سازمانی'
const description =
  'پلکس پلتفرم Low-Code ویترای برای ساخت اپلیکیشن‌های سازمانی است — پورتال مالی، پرسنلی، حقوقی و مشتریان بدون کدنویسی. اتصال به ERP، CRM، SQL و API، و گردش‌کارهای هوشمند با تریگر و اکشن.'

const titleEn = 'Plex — No-Code Enterprise App Builder'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/plex' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'پلکس',
      alternateName: 'Plex',
      applicationCategory: 'BusinessApplication',
      url: 'https://vitrayco.com/plex',
      description,
      offers: {
        '@type': 'Offer',
        seller: { '@type': 'Organization', name: 'ویترای', url: 'https://vitrayco.com' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'پلکس چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پلکس یک پلتفرم ساخت اپلیکیشن‌های سازمانی و گردش‌کارهای هوشمند است که بدون نیاز به کدنویسی، امکان ساخت پورتال‌های مالی، پرسنلی، حقوقی و مشتریان را در کوتاه‌ترین زمان ممکن فراهم می‌کند.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا برای استفاده از پلکس به تیم توسعه نرم‌افزار نیاز دارم؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'خیر. پلکس برای ساخت اپلیکیشن‌های سازمانی بدون نیاز به تیم توسعه طراحی شده است. کارشناسان کسب‌وکار می‌توانند مستقیماً اپلیکیشن و گردش‌کار مورد نیاز خود را بسازند.',
          },
        },
        {
          '@type': 'Question',
          name: 'پلکس با چه منابع داده‌ای کار می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پلکس با منابع داده‌ای مانند ERP، CRM، پایگاه داده SQL، فایل‌های Excel و سایر منابع سازمانی یکپارچه می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'چه نوع اپلیکیشن‌هایی را می‌توان با پلکس ساخت؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'با پلکس می‌توان پورتال مالی، پورتال پرسنلی، پورتال حقوقی، پورتال مشتریان، و هر نوع اپلیکیشن سازمانی سفارشی دیگری ساخت.',
          },
        },
      ],
    },
  ],
}

export default function PlexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
