export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  benefits: string[];
  ingredients: string[];
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "peace-of-mind",
    name: "راحة",
    description: "مزيج عشبي طبيعي يساعد على تحسين جودة النوم، تخفيف التوتر والقلق، ودعم الاسترخاء العميق.",
    image: "https://images.unsplash.com/photo-1594610600067-93666f7f6312?auto=format&fit=crop&q=80&w=800",
    price: 79,
    benefits: ["يقلل التوتر", "يساعد على الدخول في نوم عميق", "يهدئ الأعصاب"],
    ingredients: ["لافندر", "بابونج", "مليسة", "جذر الناردين"],
    category: "راحة البال"
  },
  {
    id: "stomach-balance",
    name: "توازن",
    description: "مزيج عشبي طبيعي يساعد على تهدئة الحموضة، دعم الهضم المتوازن، وتخفيف الارتجاع.",
    image: "https://images.unsplash.com/photo-1544193159-079c7271c774?auto=format&fit=crop&q=80&w=800",
    price: 79,
    benefits: ["يقلل الحموضة", "يحسن الهضم", "يهدئ تهيج الحلق"],
    ingredients: ["عرق سوس", "زنجبيل", "بابونج", "نعناع"],
    category: "توازن المعدة"
  },
  {
    id: "mind-clarity",
    name: "صفاء",
    description: "مزيج عشبي طبيعي يساعد على تهدئة الذهن، تقليل التوتر، وتعزيز صفاء التفكير والتركيز.",
    image: "https://images.unsplash.com/photo-1512429234300-1c013fb28db5?auto=format&fit=crop&q=80&w=800",
    price: 79,
    benefits: ["يزيد التركيز", "يقلل التشتت", "ينعش الذاكرة"],
    ingredients: ["روزماري", "جنكة بيلوبا", "ميرمية", "قشر برتقال"],
    category: "صفاء الذهن"
  },
  {
    id: "stomach-comfort",
    name: "خفة",
    description: "مزيج عشبي طبيعي يساعد على تحسين الهضم، تخفيف الانتفاخ والغازات، لراحة الهضم السريع.",
    image: "https://images.unsplash.com/photo-1564149504294-81cc9c212f42?auto=format&fit=crop&q=80&w=800",
    price: 79,
    benefits: ["يطرد الغازات", "يخفف التقلصات", "يريح القولون"],
    ingredients: ["يانسون", "شمر", "كمون", "قرفة"],
    category: "راحة البطن"
  },
  {
    id: "head-quietness",
    name: "هدوء",
    description: "مزيج عشبي طبيعي يساعد على تهدئة الأعصاب، تخفيف التوتر والشد العصبي، ودعم الاسترخاء والهدوء الذهني.",
    image: "https://images.unsplash.com/photo-1563865436874-9aef32095fed?auto=format&fit=crop&q=80&w=800",
    price: 79,
    benefits: ["يسكن الصداع", "يرخي عضلات الرقبة", "يحسن الدورة الدموية"],
    ingredients: ["قرفة", "زنجبيل", "نعناع فلفلي", "قرنفل"],
    category: "سكون الرأس"
  },
  {
    id: "body-shield",
    name: "حصن",
    description: "مزيج عشبي طبيعي يدعم جهاز المناعة، زيادة مقاومة الجسم، والحفاظ على الحيوية والنشاط.",
    image: "https://images.unsplash.com/photo-1544193106-93d395a0446b?auto=format&fit=crop&q=80&w=800",
    price: 79,
    benefits: ["يقوي المناعة", "مضاد للأكسدة", "يزيد النشاط"],
    ingredients: ["كركم", "زنجبيل", "قشر رمان", "عسل البرسيم"],
    category: "دعم المناعة"
  }
];

export const QUIZ_CATEGORIES = [
  { id: "sleep", title: "النوم", icon: "Moon", description: "صعوبة في النوم أو الاستيقاظ المتكرر" },
  { id: "stress", title: "التوتر والقلق", icon: "Wind", description: "توتر دائم، قلق، عصبية وحاجة للاسترخاء" },
  { id: "reflux", title: "الارتجاع والحموضة", icon: "Flame", description: "حرقة، ارتجاع، عسر هضم وانتفاخ بعد الأكل" },
  { id: "colon", title: "القولون والانتفاخ", icon: "Stomach", description: "انتفاخ، غازات، مغص، اضطرابات هضمية" },
  { id: "immunity", title: "ضعف المناعة", icon: "ShieldCheck", description: "تعب متكرر، نزلات برد، ضعف عام في الجسم" },
  { id: "headache", title: "ضعف التركيز", icon: "Activity", description: "تشتت ذهني، نسيان، إرهاق ذهني، حاجة لصفاء ذهن" }
];

export const BRAND_NAME = "ترياق";

export const QUIZ_QUESTIONS: Record<string, string[]> = {
  sleep: [
    "هل تعاني من صعوبة في النوم؟",
    "هل تشعر بالتفكير المستمر والإرهاق؟",
    "هل يتسم يومك بالضغط والتوتر الشديد؟",
    "هل تستيقظ من النوم وأنت تشعر بعدم الراحة؟"
  ],
  colon: [
    "انتفاخ يومي؟",
    "مغص بعد الأكل؟",
    "التوتر يزيد الأعراض؟",
    "عندك ارتجاع أو حموضة؟"
  ],
  stress: [
    "تفكير زائد؟",
    "شد عضلي؟",
    "صداع مع التوتر؟",
    "أرق بسبب التفكير؟"
  ],
  reflux: [
    "هل تشعر بحموضة بعد الأكل؟",
    "هل تعاني من كحة أو شعور بشيء عالق بالحلق؟",
    "هل تعاني من غازات وانتفاخات متكررة؟",
    "هل يتأثر نومك بسبب الحموضة؟"
  ],
  immunity: [
    "تتعب بسرعة؟",
    "يجيك زكام كثير؟",
    "نومك سيء؟",
    "أكلك غير منتظم؟"
  ],
  headache: [
    "صداع مع التوتر؟",
    "صداع مع قلة النوم؟",
    "شد بالرقبة؟",
    "تفكير كثير؟"
  ]
};
