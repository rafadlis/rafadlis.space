'use client'

import { usePathname, useRouter } from 'next/navigation'
import { localeCookie, localeNames, locales, localizedPath, isLocale, type Locale } from '@/lib/i18n/config'

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <label className="language-switcher">
      <span>{label}</span>
      <select value={locale} onChange={(event) => {
        const nextLocale = event.target.value
        if (!isLocale(nextLocale)) return
        document.cookie = `${localeCookie}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
        router.push(`${localizedPath(nextLocale, pathname)}${location.search}${location.hash}`)
      }}>
        {locales.map((value) => <option key={value} value={value} lang={value}>{localeNames[value]}</option>)}
      </select>
    </label>
  )
}
