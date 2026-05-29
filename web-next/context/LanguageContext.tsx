'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { LANG_COOKIE, type Dict, type Lang } from '@/lib/i18n'

interface LanguageContextValue {
  lang: Lang
  dict: Dict
  toggleLanguage: () => void
}

const fallback: LanguageContextValue = {
  lang: 'fa',
  dict: {},
  toggleLanguage: () => {},
}

export const LanguageContext = createContext<LanguageContextValue>(fallback)

export function LanguageProvider({
  lang,
  dict,
  children,
}: {
  lang: Lang
  dict: Dict
  children: ReactNode
}) {
  const router = useRouter()

  const toggleLanguage = () => {
    const next: Lang = lang === 'fa' ? 'en' : 'fa'
    document.cookie = `${LANG_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`
    router.refresh()
  }

  return (
    <LanguageContext.Provider value={{ lang, dict, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
