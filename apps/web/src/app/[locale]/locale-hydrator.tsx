'use client';

import { useEffect } from 'react';

/**
 * Client component that updates <html> lang/dir attributes
 * and sets the saubh-lang cookie for TranslationProvider compatibility.
 * Renders nothing — purely side-effect.
 */
export function LocaleHydrator({
  lang,
  dir,
}: {
  lang: string;
  dir: 'ltr' | 'rtl';
}) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    // Set saubh-lang cookie so TranslationProvider picks up the right language
    document.cookie = `saubh-lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
  }, [lang, dir]);

  return null;
}
