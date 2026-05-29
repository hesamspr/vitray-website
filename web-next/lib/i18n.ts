export type Lang = 'fa' | 'en'
export type Dict = Record<string, unknown>

export const LANG_COOKIE = 'vitray_lang'

export function lookup(dict: Dict, key: string): string {
  const parts = key.split('.')
  let current: unknown = dict
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return key
    current = (current as Dict)[part]
  }
  return typeof current === 'string' ? current : key
}
