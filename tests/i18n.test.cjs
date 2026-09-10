const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const ts = require('typescript')
const { NextRequest } = require('next/server')

// Transpile only the modules under test, without a Next build or dev server.
const root = path.resolve(__dirname, '..')
const cache = new Map()
let navigatedTo
const navigation = {
  notFound() { throw new Error('NEXT_NOT_FOUND') },
  usePathname: () => '/ar',
  useRouter: () => ({ push: (url) => { navigatedTo = url } }),
}
function load(file) {
  const resolved = ['', '.ts', '.tsx', '.json'].map((ext) => file + ext).find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
  if (!resolved) throw new Error(`Module missing: ${file}`)
  if (resolved.endsWith('.json')) return JSON.parse(fs.readFileSync(resolved, 'utf8'))
  if (cache.has(resolved)) return cache.get(resolved).exports
  const module = { exports: {} }
  cache.set(resolved, module)
  const code = ts.transpileModule(fs.readFileSync(resolved, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
  }).outputText
  const localRequire = (name) => {
    if (name === 'server-only' || name.endsWith('.css')) return {}
    if (name === 'next/navigation') return navigation
    if (name.startsWith('@/')) return load(path.join(root, name.slice(2)))
    if (name.startsWith('.')) return load(path.resolve(path.dirname(resolved), name))
    return require(name)
  }
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports)
  return module.exports
}
const config = load(path.join(root, 'lib/i18n/config.ts'))
const { middleware, config: middlewareConfig } = load(path.join(root, 'middleware.ts'))
const { getDictionary } = load(path.join(root, 'lib/i18n/dictionaries.ts'))
const page = load(path.join(root, 'app/[lang]/page.tsx')).default
const layout = load(path.join(root, 'app/[lang]/layout.tsx'))
const sitemap = load(path.join(root, 'app/sitemap.ts')).default

function elements(element) {
  if (!element || typeof element !== 'object') return []
  return [element, ...[element.props?.children].flat(Infinity).flatMap(elements)]
}
function textContent(element) {
  if (typeof element === 'string' || typeof element === 'number') return String(element)
  if (!element || typeof element !== 'object') return ''
  return [element.props?.children].flat(Infinity).map(textContent).join('')
}

test('all requested locales and additional languages have complete dictionaries and rendered content', async () => {
  assert.equal(config.locales.length, 20)
  const english = await getDictionary('en-GB')
  for (const lang of config.locales) {
    const dict = await getDictionary(lang)
    assert.deepEqual(Object.keys(dict).sort(), Object.keys(english).sort())
    for (const value of Object.values(dict)) assert.ok(typeof value === 'string' && value.trim().length > 0)
    if (lang !== 'en-GB') assert.notEqual(dict.headline, english.headline)
    assert.ok(dict.count.includes('{count}'))
    const tree = await page({ params: Promise.resolve({ lang }) })
    const text = textContent(tree)
    for (const key of ['skip', 'hello', 'headline', 'intro', 'about', 'selected', 'visit', 'agrasis', 'sapada', 'struk', 'personal']) assert.ok(text.includes(dict[key]), `${lang}: ${key}`)
    assert.ok(elements(tree).some((element) => element.props?.href === 'https://instagram.com/rafadlis'))
    assert.ok(!elements(tree).some((element) => element.props?.href?.startsWith('mailto:')))
    assert.ok(text.includes(dict.count.replace('{count}', new Intl.NumberFormat(lang).format(4))))
    assert.ok(elements(tree).some((element) => element.props?.href === `/${lang}`))
    const html = await layout.default({ children: tree, params: Promise.resolve({ lang }) })
    assert.equal(html.type, 'html')
    assert.equal(html.props.lang, lang)
    assert.equal(html.props.dir, lang === 'ar' ? 'rtl' : 'ltr')
    const metadata = await layout.generateMetadata({ params: Promise.resolve({ lang }) })
    assert.ok(metadata.title.includes(dict.selected))
    assert.equal(metadata.alternates.canonical, `/${lang}`)
    assert.match(metadata.openGraph.locale, /^[a-z]{2,3}_[A-Z]{2}$/)
    assert.equal(Object.keys(metadata.alternates.languages).length, 21)
  }
  assert.deepEqual(layout.generateStaticParams().map(({ lang }) => lang), config.locales)
  assert.deepEqual(sitemap().map(({ url }) => url), config.locales.map((locale) => `https://rafadlis.space/${locale}`))
})

