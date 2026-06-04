import { ArrowRight, Heart, Lock, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profiles, ui } from '../assets/data';
import { Button } from '../components/Button';
import { ProfileCard } from '../components/ProfileCard';

interface HeroSectionProps {
  onSeeMatches: () => void;
}

export function HeroSection({ onSeeMatches }: HeroSectionProps) {
  const [onlineCount, setOnlineCount] = useState(773);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-x-clip">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-foreground mb-6">
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span className="text-sm font-medium tracking-wide">{ui.hero.badge}</span>
            </div>

            <h1 className="font-serif text-[1.75rem] leading-[1.08] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-5 sm:mb-6">
              {ui.hero.titleBefore}{' '}
              <span className="italic text-gold-gradient">{ui.hero.titleAccent}</span>{' '}
              {ui.hero.titleAfter}
            </h1>

            <p className="text-base sm:text-[17px] md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed px-1 sm:px-0">
              {ui.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
              <Button size="lg" className="w-full sm:w-auto" onClick={onSeeMatches}>
                {ui.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                {ui.hero.verifiedProfiles}
              </span>
              <span className="inline-flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                {ui.hero.discreet}
              </span>
            </div>
          </div>

          <div className="relative order-2 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="relative bg-card border border-border rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 shadow-large">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-destructive">
                    {ui.hero.live}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif font-semibold text-foreground animate-live-count-pop">
                    {onlineCount}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {ui.hero.womenOnline}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 min-h-0 sm:min-h-[180px]">
                {profiles.map((profile) => (
                  <ProfileCard key={profile.name} profile={profile} onClick={onSeeMatches} />
                ))}
              </div>

              <div className="mt-4 text-center text-xs text-muted-foreground inline-flex items-center justify-center gap-1.5 w-full">
                <Lock className="w-3 h-3" />
                {ui.hero.membersOnly}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
