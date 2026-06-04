import { footerLinks, ui } from '../assets/data';

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-10">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm mb-5">
          {footerLinks.map((link) => (
            <button
              key={link.key}
              type="button"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="text-center text-xs text-muted-foreground">
          <div>{ui.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
