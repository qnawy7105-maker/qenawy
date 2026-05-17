import { motion } from 'motion/react';
import { ShoppingCart, Star, Eye, ShieldCheck, Zap, Leaf, ShoppingBag } from 'lucide-react';
import { PRODUCTS, Product } from '../constants';

interface ProductGridProps {
  onViewProduct?: (product: Product) => void;
}

export default function ProductGrid({ onViewProduct }: ProductGridProps) {
  return (
    <section id="products" className="py-32 px-6 bg-[#fdfaf5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-olive" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-medium text-olive mb-6"
          >
            منتجات ترياق الطبيعة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-olive/60 max-w-2xl mx-auto font-tajawal text-xl mb-12"
          >
            خلطات عشبية طبيعية مصممة بعناية، لدعم صحتك وحياتك اليومية
          </motion.p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
             <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-sage/10 shadow-sm">
                <Leaf className="w-4 h-4 text-olive" />
                <span className="text-sm font-bold text-olive">مكونات طبيعية 100%</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-sage/10 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-olive" />
                <span className="text-sm font-bold text-olive">آمنة وفعالة</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-sage/10 shadow-sm">
                <Zap className="w-4 h-4 text-olive" />
                <span className="text-sm font-bold text-olive">مناسبة للاستخدام اليومي</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[40px] border border-sage/10 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-[30px] mb-8 bg-[#fdfaf5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-olive border border-sage/5">
                  {product.category}
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-olive mb-1">{product.name}</h3>
                <span className="text-olive/50 text-sm font-tajawal">({product.category})</span>
                
                <p className="mt-4 text-olive/60 font-tajawal text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-sage/5">
                <div className="flex flex-col">
                   <div className="flex items-center gap-1">
                     <span className="text-2xl font-bold text-olive">{product.price}</span>
                     <span className="text-xs font-bold text-olive/40">ريال</span>
                   </div>
                </div>
                
                <div className="flex items-center gap-3">
                   <button 
                     onClick={() => onViewProduct?.(product)}
                     className="w-12 h-12 bg-sage/5 rounded-2xl flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-all shadow-sm"
                   >
                     <ShoppingBag className="w-5 h-5" />
                   </button>
                   <button 
                     onClick={() => onViewProduct?.(product)}
                     className="px-6 py-3 bg-olive text-cream rounded-2xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
                   >
                     عرض التفاصيل
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quality Section */}
        <div className="mt-32 bg-olive rounded-[60px] p-12 lg:p-24 text-cream flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
          <div className="flex-1 z-10 text-right">
            <span className="text-sm font-bold text-herbal-gold uppercase tracking-[0.3em] mb-4 block">معايير الدقة</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight">جودة نضمنها <br />بكل فخر</h2>
            <p className="text-xl text-cream/70 font-tajawal leading-relaxed mb-12">
              كل خلطة من ترياق تخضع لـ 7 مراحل من الفحص الدقيق، بدءاً من اختبار التربة في المزارع المتعاقد معها، وصولاً إلى التغليف الذي يحمي الخصائص العطرية والعلاجية للأعشاب.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center justify-end gap-4">
                <span className="font-bold">شهادة جودة عالمية</span>
                <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-herbal-gold" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <span className="font-bold">نباتي 100%</span>
                <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-herbal-gold" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=1000" 
              alt="Quality Lab"
              className="rounded-[40px] shadow-2xl rotate-3"
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cream/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        
        {/* Preparation Steps */}
        <div className="mt-32 text-center pb-20">
          <h2 className="text-4xl font-display font-medium text-olive mb-24">طريقة التحضير لتحقيق أقصى استفادة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "الماء المغلي", desc: "استخدم ماءً عذباً مصفى واجعله يصل لدرجة الغليان كخطوة أولى أساسية." },
              { step: "02", title: "الاستخلاص", desc: "أضف ملعقة من الخلطة في كوبك المفضل واتركها تتخمر لمدة 7-10 دقائق." },
              { step: "03", title: "الاستمتاع", desc: "اشربها دافئة ببطء، تنفس الأبخرة العطرية لتشعر بالتأثير العميق للأعشاب." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-12 bg-white rounded-[40px] border border-sage/10 shadow-sm hover:border-herbal-gold transition-all duration-500 text-right">
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-display font-bold text-sage/5 leading-none">{item.step}</span>
                <h4 className="text-2xl font-bold text-olive mb-4">{item.title}</h4>
                <p className="text-olive/60 font-tajawal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Bundles */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-herbal-gold uppercase tracking-[0.3em] mb-4 block">مجموعات مختارة</span>
            <h2 className="text-4xl font-display font-medium text-olive">الهدية المثالية لمن تحب</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: "مجموعة السكينة المتكاملة", 
                price: "249 ريال", 
                items: ["خلطة سكينة (50 جرام)", "كوب سيراميك يدوي", "مبخرة خشبية أصلية"],
                img: "https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=600"
              },
              { 
                name: "صندوق الطاقة والحيوية", 
                price: "219 ريال", 
                items: ["خلطة إشراق (50 جرام)", "خلطة تركيز (50 جرام)", "مصفاة شاي نحاسية"],
                img: "https://images.unsplash.com/photo-1515589177017-dcba273f4bb0?auto=format&fit=crop&q=80&w=600"
              }
            ].map((bundle, i) => (
              <div key={i} className="group relative h-[400px] rounded-[60px] overflow-hidden flex items-center justify-end p-12 text-right">
                <img src={bundle.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={bundle.name} />
                <div className="absolute inset-0 bg-gradient-to-l from-olive/90 via-olive/40 to-transparent" />
                <div className="relative z-10 max-w-xs">
                  <h3 className="text-3xl font-display font-bold text-cream mb-4">{bundle.name}</h3>
                  <ul className="text-cream/70 text-sm font-tajawal mb-8 space-y-2">
                    {bundle.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                  </ul>
                  <div className="flex items-center justify-end gap-6">
                    <span className="text-2xl font-bold text-herbal-gold">{bundle.price}</span>
                    <button className="px-6 py-2 bg-cream text-olive rounded-full font-bold text-sm hover:bg-herbal-gold transition-colors">اطلب الآن</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
