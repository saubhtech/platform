import { NextRequest, NextResponse } from 'next/server';
import {
  exchangeCodeForTokens,
  parseJwt,
  extractRoles,
  hasAdminRole,
  AUTH_COOKIE,
  type SessionData,
} from '@/lib/auth';

const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.saubh.tech';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state') || 'en'; // locale from state
  const error = searchParams.get('error');

  // Keycloak returned an error
  if (error) {
    const desc = searchParams.get('error_description') || 'Authentication failed';
    return NextResponse.redirect(
      `${ADMIN_URL}/${state}/login?error=${encodeURIComponent(desc)}`
    );
  }

  // No auth code
  if (!code) {
    return NextResponse.redirect(
      `${ADMIN_URL}/${state}/login?error=${encodeURIComponent('No authorization code received')}`
    );
  }

  try {
    // Exchange code for tokens
    const tokens = await exchangeCodeForTokens(code);
    const payload = parseJwt(tokens.access_token);
    const roles = extractRoles(payload);

    // Reject non-admin users
    if (!hasAdminRole(roles)) {
      return NextResponse.redirect(
        `${ADMIN_URL}/${state}/login?error=${encodeURIComponent('Access denied. You need ADMIN or SUPER_ADMIN role.')}`
      );
    }

    // Build session
    const session: SessionData = {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      idToken: tokens.id_token,
      user: {
        id: payload.sub,
        email: payload.email,
        username: payload.preferred_username,
        roles,
      },
      expiresAt: Date.now() + tokens.expires_in * 1000,
    };

    // Set session cookie and redirect to dashboard
    const response = NextResponse.redirect(`${ADMIN_URL}/${state}`);
    response.cookies.set(AUTH_COOKIE, JSON.stringify(session), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: tokens.expires_in,
    });

    return response;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Authentication failed';
    return NextResponse.redirect(
      `${ADMIN_URL}/${state}/login?error=${encodeURIComponent(message)}`
    );
  }
}
