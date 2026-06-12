import { HomePage } from './pages/HomePage';
import { getLocaleCode } from './assets/locales';

export default function App() {
  const localeCode = getLocaleCode();
  const isRtl = localeCode === 'he-IL';

  return (
    <div lang={localeCode} dir={isRtl ? 'rtl' : 'ltr'} data-locale={localeCode} data-dir={isRtl ? 'rtl' : 'ltr'}>
      <HomePage />
    </div>
  );
}
