import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Completa il breve quiz' },
  { number: '02', text: 'Guarda i tuoi match' },
  { number: '03', text: 'Inizia una vera conversazione' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privacy prima di tutto', description: 'I tuoi dati restano privati. Decidi tu quando e con chi entrare in contatto.' },
  { icon: 'badge-check' as const, title: 'Profili verificati', description: 'I profili vengono controllati per ridurre account falsi e contatti poco seri.' },
  { icon: 'heart' as const, title: 'Single maturi 40+', description: 'Una community per persone che apprezzano sincerità, rispetto e conversazioni autentiche.' },
  { icon: 'map-pin' as const, title: 'Match vicino a te', description: 'Conosci donne nella tua zona — in modo discreto, semplice e senza pressione.' },
] as const;

export const quizQuestions = [
  { question: 'Cosa stai cercando?', options: ['Una relazione seria', 'Una storia senza impegno', 'Solo un po’ di divertimento', 'Non lo so ancora'] },
  { question: 'Quale fascia d’età preferisci?', options: ['35–45', '45–55', '55+', 'Nessuna preferenza'] },
  { question: 'Quanto sei disposto a spostarti?', options: ['Fino a 15 km', 'Fino a 40 km', 'Fino a 80 km', 'La distanza non conta'] },
  { question: 'Cosa conta di più per te?', options: ['Onestà', 'Interessi comuni', 'Attrazione fisica', 'Connessione emotiva'] },
  { question: 'Come ti descriveresti?', options: ['Avventuroso', 'Amante della casa', 'Socievole', 'Calmo e riflessivo'] },
  { question: 'Pronto a vedere i tuoi match?', options: ['Sì, mostrameli!', 'Dimmi di più', 'Forse più tardi', 'Non sono ancora sicuro'] },
] as const;

export const footerLinks = [
  { label: 'Chi siamo', key: 'about' },
  { label: 'Termini', key: 'terms' },
  { label: 'Privacy', key: 'privacy' },
  { label: 'Cookie', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Tempo per', part2: 'l’Amore' },
  nav: { startFree: 'Inizia gratis', openMenu: 'Apri menu', closeMenu: 'Chiudi menu', mobileHint: 'Quiz di 60 secondi — poi guarda i tuoi match.', lang: 'IT' },
  hero: { badge: 'Community esclusiva 40+', titleBefore: 'Inizia un', titleAccent: 'nuovo capitolo', titleAfter: 'con qualcuno vicino a te.', subtitle: 'Incontra donne mature e verificate nella tua zona. Niente pressione, niente giochi — solo conversazioni vere e connessioni autentiche.', cta: 'Vedi i miei match', verifiedProfiles: 'Profili verificati', discreet: '100% discreto', live: 'LIVE', womenOnline: 'donne online ora', membersOnly: 'Solo membri verificati', messageHer: 'Scrivile ora' },
  howItWorks: { title: 'Come funziona' },
  features: { title: 'Perché questa community è diversa', subtitle: 'Per single maturi che cercano qualcosa di vero.' },
  cta: { title: 'Pronto a conoscere qualcuno?', subtitle: 'Completa il quiz di 60 secondi e scopri donne che potrebbero fare al caso tuo.', button: 'Vedi i miei match' },
  footer: { copyright: '© 2026 Tempo per l’Amore. Tutti i diritti riservati.' },
  quiz: { label: 'Quiz match · 60 secondi', questionOf: (current: number, total: number) => `Domanda ${current} di ${total}`, close: 'Chiudi' },
} as const;

