import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'Completa el quiz rápido' },
  { number: '02', text: 'Mira tus coincidencias' },
  { number: '03', text: 'Empieza una conversación real' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privacidad ante todo', description: 'Tus datos se mantienen privados. Tú decides cuándo y con quién conectar.' },
  { icon: 'badge-check' as const, title: 'Perfiles verificados', description: 'Revisamos los perfiles para reducir cuentas falsas y generar más confianza.' },
  { icon: 'heart' as const, title: 'Solteros maduros 40+', description: 'Una comunidad para personas que valoran la honestidad, el respeto y las conversaciones reales.' },
  { icon: 'map-pin' as const, title: 'Coincidencias cerca de ti', description: 'Conoce mujeres de tu zona — de forma discreta, sencilla y sin presión.' },
] as const;

export const quizQuestions = [
  { question: '¿Qué estás buscando?', options: ['Una relación seria', 'Una aventura sin compromiso', 'Solo pasarlo bien', 'Aún no lo sé'] },
  { question: '¿Qué grupo de edad prefieres?', options: ['35–45', '45–55', '55+', 'Sin preferencia'] },
  { question: '¿Hasta dónde viajarías?', options: ['Hasta 15 km', 'Hasta 40 km', 'Hasta 80 km', 'La distancia no importa'] },
  { question: '¿Qué es lo más importante para ti?', options: ['Honestidad', 'Intereses en común', 'Atracción física', 'Conexión emocional'] },
  { question: '¿Cómo te describirías?', options: ['Aventurero', 'De planes tranquilos', 'Sociable', 'Tranquilo y reflexivo'] },
  { question: '¿Listo para ver tus coincidencias?', options: ['Sí, muéstramelas', 'Cuéntame más', 'Quizá más tarde', 'Aún no estoy seguro'] },
] as const;

export const footerLinks = [
  { label: 'Sobre nosotros', key: 'about' },
  { label: 'Términos', key: 'terms' },
  { label: 'Privacidad', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Tiempo para', part2: 'Amar' },
  nav: { startFree: 'Empezar gratis', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', mobileHint: 'Quiz de 60 segundos — después verás tus coincidencias.', lang: 'ES' },
  hero: { badge: 'Comunidad exclusiva 40+', titleBefore: 'Empieza un', titleAccent: 'nuevo capítulo', titleAfter: 'con alguien cerca de ti.', subtitle: 'Conoce mujeres maduras y verificadas en tu zona. Sin presión, sin juegos — solo conversaciones reales y conexiones auténticas.', cta: 'Ver mis coincidencias', verifiedProfiles: 'Perfiles verificados', discreet: '100% discreto', live: 'LIVE', womenOnline: 'mujeres online ahora', membersOnly: 'Solo miembros verificados', messageHer: 'Escríbele ahora' },
  howItWorks: { title: 'Cómo funciona' },
  features: { title: 'Por qué esta comunidad es diferente', subtitle: 'Para solteros maduros que buscan algo real.' },
  cta: { title: '¿Listo para conocer a alguien?', subtitle: 'Completa el quiz de 60 segundos y descubre mujeres que pueden encajar contigo.', button: 'Ver mis coincidencias' },
  footer: { copyright: '© 2026 Tiempo para Amar. Todos los derechos reservados.' },
  quiz: { label: 'Quiz de coincidencias · 60 segundos', questionOf: (current: number, total: number) => `Pregunta ${current} de ${total}`, close: 'Cerrar' },
} as const;

