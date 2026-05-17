import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Recommendation from './components/Recommendation';
import ProductGrid from './components/ProductGrid';
import QuizPage from './components/QuizPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ShippingPage from './components/ShippingPage';
import RefundPage from './components/RefundPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import { PRODUCTS, Product } from './constants';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [resultProduct, setResultProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRecommendation = (product: Product) => {
    if (product) {
      setResultProduct(product);
      setCurrentView('home');
    }
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero
              onStartQuiz={() => setCurrentView('quiz')}
              onViewProducts={() => setCurrentView('products')}
            />
            
            <div className="py-20 border-y border-sage/10 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="flex items-center gap-12 mx-12">
                    <span className="text-sm font-bold text-olive/40 uppercase tracking-widest">100% طبيعي</span>
                    <span className="text-sm font-bold text-olive/40 uppercase tracking-widest">مقطوف يدوياً</span>
                    <span className="text-sm font-bold text-olive/40 uppercase tracking-widest">جودة متميزة</span>
                    <span className="text-sm font-bold text-olive/40 uppercase tracking-widest">توصيل سريع</span>
                  </div>
                ))}
              </div>
            </div>

            <section className="py-32 px-6 bg-cream relative overflow-hidden">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
                    <img
                      src="/src/assets/images/regenerated_image_1779035047502.jpg"
                      alt="Craftsmanship"
                      className="relative z-10 w-full rounded-[60px] shadow-xl"
                    />
                    <div className="absolute -bottom-6 left-12 glass px-10 py-6 rounded-3xl z-20">
                        <span className="text-xs font-bold text-olive/60 block mb-1">تأسست في</span>
                        <span className="text-2xl font-display font-bold text-olive">2020</span>
                    </div>
                  </div>
                </div>
                <div 
                  className="flex-1 text-right relative p-12 rounded-[40px] overflow-hidden"
                  style={{ 
                    backgroundImage: "url('/src/assets/images/herbal_tea_background_1779034888393.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />
                  <div className="relative z-10">
                    <span className="text-sm font-bold text-herbal-gold uppercase tracking-[0.3em] mb-4 block">قصتنا</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-olive mb-8 leading-tight">نعيد تعريف العلاقة <br />بين الإنسان والطبيعة</h2>
                    <p className="text-lg text-olive/70 font-tajawal leading-relaxed mb-8">
                      في ترياق، نؤمن أن الأرض تخبئ حلولاً لكل ما يرهقنا. بدأنا رحلتنا بالبحث في المخطوطات القديمة ودمجها مع أحدث الأبحاث العلمية لنقدم لك خلاصات عشبية ليست فقط مفيدة، بل تجربة حسية متكاملة تأخذك إلى عالم من الهدوء.
                    </p>
                    <button 
                      onClick={() => setCurrentView('about')}
                      className="px-8 py-3 bg-olive text-cream rounded-full font-bold hover:scale-105 transition-all text-sm shadow-lg"
                    >
                      اقرأ المزيد
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 px-6 bg-sage/5">
              <div className="max-w-7xl mx-auto text-center">
                <span className="text-xs font-bold text-herbal-gold uppercase tracking-[0.3em] mb-4 block">آراء العملاء</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-olive mb-20">قصص واقعية عن التغيير</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: "سارة العبدالله", role: "معلمة", text: "استخدمت خلطة 'سكينة' قبل النوم، وكانت المرة الأولى التي أنام فيها بعمق دون توتر منذ أشهر." },
                    { name: "خالد منصور", role: "مبرمج", text: "خلطة 'تركيز' رفيق دائم لي أثناء العمل. نكهة رائعة وتأثير حقيقي على صفاء ذهني." },
                    { name: "ليلى أحمد", role: "أم لثلاثة أطفال", text: "ترياق ليس مجرد شاي، إنه وقتي الخاص الذي أستعيد فيه طاقتي وهدوئي النفسي." }
                  ].map((test, i) => (
                    <div key={i} className="bg-white p-12 rounded-[50px] border border-sage/10 shadow-sm text-right relative hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex justify-end gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-4 h-4 text-herbal-gold">★</div>)}
                      </div>
                      <p className="text-lg text-olive/80 font-tajawal leading-relaxed mb-8 italic">"{test.text}"</p>
                      <div>
                        <h4 className="font-bold text-olive">{test.name}</h4>
                        <p className="text-xs text-olive/40">{test.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Benefits Bento */}
            <section className="py-32 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                   <div className="md:col-span-8 bg-olive rounded-[60px] p-12 flex flex-col justify-end text-cream group overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="Benefits" />
                      <div className="relative z-10 text-right">
                        <h3 className="text-4xl font-display font-bold mb-4">زراعة مستدامة</h3>
                        <p className="text-cream/60 font-tajawal max-w-md ml-auto">نلتزم بالتعامل مع مزارع تتبع أرقى معايير الاستدامة البيئية لضمان جودة الأرض وجودة المنتج.</p>
                      </div>
                   </div>
                   <div className="md:col-span-4 bg-herbal-gold rounded-[60px] p-12 flex flex-col items-center justify-center text-center text-olive">
                      <h3 className="text-6xl font-display font-bold mb-4">12+</h3>
                      <p className="text-xl font-bold font-tajawal uppercase tracking-widest">خلطة حصرية</p>
                   </div>
                   <div className="md:col-span-4 bg-[#f4ead5] rounded-[60px] p-12 flex flex-col justify-center text-right text-olive border border-sage/10">
                      <h3 className="text-2xl font-bold mb-4">توصيل آمن</h3>
                      <p className="text-sm font-tajawal">نغلف منتجاتنا بمواد صديقة للبيئة تضمن بقاء الزيوت الطيارة.</p>
                   </div>
                   <div className="md:col-span-8 bg-sage rounded-[60px] p-12 flex items-center justify-between group overflow-hidden">
                      <div className="text-right text-olive flex-1 px-8">
                        <h3 className="text-3xl font-display font-bold mb-4">مجتمع ترياق</h3>
                        <p className="text-sm font-tajawal">انضم لأكثر من 50 ألف عضو يشاركون تجاربهم الصحية يومياً.</p>
                      </div>
                      <div className="w-1/3 flex -space-x-4">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-16 h-16 rounded-full border-4 border-sage bg-cream overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </section>
          </>
        );
      case 'products':
        return <ProductGrid onViewProduct={(product) => setResultProduct(product)} />;
      case 'quiz':
        return <QuizPage onRecommendation={handleRecommendation} />;
      case 'blog':
        return <BlogPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'shipping':
        return <ShippingPage />;
      case 'refund':
        return <RefundPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-sage/30">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-cream flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="flex flex-col items-center mb-8"
            >
              <img 
                src="/src/assets/images/triyak_logo_premium_1779033499953.png" 
                alt="ترياق" 
                className="w-24 h-24 object-contain mb-4"
              />
              <span className="text-4xl font-display font-bold text-olive">ترياق</span>
            </motion.div>
            <div className="w-48 h-[1px] bg-olive/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-herbal-gold"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>

        {currentView !== 'contact' && currentView !== 'quiz' && (
          <section className="bg-olive py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-cream mb-8">هل أنت مستعد لتغيير نمط حياتك؟</h2>
              <p className="text-xl text-cream/70 mb-12 font-tajawal">ابدأ رحلتك نحو التوازن الطبيعي اليوم مع ترياق.</p>
              <button
                onClick={() => setCurrentView('quiz')}
                className="px-12 py-5 bg-herbal-gold text-olive rounded-full font-bold hover:scale-105 transition-all text-xl shadow-2xl"
              >
                اجرِ الاختبار الآن
              </button>
            </div>
          </section>
        )}
      </main>

      <footer className="py-20 px-6 border-t border-sage/10 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
          <div className="md:col-span-1">
             <div className="flex items-center justify-end gap-4 mb-8">
               <span className="text-3xl font-display font-bold text-olive">ترياق</span>
               <div className="w-12 h-12 bg-white rounded-full p-2 shadow-sm border border-sage/5">
                 <img 
                    src="/src/assets/images/triyak_logo_premium_1779033499953.png" 
                    alt="ترياق" 
                    className="w-full h-full object-contain"
                 />
               </div>
             </div>
             <p className="text-sm text-olive/60 font-tajawal leading-relaxed">
               رفيقك في رحلة الرفاهية الطبيعية والهدوء المستدام.
             </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-olive mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-sm text-olive/60 font-tajawal">
              <li><button onClick={() => handleNavigate('home')} className="hover:text-olive">الرئيسية</button></li>
              <li><button onClick={() => handleNavigate('products')} className="hover:text-olive">المنتجات</button></li>
              <li><button onClick={() => handleNavigate('about')} className="hover:text-olive">من نحن</button></li>
              <li><button onClick={() => handleNavigate('blog')} className="hover:text-olive">المدونة</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-olive mb-6">الدعم</h4>
            <ul className="space-y-4 text-sm text-olive/60 font-tajawal">
              <li><button onClick={() => { handleNavigate('contact'); window.scrollTo({top: 0}); }} className="hover:text-olive">الأسئلة الشائعة</button></li>
              <li><button onClick={() => handleNavigate('shipping')} className="hover:text-olive">الشحن والتوصيل</button></li>
              <li><button onClick={() => handleNavigate('refund')} className="hover:text-olive">سياسة الاسترجاع</button></li>
              <li><button onClick={() => handleNavigate('contact')} className="hover:text-olive">تواصل معنا</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-olive mb-6">النشرة البريدية</h4>
            <p className="text-sm text-olive/60 font-tajawal mb-4">اشترك ليصلك جديد الخلطات والخصومات</p>
            <div className="flex gap-2">
              <button className="bg-olive text-cream px-6 py-2 rounded-full text-xs font-bold">اشترك</button>
              <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 bg-white border border-sage/10 px-4 py-2 rounded-full text-right text-xs focus:outline-none focus:border-olive" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-sage/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-6 text-olive/40 text-xs font-tajawal">
             <button onClick={() => handleNavigate('privacy')} className="hover:text-olive">سياسة الخصوصية</button>
             <button onClick={() => handleNavigate('terms')} className="hover:text-olive">الشروط والأحكام</button>
           </div>
           <p className="text-xs text-olive/40 font-tajawal">© {new Date().getFullYear()} ترياق. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      <AnimatePresence>
        {resultProduct && (
          <Recommendation
            product={resultProduct}
            onReset={() => {
              setResultProduct(null);
              setCurrentView('quiz');
            }}
            onClose={() => setResultProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
