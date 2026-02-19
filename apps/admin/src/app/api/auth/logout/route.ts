import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE, getLogoutUrl } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get('locale') || 'en';
  const logoutUrl = getLogoutUrl(locale);

  const response = NextResponse.redirect(logoutUrl);
  response.cookies.delete(AUTH_COOKIE);

  return response;
}
