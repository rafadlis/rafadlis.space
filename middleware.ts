import { NextRequest, NextResponse } from 'next/server'
import { isLocale, localeCookie, matchLocale, negotiateLocale, localizedPath } from './lib/i18n/config'

// Next.js 15 uses middleware.ts; this convention is named proxy.ts in Next.js 16.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split('/')[1]
  if (isLocale(segment)) return NextResponse.next()

  const url = request.nextUrl.clone()
  const alias = matchLocale(segment)
  if (alias) {
    url.pathname = `/${alias}${pathname.slice(segment.length + 1)}`
  } else {
    const saved = request.cookies.get(localeCookie)?.value
    const locale = saved && isLocale(saved) ? saved : negotiateLocale(request.headers.get('accept-language'))
    url.pathname = localizedPath(locale, pathname)
  }
  const response = NextResponse.redirect(url)
  response.headers.set('Vary', 'Accept-Language, Cookie')
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}

export const config = {
  matcher: ['/((?!api(?:/|$)|_next(?:/|$)|.*\\..*).*)'],
}
