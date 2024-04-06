import { NextRequest, NextResponse } from 'next/server'
import { getAuthToken } from './lib/use-auth'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const nextResponse = NextResponse.next()
  const authToken = getAuthToken()

  /**
   * Redirect to login page if no auth token
   */
  if (!pathname.startsWith('/auth') && !authToken) return NextResponse.redirect(new URL('/auth/login', req.url))

  /**
   * Redirect to home if user already logged
   */
  if (pathname.startsWith('/auth') && authToken) return NextResponse.redirect(new URL('/', req.url))

  return nextResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
