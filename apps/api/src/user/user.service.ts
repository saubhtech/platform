import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SUPPORTED_LOCALES } from '@saubhtech/shared';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get current user profile.
   * Scoped by businessId for tenant safety.
   */
  async getMe(userId: string, businessId: string) {
    const membership = await this.prisma.userMembership.findFirst({
      where: { userId, businessId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            preferredLocale: true,
            createdAt: true,
          },
        },
        business: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    if (!membership) {
      throw new NotFoundException(
        'User not found in this business context',
      );
    }

    return {
      ...membership.user,
      role: membership.role,
      business: membership.business,
    };
  }

  /**
   * Update user locale preference.
   * Validates locale against SUPPORTED_LOCALES from @saubhtech/shared.
   * Scoped by businessId for tenant safety.
   */
  async updatePreferences(
    userId: string,
    businessId: string,
    dto: UpdatePreferencesDto,
  ) {
    // Validate locale
    if (
      !SUPPORTED_LOCALES.includes(dto.preferred_locale as any)
    ) {
      throw new BadRequestException(
        `Invalid locale '${dto.preferred_locale}'. Supported: ${SUPPORTED_LOCALES.join(', ')}`,
      );
    }

    // Verify user belongs to this business
    const membership = await this.prisma.userMembership.findFirst({
      where: { userId, businessId },
    });

    if (!membership) {
      throw new NotFoundException(
        'User not found in this business context',
      );
    }

    // Update locale
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { preferredLocale: dto.preferred_locale },
      select: {
        id: true,
        email: true,
        preferredLocale: true,
      },
    });

    return user;
  }
}
