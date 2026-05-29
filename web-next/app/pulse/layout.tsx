import type { Metadata } from 'next'

const title = 'پالس (Pulse)'
const description =
  'پالس پورتالی متمرکز برای مدیریت و اشتراک‌گذاری گزارش‌های Power BI است — با رابط کاملاً فارسی، تقویم شمسی و کنترل دسترسی دقیق.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/pulse' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/pulse' },
}

export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return children
}
