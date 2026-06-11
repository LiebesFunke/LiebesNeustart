import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Vul de korte quiz in' },
  { number: '02', text: 'Bekijk je matches' },
  { number: '03', text: 'Begin een echt gesprek' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privacy eerst', description: 'Je gegevens blijven privé. Je bepaalt zelf wanneer je contact opneemt.' },
  { icon: 'badge-check' as const, title: 'Geverifieerde profielen', description: 'Profielen worden gecontroleerd — minder nepaccounts, meer vertrouwen.' },
  { icon: 'heart' as const, title: 'Volwassen singles 40+', description: 'Een community voor mensen die eerlijkheid, rust en echte gesprekken waarderen.' },
  { icon: 'map-pin' as const, title: 'Matches bij jou in de buurt', description: 'Leer vrouwen in je omgeving kennen — ontspannen, discreet en zonder druk.' },
] as const;

export const quizQuestions = [
  { question: 'Waar ben je naar op zoek?', options: ['Een vaste relatie', 'Een vrijblijvende romance', 'Gewoon wat plezier', 'Ik weet het nog niet'] },
  { question: 'Welke leeftijdsgroep heeft je voorkeur?', options: ['35–45', '45–55', '55+', 'Geen voorkeur'] },
  { question: 'Hoe ver wil je reizen?', options: ['Tot 15 km', 'Tot 40 km', 'Tot 80 km', 'Afstand maakt niet uit'] },
  { question: 'Wat vind je het belangrijkst?', options: ['Eerlijkheid', 'Gedeelde interesses', 'Fysieke aantrekkingskracht', 'Emotionele klik'] },
  { question: 'Hoe zou je jezelf omschrijven?', options: ['Avontuurlijk', 'Huiselijk', 'Sociaal', 'Rustig en bedachtzaam'] },
  { question: 'Klaar om je matches te zien?', options: ['Ja, laat ze zien!', 'Vertel me meer', 'Misschien later', 'Nog niet zeker'] },
] as const;

export const footerLinks = [
  { label: 'Over ons', key: 'about' },
  { label: 'Voorwaarden', key: 'terms' },
  { label: 'Privacy', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Tijd voor', part2: 'Liefde' },
  nav: { startFree: 'Gratis starten', openMenu: 'Menu openen', closeMenu: 'Menu sluiten', mobileHint: '60-seconden quiz — daarna zie je je matches.', lang: 'NL' },
  hero: { badge: 'Exclusieve 40+ datingcommunity', titleBefore: 'Begin een', titleAccent: 'nieuw hoofdstuk', titleAfter: 'met iemand dichtbij.', subtitle: 'Ontmoet geverifieerde, volwassen vrouwen in jouw omgeving. Geen druk, geen spelletjes — gewoon echte gesprekken en oprechte connecties.', cta: 'Bekijk mijn matches', verifiedProfiles: 'Geverifieerde profielen', discreet: '100% discreet', live: 'LIVE', womenOnline: 'vrouwen nu online', membersOnly: 'Alleen voor geverifieerde leden', messageHer: 'Stuur haar een bericht' },
  howItWorks: { title: 'Zo werkt het' },
  features: { title: 'Waarom deze community anders voelt', subtitle: 'Voor volwassen singles die iets echts zoeken.' },
  cta: { title: 'Klaar om iemand nieuws te ontmoeten?', subtitle: 'Doe de 60-seconden quiz en bekijk vrouwen die bij je kunnen passen.', button: 'Bekijk mijn matches' },
  footer: { copyright: '© 2026 Tijd voor Liefde. Alle rechten voorbehouden.' },
  quiz: { label: 'Matchquiz · 60 seconden', questionOf: (current: number, total: number) => `Vraag ${current} van ${total}`, close: 'Sluiten' },
} as const;

