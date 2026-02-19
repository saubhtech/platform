import {
  Controller,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  KeycloakAuthGuard,
  RolesGuard,
  Roles,
  SUPER_ADMIN,
  ADMIN,
  type AuthenticatedUser,
} from '../auth';

/**
 * Admin routes — protected by Keycloak JWT.
 * All endpoints require ADMIN or SUPER_ADMIN role.
 *
 * Usage:
 *   @Roles(ADMIN)          → ADMIN + SUPER_ADMIN can access
 *   @Roles(SUPER_ADMIN)    → only SUPER_ADMIN can access
 *   No @Roles()            → any authenticated Keycloak user
 */
@Controller('admin')
@UseGuards(KeycloakAuthGuard, RolesGuard)
@Roles(ADMIN)
export class AdminController {
  /**
   * GET /api/admin/me
   * Returns the authenticated admin's profile from token.
   */
  @Get('me')
  getAdminProfile(@Request() req: { user: AuthenticatedUser }) {
    return {
      id: req.user.id,
      email: req.user.email,
      username: req.user.username,
      roles: req.user.roles,
    };
  }

  /**
   * GET /api/admin/dashboard
   * TODO: Return admin dashboard stats
   */
  @Get('dashboard')
  getDashboard(@Request() req: { user: AuthenticatedUser }) {
    return {
      message: 'Admin dashboard — TODO',
      user: req.user.username,
      roles: req.user.roles,
    };
  }

  /**
   * GET /api/admin/users
   * TODO: List platform users (SUPER_ADMIN only)
   */
  @Get('users')
  @Roles(SUPER_ADMIN)
  listUsers() {
    return {
      message: 'User management — TODO: implement in future sprint',
      users: [],
    };
  }

  /**
   * GET /api/admin/settings
   * TODO: Platform settings (SUPER_ADMIN only)
   */
  @Get('settings')
  @Roles(SUPER_ADMIN)
  getSettings() {
    return {
      message: 'Platform settings — TODO: implement in future sprint',
    };
  }
}
