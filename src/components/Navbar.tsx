import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ui } from '../assets/data';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  onStartFree: () => void;
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
  return (
    <Button
      variant="ghost"
      className={compact ? 'gap-1.5 px-2 h-9 touch-manipulation' : 'gap-2 px-2.5'}
    >
      <img
        src="https://flagcdn.com/w40/de.png"
        srcSet="https://flagcdn.com/w80/de.png 2x"
        width={18}
        height={14}
        alt="de"
        className="rounded-sm object-cover"
        style={{ minWidth: 18 }}
      />
      <span className="font-bold text-xs">{ui.nav.lang}</span>
    </Button>
  );
}
