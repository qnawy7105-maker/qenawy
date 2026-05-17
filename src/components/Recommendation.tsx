import { motion } from 'motion/react';
import { ShoppingCart, RefreshCcw, Star, Check, ArrowRight, ShieldCheck, Heart, Leaf, Coffee, Sprout, Wind, Search, MessageCircle, BookOpen } from 'lucide-react';
import { Product } from '../constants';

interface RecommendationProps {
  product: Product;
  onReset: () => void;
  onClose: () => void;
}

const INGREDIENT_ICONS: Record<string, any> = {
  "نعناع": Leaf,
  "زنجبيل": Sprout,
  "بابونج": Coffee,
  "لافندر": Wind,
  "روزماري": Leaf,
  "قرفة": Sprout,
  "كركم": Sprout,
  "يانسون": Sprout,
  "شمر": Leaf,
  "كمون": Coffee,
  "ميرمية": Leaf,
  "زعتر": Leaf,
  "إكليل الجبل": Leaf,
  "مليسة": Sprout,
};

export default function Recommendation({ product, onReset, onClose }: RecommendationProps) {
  return (
    <div className="fixed inset-0 z-[110] bg-[#f9f5f0] overflow-y-auto min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=2000"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#f9f5f0]/80 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-6 py-12 relative z-10"
      >
        <div className="flex items-center justify-between mb-12">
           <button
            onClick={onReset}
            className="flex items-center gap-2 text-olive/60 font-bold hover:text-olive transition-all bg-white/50 px-6 py-3 rounded-full border border-olive/5"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>إعادة اختبار مشكلة أخرى</span>
          </button>
          
          <div className="flex items-center gap-10">
             {/* Navbar items could be here or keep it clean */}
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-olive text-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-display font-medium text-olive mb-4">خلطتك المناسبة جاهزة لك!</h1>
          <p className="text-xl text-olive/60 font-tajawal">بناءً على إجاباتك، هذه هي الخلطة الأنسب لحالتك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-[40px] border border-white shadow-sm">
              <h3 className="text-sm font-bold text-olive/40 mb-6 uppercase tracking-widest border-b border-olive/5 pb-4">الهدف الأساسي</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-olive" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-olive mb-2">دعم القولون والانتفاخ</h4>
                  <p className="text-sm text-olive/60">تخفيف الانتفاخ والغازات وتحسين الهضم بشكل عام.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-10 rounded-[40px] border border-white shadow-sm">
              <h3 className="text-sm font-bold text-olive/40 mb-6 uppercase tracking-widest border-b border-olive/5 pb-4">الفوائد المتوقعة</h3>
              <div className="space-y-6">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center justify-end gap-3 text-olive/80">
                    <span className="font-tajawal text-lg font-medium">{benefit}</span>
                    <div className="w-6 h-6 rounded-full border border-olive/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-olive" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Product Card */}
          <div className="lg:col-span-8 bg-white/80 backdrop-blur-md p-12 rounded-[40px] border border-white shadow-sm relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-sage/20 rounded-[60px] blur-3xl group-hover:bg-herbal-gold/20 transition-all duration-700" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-full aspect-[4/5] object-cover rounded-[50px] shadow-2xl animate-float"
                  />
                  
                  {/* Decorative Elements around image */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-sage/10">
                    <Leaf className="w-6 h-6 text-sage" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-right">
                <div className="flex items-center justify-end gap-2 mb-4 bg-sage/5 w-fit ml-auto px-4 py-2 rounded-full border border-olive/5">
                  <Star className="w-4 h-4 fill-herbal-gold text-herbal-gold" />
                  <span className="text-xs font-bold text-olive/60">تقييم 5/5</span>
                </div>

                <h2 className="text-5xl font-display font-medium text-olive mb-2">{product.name}</h2>
                <h3 className="text-2xl text-olive/60 mb-6 font-tajawal">({product.category})</h3>
                
                <p className="text-lg text-olive/70 mb-10 font-tajawal leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-10">
                  <div className="bg-sage/5 py-4 px-6 rounded-2xl text-center border border-olive/5">
                    <span className="block text-xs font-bold text-olive/40 mb-1">طبيعية 100%</span>
                    <ShieldCheck className="w-5 h-5 text-olive mx-auto" />
                  </div>
                  <div className="bg-sage/5 py-4 px-6 rounded-2xl text-center border border-olive/5">
                    <span className="block text-xs font-bold text-olive/40 mb-1">سريعة المفعول</span>
                    <Zap className="w-5 h-5 text-olive mx-auto" />
                  </div>
                  <div className="bg-sage/5 py-4 px-6 rounded-2xl text-center border border-olive/5 col-span-2">
                    <span className="block text-xs font-bold text-olive/40 mb-1">مناسبة للاستخدام اليومي</span>
                    <div className="flex justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-olive" />
                    </div>
                  </div>
                </div>

                <button className="w-full py-6 bg-olive text-cream rounded-[30px] font-bold text-2xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                  <span>أضف للسلة ومتابعة</span>
                  <ShoppingCart className="w-7 h-7" />
                </button>
                <button className="w-full mt-4 py-4 text-olive font-bold hover:text-herbal-gold transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>أضف إلى المفضلة للاطلاع لاحقاً</span>
                </button>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white/80 backdrop-blur-md p-12 rounded-[40px] border border-white shadow-sm mb-12">
            <div className="text-center mb-10">
              <div className="w-12 h-0.5 bg-herbal-gold/30 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-olive">المكونات الرئيسية في الخلطة</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {product.ingredients.map((ing, i) => {
                const Icon = INGREDIENT_ICONS[ing] || Leaf;
                return (
                  <div key={i} className="flex flex-col items-center gap-4 p-6 bg-cream rounded-3xl border border-olive/5 group hover:border-herbal-gold hover:shadow-lg transition-all duration-500">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-olive" />
                    </div>
                    <span className="font-bold text-olive">{ing}</span>
                  </div>
                );
              })}
            </div>
            
            <p className="text-center mt-12 text-olive/40 text-sm font-tajawal italic">
               * المكونات طبيعية 100% وقد تختلف قليلاً حسب توفرها وموسم حصادها.
            </p>
        </div>

        {/* Footer Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <button onClick={onReset} className="p-8 bg-white/60 hover:bg-white rounded-[32px] border border-white flex flex-col items-center gap-4 group transition-all">
             <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                <RefreshCcw className="w-6 h-6 text-olive" />
             </div>
             <span className="font-bold text-olive text-sm">إعادة الاختبار لمشكلة أخرى</span>
          </button>
          
          <button onClick={onClose} className="p-8 bg-white/60 hover:bg-white rounded-[32px] border border-white flex flex-col items-center gap-4 group transition-all">
             <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center">
                <Search className="w-6 h-6 text-olive" />
             </div>
             <span className="font-bold text-olive text-sm">استعرض المنتجات المناسبة لحالتك</span>
          </button>

          <button className="p-8 bg-white/60 hover:bg-white rounded-[32px] border border-white flex flex-col items-center gap-4 group transition-all">
             <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-olive" />
             </div>
             <span className="font-bold text-olive text-sm">قراءة المزيد عن هذا الموضوع</span>
          </button>

          <button className="p-8 bg-white/60 hover:bg-white rounded-[32px] border border-white flex flex-col items-center gap-4 group transition-all">
             <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-olive" />
             </div>
             <span className="font-bold text-olive text-sm">تواصل مع خبير لطلب استشارة</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-olive/5 rounded-[32px] gap-8">
           <div className="flex items-center gap-8">
             <div className="flex items-center gap-2 text-olive/40">
               <ShieldCheck className="w-5 h-5" />
               <span className="text-xs font-bold font-tajawal">دفع آمن بوسائل متعددة</span>
             </div>
             <div className="flex items-center gap-2 text-olive/40 border-r border-olive/10 pr-8">
               <Sprout className="w-5 h-5" />
               <span className="text-xs font-bold font-tajawal">توصيل سريع لكل المناطق</span>
             </div>
           </div>
           
           <div className="flex items-center gap-2 bg-white/50 px-6 py-2 rounded-full">
              <span className="text-sm font-bold text-olive">ترياق - سر الطبيعة في كل كوب</span>
              <Leaf className="w-4 h-4 text-sage" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}

// Missing imports fix
import { CheckCircle2, Zap } from 'lucide-react';
