import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Moon, Cloud, Zap, Flame, Shield, Activity, ArrowRight, Leaf } from 'lucide-react';
import { useState } from 'react';
import { QUIZ_CATEGORIES, QUIZ_QUESTIONS, PRODUCTS } from '../constants';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResult: (productId: string) => void;
}

const ICONS = {
  Moon: Moon,
  Stomach: Cloud,
  Wind: Zap,
  Flame: Flame,
  ShieldCheck: Shield,
  Activity: Activity
};

export default function QuizModal({ isOpen, onClose, onResult }: QuizModalProps) {
  const [step, setStep] = useState<'category' | 'questions'>('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setStep('questions');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const calculateResult = (category: string, userAnswers: boolean[]) => {
    switch (category) {
      case 'sleep':
        if (userAnswers[0] && userAnswers[1]) return 'peace-of-mind';
        if (userAnswers[2] && userAnswers[3]) return 'stomach-balance';
        if (userAnswers[0] && !userAnswers[2]) return 'mind-clarity';
        return 'peace-of-mind';
      case 'colon':
        if (userAnswers[0] && userAnswers[1]) return 'stomach-comfort';
        if (userAnswers[2]) return 'mind-clarity';
        if (userAnswers[3]) return 'stomach-balance';
        return 'stomach-comfort';
      case 'stress':
        if (userAnswers[0] && userAnswers[3]) return 'peace-of-mind';
        if (userAnswers[1] && userAnswers[2]) return 'head-quietness';
        if (userAnswers[0]) return 'mind-clarity';
        return 'mind-clarity';
      case 'reflux':
        if (userAnswers[0] && userAnswers[1]) return 'stomach-balance';
        if (userAnswers[2]) return 'stomach-comfort';
        if (userAnswers[3]) return 'peace-of-mind';
        return 'stomach-balance';
      case 'immunity':
        if (userAnswers[0] && userAnswers[1]) return 'body-shield';
        if (userAnswers[2]) return 'peace-of-mind';
        return 'body-shield';
      case 'headache':
        if (userAnswers[0] && userAnswers[3]) return 'head-quietness';
        if (userAnswers[1]) return 'peace-of-mind';
        return 'head-quietness';
      default:
        return 'peace-of-mind';
    }
  };

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (selectedCategory && currentQuestionIndex < QUIZ_QUESTIONS[selectedCategory].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (selectedCategory) {
      const resultProductId = calculateResult(selectedCategory, newAnswers);
      onResult(resultProductId);
      // Reset state for next time
      setStep('category');
      setSelectedCategory(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-olive/40 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-cream rounded-[40px] shadow-2xl overflow-hidden flex flex-col min-h-[600px]"
      >
        <div className="flex items-center justify-between p-8 border-b border-sage/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage" />
            <span className="text-sm font-bold text-olive/60 uppercase tracking-widest">اختبار ترياق الذكي</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center hover:bg-sage/10 transition-all"
          >
            <X className="w-5 h-5 text-olive" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-12 flex flex-col items-center justify-start min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 'category' ? (
              <motion.div
                key="category"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full text-center"
              >
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-olive" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-olive mb-4">اختر خلطتك المناسبة</h2>
                <p className="text-xl text-olive/60 font-tajawal mb-16">أخبرنا عن حالتك لنرشدك للخلطة الأنسب لك</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {QUIZ_CATEGORIES.map((cat) => {
                    const Icon = ICONS[cat.icon as keyof typeof ICONS];
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className="group relative p-8 bg-sage/5 border border-sage/10 rounded-[32px] text-center hover:bg-white hover:border-herbal-gold hover:shadow-xl transition-all duration-500"
                      >
                        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-olive" />
                        </div>
                        <h3 className="text-xl font-bold text-olive mb-3">{cat.title}</h3>
                        <p className="text-xs text-olive/50 leading-relaxed font-tajawal max-w-[200px] mx-auto">{cat.description}</p>
                      </button>
                    );
                  })}
                </div>
                
                <p className="mt-16 text-olive/40 text-sm font-tajawal flex items-center justify-center gap-2">
                  <Leaf className="w-4 h-4" />
                  <span>الأسئلة بسيطة وسريعة، وتساعدنا على اختيار الأفضل لك من الطبيعة</span>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-2xl w-full text-center"
              >
                <div className="flex flex-col items-center mb-12">
                   <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                     {selectedCategory && (()=>{
                       const Icon = ICONS[QUIZ_CATEGORIES.find(c => c.id === selectedCategory)?.icon as keyof typeof ICONS];
                       return <Icon className="w-8 h-8 text-olive" />;
                     })()}
                   </div>
                   <h3 className="text-2xl font-bold text-olive mb-2">
                     {QUIZ_CATEGORIES.find(c => c.id === selectedCategory)?.title}
                   </h3>
                   <div className="w-12 h-0.5 bg-herbal-gold/30" />
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-12 rounded-[40px] border border-sage/10 relative">
                  <div className="flex items-center justify-center gap-2 mb-12">
                    {QUIZ_QUESTIONS[selectedCategory!].map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 w-12 rounded-full transition-all duration-500 ${
                          idx <= currentQuestionIndex ? 'bg-olive' : 'bg-sage/10'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="text-xs font-bold text-olive/40 uppercase tracking-widest mb-6 block">
                    السؤال {currentQuestionIndex + 1} من {QUIZ_QUESTIONS[selectedCategory!].length}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-olive mb-16 leading-tight min-h-[100px]">
                    س{currentQuestionIndex + 1}: {QUIZ_QUESTIONS[selectedCategory!][currentQuestionIndex]}
                  </h2>

                  <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    <button
                      onClick={() => handleAnswer(false)}
                      className="group p-6 bg-white border border-sage/10 rounded-3xl text-xl font-bold hover:bg-olive/5 transition-all flex flex-col items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-olive/10 flex items-center justify-center group-hover:bg-olive group-hover:text-white transition-all">
                        <X className="w-6 h-6" />
                      </div>
                      <span className="text-olive">لا</span>
                    </button>
                    <button
                      onClick={() => handleAnswer(true)}
                      className="group p-6 bg-white border border-sage/10 rounded-3xl text-xl font-bold hover:bg-olive/5 transition-all flex flex-col items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-olive/10 flex items-center justify-center group-hover:bg-olive group-hover:text-white transition-all">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-olive">نعم</span>
                    </button>
                  </div>

                  <div className="mt-12 p-4 bg-sage/5 rounded-2xl flex items-center gap-3 text-right">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                       <Zap className="w-5 h-5 text-herbal-gold" />
                    </div>
                    <p className="text-sm text-olive/60 font-tajawal">
                      نصيحة: إجاباتك تساعدنا على ترشيح الخلطة الأنسب لك بدقة.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between px-4">
                  <button
                    onClick={() => {
                      if (currentQuestionIndex > 0) {
                        setCurrentQuestionIndex(currentQuestionIndex - 1);
                        setAnswers(answers.slice(0, -1));
                      } else {
                        setStep('category');
                      }
                    }}
                    className="flex items-center gap-2 text-olive/60 font-bold hover:text-olive transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>السؤال السابق</span>
                  </button>
                  
                  <button
                    className="px-10 py-4 bg-olive text-cream rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-lg"
                  >
                    <span>السؤال التالي</span>
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
