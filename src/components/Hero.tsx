import { motion } from 'motion/react';
import { ShoppingBag, Leaf, Brain, Scale, ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onViewProducts: () => void;
}

export default function Hero({ onStartQuiz, onViewProducts }: HeroProps) {
  return (
    <section className="relative min-h-[140vh] md:min-h-[120vh] flex flex-col items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=2000"
          alt="Natural Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream/80" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10 pt-48 px-6 flex flex-col items-center text-center">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-display font-medium text-olive mb-4 tracking-tight">
            ترياق الطبيعة
          </h1>
          <p className="text-2xl md:text-3xl text-olive/60 font-tajawal">
            سر الراحة من الطبيعة
          </p>
        </motion.div>

        {/* Paper-style Featured Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full max-w-3xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center p-8 md:p-16 mb-24"
        >
          {/* Paper Texture Background */}
          <div className="absolute inset-0 bg-[#f4ead5] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[20px] transform rotate-[-1deg]" />
          <div className="absolute inset-0 bg-[#f9f3e5] m-1 rounded-[15px] border border-[#dcd0b8] shadow-inner" />
          
          {/* Decorative Logo on Card */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20">
            <img 
               src="/src/assets/images/triyak_logo_premium_1779033499953.png" 
               alt="ترياق" 
               className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-olive mb-8 leading-tight">
              توازن يبدأ من الداخل
            </h2>
            <p className="text-lg md:text-xl text-olive/70 mb-12 font-tajawal max-w-lg mx-auto leading-relaxed">
              خلطات عشبية مصممة بعناية <br />
              لراحة الجسد وصفاء الذهن
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={onViewProducts}
                className="order-last sm:order-first px-10 py-4 glass border-olive/10 text-olive rounded-full font-bold hover:bg-olive/5 transition-all text-lg flex items-center gap-3 backdrop-blur-sm"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>استعرض المنتجات</span>
              </button>
              
              <button
                onClick={onStartQuiz}
                className="px-10 py-4 bg-olive text-cream rounded-full font-bold hover:scale-105 transition-all text-lg flex items-center gap-3 shadow-xl"
              >
                <Leaf className="w-5 h-5 transform -scale-x-100" />
                <span>اختر خلطتك المناسبة</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Feature Stats / Feature Section */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-olive/5 mt-12 bg-white/40 backdrop-blur-sm rounded-[40px] px-12 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-olive" />
            </div>
            <h3 className="text-xl font-bold text-olive mb-2">100% طبيعي</h3>
            <p className="text-sm text-olive/60 font-tajawal">مكونات طبيعية مختارة بعناية فائقة</p>
          </div>

          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-olive/10 py-8 md:py-0">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-olive" />
            </div>
            <h3 className="text-xl font-bold text-olive mb-2">صفاء ذهني</h3>
            <p className="text-sm text-olive/60 font-tajawal">يدعم التركيز والراحة ويخفف التوتر</p>
            <button className="mt-4 text-xs font-bold text-olive/40 hover:text-olive transition-colors">اكتشف المزيد</button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
              <Scale className="w-8 h-8 text-olive" />
            </div>
            <h3 className="text-xl font-bold text-olive mb-2">توازن شامل</h3>
            <p className="text-sm text-olive/60 font-tajawal">ليمنحك توازناً حيوياً أفضل لجسمك وعقلك</p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex flex-col items-center gap-2 text-olive/40 cursor-pointer"
          onClick={onViewProducts}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
