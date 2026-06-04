import {
  BadgeCheck,
  Heart,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { features, ui } from '../assets/data';
import { FadeInSection } from '../components/FadeInSection';

const iconMap: Record<(typeof features)[number]['icon'], LucideIcon> = {
  'shield-check': ShieldCheck,
  'badge-check': BadgeCheck,
  heart: Heart,
  'map-pin': MapPin,
};

export function FeaturesSection() {
  return (
    <FadeInSection>
      <section className="py-14 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-3">
              {ui.features.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {ui.features.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="group p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
