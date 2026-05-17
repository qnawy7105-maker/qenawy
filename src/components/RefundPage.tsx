import { motion } from 'motion/react';
import { RotateCcw, ShieldCheck, AlertCircle, RefreshCw, CheckCircle2, PhoneCall } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export default function RefundPage() {
  return (
    <div className="pt-40 pb-32 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 bg-sage/10 rounded-[30px] flex items-center justify-center mx-auto mb-8">
            <RotateCcw className="w-10 h-10 text-olive" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-olive mb-6">سياسة الاسترجاع</h1>
          <p className="text-xl text-olive/60 font-tajawal">التزامنا برضاك هو الأولوية القصوى في {BRAND_NAME}</p>
        </motion.div>

        <div className="space-y-8 mb-20">
          <div className="bg-white p-12 rounded-[50px] border border-sage/10 shadow-sm text-right">
            <h3 className="text-3xl font-display font-bold text-olive mb-8">الشروط العامة للاسترجاع</h3>
            <ul className="space-y-6">
              {[
                "يجب أن يتم طلب الاسترجاع في غضون 7 أيام من تاريخ استلام المنتج.",
                "نظراً لطبيعة المنتجات (أعشاب طبيعية)، يجب أن يكون المنتج في حالته الأصلية ومغلقاً تماماً (لم يتم فتح الغلاف الحافظ).",
                "في حال وجود تلف مصنعي أو خطأ في الطلب، نتحمل كامل تكاليف الشحن والاستبدال.",
                "يتم معالجة مبالغ الاسترداد في غضون 5-10 أيام عمل من تاريخ استلامنا للمنتج المرتجع."
              ].map((item, i) => (
                <li key={i} className="flex items-start justify-end gap-4 text-olive/70 font-tajawal">
                  <span>{item}</span>
                  <CheckCircle2 className="w-6 h-6 text-herbal-gold flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sage/5 p-10 rounded-[40px] text-right">
              <AlertCircle className="w-8 h-8 text-olive mb-6 ml-auto" />
              <h4 className="text-xl font-bold text-olive mb-4">حالات لا يتم فيها الاسترجاع</h4>
              <p className="text-sm text-olive/60 font-tajawal leading-relaxed">
                لا يمكن استرجاع المنتجات التي تم فتح غلافها أو استخدامها، وذلك لأسباب تتعلق بالصحة والسلامة العامة وضمان جودة المنتج.
              </p>
            </div>
            <div className="bg-herbal-gold/10 p-10 rounded-[40px] text-right border border-herbal-gold/20">
              <RefreshCw className="w-8 h-8 text-olive mb-6 ml-auto" />
              <h4 className="text-xl font-bold text-olive mb-4">عملية الاستبدال</h4>
              <p className="text-sm text-olive/60 font-tajawal leading-relaxed">
                إذا كنت ترغب في استبدال خلطة بخرى، يرجى التواصل معنا قبل فتح المنتج، وسنسعد بمساعدتك في اختيار ما يناسبك أكثر.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-16 bg-white rounded-[60px] border border-sage/10 shadow-xl">
           <PhoneCall className="w-12 h-12 text-olive mx-auto mb-8" />
           <h2 className="text-3xl font-display font-medium text-olive mb-4">هل لديك استفسار محدد؟</h2>
           <p className="text-olive/60 font-tajawal mb-8 max-w-lg mx-auto">
             فريق خدمة العملاء متاح دائماً لمساعدتك في حل أي مشكلة قد تواجهك مع طلبك.
           </p>
           <button className="px-12 py-4 bg-olive text-cream rounded-full font-bold hover:scale-105 transition-all shadow-lg font-tajawal">
             تواصل معنا الآن
           </button>
        </div>
      </div>
    </div>
  );
}
