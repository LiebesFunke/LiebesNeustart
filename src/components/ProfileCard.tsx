import { useState } from 'react';
import { ui } from '../assets/data';

interface Profile {
  name: string;
  age: number;
  distance: string;
  status: string;
  image: string;
  fallbackImage?: string;
  objectPosition: string;
}

interface ProfileCardProps {
  profile: Profile;
  onClick: () => void;
}

function CheckBadge() {
  return (
    <div className="absolute top-1.5 left-1.5 z-30">
      <div className="relative w-4 h-4 rounded-full bg-primary flex items-center justify-center shadow-soft">
        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-primary-foreground fill-current">
          <path d="M10 3.5L4.5 9 2 6.5l1-1L4.5 7 9 2.5z" />
        </svg>
      </div>
    </div>
  );
}

export function ProfileCard({ profile, onClick }: ProfileCardProps) {
  const [src, setSrc] = useState(profile.image);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="relative group flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl transition-transform duration-300 hover:-translate-y-0.5"
      aria-label={`${profile.name}, ${profile.age} — ${ui.hero.messageHer}`}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
        <img
          src={src}
          alt={profile.name}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: profile.objectPosition }}
          onError={() => {
            if (profile.fallbackImage && src !== profile.fallbackImage) {
              setSrc(profile.fallbackImage);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none" />
      </div>
      <CheckBadge />
      <div className="pt-1.5 px-0.5 text-left">
        <div className="text-foreground text-[11px] md:text-xs font-semibold leading-tight truncate">
          {profile.name}, {profile.age}
        </div>
        <div className="text-muted-foreground text-[10px] md:text-[11px] leading-snug mt-0.5">
          <span className="block truncate">{profile.distance}</span>
          <span className="block truncate">{profile.status}</span>
        </div>
      </div>
    </div>
  );
}
