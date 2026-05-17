import { motion } from 'motion/react';
import { Scale, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export default function TermsPage() {
  return (
    <div className="pt-40 pb-32 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 bg-sage/10 rounded-[30px] flex items-center justify-center mx-auto mb-8">
            <Scale className="w-10 h-10 text-olive" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-olive mb-6 text-right">الشروط والأحكام</h1>
          <p className="text-xl text-olive/60 font-tajawal text-right">يرجى قراءة شروط استخدام متجر {BRAND_NAME} بعناية</p>
        </motion.div>

        <div className="bg-white p-12 rounded-[50px] border border-sage/10 shadow-sm text-right space-y-10">
          {[
            {
              title: "قبول الشروط",
              content: "باستخدامك لموقعنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام."
            },
            {
              title: "أسعار المنتجات",
              content: "جميع الأسعار المعروضة تشمل ضريبة القيمة المضافة ما لم ينص على خلاف ذلك. نحتفظ بالحق في تغيير الأسعار في أي وقت دون إشعار مسبق."
            },
            {
              title: "دقة المعلومات الصحية",
              content: "المعلومات المقدمة في الموقع والمدونة هي لأغراض تعليمية وتثقيفية فقط ولا تعتبر بديلاً عن الاستشارة الطبية المتخصصة. ننصح دائماً بمراجعة الطبيب قبل تجربة أي منتجات عشبية خاصة إذا كنت تعاني من حالات صحية مزمنة."
            },
            {
              title: "الملكية الفكرية",
              content: "جميع المحتويات الموجودة على الموقع من نصوص، صور، شعارات، وتصاميم هي ملك حصري لـ ترياق ومحمية بموجب قوانين الملكية الفكرية."
            },
            {
              title: "الإلغاء والتعديل",
              content: "يمكنك إلغاء طلبك قبل خروجه من مستودعاتنا. بمجرد شحن المنتج، تنطبق سياسة الاسترجاع الموضحة في صفحة الاسترجاع."
            }
          ].map((item, i) => (
            <div key={i} className="border-b border-sage/5 pb-10 last:border-0">
               <h3 className="text-xl font-bold text-olive mb-4 flex items-center justify-end gap-3">
                 <span>{item.title}</span>
                 <CheckCircle2 className="w-5 h-5 text-herbal-gold" />
               </h3>
               <p className="text-olive/70 font-tajawal leading-relaxed">
                 {item.content}
               </p>
            </div>
          ))}

          <div className="bg-sage/5 p-8 rounded-3xl mt-12">
            <div className="flex items-start justify-end gap-3 italic">
              <p className="text-sm text-olive/60 font-tajawal">
                نحتفظ بالحق في تحديث هذه الشروط من وقت لآخر لمواكبة التغيرات القانونية والتقنية. استمرار استخدامك للموقع يعني موافقتك على النسخة المحدثة.
              </p>
              <AlertCircle className="w-5 h-5 text-olive flex-shrink-0" />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-olive/40 font-tajawal mb-6">هل لديك أسئلة حول هذه الشروط؟</p>
          <button className="flex items-center gap-2 bg-white border border-sage/10 px-8 py-3 rounded-full text-olive font-bold mx-auto hover:bg-sage/5 transition-colors">
            <span>تواصل مع الفريق القانوني</span>
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
