import type { Metadata } from 'next'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vitrayco.com'),
  title: {
    default: 'ویترای | راهکارهای هوش تجاری و داشبوردهای مدیریتی',
    template: '%s | ویترای',
  },
  description:
    'ویترای ارائه‌دهنده راهکارهای هوش تجاری، داشبوردهای مدیریتی و محصولات پلکس، پیکسل و پالس؛ از مدل‌سازی داده تا داشبوردهای عملیاتی، داده را به تصمیم تبدیل می‌کنیم.',
  applicationName: 'ویترای',
  keywords: [
    'هوش تجاری',
    'Business Intelligence',
    'BI',
    'داشبورد مدیریتی',
    'Power BI',
    'تحلیل داده',
    'داده‌کاوی',
    'ویترای',
    'Vitray',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'ویترای',
    locale: 'fa_IR',
    url: 'https://vitrayco.com',
    title: 'ویترای | راهکارهای هوش تجاری و داشبوردهای مدیریتی',
    description:
      'راهکارهای هوش تجاری و داشبوردهای مدیریتی ویترای برای تبدیل داده به تصمیم.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ویترای | راهکارهای هوش تجاری و داشبوردهای مدیریتی',
    description:
      'راهکارهای هوش تجاری و داشبوردهای مدیریتی ویترای برای تبدیل داده به تصمیم.',
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ویترای',
  alternateName: 'Vitray',
  url: 'https://vitrayco.com',
  logo: 'https://vitrayco.com/Vitray.png',
  description:
    'ویترای ارائه‌دهنده راهکارهای هوش تجاری، داشبوردهای مدیریتی و محصولات پلکس، پیکسل و پالس.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
