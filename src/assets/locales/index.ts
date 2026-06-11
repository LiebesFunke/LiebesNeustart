import * as deDE from './de-DE';
import * as enUS from './en-US';
import * as deCH from './de-CH';
import * as deAT from './de-AT';

export const locales = {
  'de-DE': deDE,
  'en-US': enUS,
  'de-CH': deCH,
  'de-AT': deAT,
} as const;

export type LocaleCode = keyof typeof locales;

function normalizeLanguage(language: string): LocaleCode | null {
  const lang = language.toLowerCase();

  if (lang === 'de-ch' || lang.startsWith('de-ch')) return 'de-CH';
  if (lang === 'de-at' || lang.startsWith('de-at')) return 'de-AT';
  if (lang === 'de' || lang.startsWith('de-')) return 'de-DE';
  if (lang === 'en' || lang.startsWith('en-')) return 'en-US';

  return null;
}

export function getLocaleCode(): LocaleCode {
  if (typeof window === 'undefined') return 'de-DE';

  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get('lang');
  if (langFromUrl === 'en-US' || langFromUrl === 'de-DE' || langFromUrl === 'de-CH' || langFromUrl === 'de-AT') {
    return langFromUrl;
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const browserLanguage of browserLanguages) {
    const matchedLocale = normalizeLanguage(browserLanguage);
    if (matchedLocale) return matchedLocale;
  }

  return 'de-DE';
}

export function getLocale() {
  return locales[getLocaleCode()];
}
