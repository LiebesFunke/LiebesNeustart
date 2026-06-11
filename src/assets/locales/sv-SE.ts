import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Svara på en kort quiz' },
  { number: '02', text: 'Se dina matchningar' },
  { number: '03', text: 'Starta en riktig konversation' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Integritet först', description: 'Dina uppgifter hålls privata. Du bestämmer själv när du vill ta kontakt.' },
  { icon: 'badge-check' as const, title: 'Verifierade profiler', description: 'Profiler kontrolleras — färre falska konton och mer trygghet.' },
  { icon: 'heart' as const, title: 'Mogna singlar 40+', description: 'En community för människor som uppskattar ärlighet, lugn och riktiga samtal.' },
  { icon: 'map-pin' as const, title: 'Matchningar nära dig', description: 'Lär känna kvinnor i ditt område — diskret, avslappnat och utan press.' },
] as const;

export const quizQuestions = [
  { question: 'Vad letar du efter?', options: ['Ett seriöst förhållande', 'En avslappnad romans', 'Bara lite kul', 'Jag är inte säker än'] },
  { question: 'Vilken åldersgrupp föredrar du?', options: ['35–45', '45–55', '55+', 'Ingen preferens'] },
  { question: 'Hur långt kan du tänka dig att resa?', options: ['Upp till 15 km', 'Upp till 40 km', 'Upp till 80 km', 'Avstånd spelar ingen roll'] },
  { question: 'Vad är viktigast för dig?', options: ['Ärlighet', 'Gemensamma intressen', 'Fysisk attraktion', 'Känslomässig kontakt'] },
  { question: 'Hur skulle du beskriva dig själv?', options: ['Äventyrlig', 'Hemmakär', 'Social', 'Lugn och eftertänksam'] },
  { question: 'Redo att se dina matchningar?', options: ['Ja, visa mig!', 'Berätta mer', 'Kanske senare', 'Inte helt säker'] },
] as const;

export const footerLinks = [
  { label: 'Om oss', key: 'about' },
  { label: 'Villkor', key: 'terms' },
  { label: 'Integritet', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Tid för', part2: 'Kärlek' },
  nav: { startFree: 'Starta gratis', openMenu: 'Öppna meny', closeMenu: 'Stäng meny', mobileHint: '60-sekunders quiz — se dina matchningar efteråt.', lang: 'SE' },
  hero: { badge: 'Exklusiv 40+ datingcommunity', titleBefore: 'Börja ett', titleAccent: 'nytt kapitel', titleAfter: 'med någon nära dig.', subtitle: 'Möt verifierade, mogna kvinnor i ditt område. Ingen press, inga spel — bara riktiga samtal och genuina kontakter.', cta: 'Se mina matchningar', verifiedProfiles: 'Verifierade profiler', discreet: '100% diskret', live: 'LIVE', womenOnline: 'kvinnor online just nu', membersOnly: 'Endast för verifierade medlemmar', messageHer: 'Skicka meddelande nu' },
  howItWorks: { title: 'Så fungerar det' },
  features: { title: 'Varför den här communityn känns annorlunda', subtitle: 'För mogna singlar som vill ha något äkta.' },
  cta: { title: 'Redo att träffa någon ny?', subtitle: 'Gör 60-sekundersquizen och se kvinnor som kan passa dig.', button: 'Se mina matchningar' },
  footer: { copyright: '© 2026 Tid för Kärlek. Alla rättigheter förbehållna.' },
  quiz: { label: 'Matchquiz · 60 sekunder', questionOf: (current: number, total: number) => `Fråga ${current} av ${total}`, close: 'Stäng' },
} as const;