test('browser negotiation respects quality, regional variants, aliases, and fallback', () => {
  for (const lang of config.locales) assert.equal(config.negotiateLocale(lang), lang)
  const cases = [
    ['de;q=0.4,ja-JP;q=0.9,en;q=0.8', 'ja'], ['ar-SA', 'ar'], ['hi-IN', 'hi'],
    ['en-US', 'en-GB'], ['es-ES', 'es'], ['es-MX', 'es-MX'], ['tl-PH', 'fil'],
    ['zh-Hans-CN', 'zh-CN'], ['pt-PT', 'pt-BR'], ['ru;q=0,de;q=1', 'de'],
    ['ru;q=oops,fr;q=0.8', 'fr'], ['zz, *;q=0.1', 'en-GB'], [null, 'en-GB'],
  ]
  for (const [header, expected] of cases) assert.equal(config.negotiateLocale(header), expected)
  assert.equal(config.isLocale('toString'), false)
})

test('middleware redirects once, retains query strings, and respects saved choices', () => {
  const response = middleware(new NextRequest('https://rafadlis.space/?from=share', { headers: { 'accept-language': 'ja-JP' } }))
  assert.equal(response.headers.get('location'), 'https://rafadlis.space/ja?from=share')
  assert.equal(response.headers.get('cache-control'), 'private, no-store')
  for (const lang of config.locales) assert.equal(middleware(new NextRequest(`https://rafadlis.space/${lang}`)).headers.get('location'), null)
  assert.equal(middleware(new NextRequest('https://rafadlis.space/', { headers: { cookie: 'NEXT_LOCALE=de', 'accept-language': 'ja' } })).headers.get('location'), 'https://rafadlis.space/de')
  assert.equal(middleware(new NextRequest('https://rafadlis.space/', { headers: { cookie: 'NEXT_LOCALE=invalid', 'accept-language': 'ja' } })).headers.get('location'), 'https://rafadlis.space/ja')
  assert.equal(middleware(new NextRequest('https://rafadlis.space/en-US?x=1')).headers.get('location'), 'https://rafadlis.space/en-GB?x=1')
  const matcher = new RegExp(`^${middlewareConfig.matcher[0]}$`)
  for (const pathname of ['/api', '/api/contact', '/_next/static/a.js', '/favicon.ico', '/robots.txt', '/sitemap.xml', '/site.webmanifest', '/apple-touch-icon.png']) assert.equal(matcher.test(pathname), false, pathname)
  for (const pathname of ['/', '/ar', '/de/projects']) assert.equal(matcher.test(pathname), true)
})

test('invalid locales return not found rather than loading an undefined dictionary', async () => {
  for (const lang of ['xx', 'toString', '__proto__']) {
    await assert.rejects(() => page({ params: Promise.resolve({ lang }) }), /NEXT_NOT_FOUND/)
    await assert.rejects(() => layout.default({ children: null, params: Promise.resolve({ lang }) }), /NEXT_NOT_FOUND/)
  }
})

test('language selection persists preference and preserves query and anchor', () => {
  const { LanguageSwitcher } = load(path.join(root, 'components/language-switcher.tsx'))
  global.document = { cookie: '' }
  global.location = { protocol: 'https:', search: '?ref=test', hash: '#projects' }
  try {
    const tree = LanguageSwitcher({ locale: 'ar', label: 'اللغة' })
    const select = elements(tree).find((element) => element.type === 'select')
    assert.equal(select.props.value, 'ar')
    assert.equal(elements(select).filter((element) => element.type === 'option').length, 20)
    select.props.onChange({ target: { value: 'es-MX' } })
    assert.equal(navigatedTo, '/es-MX?ref=test#projects')
    assert.match(document.cookie, /^NEXT_LOCALE=es-MX; Path=\/; Max-Age=31536000; SameSite=Lax; Secure$/)
    assert.equal(config.localizedPath('de', '/ja/projects'), '/de/projects')
  } finally {
    delete global.document
    delete global.location
  }
})
