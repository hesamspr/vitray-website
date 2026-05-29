'use client'

import { useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { lookup } from '@/lib/i18n'

export function useTranslation() {
  const { lang, dict } = useLanguage()
  const t = useCallback((key: string) => lookup(dict, key), [dict])
  return { t, lang }
}
