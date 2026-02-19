// Shared types for Saubh.Tech platform

/** Supported language codes (37 languages) */
export type LangCode =
  // Indian languages
  | 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'gu' | 'kn' | 'ml'
  | 'pa' | 'or' | 'as' | 'ur' | 'ne' | 'sa' | 'mai' | 'kok' | 'doi'
  | 'sd' | 'ks' | 'brx' | 'sat' | 'mni'
  // International languages
  | 'ar' | 'zh' | 'fr' | 'de' | 'ja' | 'ko' | 'pt' | 'ru'
  | 'es' | 'th' | 'vi' | 'id' | 'ms' | 'tr';

/** Language definition */
export interface Language {
  code: LangCode;
  name: string;
  nativeName: string;
  script: string;
  dir: 'ltr' | 'rtl';
}

/** Translation key-value map */
export type TranslationMap = Record<string, string>;
