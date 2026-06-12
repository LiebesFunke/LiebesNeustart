import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Vyplňte krátký kvíz' },
  { number: '02', text: 'Podívejte se na své shody' },
  { number: '03', text: 'Začněte opravdovou konverzaci' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Soukromí na prvním místě', description: 'Vaše údaje zůstávají v bezpečí. Sami rozhodujete, kdy a koho oslovíte.' },
  { icon: 'badge-check' as const, title: 'Ověřené profily', description: 'Profily kontrolujeme, aby bylo méně falešných účtů a více důvěry.' },
  { icon: 'heart' as const, title: 'Zralí nezadaní 40+', description: 'Komunita pro lidi, kteří oceňují upřímnost, klid a skutečné rozhovory.' },
  { icon: 'map-pin' as const, title: 'Shody ve vašem okolí', description: 'Seznamte se se ženami poblíž — diskrétně, přirozeně a bez tlaku.' },
] as const;

export const quizQuestions = [
  { question: 'Co hledáte?', options: ['Vážný vztah', 'Nezávaznou romanci', 'Jen trochu zábavy', 'Ještě si nejsem jistý'] },
  { question: 'Jakou věkovou skupinu preferujete?', options: ['35–45', '45–55', '55+', 'Bez preference'] },
  { question: 'Jak daleko jste ochoten cestovat?', options: ['Do 15 km', 'Do 40 km', 'Do 80 km', 'Na vzdálenosti nezáleží'] },
  { question: 'Co je pro vás nejdůležitější?', options: ['Upřímnost', 'Společné zájmy', 'Fyzická přitažlivost', 'Emoční spojení'] },
  { question: 'Jak byste se popsal?', options: ['Dobrodružný', 'Domácí typ', 'Společenský', 'Klidný a přemýšlivý'] },
  { question: 'Jste připraven vidět své shody?', options: ['Ano, ukažte mi je!', 'Řekněte mi víc', 'Možná později', 'Ještě nevím'] },
] as const;

export const footerLinks = [
  { label: 'O nás', key: 'about' },
  { label: 'Podmínky', key: 'terms' },
  { label: 'Soukromí', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Čas na', part2: 'Lásku' },
  nav: { startFree: 'Začít zdarma', openMenu: 'Otevřít menu', closeMenu: 'Zavřít menu', mobileHint: '60sekundový kvíz — poté uvidíte své shody.', lang: 'CZ' },
  hero: { badge: 'Exkluzivní komunita 40+', titleBefore: 'Začněte', titleAccent: 'novou kapitolu', titleAfter: 's někým ve svém okolí.', subtitle: 'Poznejte ověřené zralé ženy ve vašem okolí. Bez tlaku, bez her — jen skutečné rozhovory a opravdová spojení.', cta: 'Zobrazit mé shody', verifiedProfiles: 'Ověřené profily', discreet: '100% diskrétní', live: 'LIVE', womenOnline: 'žen online právě teď', membersOnly: 'Pouze pro ověřené členy', messageHer: 'Napsat zprávu' },
  howItWorks: { title: 'Jak to funguje' },
  features: { title: 'Proč je tato komunita jiná', subtitle: 'Pro zralé nezadané, kteří hledají něco skutečného.' },
  cta: { title: 'Jste připraven někoho poznat?', subtitle: 'Vyplňte 60sekundový kvíz a objevte ženy, které by se k vám mohly hodit.', button: 'Zobrazit mé shody' },
  footer: { copyright: '© 2026 Čas na Lásku. Všechna práva vyhrazena.' },
  quiz: { label: 'Kvíz shod · 60 sekund', questionOf: (current: number, total: number) => `Otázka ${current} z ${total}`, close: 'Zavřít' },
} as const;

