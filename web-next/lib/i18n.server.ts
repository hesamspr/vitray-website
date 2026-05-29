import 'server-only'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import fa from '@/locales/fa.json'
import en from '@/locales/en.json'
import { LANG_COOKIE, lookup, type Dict, type Lang } from '@/lib/i18n'

export const BRAND: Record<Lang, string> = { fa: 'ویترای', en: 'Vitray' }

const dictionaries: Record<Lang, Dict> = { fa: fa as Dict, en: en as Dict }

export function getDict(lang: Lang): Dict {
  return dictionaries[lang]
}

export async function getLang(): Promise<Lang> {
  const store = await cookies()
  return store.get(LANG_COOKIE)?.value === 'en' ? 'en' : 'fa'
}

export async function getTranslations() {
  const lang = await getLang()
  const dict = getDict(lang)
  const t = (key: string) => lookup(dict, key)
  return { t, lang, dict }
}

// Builds per-route metadata with a language-aware title (read from the cookie).
// Crawlers send no cookie, so they get the Persian title — preserving SEO intent.
// Descriptions stay as authored (Persian) since localized copy isn't available.
export async function routeMetadata(opts: {
  fa: string
  en: string
  description: string
  canonical: string
}): Promise<Metadata> {
  const lang = await getLang()
  const title = lang === 'en' ? opts.en : opts.fa
  return {
    title,
    description: opts.description,
    alternates: { canonical: opts.canonical },
    openGraph: {
      title: `${title} | ${BRAND[lang]}`,
      description: opts.description,
      url: `https://vitrayco.com${opts.canonical}`,
    },
  }
}
