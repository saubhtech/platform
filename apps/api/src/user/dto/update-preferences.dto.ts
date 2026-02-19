import { IsString, IsNotEmpty } from 'class-validator';

export class UpdatePreferencesDto {
  @IsString()
  @IsNotEmpty()
  preferred_locale: string;
}
