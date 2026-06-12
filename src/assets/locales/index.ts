import * as deDE from './de-DE';
import * as enUS from './en-US';
import * as deCH from './de-CH';
import * as deAT from './de-AT';
import * as plPL from './pl-PL';
import * as nlNL from './nl-NL';
import * as nbNO from './nb-NO';
import * as svSE from './sv-SE';
import * as daDK from './da-DK';
import * as frFR from './fr-FR';
import * as itIT from './it-IT';
import * as esES from './es-ES';
import * as csCZ from './cs-CZ';
import * as lvLV from './lv-LV';
import * as ltLT from './lt-LT';
import * as heIL from './he-IL';

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
  'fr-FR': frFR,
  'it-IT': itIT,
  'es-ES': esES,
  'cs-CZ': csCZ,
  'lv-LV': lvLV,
  'lt-LT': ltLT,
  'he-IL': heIL,
} as const;

export type LocaleCode = keyof typeof locales;

function isLocaleCode(value: string | null): value is LocaleCode {
  return Boolean(value && value in locales);
}

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
  if (lang === 'fr' || lang.startsWith('fr-')) return 'fr-FR';
  if (lang === 'it' || lang.startsWith('it-')) return 'it-IT';
  if (lang === 'es' || lang.startsWith('es-')) return 'es-ES';
  if (lang === 'cs' || lang.startsWith('cs-')) return 'cs-CZ';
  if (lang === 'lv' || lang.startsWith('lv-')) return 'lv-LV';
  if (lang === 'lt' || lang.startsWith('lt-')) return 'lt-LT';
  if (lang === 'he' || lang.startsWith('he-') || lang === 'iw' || lang.startsWith('iw-')) return 'he-IL';
  if (lang === 'en' || lang.startsWith('en-')) return 'en-US';

  return null;
}

function getBrowserLocale(): LocaleCode | null {
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const browserLanguage of browserLanguages) {
    const matchedLocale = normalizeLanguage(browserLanguage);
    if (matchedLocale) return matchedLocale;
  }
  return null;
}

export function getLocaleCode(): LocaleCode {
  if (typeof window === 'undefined') return 'de-DE';

  // 1. Automatic browser language detection is the priority.
  const browserLocale = getBrowserLocale();
  if (browserLocale) return browserLocale;

  // 2. Manual choice is used only if automatic detection cannot match a supported language.
  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get('lang');
  if (isLocaleCode(langFromUrl)) return langFromUrl;

  try {
    const savedLang = localStorage.getItem('preferred_lang');
    if (isLocaleCode(savedLang)) return savedLang;
  } catch {
    // ignore localStorage errors
  }

  // 3. Default fallback: German.
  return 'de-DE';
}

export function getLocale() {
  return locales[getLocaleCode()];
}
