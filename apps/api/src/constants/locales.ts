/**
 * Supported locale codes (37 languages).
 * Mirrored from @saubhtech/shared — will unify once shared package
 * has a proper CJS build step.
 */
export const SUPPORTED_LOCALES = [
  'en', 'hi', 'bn', 'te', 'mr', 'ta', 'gu', 'kn', 'ml', 'pa',
  'or', 'as', 'mai', 'sa', 'kok', 'doi', 'mni', 'sat', 'ur',
  'ks', 'sd', 'ne', 'ar', 'fr', 'de', 'es', 'pt', 'ru', 'ja',
  'ko', 'zh', 'th', 'vi', 'id', 'ms', 'tr', 'pl',
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
