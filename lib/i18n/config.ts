export const localeNames = {
  'en-GB': 'English (UK)',
  ar: 'العربية',
  ru: 'Русский',
  hi: 'हिन्दी',
  ja: '日本語',
  'zh-CN': '简体中文',
  fil: 'Filipino',
  'es-MX': 'Español (México)',
  ms: 'Bahasa Melayu',
  de: 'Deutsch',
  es: 'Español (España)',
  it: 'Italiano',
  nl: 'Nederlands',
  id: 'Bahasa Indonesia',
  fr: 'Français',
  'pt-BR': 'Português (Brasil)',
  ko: '한국어',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
} as const

export type Locale = keyof typeof localeNames
export const locales = Object.keys(localeNames) as Locale[]
export const defaultLocale: Locale = 'en-GB'
export const localeCookie = 'NEXT_LOCALE'
export const isLocale = (value: string): value is Locale =>
  Object.prototype.hasOwnProperty.call(localeNames, value)

export function matchLocale(value: string): Locale | undefined {
  const normalized = value.toLowerCase()
  const exact = locales.find((locale) => locale.toLowerCase() === normalized)
  if (exact) return exact
  const language = normalized.split('-')[0]
  if (language === 'tl') return 'fil'
  if (isLocale(language)) return language
  return locales.find((locale) => locale.toLowerCase().split('-')[0] === language)
}

export function negotiateLocale(header: string | null): Locale {
  const preferences = (header ?? '').split(',').map((entry) => {
    const [language, ...parameters] = entry.trim().split(';')
    const quality = parameters.find((parameter) => parameter.trim().startsWith('q='))
    const q = quality ? Number(quality.trim().slice(2)) : 1
    return { language, q }
  }).filter(({ language, q }) => language && Number.isFinite(q) && q > 0 && q <= 1)
    .sort((a, b) => b.q - a.q)
  for (const { language } of preferences) {
    const locale = matchLocale(language)
    if (locale) return locale
  }
  return defaultLocale
}

export function localizedPath(locale: Locale, pathname: string): string {
  const segments = pathname.split('/')
  if (isLocale(segments[1] ?? '')) segments.splice(1, 1)
  const rest = segments.join('/')
  return `/${locale}${rest === '/' ? '' : rest}`
}

export const languageAlternates = Object.fromEntries([
  ...locales.map((locale) => [locale, `https://rafadlis.space/${locale}`]),
  ['x-default', `https://rafadlis.space/${defaultLocale}`],
])
