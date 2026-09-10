import 'server-only'
import type { Locale } from './config'

export type Dictionary = typeof import('./dictionaries/en-GB.json')

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  'en-GB': () => import('./dictionaries/en-GB.json').then((module) => module.default),
  'ar': () => import('./dictionaries/ar.json').then((module) => module.default),
  'ru': () => import('./dictionaries/ru.json').then((module) => module.default),
  'hi': () => import('./dictionaries/hi.json').then((module) => module.default),
  'ja': () => import('./dictionaries/ja.json').then((module) => module.default),
  'zh-CN': () => import('./dictionaries/zh-CN.json').then((module) => module.default),
  'fil': () => import('./dictionaries/fil.json').then((module) => module.default),
  'es-MX': () => import('./dictionaries/es-MX.json').then((module) => module.default),
  'ms': () => import('./dictionaries/ms.json').then((module) => module.default),
  'de': () => import('./dictionaries/de.json').then((module) => module.default),
  'es': () => import('./dictionaries/es.json').then((module) => module.default),
  'it': () => import('./dictionaries/it.json').then((module) => module.default),
  'nl': () => import('./dictionaries/nl.json').then((module) => module.default),
  'id': () => import('./dictionaries/id.json').then((module) => module.default),
  'fr': () => import('./dictionaries/fr.json').then((module) => module.default),
  'pt-BR': () => import('./dictionaries/pt-BR.json').then((module) => module.default),
  'ko': () => import('./dictionaries/ko.json').then((module) => module.default),
  'tr': () => import('./dictionaries/tr.json').then((module) => module.default),
  'vi': () => import('./dictionaries/vi.json').then((module) => module.default),
  'th': () => import('./dictionaries/th.json').then((module) => module.default),
}

export const getDictionary = (locale: Locale): Promise<Dictionary> => dictionaries[locale]()
