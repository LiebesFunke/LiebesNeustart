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
import * as ruRU from './ru-RU';

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
  'ru-RU': ruRU,
} as const;

export type LocaleCode = keyof typeof locales;

const DEFAULT_LOCALE: LocaleCode = 'de-DE';
const GEO_CHECK_KEY = 'geo_lang_checked';

const COUNTRY_TO_LOCALE: Record<string, LocaleCode> = {
  DE: 'de-DE', AT: 'de-AT', CH: 'de-CH',
  US: 'en-US', GB: 'en-US', CA: 'en-US', AU: 'en-US', NZ: 'en-US', IE: 'en-US', ZA: 'en-US',
  FR: 'fr-FR', IT: 'it-IT', ES: 'es-ES',
  NL: 'nl-NL', PL: 'pl-PL', CZ: 'cs-CZ',
  SE: 'sv-SE', NO: 'nb-NO', DK: 'da-DK',
  LV: 'lv-LV', LT: 'lt-LT', IL: 'he-IL',
  RU: 'ru-RU', UA: 'ru-RU', BY: 'ru-RU', KZ: 'ru-RU',
};

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
  if (lang === 'ru' || lang.startsWith('ru-')) return 'ru-RU';
  if (lang === 'en' || lang.startsWith('en-')) return 'en-US';
  return null;
}

function getUrlLocale(): LocaleCode | null {
  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get('lang');
  return isLocaleCode(langFromUrl) ? langFromUrl : null;
}

function getSavedLocale(): LocaleCode | null {
  try {
    const savedLang = localStorage.getItem('preferred_lang');
    return isLocaleCode(savedLang) ? savedLang : null;
  } catch {
    return null;
  }
}

function getBrowserLocale(): LocaleCode | null {
  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  for (const browserLanguage of browserLanguages) {
    const matchedLocale = normalizeLanguage(browserLanguage);
    if (matchedLocale) return matchedLocale;
  }
  return null;
}

async function detectRegionLocale(): Promise<LocaleCode | null> {
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 1200);
    const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    window.clearTimeout(timer);
    if (!response.ok) return null;
    const data = await response.json();
    const countryCode = String(data?.country_code || '').toUpperCase();
    return COUNTRY_TO_LOCALE ?? null;
  } catch {
    return null;
  }
}

function rememberManualChoice(locale: LocaleCode) {
  try {
    localStorage.setItem('preferred_lang', locale);
  } catch {}
}

function scheduleRegionRefinement(currentLocale: LocaleCode) {
  if (typeof window === 'undefined') return;
  if (getUrlLocale()) return;
  try {
    const alreadyChecked = sessionStorage.getItem(GEO_CHECK_KEY);
    if (alreadyChecked === '1') return;
    sessionStorage.setItem(GEO_CHECK_KEY, '1');
  } catch {}
  detectRegionLocale().then((regionLocale) => {
    if (!regionLocale || regionLocale === currentLocale) return;
    const savedLocale = getSavedLocale();
    if (savedLocale) return;
    const browserLocale = getBrowserLocale();
    const shouldRefine =
      !browserLocale ||
      browserLocale === DEFAULT_LOCALE ||
      (browserLocale === 'en-US' && regionLocale !== 'en-US') ||
      (browserLocale === 'de-DE' && (regionLocale === 'de-AT' || regionLocale === 'de-CH'));
    if (!shouldRefine) return;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', regionLocale);
    window.location.replace(url.toString());
  });
}

export function getLocaleCode(): LocaleCode {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const urlLocale = getUrlLocale();
  if (urlLocale) {
    rememberManualChoice(urlLocale);
    return urlLocale;
  }
  const savedLocale = getSavedLocale();
  if (savedLocale) return savedLocale;
  const browserLocale = getBrowserLocale();
  const initialLocale = browserLocale ?? DEFAULT_LOCALE;
  scheduleRegionRefinement(initialLocale);
  return initialLocale;
}

export function getLocale() {
  return locales;
}