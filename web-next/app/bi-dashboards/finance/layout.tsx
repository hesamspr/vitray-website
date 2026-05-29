import type { Metadata } from 'next'

const title = 'داشبورد مالی'
const description =
  'از روند درآمد و کنترل هزینه تا نقدینگی و چک‌های آتی — داشبورد مالی ویترای تصویری بدون نقطه‌کور از سلامت مالی سازمان به شما می‌دهد.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/finance' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/finance' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
