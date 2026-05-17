import { motion } from 'motion/react';
import { BRAND_NAME } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: "أسرار اللافندر في تحسين جودة النوم",
    excerpt: "تعرف على كيفية استخدام اللافندر بالطريقة الصحيحة للوصول إلى نوم عميق ومستقر...",
    date: "15 مايو 2026",
    author: "د. سارة الأحمد",
    image: "https://images.unsplash.com/photo-1594610600067-93666f7f6312?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "أفضل 5 أعشاب لتعزيز المناعة في الشتاء",
    excerpt: "اكتشف القوة العلاجية للكركم والزنجبيل وكيفية دمجهم في نظامك الغذائي اليومي...",
    date: "12 مايو 2026",
    author: "أحمد منصور",
    image: "https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "القولون العصبي والتوتر: العلاقة والحلول",
    excerpt: "دراسة حديثة تكشف مدى تأثير الحالة النفسية على الجهاز الهضمي وكيف تعالج ذلك طبيعياً...",
    date: "10 مايو 2026",
    author: "ريم القحطاني",
    image: "https://images.unsplash.com/photo-1512429234300-1c013fb28db5?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-medium text-olive mb-6"
          >
            مدونة {BRAND_NAME}
          </motion.h1>
          <p className="text-xl text-olive/60 font-tajawal max-w-2xl mx-auto">
            نافذتك على عالم من المعرفة الصحية والنصائح الذهبية لحياة أكثر توازناً
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] border border-sage/10 overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-right">
                <div className="flex items-center justify-end gap-4 text-xs font-bold text-olive/40 mb-4 uppercase">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-olive mb-4 group-hover:text-herbal-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-olive/60 font-tajawal text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-olive font-bold hover:gap-4 transition-all mr-auto flex-row-reverse">
                  <span>اقرأ المزيد</span>
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
