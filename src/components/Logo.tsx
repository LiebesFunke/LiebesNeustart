import { Heart } from 'lucide-react';
import { ui } from '../assets/data';

export function Logo() {
  return (
    <a
      href={import.meta.env.BASE_URL}
      className="flex items-center gap-2.5 hover:-translate-y-0.5 transition-transform shrink-0 group"
    >
      <div className="relative p-2 bg-primary rounded-xl shadow-soft group-hover:shadow-medium transition-all">
        <Heart className="w-5 h-5 text-primary-foreground fill-current" />
      </div>
      <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-foreground">
        {ui.logo.part1}{' '}
        <span className="italic text-gold-gradient">{ui.logo.part2}</span>
      </span>
    </a>
  );
}
