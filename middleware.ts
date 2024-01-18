import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { StorageKeys } from 'src/shared/constants'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has(StorageKeys.TOKEN)

  if (isAuthenticated) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/', '/profile'],
}
