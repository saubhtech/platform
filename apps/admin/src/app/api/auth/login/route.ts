import { NextRequest, NextResponse } from 'next/server';
import { getAuthorizationUrl } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get('locale') || 'en';
  const authUrl = getAuthorizationUrl(locale);
  return NextResponse.redirect(authUrl);
}
