import * as deDE from './de-DE';

export const profiles = deDE.profiles;

export const howItWorksSteps = [
  { number: '01', text: 'ענו על שאלון קצר' },
  { number: '02', text: 'ראו התאמות באזור שלכם' },
  { number: '03', text: 'התחילו שיחה אמיתית' },
] as const;

export const features = [
  { icon: 'shield-check' as const, title: 'פרטיות לפני הכול', description: 'הפרטים שלכם נשארים פרטיים. אתם מחליטים מתי ועם מי ליצור קשר.' },
  { icon: 'badge-check' as const, title: 'פרופילים מאומתים', description: 'הפרופילים נבדקים כדי לצמצם חשבונות מזויפים וליצור יותר אמון.' },
  { icon: 'heart' as const, title: 'פנויים ופנויות בוגרים 40+', description: 'קהילה לאנשים שמעריכים כנות, כבוד ושיחות אמיתיות.' },
  { icon: 'map-pin' as const, title: 'התאמות קרובות אליכם', description: 'הכירו נשים באזור שלכם — בדיסקרטיות, בנוחות וללא לחץ.' },
] as const;

export const quizQuestions = [
  { question: 'מה אתם מחפשים?', options: ['קשר רציני', 'רומנטיקה קלילה', 'פשוט ליהנות', 'אני עדיין לא בטוח'] },
  { question: 'איזה טווח גילאים מעניין אתכם?', options: ['35–45', '45–55', '55+', 'אין העדפה'] },
  { question: 'כמה רחוק תהיו מוכנים לנסוע?', options: ['עד 15 ק״מ', 'עד 40 ק״מ', 'עד 80 ק״מ', 'המרחק לא משנה'] },
  { question: 'מה הכי חשוב לכם?', options: ['כנות', 'תחומי עניין משותפים', 'משיכה פיזית', 'חיבור רגשי'] },
  { question: 'איך הייתם מתארים את עצמכם?', options: ['אוהב הרפתקאות', 'אוהב בית ושקט', 'חברותי', 'רגוע ומעמיק'] },
  { question: 'מוכנים לראות את ההתאמות שלכם?', options: ['כן, תראו לי!', 'ספרו לי עוד', 'אולי אחר כך', 'עדיין לא בטוח'] },
] as const;

export const footerLinks = [
  { label: 'עלינו', key: 'about' },
  { label: 'תנאים', key: 'terms' },
  { label: 'פרטיות', key: 'privacy' },
  { label: 'Cookies', key: 'cookies' },
] as const;

export const ui = {
  logo: { part1: 'זמן', part2: 'לאהבה' },
  nav: { startFree: 'התחילו בחינם', openMenu: 'פתח תפריט', closeMenu: 'סגור תפריט', mobileHint: 'שאלון של 60 שניות — ואז תראו התאמות.', lang: 'IL' },
  hero: { badge: 'קהילת היכרויות 40+ בלעדית', titleBefore: 'התחילו', titleAccent: 'פרק חדש', titleAfter: 'עם מישהי קרובה אליכם.', subtitle: 'הכירו נשים בוגרות ומאומתות באזור שלכם. בלי לחץ, בלי משחקים — רק שיחות אמיתיות וחיבורים כנים.', cta: 'הצג את ההתאמות שלי', verifiedProfiles: 'פרופילים מאומתים', discreet: '100% דיסקרטי', live: 'LIVE', womenOnline: 'נשים מחוברות עכשיו', membersOnly: 'רק לחברים מאומתים', messageHer: 'שלחו הודעה עכשיו' },
  howItWorks: { title: 'איך זה עובד' },
  features: { title: 'למה הקהילה הזאת מרגישה אחרת', subtitle: 'לפנויים ופנויות בוגרים שמחפשים משהו אמיתי.' },
  cta: { title: 'מוכנים להכיר מישהי חדשה?', subtitle: 'ענו על שאלון של 60 שניות וראו נשים שיכולות להתאים לכם.', button: 'הצג את ההתאמות שלי' },
  footer: { copyright: '© 2026 זמן לאהבה. כל הזכויות שמורות.' },
  quiz: { label: 'שאלון התאמה · 60 שניות', questionOf: (current: number, total: number) => `שאלה ${current} מתוך ${total}`, close: 'סגור' },
} as const;

