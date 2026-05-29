import type { Metadata } from 'next'

const title = 'معرفی و منابع ویترای'
const description =
  'فایل‌های معرفی، نقشه‌راه پیاده‌سازی هوش تجاری و منابع رسمی شرکت ویترای.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/pr' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/pr' },
}

export default function PrLayout({ children }: { children: React.ReactNode }) {
  return children
}
