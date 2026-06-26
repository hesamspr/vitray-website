import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'درباره ویترای'
const description =
  'ویترای از سال ۱۳۹۸ راهکارهای هوش تجاری برای سازمان‌های ایرانی ارائه می‌دهد — بیش از ۱۵۰ پروژه موفق در صنایع تولیدی، پخش، غذایی، فولاد و انرژی. تیمی از متخصصان فناوری و کسب‌وکار.'

const titleEn = 'About Vitray'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/about' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: 'درباره ویترای',
      url: 'https://vitrayco.com/about',
      description,
      mainEntity: {
        '@type': 'Organization',
        '@id': 'https://vitrayco.com/#organization',
        name: 'ویترای',
        alternateName: 'Vitray',
        url: 'https://vitrayco.com',
        foundingDate: '2019',
        logo: 'https://vitrayco.com/Vitray.png',
        description:
          'ویترای ارائه‌دهنده راهکارهای هوش تجاری سازمانی — از مدل‌سازی داده و ETL تا داشبوردهای مدیریتی با Power BI، SSAS و Plex.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+98-21-2286-5619',
          contactType: 'customer service',
          areaServed: 'IR',
          availableLanguage: 'Persian',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'نگارستان ۴، پاسداران',
          addressLocality: 'تهران',
          addressCountry: 'IR',
        },
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
        knowsAbout: [
          'Business Intelligence',
          'Power BI',
          'SSAS Tabular',
          'ETL',
          'داشبورد مدیریتی',
          'هوش تجاری',
          'مدل‌سازی داده',
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ویترای چه کاری می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ویترای راهکارهای هوش تجاری سازمانی طراحی و پیاده‌سازی می‌کند؛ از جمع‌آوری و یکپارچه‌سازی داده تا مدل‌سازی SSAS Tabular، طراحی داشبوردهای Power BI، و پشتیبانی مستمر.',
          },
        },
        {
          '@type': 'Question',
          name: 'ویترای از چه سالی فعالیت می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ویترای از سال ۱۳۹۸ (۲۰۱۹ میلادی) فعالیت می‌کند و تاکنون بیش از ۱۵۰ پروژه هوش تجاری در صنایع مختلف ایرانی به اتمام رسانده است.',
          },
        },
        {
          '@type': 'Question',
          name: 'ویترای با چه صنایعی کار کرده است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ویترای تجربه پیاده‌سازی BI در صنایع تولیدی، پخش و توزیع، لبنیات و غذایی، فولاد و معدن، انرژی، لوازم خانگی، و شرکت‌های هلدینگ دارد.',
          },
        },
      ],
    },
  ],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
