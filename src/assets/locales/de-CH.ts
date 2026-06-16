import * as deDE from './de-DE';

export const profiles = deDE.profiles;
export const howItWorksSteps = [
  { number: '01', text: 'Kurzes Quiz ausfüllen' },
  { number: '02', text: 'Passende Profile ansehen' },
  { number: '03', text: 'Diskret Kontakt aufnehmen' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privatsphäre zuerst', description: 'Deine Angaben bleiben geschützt. Diskretion und ein respektvoller Umgang stehen bei uns im Mittelpunkt.' },
  { icon: 'badge-check' as const, title: 'Geprüfte Profile', description: 'Profile werden sorgfältig geprüft — für mehr Vertrauen und weniger Enttäuschungen.' },
  { icon: 'heart' as const, title: 'Menschen mit ähnlichen Werten', description: 'Eine 40+ Community für Singles, die echte Gespräche, Vertrauen und Niveau schätzen.' },
  { icon: 'map-pin' as const, title: 'Kontakte in deiner Nähe', description: 'Lerne Frauen aus deiner Umgebung kennen — entspannt, diskret und ohne Druck.' },
] as const;

export const quizQuestions = deDE.quizQuestions;
export const footerLinks = deDE.footerLinks;

export const ui = {
  logo: { part1: 'Liebes', part2: 'Neustart' },
  nav: { startFree: 'Kostenlos starten', openMenu: 'Menü öffnen', closeMenu: 'Menü schliessen', mobileHint: '60-Sekunden-Quiz — danach passende Profile ansehen.', lang: 'CH' },
  hero: { badge: 'Exklusive 40+ Community', titleBefore: 'Beginne ein', titleAccent: 'neues Kapitel', titleAfter: 'mit jemandem in deiner Nähe.', subtitle: 'Lerne reife, geprüfte Frauen in deiner Umgebung kennen. Diskret, respektvoll und ohne Druck — für echte Verbindungen.', cta: 'Passende Profile ansehen', verifiedProfiles: 'Geprüfte Profile', discreet: '100 % diskret', live: 'LIVE', womenOnline: 'Frauen gerade online', membersOnly: 'Nur für geprüfte Mitglieder', messageHer: 'Diskret anschreiben' },
  howItWorks: { title: "So funktioniert's" },
  features: { title: 'Warum diese Community anders ist', subtitle: 'Für reife Singles, die Wert auf Vertrauen und echte Begegnungen legen.' },
  cta: { title: 'Bereit für eine neue Begegnung?', subtitle: 'Mache das kurze Quiz und entdecke Frauen, die zu dir passen könnten.', button: 'Passende Profile ansehen' },
  footer: { copyright: '© 2026 Zeit für Liebe. Alle Rechte vorbehalten.' },
  quiz: { label: 'Partner-Quiz · 60 Sekunden', questionOf: (current: number, total: number) => `Frage ${current} von ${total}`, close: 'Schliessen' },
} as const;

