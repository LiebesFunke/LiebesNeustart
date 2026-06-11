import { profileImagePath } from '../../config/site';

export const profiles = [
  { name: 'Sarah', age: 44, distance: '2 miles away', status: 'online', image: profileImagePath('1.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/ef410c00-ace4-4a0c-ae7a-3a9accbbfad1-1776258730765.png', objectPosition: '50% 12%' },
  { name: 'Jessica', age: 47, distance: '4 miles away', status: 'online', image: profileImagePath('2.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/agata-4660aaec.png', objectPosition: '50% 12%' },
  { name: 'Ashley', age: 45, distance: '7 miles away', status: 'active 8 min ago', image: profileImagePath('3.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/basia-45721769.png', objectPosition: '50% 15%' },
  { name: 'Lauren', age: 39, distance: '3 miles away', status: 'online', image: profileImagePath('4.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/1ac08450-4a43-453f-84c8-c20f5df5e50e-1776705351449.png', objectPosition: '50% 12%' },
  { name: 'Megan', age: 42, distance: '11 miles away', status: 'active 22 min ago', image: profileImagePath('5.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/b33ce0d7-4248-4107-a5e2-82c0e637f459-1776127930442.png', objectPosition: '50% 12%' },
  { name: 'Brittany', age: 44, distance: '6 miles away', status: 'online', image: profileImagePath('6.png'), fallbackImage: 'https://asjnamhyauaxipcnxfhn.supabase.co/storage/v1/object/public/site-images/hero/873f9e8d-aa82-4c69-8885-d5037e988bb1-1776705362898.png', objectPosition: '50% 12%' },
] as const;

export const howItWorksSteps = [
  { number: '01', text: 'Take the quick quiz' },
  { number: '02', text: 'See your local matches' },
  { number: '03', text: 'Start a real conversation' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'Privacy comes first', description: 'Your details stay private. Browse discreetly and connect when you’re ready.' },
  { icon: 'badge-check' as const, title: 'Verified profiles', description: 'Real profiles, checked for quality — no bots, no fake accounts.' },
  { icon: 'heart' as const, title: 'Mature local singles', description: 'A 40+ dating community for people who value honesty, confidence, and real chemistry.' },
  { icon: 'map-pin' as const, title: 'Matches near you', description: 'Meet women in your area who are open to genuine dates and new connections.' },
] as const;

export const quizQuestions = [
  { question: 'What are you looking for?', options: ['A serious relationship', 'A casual romance', 'Just some fun', 'I’m not sure yet'] },
  { question: 'Which age range do you prefer?', options: ['35–45', '45–55', '55+', 'No preference'] },
  { question: 'How far would you travel?', options: ['Up to 10 miles', 'Up to 25 miles', 'Up to 50 miles', 'Distance doesn’t matter'] },
  { question: 'What matters most to you?', options: ['Honesty', 'Shared interests', 'Physical attraction', 'Emotional connection'] },
  { question: 'How would you describe yourself?', options: ['Adventurous', 'Home-loving', 'Outgoing', 'Calm and thoughtful'] },
  { question: 'Ready to see your matches?', options: ['Yes, show me!', 'Tell me more', 'Maybe later', 'Not sure yet'] },
] as const;

export const footerLinks = [
  { label: 'About us', key: 'about' },
  { label: 'Terms', key: 'terms' },
  { label: 'Privacy', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'Time for', part2: 'Love' },
  nav: { startFree: 'Start for free', openMenu: 'Open menu', closeMenu: 'Close menu', mobileHint: '60-second quiz — then see your matches.', lang: 'EN' },
  hero: { badge: 'Exclusive 40+ Dating Community', titleBefore: 'Start a', titleAccent: 'new chapter', titleAfter: 'with someone nearby.', subtitle: 'Meet verified mature women in your area. No pressure, no games — just real conversations and genuine connections.', cta: 'See My Matches', verifiedProfiles: 'Verified profiles', discreet: '100% discreet', live: 'LIVE', womenOnline: 'women online now', membersOnly: 'Verified members only', messageHer: 'Message her now' },
  howItWorks: { title: 'How it works' },
  features: { title: 'Why this community feels different', subtitle: 'For mature singles who want something real.' },
  cta: { title: 'Ready to meet someone new?', subtitle: 'Take the 60-second quiz and see local women who match what you’re looking for.', button: 'See My Matches' },
  footer: { copyright: '© 2026 Time for Love. All rights reserved.' },
  quiz: { label: 'Match quiz · 60 seconds', questionOf: (current: number, total: number) => `Question ${current} of ${total}`, close: 'Close' },
} as const;

