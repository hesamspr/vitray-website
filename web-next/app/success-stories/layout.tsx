import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داستان‌های موفقیت'
const description =
  'داستان موفقیت مشتریان ویترای؛ کسب‌وکارهایی از صنایع لبنیات، پوشاک، نوشیدنی و تخم‌مرغ که با راهکارهای هوش تجاری ویترای داده‌محور شدند.'

const titleEn = 'Success Stories'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/success-stories' })
}

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return children
}
