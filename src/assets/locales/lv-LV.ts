import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Aizpildi īsu testu' },
  { number: '02', text: 'Apskati savas saderības' },
  { number: '03', text: 'Sāc īstu sarunu' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privātums pirmajā vietā', description: 'Tavi dati paliek privāti. Tu pats izlem, kad un ar ko sazināties.' },
  { icon: 'badge-check' as const, title: 'Pārbaudīti profili', description: 'Profili tiek pārbaudīti, lai būtu mazāk viltus kontu un vairāk uzticības.' },
  { icon: 'heart' as const, title: 'Nobrieduši singli 40+', description: 'Kopiena cilvēkiem, kuri novērtē godīgumu, cieņu un īstas sarunas.' },
  { icon: 'map-pin' as const, title: 'Saderības tavā tuvumā', description: 'Iepazīsti sievietes savā apkārtnē — diskrēti, mierīgi un bez spiediena.' },
] as const;

export const quizQuestions = [
  { question: 'Ko tu meklē?', options: ['Nopietnas attiecības', 'Brīvu romantiku', 'Vienkārši izklaidi', 'Vēl neesmu pārliecināts'] },
  { question: 'Kāda vecuma grupa tev patīk?', options: ['35–45', '45–55', '55+', 'Nav nozīmes'] },
  { question: 'Cik tālu esi gatavs doties?', options: ['Līdz 15 km', 'Līdz 40 km', 'Līdz 80 km', 'Attālumam nav nozīmes'] },
  { question: 'Kas tev ir vissvarīgākais?', options: ['Godīgums', 'Kopīgas intereses', 'Fiziska pievilcība', 'Emocionāla saikne'] },
  { question: 'Kā tu sevi raksturotu?', options: ['Piedzīvojumu meklētājs', 'Mājas cilvēks', 'Sabiedrisks', 'Mierīgs un domājošs'] },
  { question: 'Gatavs apskatīt savas saderības?', options: ['Jā, parādi man!', 'Pastāsti vairāk', 'Varbūt vēlāk', 'Vēl neesmu drošs'] },
] as const;

export const footerLinks = [
  { label: 'Par mums', key: 'about' },
  { label: 'Noteikumi', key: 'terms' },
  { label: 'Privātums', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Laiks', part2: 'Mīlestībai' },
  nav: { startFree: 'Sākt bez maksas', openMenu: 'Atvērt izvēlni', closeMenu: 'Aizvērt izvēlni', mobileHint: '60 sekunžu tests — pēc tam redzēsi saderības.', lang: 'LV' },
  hero: { badge: 'Ekskluzīva 40+ kopiena', titleBefore: 'Sāc', titleAccent: 'jaunu nodaļu', titleAfter: 'ar kādu tuvumā.', subtitle: 'Iepazīsti pārbaudītas, nobriedušas sievietes savā apkārtnē. Bez spiediena, bez spēlītēm — tikai īstas sarunas un patiesas saiknes.', cta: 'Apskatīt manas saderības', verifiedProfiles: 'Pārbaudīti profili', discreet: '100% diskrēti', live: 'LIVE', womenOnline: 'sievietes tiešsaistē', membersOnly: 'Tikai pārbaudītiem lietotājiem', messageHer: 'Uzrakstīt tagad' },
  howItWorks: { title: 'Kā tas darbojas' },
  features: { title: 'Kāpēc šī kopiena ir citāda', subtitle: 'Nobriedušiem singliem, kuri vēlas ko īstu.' },
  cta: { title: 'Gatavs iepazīt kādu jaunu?', subtitle: 'Aizpildi 60 sekunžu testu un apskati sievietes, kas tev varētu būt piemērotas.', button: 'Apskatīt manas saderības' },
  footer: { copyright: '© 2026 Laiks Mīlestībai. Visas tiesības aizsargātas.' },
  quiz: { label: 'Saderības tests · 60 sekundes', questionOf: (current: number, total: number) => `${current}. jautājums no ${total}`, close: 'Aizvērt' },
} as const;

