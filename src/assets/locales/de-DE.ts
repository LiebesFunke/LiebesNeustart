import { profileImagePath } from '../../config/site';

export const profiles = [
  { name: 'Sarah', age: 44, distance: '3 km entfernt', status: 'online', image: profileImagePath('1.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/ef410c00-ace4-4a0c-ae7a-3a9accbbfad1-1776258730765.png', objectPosition: '50% 12%' },
  { name: 'Jessica', age: 47, distance: '6 km entfernt', status: 'online', image: profileImagePath('2.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/agata-4660aaec.png', objectPosition: '50% 12%' },
  { name: 'Ashley', age: 45, distance: '11 km entfernt', status: 'aktiv vor 8 Min.', image: profileImagePath('3.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/basia-45721769.png', objectPosition: '50% 15%' },
  { name: 'Lauren', age: 39, distance: '5 km entfernt', status: 'online', image: profileImagePath('4.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/1ac08450-4a43-453f-84c8-c20f5df5e50e-1776705351449.png', objectPosition: '50% 12%' },
  { name: 'Megan', age: 42, distance: '18 km entfernt', status: 'aktiv vor 22 Min.', image: profileImagePath('5.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/b33ce0d7-4248-4107-a5e2-82c0e637f459-1776127930442.png', objectPosition: '50% 12%' },
  { name: 'Brittany', age: 44, distance: '10 km entfernt', status: 'online', image: profileImagePath('6.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/873f9e8d-aa82-4c69-8885-d5037e988bb1-1776705362898.png', objectPosition: '50% 12%' },
] as const;

export const howItWorksSteps = [
  { number: '01', text: 'Kurzes Quiz ausfüllen' },
  { number: '02', text: 'Deine Matches ansehen' },
  { number: '03', text: 'Persönlich treffen' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Datenschutz zuerst', description: 'Deine Daten werden niemals weitergegeben. Volle Diskretion, immer.' },
  { icon: 'badge-check' as const, title: 'Verifizierte Profile', description: 'Jedes Profil wird geprüft — keine Bots, keine Fake-Accounts.' },
  { icon: 'heart' as const, title: 'Gleichgesinnte Menschen', description: 'Eine 40+ Community, die Vertrauen, Zeit und echte Gespräche schätzt.' },
  { icon: 'map-pin' as const, title: 'Treffen in deiner Nähe', description: 'Triff Frauen in deiner Umgebung — bereit für ein echtes Date.' },
] as const;

export const quizQuestions = [
  { question: 'Was suchst du?', options: ['Eine feste Beziehung', 'Eine unverbindliche Romanze', 'Einfach nur Spaß', 'Ich bin mir noch nicht sicher'] },
  { question: 'Welche Altersgruppe bevorzugst du?', options: ['35–45', '45–55', '55+', 'Keine Präferenz'] },
  { question: 'Wie weit bist du bereit zu reisen?', options: ['Bis 15 km', 'Bis 40 km', 'Bis 80 km', 'Egal wie weit'] },
  { question: 'Was ist dir am wichtigsten?', options: ['Ehrlichkeit', 'Gemeinsame Interessen', 'Körperliche Anziehung', 'Emotionale Verbindung'] },
  { question: 'Wie würdest du dich beschreiben?', options: ['Abenteuerlustig', 'Häuslich', 'Gesellig', 'Ruhig und nachdenklich'] },
  { question: 'Bereit, deine Matches zu sehen?', options: ['Ja, zeig sie mir!', 'Erzähl mir mehr', 'Vielleicht später', 'Noch unsicher'] },
] as const;

export const footerLinks = [
  { label: 'Über uns', key: 'about' },
  { label: 'AGB', key: 'terms' },
  { label: 'Datenschutz', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Zeit für', part2: 'Liebe' },
  nav: { startFree: 'Kostenlos starten', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', mobileHint: '60-Sekunden-Quiz — danach zu deinen Matches.', lang: 'DE' },
  hero: { badge: 'Exklusive 40+ Community', titleBefore: 'Beginne ein', titleAccent: 'neues Kapitel', titleAfter: 'deiner Geschichte.', subtitle: 'Lerne reife, verifizierte Frauen in deiner Nähe kennen. Keine Spielchen, kein Druck — nur echte Verbindungen.', cta: 'Deine Matches ansehen', verifiedProfiles: 'Verifizierte Profile', discreet: '100 % diskret', live: 'LIVE', womenOnline: 'Frauen gerade online', membersOnly: 'Nur für verifizierte Mitglieder', messageHer: 'Jetzt anschreiben' },
  howItWorks: { title: "So funktioniert's" },
  features: { title: 'Warum unsere Community anders ist', subtitle: 'Für reife Singles, die etwas Echtes suchen.' },
  cta: { title: 'Bereit für einen Neuanfang?', subtitle: 'Mache das 60-Sekunden-Quiz und triff Frauen, die wirklich zu dir passen.', button: 'Deine Matches ansehen' },
  footer: { copyright: '© 2026 Zeit für Liebe. Alle Rechte vorbehalten.' },
  quiz: { label: 'Partner-Quiz · 60 Sekunden', questionOf: (current: number, total: number) => `Frage ${current} von ${total}`, close: 'Schließen' },
} as const;

