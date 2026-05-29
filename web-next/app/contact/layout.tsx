import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'تماس با ما'
const description =
  'برای دریافت مشاوره رایگان یا هر سوالی درباره محصولات و راهکارهای هوش تجاری ویترای، با ما در ارتباط باشید.'

const titleEn = 'Contact'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/contact' })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
