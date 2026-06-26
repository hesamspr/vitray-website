import type { Metadata } from 'next'
import { LanguageProvider } from '@/context/LanguageContext'
import { MotionProvider } from '@/components/ui/motion-provider'
import { getLang, getDict, BRAND } from '@/lib/i18n.server'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang()
  const brand = BRAND[lang]

  const homeTitle =
    lang === 'en'
      ? 'Vitray | Business Intelligence Solutions & Management Dashboards'
      : 'ویترای | راهکارهای هوش تجاری و داشبوردهای مدیریتی'
  const description =
    lang === 'en'
      ? 'Vitray delivers business intelligence solutions, management dashboards, and the Plex, Pixel, and Pulse products — turning data into decisions, from data modeling to operational dashboards.'
      : 'ویترای ارائه‌دهنده راهکارهای هوش تجاری، داشبوردهای مدیریتی و محصولات پلکس، پیکسل و پالس؛ از مدل‌سازی داده تا داشبوردهای عملیاتی، داده را به تصمیم تبدیل می‌کنیم.'
  const ogDescription =
    lang === 'en'
      ? 'Vitray business intelligence solutions and management dashboards that turn data into decisions.'
      : 'راهکارهای هوش تجاری و داشبوردهای مدیریتی ویترای برای تبدیل داده به تصمیم.'

  return {
    metadataBase: new URL('https://vitrayco.com'),
    title: {
      default: homeTitle,
      template: `%s | ${brand}`,
    },
    description,
    applicationName: brand,
    keywords: [
      'هوش تجاری',
      'Business Intelligence',
      'BI',
      'داشبورد مدیریتی',
      'Power BI',
      'Power BI Report Server',
      'SSAS Tabular',
      'تحلیل داده',
      'داده‌کاوی',
      'راهکار هوش تجاری',
      'پیاده‌سازی BI',
      'مشاوره هوش تجاری',
      'ویترای',
      'Vitray',
    ],
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      siteName: brand,
      locale: lang === 'en' ? 'en_US' : 'fa_IR',
      url: 'https://vitrayco.com',
      title: homeTitle,
      description: ogDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: homeTitle,
      description: ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: '/fav.png',
      shortcut: '/fav.png',
      apple: '/fav.png',
    },
  }
}

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'Organization',
    '@id': 'https://vitrayco.com/#organization',
    name: 'ویترای',
    alternateName: 'Vitray',
    url: 'https://vitrayco.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vitrayco.com/Vitray.png',
      width: 200,
      height: 60,
    },
    image: 'https://vitrayco.com/Vitray.png',
    description:
      'ویترای ارائه‌دهنده راهکارهای هوش تجاری سازمانی — داشبوردهای مدیریتی Power BI، مدل SSAS Tabular، پلتفرم‌های Plex، Pixel و Pulse، و فضای کاری هوش مصنوعی Daana.',
    foundingDate: '2019',
    telephone: '+98-21-2286-5619',
    email: 'hello@vitrayco.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'واحد ۵، پلاک ۲۸، نگارستان ۴، پاسداران',
      addressLocality: 'تهران',
      addressCountry: 'IR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-2286-5619',
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: 'Persian',
    },
    sameAs: [
      'https://www.linkedin.com/company/vitrayco',
      'https://www.instagram.com/vitrayco',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'راهکارها و محصولات ویترای',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'راهکار هوش تجاری', url: 'https://vitrayco.com/bi-solution' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Plex', url: 'https://vitrayco.com/plex' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Pixel', url: 'https://vitrayco.com/pixel' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Pulse', url: 'https://vitrayco.com/pulse' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Daana', url: 'https://vitrayco.com/daana' } },
      ],
    },
  },
  {
    '@type': 'WebSite',
    '@id': 'https://vitrayco.com/#website',
    url: 'https://vitrayco.com',
    name: 'ویترای',
    publisher: { '@id': 'https://vitrayco.com/#organization' },
    inLanguage: 'fa',
  },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = await getLang()
  const dict = getDict(lang)

  return (
    <html lang={lang} dir={lang === 'en' ? 'ltr' : 'rtl'} className={lang === 'en' ? 'lang-en' : undefined}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <LanguageProvider lang={lang} dict={dict}>
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
