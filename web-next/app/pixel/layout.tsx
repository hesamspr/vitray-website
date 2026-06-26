import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پیکسل — BI ابری برای کسب‌وکارهای کوچک و متوسط'
const description =
  'پیکسل سرویس هوش تجاری ابری ویترای است — بدون سرور، بدون تیم IT، اشتراک ماهانه. داشبوردهای مدیریتی آماده برای فروش، مالی و HR در چند ساعت. مناسب SMB‌هایی که نمی‌خواهند پیاده‌سازی سنگین BI را تحمل کنند.'

const titleEn = 'Pixel — Cloud BI for Small and Mid-Sized Businesses'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pixel' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'پیکسل',
      alternateName: 'Pixel',
      applicationCategory: 'BusinessApplication',
      url: 'https://vitrayco.com/pixel',
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
          name: 'پیکسل چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پیکسل یک سرویس هوش تجاری (BI) کاملاً ابری است که برای کسب‌وکارهای کوچک و متوسط طراحی شده. بدون نیاز به سرور، تیم IT یا زیرساخت محلی، در چند ساعت آماده بهره‌برداری است.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا پیکسل نیاز به سرور یا تیم IT دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'خیر. پیکسل کاملاً ابری است و هیچ سرور محلی یا تیم IT نیاز ندارد. همه چیز در فضای ابری مدیریت می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'پیکسل با چه منابع داده‌ای کار می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پیکسل با پایگاه داده SQL، فایل‌های Excel و CSV، سرویس‌های ابری و سایر منابع داده رایج کسب‌وکارها یکپارچه می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'چقدر طول می‌کشد تا پیکسل آماده بهره‌برداری شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پیکسل در چند ساعت راه‌اندازی می‌شود. بر خلاف راهکارهای BI سنتی که ماه‌ها زمان پیاده‌سازی نیاز دارند، پیکسل به سرعت آماده استفاده است.',
          },
        },
      ],
    },
  ],
}

export default function PixelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
