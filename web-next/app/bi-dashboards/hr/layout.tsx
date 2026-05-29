import type { Metadata } from 'next'

const title = 'داشبورد منابع انسانی'
const description =
  'از حضور و غیاب و اضافه‌کاری تا توسعه مهارت و عملکرد — داشبورد منابع انسانی ویترای به شما کمک می‌کند الگوهای پنهان در داده‌های HR را ببینید و چابک‌تر تصمیم بگیرید.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/hr' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/hr' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
