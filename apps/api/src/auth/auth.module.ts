import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { KeycloakStrategy } from './keycloak.strategy';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'keycloak' }),
  ],
  providers: [KeycloakStrategy, RolesGuard],
  exports: [PassportModule, RolesGuard],
})
export class AuthModule {}
