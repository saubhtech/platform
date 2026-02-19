import {
  Controller,
  Get,
  Patch,
  Body,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';

@Controller('me')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * GET /api/me
   * Returns current user profile + preferredLocale.
   *
   * Auth stub: reads x-user-id and x-business-id from headers.
   * TODO: Replace with Keycloak JWT guard in S8.
   */
  @Get()
  async getMe(
    @Headers('x-user-id') userId: string,
    @Headers('x-business-id') businessId: string,
  ) {
    if (!userId || !businessId) {
      throw new BadRequestException(
        'Missing x-user-id or x-business-id header',
      );
    }
    return this.userService.getMe(userId, businessId);
  }

  /**
   * PATCH /api/me/preferences
   * Updates user preferred locale.
   *
   * Auth stub: reads x-user-id and x-business-id from headers.
   * TODO: Replace with Keycloak JWT guard in S8.
   */
  @Patch('preferences')
  async updatePreferences(
    @Headers('x-user-id') userId: string,
    @Headers('x-business-id') businessId: string,
    @Body() dto: UpdatePreferencesDto,
  ) {
    if (!userId || !businessId) {
      throw new BadRequestException(
        'Missing x-user-id or x-business-id header',
      );
    }
    return this.userService.updatePreferences(userId, businessId, dto);
  }
}
