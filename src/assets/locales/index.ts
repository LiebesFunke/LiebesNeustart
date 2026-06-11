import * as deDE from './de-DE';
import * as enUS from './en-US';

export const locales = {
  'de-DE': deDE,
  'en-US': enUS,
} as const;

export type LocaleCode = keyof typeof locales;

export function getLocaleCode(): LocaleCode {
  if (typeof window === 'undefined') return 'de-DE';
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (lang === 'en-US') return 'en-US';
  return 'de-DE';
}

export function getLocale() {
  return locales[getLocaleCode()];
}

