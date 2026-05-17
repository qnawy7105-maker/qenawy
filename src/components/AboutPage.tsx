import { motion } from 'motion/react';
import { BRAND_NAME } from '../constants';
import { ShieldCheck, Heart, Leaf, Sprout } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="flex-1 text-right">
             <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-bold text-herbal-gold uppercase tracking-[0.3em] mb-4 block"
            >
              من نحن
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-medium text-olive mb-8 leading-tight"
            >
              قصة شغف <br /> بدأت من الطبيعة
            </motion.h1>
            <p className="text-xl text-olive/70 font-tajawal leading-relaxed mb-8">
              في {BRAND_NAME}، نحن لا نبيع مجرد أعشاب. نحن نقدم رحلة للعودة إلى الذات، والتصالح مع الجسد من خلال كنوز الأرض التي أهملناها في صخب الحياة الحديثة. بدأنا كفريق صغير من الباحثين والمؤمنين بقدرة الطبيعة الشفائية، واليوم نحن فخورون بخدمة الآلاف من الباحثين عن الهدوء والتوازن.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-sage/5 rounded-3xl border border-olive/5">
                <span className="block text-3xl font-display font-bold text-olive mb-1">50+</span>
                <span className="text-sm text-olive/50 font-tajawal">مزارع نورد منها</span>
              </div>
              <div className="p-6 bg-sage/5 rounded-3xl border border-olive/5">
                <span className="block text-3xl font-display font-bold text-olive mb-1">10k+</span>
                <span className="text-sm text-olive/50 font-tajawal">عميل سعيد</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-sage/10 rounded-[60px] rotate-3 transform" />
              <img
                src="https://images.unsplash.com/photo-1512429234300-1c013fb28db5?auto=format&fit=crop&q=80&w=1000"
                alt="Our Story"
                className="relative z-10 w-full h-full object-cover rounded-[60px] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: ShieldCheck, title: "جودة مضمونة", desc: "نستخدم فقط أفضل أنواع الأعشاب المختارة يدوياً" },
            { icon: Heart, title: "صنع بحب", desc: "كل خلطة مصنوعة بعناية فائقة لتناسب احتياجاتك" },
            { icon: Leaf, title: "عضوي بالكامل", desc: "خالي من المواد الكيميائية والإضافات الصناعية" },
            { icon: Sprout, title: "مستدام", desc: "نهتم بالأرض كما نهتم بصحتك تماماً" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-center p-10 bg-white border border-sage/10 rounded-[40px] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-olive" />
              </div>
              <h3 className="text-xl font-bold text-olive mb-4">{feature.title}</h3>
              <p className="text-sm text-olive/60 font-tajawal leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Heritage Section */}
        <div className="bg-sage/5 rounded-[60px] p-12 lg:p-24 overflow-hidden relative mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-olive mb-12">التزامنا تجاه الطبيعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-right">
              <div>
                <h4 className="text-2xl font-bold text-olive mb-4">حصاد أخلاقي</h4>
                <p className="text-olive/60 font-tajawal leading-relaxed">
                  نحن لا نشتري الأعشاب من الأسواق المفتوحة؛ بل نتعامل مباشرة مع مزارع عائلية صغيرة في مناطق مختلفة من العالم، تلتزم بمبادئ الزراعة العضوية والدورة الطبيعية للحصاد.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-olive mb-4">تغليف صديق</h4>
                <p className="text-olive/60 font-tajawal leading-relaxed">
                  أكياس ترياق مصنوعة من ورق كرافت معاد تدويره، ومبطنة بمادة طبيعية قابلة للتحلل الحيوي، مما يضمن الحفاظ على الزيوت الطيارة للأعشاب دون إزعاج التوازن البيئي.
                </p>
              </div>
            </div>
            <div className="mt-20 border-t border-olive/10 pt-12 flex flex-wrap justify-center gap-12">
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-herbal-gold" />
                 <span className="font-bold text-olive">عضوي معتمد</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-herbal-gold" />
                 <span className="font-bold text-olive">تجارة عادلة</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-herbal-gold" />
                 <span className="font-bold text-olive">خالي من البلاستيك</span>
               </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20 mb-32">
          <div className="flex-1 text-right">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-olive mb-8">رؤيتنا للمستقبل</h2>
            <p className="text-lg text-olive/70 font-tajawal leading-relaxed mb-8">
              نطمح لأن يكون {BRAND_NAME} هو الوجهة الأولى لكل من يبحث عن التوازن الصحي الطبيعي في الوطن العربي. نحن نسعى لتعليم جيل جديد كيفية استخدام الطبيعة كدرع وقائي وكعامل معزز لجودة الحياة اليومية.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3 font-bold text-olive">
                <span>توسيع نطاق المزارع المحلية</span>
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 font-bold text-olive">
                <span>إطلاق مختبرات أبحاث متخصصة</span>
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=1000"
              className="rounded-[60px] shadow-2xl"
              alt="Vision"
            />
          </div>
        </div>

        {/* Ingredients Showcase */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-olive mb-16">جودتنا تبدأ من بذورنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "البابونج", origin: "الأندلس", img: "https://images.unsplash.com/photo-1515589177017-dcba273f4bb0?auto=format&fit=crop&q=80&w=400" },
              { name: "الميرمية", origin: "جبال الريف", img: "https://images.unsplash.com/photo-1596719040037-234310d7aa31?auto=format&fit=crop&q=80&w=400" },
              { name: "اللافندر", origin: "بروفانس", img: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?auto=format&fit=crop&q=80&w=400" },
              { name: "الكركم", origin: "بالي", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400" }
            ].map((ing, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-[40px] overflow-hidden"
              >
                <img src={ing.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={ing.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/80 to-transparent" />
                <div className="absolute bottom-8 right-8 text-right">
                  <h4 className="text-xl font-bold text-cream">{ing.name}</h4>
                  <p className="text-xs text-cream/60 font-tajawal">موطنها: {ing.origin}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
