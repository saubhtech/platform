import { notFound } from 'next/navigation';
import {
  SUPPORTED_LOCALES_SET,
  RTL_LOCALES,
} from '@saubhtech/shared';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES_SET.has(locale)) {
    notFound();
  }

  const dir = RTL_LOCALES.has(locale) ? 'rtl' : 'ltr';
  const lang = locale.split('-')[0]; // e.g. 'hi-in' → 'hi'

  return (
    <html lang={lang} dir={dir}>
      <body>
        <div className="flex min-h-screen">
          {/* ─── Sidebar placeholder ─── */}
          <aside className="w-64 shrink-0 border-r border-gray-200 bg-gray-50 p-4">
            <div className="mb-6 text-lg font-semibold">Saubh Admin</div>
            <nav className="space-y-2 text-sm text-gray-600">
              <a href={`/${locale}`} className="block rounded px-2 py-1 hover:bg-gray-200">
                Dashboard
              </a>
              <a href={`/${locale}/users`} className="block rounded px-2 py-1 hover:bg-gray-200">
                Users
              </a>
              <a href={`/${locale}/businesses`} className="block rounded px-2 py-1 hover:bg-gray-200">
                Businesses
              </a>
            </nav>
          </aside>

          {/* ─── Main content area ─── */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
