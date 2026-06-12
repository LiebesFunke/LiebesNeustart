import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Répondez au quiz rapide' },
  { number: '02', text: 'Découvrez vos profils compatibles' },
  { number: '03', text: 'Commencez une vraie conversation' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Confidentialité avant tout', description: 'Vos informations restent privées. Vous gardez le contrôle et contactez qui vous voulez, quand vous le voulez.' },
  { icon: 'badge-check' as const, title: 'Profils vérifiés', description: 'Les profils sont contrôlés afin de limiter les faux comptes et de renforcer la confiance.' },
  { icon: 'heart' as const, title: 'Célibataires matures 40+', description: 'Une communauté pour celles et ceux qui apprécient l’honnêteté, le respect et les échanges sincères.' },
  { icon: 'map-pin' as const, title: 'Rencontres près de chez vous', description: 'Découvrez des femmes dans votre région — simplement, discrètement et sans pression.' },
] as const;

export const quizQuestions = [
  { question: 'Que recherchez-vous ?', options: ['Une relation sérieuse', 'Une romance sans engagement', 'Simplement du plaisir', 'Je ne suis pas encore sûr'] },
  { question: 'Quelle tranche d’âge préférez-vous ?', options: ['35–45', '45–55', '55+', 'Aucune préférence'] },
  { question: 'Jusqu’où êtes-vous prêt à vous déplacer ?', options: ['Jusqu’à 15 km', 'Jusqu’à 40 km', 'Jusqu’à 80 km', 'Peu importe la distance'] },
  { question: 'Qu’est-ce qui compte le plus pour vous ?', options: ['L’honnêteté', 'Les centres d’intérêt communs', 'L’attirance physique', 'La connexion émotionnelle'] },
  { question: 'Comment vous décririez-vous ?', options: ['Aventureux', 'Plutôt casanier', 'Sociable', 'Calme et réfléchi'] },
  { question: 'Prêt à voir vos profils compatibles ?', options: ['Oui, montrez-les-moi !', 'J’aimerais en savoir plus', 'Peut-être plus tard', 'Pas encore sûr'] },
] as const;

export const footerLinks = [
  { label: 'À propos', key: 'about' },
  { label: 'Conditions', key: 'terms' },
  { label: 'Confidentialité', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Place à', part2: 'l’Amour' },
  nav: { startFree: 'Commencer gratuitement', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', mobileHint: 'Quiz de 60 secondes — puis découvrez vos profils.', lang: 'FR' },
  hero: { badge: 'Communauté exclusive 40+', titleBefore: 'Commencez un', titleAccent: 'nouveau chapitre', titleAfter: 'avec quelqu’un près de vous.', subtitle: 'Rencontrez des femmes matures et vérifiées dans votre région. Sans pression, sans jeux — seulement des échanges sincères et de vraies connexions.', cta: 'Voir mes profils', verifiedProfiles: 'Profils vérifiés', discreet: '100 % discret', live: 'LIVE', womenOnline: 'femmes en ligne maintenant', membersOnly: 'Réservé aux membres vérifiés', messageHer: 'Lui écrire maintenant' },
  howItWorks: { title: 'Comment ça marche' },
  features: { title: 'Pourquoi cette communauté est différente', subtitle: 'Pour les célibataires matures qui veulent quelque chose de vrai.' },
  cta: { title: 'Prêt à rencontrer quelqu’un ?', subtitle: 'Répondez au quiz de 60 secondes et découvrez des femmes qui pourraient vous correspondre.', button: 'Voir mes profils' },
  footer: { copyright: '© 2026 Place à l’Amour. Tous droits réservés.' },
  quiz: { label: 'Quiz de compatibilité · 60 secondes', questionOf: (current: number, total: number) => `Question ${current} sur ${total}`, close: 'Fermer' },
} as const;

