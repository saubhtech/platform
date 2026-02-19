// Shared utilities for Saubh.Tech platform

import { RTL_LANGS } from '../constants';

/** Check if a language code is RTL */
export function isRtl(langCode: string): boolean {
  return RTL_LANGS.has(langCode);
}

/** Get text direction for a language */
export function getDir(langCode: string): 'ltr' | 'rtl' {
  return isRtl(langCode) ? 'rtl' : 'ltr';
}
