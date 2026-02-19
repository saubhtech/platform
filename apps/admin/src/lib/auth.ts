import { cookies } from 'next/headers';

// ─── Keycloak OIDC Config ─────────────────────────────────────────────────
const KEYCLOAK_URL = process.env.KEYCLOAK_URL || 'https://admin.saubh.tech/auth';
const KEYCLOAK_REALM = process.env.KEYCLOAK_REALM || 'saubh';
const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID || 'saubh-admin-app';
const KEYCLOAK_CLIENT_SECRET = process.env.KEYCLOAK_CLIENT_SECRET || '';
const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.saubh.tech';

const REALM_URL = `${KEYCLOAK_URL}/realms/${KEYCLOAK_REALM}`;

export const AUTH_COOKIE = 'saubh_admin_session';
export const ALLOWED_ROLES = ['SUPER_ADMIN', 'ADMIN'];

// ─── OIDC Endpoints ───────────────────────────────────────────────────────
export function getAuthorizationUrl(locale: string = 'en'): string {
  const params = new URLSearchParams({
    client_id: KEYCLOAK_CLIENT_ID,
    response_type: 'code',
    scope: 'openid profile email',
    redirect_uri: `${ADMIN_URL}/api/auth/callback`,
    state: locale,
  });
  return `${REALM_URL}/protocol/openid-connect/auth?${params}`;
}

export function getLogoutUrl(locale: string = 'en'): string {
  const params = new URLSearchParams({
    client_id: KEYCLOAK_CLIENT_ID,
    post_logout_redirect_uri: `${ADMIN_URL}/${locale}/login`,
  });
  return `${REALM_URL}/protocol/openid-connect/logout?${params}`;
}

// ─── Token Exchange ───────────────────────────────────────────────────────
export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  token_type: string;
}

export async function exchangeCodeForTokens(code: string): Promise<TokenResponse> {
  const res = await fetch(`${REALM_URL}/protocol/openid-connect/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: KEYCLOAK_CLIENT_ID,
      client_secret: KEYCLOAK_CLIENT_SECRET,
      code,
      redirect_uri: `${ADMIN_URL}/api/auth/callback`,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Token exchange failed: ${error}`);
  }

  return res.json();
}

// ─── Token Parsing ────────────────────────────────────────────────────────
export interface TokenPayload {
  sub: string;
  email?: string;
  preferred_username?: string;
  realm_access?: { roles: string[] };
  exp: number;
}

export function parseJwt(token: string): TokenPayload {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const json = Buffer.from(base64, 'base64').toString('utf-8');
  return JSON.parse(json);
}

export function extractRoles(payload: TokenPayload): string[] {
  return payload.realm_access?.roles ?? [];
}

export function hasAdminRole(roles: string[]): boolean {
  return roles.some((role) => ALLOWED_ROLES.includes(role));
}

// ─── Session ──────────────────────────────────────────────────────────────
export interface SessionData {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  user: {
    id: string;
    email?: string;
    username?: string;
    roles: string[];
  };
  expiresAt: number;
}

export async function getSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(AUTH_COOKIE);
  if (!cookie) return null;

  try {
    const session: SessionData = JSON.parse(cookie.value);

    // Check if token is expired
    if (Date.now() >= session.expiresAt) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}
