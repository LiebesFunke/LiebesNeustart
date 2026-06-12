import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Užpildyk trumpą testą' },
  { number: '02', text: 'Peržiūrėk savo atitikmenis' },
  { number: '03', text: 'Pradėk tikrą pokalbį' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privatumas pirmiausia', description: 'Tavo duomenys lieka privatūs. Pats sprendi, kada ir su kuo susisiekti.' },
  { icon: 'badge-check' as const, title: 'Patikrinti profiliai', description: 'Profiliai tikrinami, kad būtų mažiau netikrų paskyrų ir daugiau pasitikėjimo.' },
  { icon: 'heart' as const, title: 'Brandūs vieniši 40+', description: 'Bendruomenė žmonėms, kurie vertina nuoširdumą, pagarbą ir tikrus pokalbius.' },
  { icon: 'map-pin' as const, title: 'Atitikmenys šalia tavęs', description: 'Susipažink su moterimis savo aplinkoje — diskretiškai, ramiai ir be spaudimo.' },
] as const;

export const quizQuestions = [
  { question: 'Ko ieškai?', options: ['Rimtų santykių', 'Neįpareigojančios romantikos', 'Tiesiog smagiai praleisti laiką', 'Dar nesu tikras'] },
  { question: 'Kokia amžiaus grupė tau patinka?', options: ['35–45', '45–55', '55+', 'Nesvarbu'] },
  { question: 'Kiek toli galėtum vykti?', options: ['Iki 15 km', 'Iki 40 km', 'Iki 80 km', 'Atstumas nesvarbu'] },
  { question: 'Kas tau svarbiausia?', options: ['Nuoširdumas', 'Bendri pomėgiai', 'Fizinė trauka', 'Emocinis ryšys'] },
  { question: 'Kaip save apibūdintum?', options: ['Mėgstantis nuotykius', 'Namų žmogus', 'Bendraujantis', 'Ramus ir mąslus'] },
  { question: 'Pasiruošęs pamatyti atitikmenis?', options: ['Taip, parodyk!', 'Papasakok daugiau', 'Gal vėliau', 'Dar nesu tikras'] },
] as const;

export const footerLinks = [
  { label: 'Apie mus', key: 'about' },
  { label: 'Sąlygos', key: 'terms' },
  { label: 'Privatumas', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Laikas', part2: 'Meilei' },
  nav: { startFree: 'Pradėti nemokamai', openMenu: 'Atidaryti meniu', closeMenu: 'Uždaryti meniu', mobileHint: '60 sekundžių testas — po jo matysi atitikmenis.', lang: 'LT' },
  hero: { badge: 'Išskirtinė 40+ bendruomenė', titleBefore: 'Pradėk', titleAccent: 'naują skyrių', titleAfter: 'su kažkuo šalia tavęs.', subtitle: 'Susipažink su patikrintomis brandžiomis moterimis savo aplinkoje. Be spaudimo, be žaidimų — tik tikri pokalbiai ir nuoširdūs ryšiai.', cta: 'Peržiūrėti atitikmenis', verifiedProfiles: 'Patikrinti profiliai', discreet: '100% diskretiška', live: 'LIVE', womenOnline: 'moterys dabar prisijungusios', membersOnly: 'Tik patikrintiems nariams', messageHer: 'Parašyti dabar' },
  howItWorks: { title: 'Kaip tai veikia' },
  features: { title: 'Kodėl ši bendruomenė kitokia', subtitle: 'Brandžiams vienišiems, kurie nori kažko tikro.' },
  cta: { title: 'Pasiruošęs susipažinti?', subtitle: 'Užpildyk 60 sekundžių testą ir pamatyk moteris, kurios gali tau tikti.', button: 'Peržiūrėti atitikmenis' },
  footer: { copyright: '© 2026 Laikas Meilei. Visos teisės saugomos.' },
  quiz: { label: 'Atitikmenų testas · 60 sekundžių', questionOf: (current: number, total: number) => `${current} klausimas iš ${total}`, close: 'Uždaryti' },
} as const;

