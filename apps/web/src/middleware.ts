/**
 * Next.js Middleware — Locale-in-URL routing
 *
 * Detection priority:
 *   1. Cookie saubh_locale (if valid)
 *   2. Accept-Language header
 *   3. Cloudflare cf-ipcountry
 *   4. Default: en-in
 *
 * Behavior:
 *   - Path has no locale prefix → 302 redirect to /{locale}/path
 *   - Path has valid locale prefix → pass through, set cookie
 *   - API routes, static files → skip
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  isValidLocale,
  localeFromAcceptLanguage,
  localeFromCountry,
  DEFAULT_LOCALE,
} from './lib/i18n/locale-map';

const COOKIE_NAME = 'saubh_locale';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ─── Skip: static assets, API, internal Next.js routes ──────────
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/sitemap') ||
    /\.(jpg|jpeg|png|gif|svg|ico|mp4|webm|css|js|woff2?|ttf|eot)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // ─── Check if path already has a valid locale prefix ────────────
  const segments = pathname.split('/');
  const firstSegment = segments[1] ?? '';

  if (isValidLocale(firstSegment)) {
    // Valid locale in URL — pass through and persist in cookie
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, firstSegment, {
      path: '/',
      maxAge: COOKIE_MAX_AGE,
      sameSite: 'lax',
    });
    return res;
  }

  // ─── No locale in URL — detect and redirect ────────────────────
  const detected = detectLocale(req);

  const url = req.nextUrl.clone();
  url.pathname = `/${detected}${pathname === '/' ? '' : pathname}`;

  const res = NextResponse.redirect(url, 302);
  res.cookies.set(COOKIE_NAME, detected, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
  });
  return res;
}

// ─── Locale detection chain ─────────────────────────────────────────

function detectLocale(req: NextRequest): string {
  // 1. Cookie
  const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Accept-Language header
  const fromHeader = localeFromAcceptLanguage(
    req.headers.get('accept-language'),
  );
  if (fromHeader) {
    return fromHeader;
  }

  // 3. Cloudflare cf-ipcountry header
  const fromCountry = localeFromCountry(
    req.headers.get('cf-ipcountry'),
  );
  if (fromCountry) {
    return fromCountry;
  }

  // 4. Default
  return DEFAULT_LOCALE;
}

// ─── Matcher ────────────────────────────────────────────────────────
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
