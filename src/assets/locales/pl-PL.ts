import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Wypełnij krótki quiz' },
  { number: '02', text: 'Zobacz swoje dopasowania' },
  { number: '03', text: 'Nawiąż prawdziwy kontakt' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Prywatność przede wszystkim', description: 'Twoje dane pozostają bezpieczne. Korzystasz dyskretnie i decydujesz, kiedy chcesz nawiązać kontakt.' },
  { icon: 'badge-check' as const, title: 'Zweryfikowane profile', description: 'Profile są sprawdzane, aby ograniczyć fałszywe konta i przypadkowe kontakty.' },
  { icon: 'heart' as const, title: 'Dojrzali single 40+', description: 'Społeczność dla osób, które cenią szczerość, spokój i prawdziwe rozmowy.' },
  { icon: 'map-pin' as const, title: 'Kobiety w Twojej okolicy', description: 'Poznawaj kobiety blisko siebie — bez presji i bez zbędnych gierek.' },
] as const;

export const quizQuestions = [
  { question: 'Czego szukasz?', options: ['Stałego związku', 'Luźnej znajomości', 'Po prostu dobrej zabawy', 'Jeszcze nie wiem'] },
  { question: 'Jaki wiek Ci odpowiada?', options: ['35–45', '45–55', '55+', 'Bez znaczenia'] },
  { question: 'Jak daleko możesz dojechać?', options: ['Do 15 km', 'Do 40 km', 'Do 80 km', 'Odległość nie ma znaczenia'] },
  { question: 'Co jest dla Ciebie najważniejsze?', options: ['Szczerość', 'Wspólne zainteresowania', 'Atrakcyjność fizyczna', 'Bliskość emocjonalna'] },
  { question: 'Jak siebie opiszesz?', options: ['Lubię przygody', 'Cenię domowy spokój', 'Jestem towarzyski', 'Jestem spokojny i refleksyjny'] },
  { question: 'Gotowy zobaczyć dopasowania?', options: ['Tak, pokaż mi je!', 'Chcę dowiedzieć się więcej', 'Może później', 'Jeszcze nie wiem'] },
] as const;

export const footerLinks = [
  { label: 'O nas', key: 'about' },
  { label: 'Regulamin', key: 'terms' },
  { label: 'Prywatność', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Czas na', part2: 'Miłość' },
  nav: { startFree: 'Zacznij za darmo', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', mobileHint: 'Quiz 60 sekund — potem zobaczysz dopasowania.', lang: 'PL' },
  hero: { badge: 'Ekskluzywna społeczność 40+', titleBefore: 'Zacznij', titleAccent: 'nowy rozdział', titleAfter: 'z kimś blisko Ciebie.', subtitle: 'Poznaj dojrzałe, zweryfikowane kobiety w swojej okolicy. Bez presji, bez gierek — po prostu prawdziwe rozmowy i realne kontakty.', cta: 'Zobacz moje dopasowania', verifiedProfiles: 'Zweryfikowane profile', discreet: '100% dyskretnie', live: 'LIVE', womenOnline: 'kobiet online teraz', membersOnly: 'Tylko dla zweryfikowanych użytkowników', messageHer: 'Napisz teraz' },
  howItWorks: { title: 'Jak to działa' },
  features: { title: 'Dlaczego ta społeczność jest inna', subtitle: 'Dla dojrzałych singli, którzy chcą czegoś prawdziwego.' },
  cta: { title: 'Gotowy poznać kogoś nowego?', subtitle: 'Wypełnij 60-sekundowy quiz i zobacz kobiety, które mogą do Ciebie pasować.', button: 'Zobacz moje dopasowania' },
  footer: { copyright: '© 2026 Czas na Miłość. Wszelkie prawa zastrzeżone.' },
  quiz: { label: 'Quiz dopasowania · 60 sekund', questionOf: (current: number, total: number) => `Pytanie ${current} z ${total}`, close: 'Zamknij' },
} as const;

