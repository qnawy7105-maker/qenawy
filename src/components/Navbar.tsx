import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 253, 249, 0)', 'rgba(255, 253, 249, 0.9)']
  );

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'quiz', label: 'اختبار الخلطة' },
    { id: 'products', label: 'المنتجات' },
    { id: 'blog', label: 'المدونة' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b border-sage/10 py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-6 order-last md:order-first">
          <div className="flex items-center gap-4">
            <ShoppingBag className="w-5 h-5 text-olive cursor-pointer hover:scale-110 transition-transform" />
            <div className="w-8 h-8 rounded-full border border-olive/20 flex items-center justify-center cursor-pointer hover:bg-olive/5">
              <span className="text-olive text-xs">👤</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-olive/80">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`transition-colors relative py-1 ${
                currentView === link.id 
                ? 'text-olive after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-olive after:scale-x-100' 
                : 'hover:text-olive'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 order-first md:order-last cursor-pointer" onClick={() => onNavigate('home')}>
          <span className="text-4xl font-display font-medium tracking-tight text-olive">ترياق</span>
          <div className="w-16 h-16 -ml-2">
            <img 
               src="/src/assets/images/triyak_logo_premium_1779033499953.png" 
               alt="ترياق" 
               className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
