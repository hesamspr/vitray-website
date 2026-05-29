import type { Metadata } from 'next'

const title = 'درباره ما'
const description =
  'شرکت ویترای از سال ۱۳۹۸ به سازمان‌ها کمک می‌کند داده‌های خام را به بینش‌های عملی و قابل اجرا تبدیل کنند؛ تیمی از متخصصان فناوری و کسب‌وکار با راه‌حل‌های نوآورانه هوش تجاری.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
