import fa from '../locales/fa.json'
import en from '../locales/en.json'
import { useLanguage } from '../context/LanguageContext'

type Dict = Record<string, unknown>

function lookup(dict: Dict, key: string): string {
  const parts = key.split('.')
  let current: unknown = dict
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return key
    current = (current as Dict)[part]
  }
  if (typeof current === 'string') return current
  if (import.meta.env.DEV) console.warn(`[i18n] Missing translation key: "${key}"`)
  return key
}

export function useTranslation() {
  const { lang } = useLanguage()
  const dict = lang === 'en' ? (en as Dict) : (fa as Dict)
  return { t: (key: string) => lookup(dict, key), lang }
}
