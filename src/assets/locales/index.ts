import * as deDE from './de-DE';
import * as enUS from './en-US';

export const locales = {
  'de-DE': deDE,
  'en-US': enUS,
} as const;

export type LocaleCode = keyof typeof locales;

function normalizeLanguage(language: string): LocaleCode | null {
  const lang = language.toLowerCase();

  // German browsers: Germany, Austria, Switzerland, or generic German
  if (lang === 'de' || lang.startsWith('de-')) {
    return 'de-DE';
  }

  // English browsers: USA, UK, Canada, Australia, or generic English
  if (lang === 'en' || lang.startsWith('en-')) {
    return 'en-US';
  }

  return null;
}

export function getLocaleCode(): LocaleCode {
  if (typeof window === 'undefined') return 'de-DE';

  // Manual override still works if you ever need it:
  // ?lang=en-US or ?lang=de-DE
  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get('lang');
  if (langFromUrl === 'en-US' || langFromUrl === 'de-DE') {
    return langFromUrl;
  }

  // Browser language detection
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const browserLanguage of browserLanguages) {
    const matchedLocale = normalizeLanguage(browserLanguage);
    if (matchedLocale) return matchedLocale;
  }

  // Default version if browser language is unsupported
  return 'de-DE';
}

export function getLocale() {
  return locales[getLocaleCode()];
}
