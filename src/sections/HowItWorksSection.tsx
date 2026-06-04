import { howItWorksSteps, ui } from '../assets/data';

export function HowItWorksSection() {
  return (
    <section className="py-10 md:py-14 px-4 border-y border-border/40 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-xl md:text-2xl text-muted-foreground mb-8 tracking-wide">
          {ui.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="group flex items-center gap-5 md:flex-col md:text-center md:gap-3 transition-transform duration-300 md:hover:-translate-y-1"
            >
              <span className="font-serif text-5xl md:text-6xl font-bold italic text-gold-gradient leading-none shrink-0 tracking-tight pr-[0.1em] transition-transform duration-500 group-hover:scale-110">
                {step.number}
              </span>
              <p className="text-sm md:text-base text-foreground/90 leading-snug">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
