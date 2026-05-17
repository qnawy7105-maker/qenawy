import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Globe } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-32 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 bg-sage/10 rounded-[30px] flex items-center justify-center mx-auto mb-8">
            <Lock className="w-10 h-10 text-olive" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-olive mb-6 text-right">سياسة الخصوصية</h1>
          <p className="text-xl text-olive/60 font-tajawal text-right">نحن نقدر ثقتك ونلتزم بحماية خصوصية بياناتك في {BRAND_NAME}</p>
        </motion.div>

        <div className="bg-white p-12 rounded-[50px] border border-sage/10 shadow-sm text-right space-y-12">
          <section>
            <div className="flex items-center justify-end gap-3 mb-6">
              <h2 className="text-2xl font-bold text-olive">جمع المعلومات</h2>
              <Eye className="w-6 h-6 text-herbal-gold" />
            </div>
            <p className="text-olive/70 font-tajawal leading-relaxed">
              نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب، أو إجراء عملية شراء، أو الاشتراك في نشرتنا البريدية. تشمل هذه المعلومات الاسم، العنوان، البريد الإلكتروني، ورقم الهاتف.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-end gap-3 mb-6">
              <h2 className="text-2xl font-bold text-olive">كيفية استخدام معلوماتك</h2>
              <Shield className="w-6 h-6 text-herbal-gold" />
            </div>
            <p className="text-olive/70 font-tajawal leading-relaxed">
               نستخدم معلوماتك لمعالجة طلباتك، وتحسين تجربة التسوق الخاصة بك، والتواصل معك بشأن العروض والمنتجات الجديدة (بناءً على موافقتك)، وضمان أمان معاملاتك.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-end gap-3 mb-6">
              <h2 className="text-2xl font-bold text-olive">مشاركة المعلومات مع أطراف ثالثة</h2>
              <Globe className="w-6 h-6 text-herbal-gold" />
            </div>
            <p className="text-olive/70 font-tajawal leading-relaxed">
              لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك المعلومات فقط مع شركاء الخدمة الموثوقين (مثل شركات الشحن وبوابات الدفع) لإتمام عملية الشراء بنجاح.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-end gap-3 mb-6">
              <h2 className="text-2xl font-bold text-olive">أمان البيانات</h2>
              <FileText className="w-6 h-6 text-herbal-gold" />
            </div>
            <p className="text-olive/70 font-tajawal leading-relaxed">
              نحن نستخدم بروتوكولات أمان متقدمة (SSL) لتشفير بياناتك وحمايتها من الوصول غير المصرح به. جميع المعاملات المالية تتم عبر بوابات دفع آمنة ومعتمدة عالمياً.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
