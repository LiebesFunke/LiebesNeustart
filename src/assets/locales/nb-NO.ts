import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Svar på en kort quiz' },
  { number: '02', text: 'Se dine matcher' },
  { number: '03', text: 'Start en ekte samtale' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Personvern først', description: 'Opplysningene dine holdes private. Du bestemmer selv når du vil ta kontakt.' },
  { icon: 'badge-check' as const, title: 'Verifiserte profiler', description: 'Profiler blir kontrollert — færre falske kontoer og mer trygghet.' },
  { icon: 'heart' as const, title: 'Modne single 40+', description: 'Et fellesskap for mennesker som setter pris på ærlighet, ro og ekte samtaler.' },
  { icon: 'map-pin' as const, title: 'Matcher i nærheten', description: 'Bli kjent med kvinner i ditt område — diskret, avslappet og uten press.' },
] as const;

export const quizQuestions = [
  { question: 'Hva ser du etter?', options: ['Et seriøst forhold', 'En uforpliktende romanse', 'Bare litt moro', 'Jeg er ikke sikker ennå'] },
  { question: 'Hvilken aldersgruppe foretrekker du?', options: ['35–45', '45–55', '55+', 'Ingen preferanse'] },
  { question: 'Hvor langt kan du reise?', options: ['Opptil 15 km', 'Opptil 40 km', 'Opptil 80 km', 'Avstand spiller ingen rolle'] },
  { question: 'Hva er viktigst for deg?', options: ['Ærlighet', 'Felles interesser', 'Fysisk tiltrekning', 'Følelsesmessig kontakt'] },
  { question: 'Hvordan vil du beskrive deg selv?', options: ['Eventyrlysten', 'Hjemmekjær', 'Sosial', 'Rolig og reflektert'] },
  { question: 'Klar for å se matchene dine?', options: ['Ja, vis meg!', 'Fortell meg mer', 'Kanskje senere', 'Ikke helt sikker'] },
] as const;

export const footerLinks = [
  { label: 'Om oss', key: 'about' },
  { label: 'Vilkår', key: 'terms' },
  { label: 'Personvern', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Tid for', part2: 'Kjærlighet' },
  nav: { startFree: 'Start gratis', openMenu: 'Åpne meny', closeMenu: 'Lukk meny', mobileHint: '60-sekunders quiz — se matchene dine etterpå.', lang: 'NO' },
  hero: { badge: 'Eksklusivt 40+ datingfellesskap', titleBefore: 'Start et', titleAccent: 'nytt kapittel', titleAfter: 'med noen i nærheten.', subtitle: 'Møt verifiserte, modne kvinner i ditt område. Ingen press, ingen spill — bare ekte samtaler og oppriktige forbindelser.', cta: 'Se mine matcher', verifiedProfiles: 'Verifiserte profiler', discreet: '100% diskret', live: 'LIVE', womenOnline: 'kvinner online nå', membersOnly: 'Kun for verifiserte medlemmer', messageHer: 'Send melding nå' },
  howItWorks: { title: 'Slik fungerer det' },
  features: { title: 'Hvorfor dette fellesskapet føles annerledes', subtitle: 'For modne single som ønsker noe ekte.' },
  cta: { title: 'Klar for å møte noen nye?', subtitle: 'Ta 60-sekunders quizen og se kvinner som kan passe for deg.', button: 'Se mine matcher' },
  footer: { copyright: '© 2026 Tid for Kjærlighet. Alle rettigheter forbeholdt.' },
  quiz: { label: 'Matchquiz · 60 sekunder', questionOf: (current: number, total: number) => `Spørsmål ${current} av ${total}`, close: 'Lukk' },
} as const;

