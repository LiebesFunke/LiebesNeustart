import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FadeInSection } from '../components/FadeInSection';
import { CtaSection } from '../sections/CtaSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { FooterSection } from '../sections/FooterSection';
import { HeroSection } from '../sections/HeroSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { QuizModal } from '../sections/QuizModal';

export function HomePage() {
  const [quizOpen, setQuizOpen] = useState(true);

  const openQuiz = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onStartFree={openQuiz} />
      <main>
        <HeroSection onSeeMatches={openQuiz} />
        <FadeInSection>
          <HowItWorksSection />
        </FadeInSection>
        <FeaturesSection />
        <CtaSection onSeeMatches={openQuiz} />
      </main>
      <FooterSection />
      <QuizModal isOpen={quizOpen} onClose={closeQuiz} />
    </div>
  );
}
