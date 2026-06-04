import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { quizQuestions, ui } from '../assets/data';
import { ProgressBar } from '../components/ProgressBar';
import { cn } from '../lib/utils';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentQuestion(0);
      setSelectedOption(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(0);
      } else {
        onClose();
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background overflow-y-auto"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label={ui.quiz.close}
            onClick={onClose}
            className="fixed top-3 right-3 z-[101] p-2 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="min-h-screen flex items-center justify-center py-10 md:py-16 px-4">
            <div className="w-full">
              <div className="container mx-auto max-w-2xl">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-card border border-border rounded-3xl shadow-large p-6 md:p-10 relative overflow-hidden scroll-mt-20"
                >
                  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        {ui.quiz.label}
                      </span>
                      <span>
                        {ui.quiz.questionOf(currentQuestion + 1, totalQuestions)}
                      </span>
                    </div>
                    <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
                  </div>

                  <div className="animate-fade-in">
                    <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-foreground leading-tight">
                      {question.question}
                    </h3>
                    <div className="grid gap-3">
                      {question.options.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const isFirst = index === 0 && currentQuestion === 0;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleOptionClick(index)}
                            className={cn(
                              'group text-left px-5 min-h-[68px] md:min-h-[64px] py-4 md:py-5 rounded-2xl border transition-all flex items-center justify-between border-border bg-secondary/40 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 active:scale-[0.98]',
                              isSelected && 'ring-2 ring-primary/50 ring-offset-2 ring-offset-card',
                              isFirst &&
                                isSelected &&
                                'motion-safe:animate-[pulse_2.4s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-medium',
                            )}
                          >
                            <span className="text-base md:text-lg font-medium">{option}</span>
                            <ArrowRight
                              className={cn(
                                'w-5 h-5 transition-all',
                                isSelected
                                  ? 'opacity-100 translate-x-1 text-primary group-hover:text-primary-foreground'
                                  : 'opacity-40 group-hover:opacity-100 group-hover:translate-x-1',
                              )}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
