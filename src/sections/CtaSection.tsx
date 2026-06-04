import { ArrowRight, Heart } from 'lucide-react';
import { ui } from '../assets/data';
import { Button } from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

interface CtaSectionProps {
  onSeeMatches: () => void;
}

export function CtaSection({ onSeeMatches }: CtaSectionProps) {
  return (
    <FadeInSection>
      <section className="py-14 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <Heart className="w-10 h-10 text-primary fill-current mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4 text-foreground">
            {ui.cta.title}
          </h2>
          <p className="text-[17px] md:text-lg text-muted-foreground mb-8 leading-relaxed">
            {ui.cta.subtitle}
          </p>
          <Button
            size="lg"
            className="group w-full sm:w-auto h-auto px-8 py-6 text-base md:text-lg whitespace-normal text-center leading-snug shadow-large hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_hsl(350_65%_42%/0.4)] duration-300"
            onClick={onSeeMatches}
          >
            <span>{ui.cta.button}</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </FadeInSection>
  );
}
