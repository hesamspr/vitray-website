import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'نرم‌افزار هوش تجاری: راهنمای انتخاب برای کسب‌وکارهای ایرانی'
const description =
  'بهترین نرم‌افزار و پلتفرم هوش تجاری برای کسب‌وکار شما کدام است؟ راهنمای عملی انتخاب بین پیاده‌سازی آن‌پریمیس، هوش تجاری ابری و ابزارهای سلف‌سرویس — مخصوص واقعیت بازار ایران.'

const titleEn = 'BI Software: A Selection Guide for Iranian Businesses'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-software' })
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'آیا Power BI در ایران قابل استفاده است؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'به‌صورت جزئی. Power BI Desktop به‌صورت رایگان قابل دانلود و استفاده فردی است، اما Power BI Service (نسخه ابری مایکروسافت) به دلیل محدودیت‌های پرداخت و صورتحساب برای کسب‌وکارهای ایرانی عملاً در دسترس نیست. مسیر واقعی برای استفاده سازمانی، Power BI Report Server است که به‌صورت آن‌پریمیس روی سرورهای خود سازمان نصب می‌شود.',
      },
    },
    {
      '@type': 'Question',
      name: 'بهترین نرم‌افزار هوش تجاری برای کسب‌وکارهای کوچک در ایران چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'برای کسب‌وکارهای کوچک و متوسط بدون تیم فنی یا زیرساخت سرور، یک پلتفرم هوش تجاری ابری با داشبوردهای آماده (مثل پیکسل ویترای) معمولاً سریع‌تر و مقرون‌به‌صرفه‌تر از پیاده‌سازی کامل آن‌پریمیس است.',
      },
    },
    {
      '@type': 'Question',
      name: 'تفاوت هوش تجاری آن‌پریمیس و ابری چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'در مدل آن‌پریمیس، نرم‌افزار و داده‌ها روی سرورهای خود سازمان نصب و نگهداری می‌شوند — کنترل و امنیت بیشتر، اما نیاز به تیم فنی و زیرساخت. در مدل ابری، سرویس روی زیرساخت میزبان اجرا می‌شود و سازمان فقط به‌صورت مشترک (Subscription) از آن استفاده می‌کند — راه‌اندازی سریع‌تر، بدون نیاز به سرور.',
      },
    },
    {
      '@type': 'Question',
      name: 'آیا می‌توان بدون تیم فنی از نرم‌افزار هوش تجاری استفاده کرد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'بله، در مدل ابری با داشبوردهای از پیش طراحی‌شده. مدل آن‌پریمیس (مانند Power BI Report Server) معمولاً برای نصب اولیه، مدل‌سازی داده و نگهداری به دانش فنی یا همکاری با یک تیم متخصص نیاز دارد.',
      },
    },
    {
      '@type': 'Question',
      name: 'چقدر باید برای نرم‌افزار هوش تجاری هزینه کنم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هزینه به مدل انتخابی بستگی دارد. پیاده‌سازی آن‌پریمیس معمولاً هزینه پروژه‌ای یک‌باره برای زیرساخت، مدل‌سازی داده و داشبورد دارد. مدل ابری معمولاً به‌صورت اشتراک ماهانه قیمت‌گذاری می‌شود و هزینه اولیه بسیار کمتری دارد.',
      },
    },
  ],
}

export default function BiSoftwareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
