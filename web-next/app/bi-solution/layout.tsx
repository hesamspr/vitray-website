import type { Metadata } from 'next'

const title = 'راهکار هوش تجاری'
const description =
  'از شناسایی نیاز تا داشبوردهای عملیاتی، تیم ویترای در تمام مراحل پیاده‌سازی BI کنارتان می‌ماند تا داده‌هایتان به بینش‌های واقعی تبدیل شوند.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-solution' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-solution' },
}

export default function BiSolutionLayout({ children }: { children: React.ReactNode }) {
  return children
}
