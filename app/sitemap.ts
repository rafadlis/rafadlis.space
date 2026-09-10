import type { MetadataRoute } from "next"
import { locales, languageAlternates } from "@/lib/i18n/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `https://rafadlis.space/${locale}`,
    alternates: { languages: languageAlternates },
  }))
}
