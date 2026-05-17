import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-medium text-olive mb-6"
          >
            تواصل معنا
          </motion.h1>
          <p className="text-xl text-olive/60 font-tajawal max-w-2xl mx-auto">
            فريق الخبراء لدينا متاح دائماً للإجابة على استفساراتك وتقديم المشورة الصحية المناسبة لك
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-6">
            {[
              { icon: Mail, title: "البريد الإلكتروني", detail: "hello@triyak.com", sub: "نرد خلال 24 ساعة" },
              { icon: Phone, title: "الهاتف", detail: "966 50 123 4567", sub: "متاح من 9 صباحاً لـ 9 مساءً" },
              { icon: MapPin, title: "المكتب الرئيسي", detail: "الرياض، حي الملقا", sub: "مبنى ترياق لابت" },
              { icon: MessageCircle, title: "واتساب", detail: "ابدأ محادثة مباشرة", sub: "دعم فني سريع" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-8 bg-white border border-sage/10 rounded-[40px] hover:border-herbal-gold hover:shadow-lg transition-all text-right"
              >
                <div className="flex-1">
                   <h3 className="text-sm font-bold text-olive/40 mb-1">{item.title}</h3>
                   <div className="text-xl font-bold text-olive mb-1">{item.detail}</div>
                   <div className="text-xs text-olive/50 font-tajawal">{item.sub}</div>
                </div>
                <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-olive" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex-1 bg-white p-12 rounded-[50px] border border-sage/10 shadow-sm relative">
            <h3 className="text-3xl font-display font-medium text-olive mb-10 text-right">أرسل لنا رسالة</h3>
            <form className="space-y-6 text-right" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-olive/60 mb-2">الاسم بالكامل</label>
                  <input type="text" className="w-full bg-cream border border-sage/10 px-6 py-4 rounded-3xl focus:outline-none focus:border-olive text-right transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-olive/60 mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-cream border border-sage/10 px-6 py-4 rounded-3xl focus:outline-none focus:border-olive text-right transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-olive/60 mb-2">الموضوع</label>
                <input type="text" className="w-full bg-cream border border-sage/10 px-6 py-4 rounded-3xl focus:outline-none focus:border-olive text-right transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-olive/60 mb-2">الرسالة</label>
                <textarea rows={5} className="w-full bg-cream border border-sage/10 px-6 py-4 rounded-[32px] focus:outline-none focus:border-olive text-right transition-all resize-none" />
              </div>
              <button className="w-full py-5 bg-olive text-cream rounded-[30px] font-bold text-xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                <span>إرسال الرسالة</span>
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-medium text-olive mb-4">الأسئلة الشائعة</h2>
            <div className="w-12 h-1 h-0.5 bg-herbal-gold/30 mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
             {[
               { q: "هل الخلطات آمنة مع الأدوية؟", a: "ننصح دائماً باستشارة طبيبك قبل استخدام أي أعشاب إذا كنت تتناول أدوية مزمنة." },
               { q: "كم يستغرق التوصيل؟", a: "يستغرق التوصيل من 2-4 أيام عمل في جميع مناطق المملكة." },
               { q: "هل المنتجات عضوية؟", a: "نعم، جميع أعشابنا عضوية 100% وخالية من أي إضافات كيميائية." },
               { q: "كيف أحفظ الخلطات؟", a: "يُفضل حفظها في مكان بارد وجاف بعيداً عن ضوء الشمس المباشر." }
             ].map((faq, i) => (
               <div key={i} className="bg-white border border-sage/10 p-8 rounded-3xl text-right group hover:border-herbal-gold transition-all">
                 <h4 className="text-lg font-bold text-olive mb-2">{faq.q}</h4>
                 <p className="text-olive/60 font-tajawal">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
