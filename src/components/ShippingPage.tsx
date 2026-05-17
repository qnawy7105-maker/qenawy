import { motion } from 'motion/react';
import { Truck, Package, Clock, ShieldCheck, Globe, MapPin } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export default function ShippingPage() {
  return (
    <div className="pt-40 pb-32 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 bg-sage/10 rounded-[30px] flex items-center justify-center mx-auto mb-8">
            <Truck className="w-10 h-10 text-olive" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-olive mb-6">الشحن والتوصيل</h1>
          <p className="text-xl text-olive/60 font-tajawal">كل ما تحتاج معرفته حول وصول {BRAND_NAME} إلى باب منزلك</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: Clock, title: "وقت التوصيل", desc: "نحن نسعى لشحن جميع الطلبات في غضون 24-48 ساعة. يستغرق التوصيل عادةً 2-4 أيام عمل." },
            { icon: Globe, title: "تغطية الخدمة", desc: "نوفر خدمة التوصيل لجميع مدن ومناطق المملكة والخليج العربي." },
            { icon: Package, title: "تغليف آمن", desc: "يتم تغليف كل منتج بعناية فائقة لضمان وصوله بحالته المثالية وحفاظاً على خصائص الأعشاب." },
            { icon: ShieldCheck, title: "تتبع الطلب", desc: "بمجرد شحن طلبك، ستتلقى رسالة نصية تحتوي على رابط تتبع مباشر مع شركة الشحن." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-sage/10 shadow-sm text-right">
              <feature.icon className="w-8 h-8 text-herbal-gold mb-6 ml-auto" />
              <h3 className="text-2xl font-bold text-olive mb-4">{feature.title}</h3>
              <p className="text-olive/60 font-tajawal leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-olive rounded-[60px] p-12 lg:p-20 text-cream text-right relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-3xl font-display font-bold mb-8">سياسة الشحن المجاني</h2>
             <p className="text-lg text-cream/70 font-tajawal mb-8 leading-relaxed">
               استمتع بشحن مجاني تماماً لجميع الطلبات التي تتجاوز قيمتها 299 ريالاً سعودياً داخل المملكة العربية السعودية.
             </p>
             <div className="flex items-center justify-end gap-3 font-bold text-herbal-gold">
               <span>احصل عليه الآن</span>
               <MapPin className="w-5 h-5" />
             </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
