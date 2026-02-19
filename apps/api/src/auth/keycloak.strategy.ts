import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';

/**
 * Keycloak JWT payload shape (relevant fields)
 */
export interface KeycloakTokenPayload {
  sub: string;
  email?: string;
  preferred_username?: string;
  realm_access?: {
    roles: string[];
  };
  resource_access?: Record<string, { roles: string[] }>;
  iss: string;
  aud: string | string[];
  exp: number;
  iat: number;
}

/**
 * Validated user object attached to request
 */
export interface AuthenticatedUser {
  id: string;
  email?: string;
  username?: string;
  roles: string[];
}

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor() {
    const keycloakUrl = process.env.KEYCLOAK_URL;
    const realm = process.env.KEYCLOAK_REALM || 'saubh';

    if (!keycloakUrl) {
      throw new Error('KEYCLOAK_URL environment variable is not set');
    }

    const issuerUrl = `${keycloakUrl}/realms/${realm}`;
    const jwksUri = `${issuerUrl}/protocol/openid-connect/certs`;

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      issuer: issuerUrl,
      algorithms: ['RS256'],
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri,
      }),
    });
  }

  /**
   * Called after JWT is verified. Extract roles and build user object.
   */
  validate(payload: KeycloakTokenPayload): AuthenticatedUser {
    if (!payload.sub) {
      throw new UnauthorizedException('Invalid token: missing subject');
    }

    // Extract realm-level roles
    const realmRoles = payload.realm_access?.roles ?? [];

    // Extract client-level roles for our app
    const clientId = process.env.KEYCLOAK_CLIENT_ID || 'saubh-admin-app';
    const clientRoles = payload.resource_access?.[clientId]?.roles ?? [];

    // Merge both role sources
    const roles = [...new Set([...realmRoles, ...clientRoles])];

    return {
      id: payload.sub,
      email: payload.email,
      username: payload.preferred_username,
      roles,
    };
  }
}
