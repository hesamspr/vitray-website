import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Lang = 'fa' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fa',
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('vitray_lang')
    return saved === 'en' ? 'en' : 'fa'
  })

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'en' ? 'ltr' : 'rtl'
    if (lang === 'en') {
      html.classList.add('lang-en')
    } else {
      html.classList.remove('lang-en')
    }
    localStorage.setItem('vitray_lang', lang)
  }, [lang])

  const toggleLanguage = () => setLang(prev => (prev === 'fa' ? 'en' : 'fa'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
