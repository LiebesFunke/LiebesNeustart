import * as deDE from './de-DE';

export const profiles = deDE.profiles;
export const howItWorksSteps = [
  { number: '01', text: 'Kurzes Quiz ausfüllen' },
  { number: '02', text: 'Deine Matches ansehen' },
  { number: '03', text: 'Ganz entspannt kennenlernen' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Diskretion zuerst', description: 'Deine Daten bleiben geschützt. Du entscheidest selbst, wann du Kontakt aufnehmen möchtest.' },
  { icon: 'badge-check' as const, title: 'Verifizierte Profile', description: 'Profile werden geprüft — damit du dich auf echte Kontakte konzentrieren kannst.' },
  { icon: 'heart' as const, title: 'Singles mit ähnlichen Vorstellungen', description: 'Eine 40+ Community für Menschen, die ehrliche Gespräche und echte Nähe schätzen.' },
  { icon: 'map-pin' as const, title: 'Frauen in deiner Nähe', description: 'Lerne Frauen aus deiner Umgebung kennen — unkompliziert, respektvoll und ohne Druck.' },
] as const;

export const quizQuestions = deDE.quizQuestions;
export const footerLinks = deDE.footerLinks;

export const ui = {
  logo: { part1: 'Liebes', part2: 'Neustart' },
  nav: { startFree: 'Kostenlos starten', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', mobileHint: '60-Sekunden-Quiz — danach zu deinen Matches.', lang: 'AT' },
  hero: { badge: 'Exklusive 40+ Community', titleBefore: 'Starte ein', titleAccent: 'neues Kapitel', titleAfter: 'mit jemandem in deiner Nähe.', subtitle: 'Lerne reife, verifizierte Frauen in deiner Umgebung kennen. Kein Druck, keine Spielchen — nur ehrliche Gespräche und echte Verbindungen.', cta: 'Meine Matches ansehen', verifiedProfiles: 'Verifizierte Profile', discreet: '100 % diskret', live: 'LIVE', womenOnline: 'Frauen gerade online', membersOnly: 'Nur für verifizierte Mitglieder', messageHer: 'Jetzt anschreiben' },
  howItWorks: { title: "So funktioniert's" },
  features: { title: 'Warum unsere Community anders ist', subtitle: 'Für reife Singles, die etwas Echtes suchen.' },
  cta: { title: 'Bereit für einen Neuanfang?', subtitle: 'Mach das kurze Quiz und finde Frauen, die wirklich zu dir passen.', button: 'Meine Matches ansehen' },
  footer: { copyright: '© 2026 Zeit für Liebe. Alle Rechte vorbehalten.' },
  quiz: { label: 'Partner-Quiz · 60 Sekunden', questionOf: (current: number, total: number) => `Frage ${current} von ${total}`, close: 'Schließen' },
} as const;

