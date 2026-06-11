import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Udfyld en kort quiz' },
  { number: '02', text: 'Se dine matches' },
  { number: '03', text: 'Start en ægte samtale' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privatliv først', description: 'Dine oplysninger holdes private. Du bestemmer selv, hvornår du vil tage kontakt.' },
  { icon: 'badge-check' as const, title: 'Verificerede profiler', description: 'Profiler bliver kontrolleret — færre falske konti og mere tryghed.' },
  { icon: 'heart' as const, title: 'Modne singler 40+', description: 'Et fællesskab for mennesker, der værdsætter ærlighed, ro og ægte samtaler.' },
  { icon: 'map-pin' as const, title: 'Matches tæt på dig', description: 'Lær kvinder i dit område at kende — diskret, afslappet og uden pres.' },
] as const;

export const quizQuestions = [
  { question: 'Hvad leder du efter?', options: ['Et seriøst forhold', 'En uforpligtende romance', 'Bare lidt sjov', 'Jeg er ikke sikker endnu'] },
  { question: 'Hvilken aldersgruppe foretrækker du?', options: ['35–45', '45–55', '55+', 'Ingen præference'] },
  { question: 'Hvor langt vil du rejse?', options: ['Op til 15 km', 'Op til 40 km', 'Op til 80 km', 'Afstand betyder ikke noget'] },
  { question: 'Hvad er vigtigst for dig?', options: ['Ærlighed', 'Fælles interesser', 'Fysisk tiltrækning', 'Følelsesmæssig kontakt'] },
  { question: 'Hvordan vil du beskrive dig selv?', options: ['Eventyrlysten', 'Hjemmeglad', 'Social', 'Rolig og eftertænksom'] },
  { question: 'Klar til at se dine matches?', options: ['Ja, vis mig dem!', 'Fortæl mig mere', 'Måske senere', 'Ikke helt sikker'] },
] as const;

export const footerLinks = [
  { label: 'Om os', key: 'about' },
  { label: 'Vilkår', key: 'terms' },
  { label: 'Privatliv', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Tid til', part2: 'Kærlighed' },
  nav: { startFree: 'Start gratis', openMenu: 'Åbn menu', closeMenu: 'Luk menu', mobileHint: '60-sekunders quiz — se dine matches bagefter.', lang: 'DK' },
  hero: { badge: 'Eksklusivt 40+ datingfællesskab', titleBefore: 'Start et', titleAccent: 'nyt kapitel', titleAfter: 'med en tæt på dig.', subtitle: 'Mød verificerede, modne kvinder i dit område. Intet pres, ingen spil — bare ægte samtaler og oprigtige forbindelser.', cta: 'Se mine matches', verifiedProfiles: 'Verificerede profiler', discreet: '100% diskret', live: 'LIVE', womenOnline: 'kvinder online nu', membersOnly: 'Kun for verificerede medlemmer', messageHer: 'Send besked nu' },
  howItWorks: { title: 'Sådan fungerer det' },
  features: { title: 'Hvorfor dette fællesskab føles anderledes', subtitle: 'For modne singler, der ønsker noget ægte.' },
  cta: { title: 'Klar til at møde en ny?', subtitle: 'Tag 60-sekunders quizzen og se kvinder, der kan passe til dig.', button: 'Se mine matches' },
  footer: { copyright: '© 2026 Tid til Kærlighed. Alle rettigheder forbeholdes.' },
  quiz: { label: 'Matchquiz · 60 sekunder', questionOf: (current: number, total: number) => `Spørgsmål ${current} af ${total}`, close: 'Luk' },
} as const;


