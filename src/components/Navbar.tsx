import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ui } from '../assets/data';
import { getLocaleCode } from '../assets/locales';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  onStartFree: () => void;
}

type LanguageOption = {
  code: string;
  flag: string;
  label: string;
  short: string;
};

const LANGUAGES: LanguageOption[] = [
  { code: 'de-DE', flag: 'de', label: 'Deutsch (DE)', short: 'DE' },
  { code: 'de-AT', flag: 'at', label: 'Deutsch (AT)', short: 'AT' },
  { code: 'de-CH', flag: 'ch', label: 'Deutsch (CH)', short: 'CH' },
  { code: 'en-US', flag: 'us', label: 'English (US)', short: 'EN' },
  { code: 'fr-FR', flag: 'fr', label: 'Français', short: 'FR' },
  { code: 'it-IT', flag: 'it', label: 'Italiano', short: 'IT' },
  { code: 'es-ES', flag: 'es', label: 'Español', short: 'ES' },
  { code: 'nl-NL', flag: 'nl', label: 'Nederlands', short: 'NL' },
  { code: 'pl-PL', flag: 'pl', label: 'Polski', short: 'PL' },
  { code: 'cs-CZ', flag: 'cz', label: 'Čeština', short: 'CZ' },
  { code: 'sv-SE', flag: 'se', label: 'Svenska', short: 'SE' },
  { code: 'nb-NO', flag: 'no', label: 'Norsk', short: 'NO' },
  { code: 'da-DK', flag: 'dk', label: 'Dansk', short: 'DK' },
  { code: 'lv-LV', flag: 'lv', label: 'Latviešu', short: 'LV' },
  { code: 'lt-LT', flag: 'lt', label: 'Lietuvių', short: 'LT' },
  { code: 'he-IL', flag: 'il', label: 'עברית', short: 'IL' },
];

function setLanguageAndReload(code: string) {
  try {
    localStorage.setItem('preferred_lang', code);
  } catch {
    // ignore
  }
  const url = new URL(window.location.href);
  url.searchParams.set('lang', code);
  window.location.assign(url.toString());
}

export function Navbar({ onStartFree }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleStart = () => {
    setMenuOpen(false);
    onStartFree();
  };

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border pt-[env(safe-area-inset-top)]">
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          <Logo />

          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <Button onClick={onStartFree}>{ui.nav.startFree}</Button>
          </div>

          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 min-w-0">
            <Button
              size="sm"
              className="text-xs sm:text-sm px-3 sm:px-4 h-9 shrink min-w-0"
              onClick={handleStart}
            >
              <span className="truncate max-w-[9.5rem] sm:max-w-none">{ui.nav.startFree}</span>
            </Button>
            <LanguageSelector compact />
            <Button
              variant="ghost"
              className="p-2 shrink-0 touch-manipulation"
              aria-label={menuOpen ? ui.nav.closeMenu : ui.nav.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="md:hidden border-t border-border mt-2.5 pt-4 pb-2 flex flex-col gap-3 animate-fade-in"
            aria-label="Mobile navigation"
          >
            <Button size="lg" className="w-full" onClick={handleStart}>
              {ui.nav.startFree}
            </Button>
            <p className="text-center text-xs text-muted-foreground px-2 leading-relaxed">
              {ui.nav.mobileHint}
            </p>
          </nav>
        )}
      </div>
    </header>
  );
}

function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentCode = getLocaleCode();
  const current = LANGUAGES.find((l) => l.code === currentCode) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={
          compact
            ? 'inline-flex items-center gap-1.5 h-9 px-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors touch-manipulation'
            : 'inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors'
        }
      >
        <img
          src={`https://flagcdn.com/w40/${current.flag}.png`}
          srcSet={`https://flagcdn.com/w80/${current.flag}.png 2x`}
          width={20}
          height={15}
          alt={current.short}
          className="rounded-sm object-cover shadow-sm"
          style={{ minWidth: 20 }}
        />
        <span className="font-semibold text-xs">{current.short}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-56 max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-background shadow-xl ring-1 ring-black/5 z-50 animate-fade-in"
        >
          <ul className="py-1">
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === current.code;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => setLanguageAndReload(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted ${isActive ? 'bg-muted/60' : ''}`}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${lang.flag}.png`}
                      srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
                      width={22}
                      height={16}
                      alt={lang.short}
                      className="rounded-sm object-cover shadow-sm"
                      style={{ minWidth: 22 }}
                    />
                    <span className="flex-1 text-sm text-foreground">{lang.label}</span>
                    {isActive && <Check className="w-4 h-4 text-foreground/80" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
