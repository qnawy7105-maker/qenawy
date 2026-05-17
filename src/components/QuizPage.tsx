import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Moon, Cloud, Zap, Flame, Shield, Activity, ArrowRight, Leaf, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { QUIZ_CATEGORIES, QUIZ_QUESTIONS, PRODUCTS } from '../constants';

const ICONS = { Moon, Wind: Cloud, Flame, Stomach: Activity, ShieldCheck: Shield, Activity, Zap };

interface QuizPageProps {
  onRecommendation: (product: any) => void;
}

export default function QuizPage({ onRecommendation }: QuizPageProps) {
  const [step, setStep] = useState<'intro' | 'category' | 'questions'>('intro');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setStep('questions');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS[selectedCategory!].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const positiveAnswers = newAnswers.filter(a => a).length;
      const product = PRODUCTS.find(p => p.id.includes(selectedCategory!)) || PRODUCTS[0];
      onRecommendation(product);
    }
  };

  return (
    <div className="pt-40 pb-32 px-6 bg-[#f9f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="w-24 h-24 bg-olive text-cream rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-3">
                 <Sparkles className="w-12 h-12" />
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-medium text-olive mb-8 leading-tight">اكتشف خلطتك المثالية <br /> بدقة بالغة</h1>
              <p className="text-xl text-olive/60 font-tajawal mb-16 leading-relaxed">
                نستخدم خوارزميات ذكية مبنية على أبحاث عشبية تقليدية وحديثة لتحليل حالتك الصحية وترشيح الخلطة الأنسب لاحتياجات جسمك الخاصة.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                 {[
                   { icon: ShieldCheck, title: "تحليل دقيق", desc: "نحلل الأعراض المباشرة وغير المباشرة" },
                   { icon: Zap, title: "نتائج فورية", desc: "احصل على ترشيحك في أقل من دقيقتين" },
                   { icon: Heart, title: "نهج شمولي", desc: "نهتم بموازنة العقل والجسد معاً" }
                 ].map((box, i) => (
                   <div key={i} className="p-10 bg-white rounded-[40px] border border-sage/10 shadow-sm">
                     <box.icon className="w-8 h-8 text-herbal-gold mx-auto mb-6" />
                     <h3 className="text-xl font-bold text-olive mb-4">{box.title}</h3>
                     <p className="text-sm text-olive/50 font-tajawal">{box.desc}</p>
                   </div>
                 ))}
              </div>

              <button
                onClick={() => setStep('category')}
                className="px-16 py-6 bg-olive text-cream rounded-full font-bold text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl herbal-glow"
              >
                ابدأ الاختبار الآن
              </button>
            </motion.div>
          )}

          {step === 'category' && (
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
              <h2 className="text-4xl md:text-5xl font-display font-bold text-olive mb-4">ما هو الشيء الذي يزعجك حالياً؟</h2>
              <p className="text-xl text-olive/60 font-tajawal mb-16">أخبرنا عن حالتك لنرشدك للخلطة الأنسب لك</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {QUIZ_CATEGORIES.map((cat) => {
                  const Icon = ICONS[cat.icon as keyof typeof ICONS] || Activity;
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
          )}

          {step === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl w-full mx-auto text-center"
            >
              <div className="flex flex-col items-center mb-12">
                 <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                   {selectedCategory && (()=>{
                     const Icon = ICONS[QUIZ_CATEGORIES.find(c => c.id === selectedCategory)?.icon as keyof typeof ICONS] || Activity;
                     return <Icon className="w-8 h-8 text-olive" />;
                   })()}
                 </div>
                 <h3 className="text-2xl font-bold text-olive mb-2">
                   {QUIZ_CATEGORIES.find(c => c.id === selectedCategory)?.title}
                 </h3>
                 <div className="w-12 h-0.5 bg-herbal-gold/30" />
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-12 rounded-[50px] border border-sage/10 relative shadow-xl">
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
                    className="group p-8 bg-white border border-sage/10 rounded-[32px] text-xl font-bold hover:bg-olive/5 transition-all flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full border border-olive/10 flex items-center justify-center group-hover:bg-olive group-hover:text-white transition-all">
                      <X className="w-8 h-8" />
                    </div>
                    <span className="text-olive">لا</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(true)}
                    className="group p-8 bg-white border border-sage/10 rounded-[32px] text-xl font-bold hover:bg-olive hover:text-white transition-all flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full border border-olive/10 flex items-center justify-center group-hover:bg-cream/20 transition-all">
                      <CheckCircle2 className="w-8 h-8 text-current" />
                    </div>
                    <span className="group-hover:text-white transition-colors">نعم</span>
                  </button>
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
                  <span>العودة للخلف</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
