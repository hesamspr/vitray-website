import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import React from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useTranslation } from './useTranslation'

const { faDict, enDict } = vi.hoisted(() => ({
  faDict: { nav: { home: 'خانه' }, nested: { deep: { key: 'مقدار' } } },
  enDict: { nav: { home: 'Home' }, nested: { deep: { key: 'Value' } } },
}))

vi.mock('../locales/fa.json', () => ({ default: faDict }))
vi.mock('../locales/en.json', () => ({ default: enDict }))

function makeWrapper(lang: 'fa' | 'en') {
  return ({ children }: { children: React.ReactNode }) =>
    React.createElement(LanguageContext.Provider, { value: { lang, toggleLanguage: () => {} } }, children)
}

describe('useTranslation', () => {
  it('returns Persian string for fa locale', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper: makeWrapper('fa') })
    expect(result.current.t('nav.home')).toBe('خانه')
  })

  it('returns English string for en locale', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper: makeWrapper('en') })
    expect(result.current.t('nav.home')).toBe('Home')
  })

  it('supports deep nested keys', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper: makeWrapper('en') })
    expect(result.current.t('nested.deep.key')).toBe('Value')
  })

  it('returns key string when key is missing', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper: makeWrapper('en') })
    expect(result.current.t('nav.missing')).toBe('nav.missing')
  })

  it('exposes the active lang value', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper: makeWrapper('en') })
    expect(result.current.lang).toBe('en')
  })
})
