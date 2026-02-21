import { NextRequest, NextResponse } from 'next/server';

// ─── Supported locales (must stay in sync with languages.ts) ────────────────
const SUPPORTED_LOCALES = [
  'en', 'hi', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'pa', 'or', 'as',
  'ur', 'ne', 'sa', 'mai', 'kok', 'doi', 'sd', 'ks', 'brx', 'sat', 'mni',
  'ar', 'zh', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'es', 'th', 'vi', 'id', 'ms', 'tr',
];
const DEFAULT_LOCALE = 'en';

// ─── Protected routes that require auth ─────────────────────────────────────
const PROTECTED_PATHS = ['/dashboard'];

/**
 * Detect best locale from Accept-Language header.
 */
function detectLocale(acceptLang: string | null): string {
  if (!acceptLang) return DEFAULT_LOCALE;

  const parts = acceptLang.split(',').map((p) => {
    const [tag, qStr] = p.trim().split(';q=');
    return { tag: tag.trim().toLowerCase(), q: qStr ? parseFloat(qStr) : 1.0 };
  });

  parts.sort((a, b) => b.q - a.q);

  for (const { tag } of parts) {
    // Exact match: "hi" → "hi"
    if (SUPPORTED_LOCALES.includes(tag)) return tag;
    // Prefix match: "hi-IN" → "hi"
    const prefix = tag.split('-')[0];
    if (SUPPORTED_LOCALES.includes(prefix)) return prefix;
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ─── Skip static files, API routes, Next.js internals ────────────
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // ─── Locale detection: redirect bare "/" to "/en" (or detected locale) ──
  if (pathname === '/') {
    const detected = detectLocale(request.headers.get('accept-language'));
    const url = request.nextUrl.clone();
    url.pathname = `/${detected}`;
    return NextResponse.redirect(url);
  }

  // ─── Extract locale from path ────────────────────────────────────
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];

  // If first segment is not a valid locale, redirect to default
  if (!SUPPORTED_LOCALES.includes(maybeLocale)) {
    const detected = detectLocale(request.headers.get('accept-language'));
    const url = request.nextUrl.clone();
    url.pathname = `/${detected}${pathname}`;
    return NextResponse.redirect(url);
  }

  const locale = maybeLocale;
  const restPath = '/' + segments.slice(1).join('/');

  // ─── Auth check for protected routes ─────────────────────────────
  const isProtected = PROTECTED_PATHS.some(
    (p) => restPath === p || restPath.startsWith(p + '/'),
  );

  if (isProtected) {
    const token = request.cookies.get('saubh_token')?.value;

    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/login`;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
