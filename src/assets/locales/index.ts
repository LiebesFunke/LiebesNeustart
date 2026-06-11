import * as deDE from './de-DE';
import * as enUS from './en-US';
import * as deCH from './de-CH';
import * as deAT from './de-AT';
import * as plPL from './pl-PL';
import * as nlNL from './nl-NL';
import * as nbNO from './nb-NO';
import * as svSE from './sv-SE';
import * as daDK from './da-DK';

export const locales = {
  'de-DE': deDE,
  'en-US': enUS,
  'de-CH': deCH,
  'de-AT': deAT,
  'pl-PL': plPL,
  'nl-NL': nlNL,
  'nb-NO': nbNO,
  'sv-SE': svSE,
  'da-DK': daDK,
} as const;

export type LocaleCode = keyof typeof locales;

function normalizeLanguage(language: string): LocaleCode | null {
  const lang = language.toLowerCase();

  if (lang === 'de-ch' || lang.startsWith('de-ch')) return 'de-CH';
  if (lang === 'de-at' || lang.startsWith('de-at')) return 'de-AT';
  if (lang === 'de' || lang.startsWith('de-')) return 'de-DE';
  if (lang === 'pl' || lang.startsWith('pl-')) return 'pl-PL';
  if (lang === 'nl' || lang.startsWith('nl-')) return 'nl-NL';
  if (lang === 'no' || lang.startsWith('no-') || lang === 'nb' || lang.startsWith('nb-') || lang === 'nn' || lang.startsWith('nn-')) return 'nb-NO';
  if (lang === 'sv' || lang.startsWith('sv-')) return 'sv-SE';
  if (lang === 'da' || lang.startsWith('da-')) return 'da-DK';
  if (lang === 'en' || lang.startsWith('en-')) return 'en-US';

  return null;
}

export function getLocaleCode(): LocaleCode {
  if (typeof window === 'undefined') return 'de-DE';

  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get('lang');
  if (langFromUrl && langFromUrl in locales) return langFromUrl as LocaleCode;

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
