import type { Metadata, Viewport } from "next"
import "../globals.css"
import { notFound } from "next/navigation"
import { isLocale, locales, languageAlternates } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"

function openGraphLocale(locale: string) {
  const { language, region } = new Intl.Locale(locale).maximize()
  return `${language}_${region}`
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const title = `Rafadlis — ${dict.selected}`
  const description = `${dict.intro} ${dict.about}`
  return {
  metadataBase: new URL("https://rafadlis.space"),
  title,
  description,
  alternates: { canonical: `/${lang}`, languages: languageAlternates },
  openGraph: { type: "website", url: `/${lang}`, siteName: "Rafadlis", title, description, locale: openGraphLocale(lang), alternateLocale: locales.filter((locale) => locale !== lang).map(openGraphLocale) },
  twitter: { card: "summary", creator: "@rafadlis" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  }
}
export const viewport: Viewport = { themeColor: "#edf3f8" }
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}><body>{children}</body></html>
}
