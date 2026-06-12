import { useState } from 'react';
//import { goToPartner } from '../lib/partner';
import { Navbar } from '../components/Navbar';
import { FadeInSection } from '../components/FadeInSection';
import { CtaSection } from '../sections/CtaSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { FooterSection } from '../sections/FooterSection';
import { HeroSection } from '../sections/HeroSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { QuizModal } from '../sections/QuizModal';

export function HomePage() {
  const [quizOpen, setQuizOpen] = useState(false);

  const openQuiz = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);
  const finishQuiz = () => {
    // ОРИГИНАЛ (раскомментировать когда нужно вернуть):
  // goToPartner();

  // СОЦИАЛЬНЫЙ ПРОЕКТ (удалить когда возвращаешь оригинал):
  closeQuiz();
  alert('Спасибо, что прошли опрос! 😊');
};
  };

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
      <QuizModal isOpen={quizOpen} onClose={closeQuiz} onComplete={finishQuiz} />
    </div>
  );
}
