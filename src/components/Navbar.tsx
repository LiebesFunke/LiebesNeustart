import { Menu } from 'lucide-react';
import { ui } from '../assets/data';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  onStartFree: () => void;
}

export function Navbar({ onStartFree }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <Button onClick={onStartFree}>{ui.nav.startFree}</Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" className="p-2" aria-label={ui.nav.openMenu}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function LanguageSelector() {
  return (
    <Button variant="ghost" className="gap-2 px-2.5">
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
