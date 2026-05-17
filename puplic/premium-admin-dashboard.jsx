import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Home, Zap, Settings, LogOut, Menu, X, Plus, Download, Upload,
  ChevronRight, Edit2, Trash2, Eye, Copy, Lock, Unlock, Bell, Grid3x3,
  Palette, Type, Search, Filter, MoreVertical, GripVertical, AlertCircle,
  TrendingUp, Users, ShoppingCart, Package, Sparkles, BookOpen, FileText,
  Image as ImageIcon, Video, Sliders, Code2, Brain, Wand2, BarChart,
  Inbox, Layers, Link2, Shield, MessageSquare, Calendar, Clock, Check,
  ChevronDown, ChevronUp, Send, Star, ThumbsUp, X as XIcon, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Color System
const colors = {
  primary: '#2d5a4f',      // Sage Green
  secondary: '#6b7f3a',    // Olive
  accent: '#c4b59a',       // Herbal Gold/Beige
  cream: '#f5f1ed',        // Soft Cream
  dark: '#1a1a1a',         // Almost Black
  text: '#2d2d2d',         // Dark Text
  border: '#e8e3dc',       // Soft Border
  success: '#4ade80',      // Green
  warning: '#fbbf24',      // Amber
  danger: '#ef4444',       // Red
};

// Custom Tailwind Config
const customTw = {
  glassmorphic: 'backdrop-blur-xl bg-white/40 border border-white/20',
  darkGlassmorphic: 'backdrop-blur-xl bg-gray-900/40 border border-gray-700/20',
  card: 'rounded-2xl p-6 shadow-lg',
  button: 'rounded-lg px-4 py-2 font-medium transition-all duration-300',
};

// Sidebar Navigation
const SidebarNav = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Zap, label: 'Homepage Control', id: 'homepage' },
  { icon: Layers, label: 'Sections Manager', id: 'sections' },
  { icon: Brain, label: 'Quiz System', id: 'quiz' },
  { icon: Package, label: 'Products', id: 'products' },
  { icon: Grid3x3, label: 'Categories', id: 'categories' },
  { icon: ShoppingCart, label: 'Orders', id: 'orders' },
  { icon: Users, label: 'Customers', id: 'customers' },
  { icon: ImageIcon, label: 'Media Library', id: 'media' },
  { icon: Palette, label: 'Theme & Colors', id: 'theme' },
  { icon: Type, label: 'Typography', id: 'typography' },
  { icon: Search, label: 'SEO Settings', id: 'seo' },
  { icon: FileText, label: 'Pages Manager', id: 'pages' },
  { icon: BarChart, label: 'Analytics', id: 'analytics' },
  { icon: MessageSquare, label: 'Testimonials', id: 'testimonials' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Wand2, label: 'AI Content', id: 'ai' },
  { icon: Link2, label: 'Integrations', id: 'integrations' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

// Dashboard Component
export default function AdminDashboard() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Herbal Wellness Blend', price: 49.99, stock: 125, category: 'Blends' },
    { id: 2, name: 'Calming Tea Mix', price: 29.99, stock: 89, category: 'Teas' },
    { id: 3, name: 'Energy Boost Herbs', price: 39.99, stock: 45, category: 'Supplements' },
  ]);
  const [sections, setSections] = useState([
    { id: 1, name: 'Hero Section', visible: true, order: 1 },
    { id: 2, name: 'Featured Products', visible: true, order: 2 },
    { id: 3, name: 'Testimonials', visible: true, order: 3 },
    { id: 4, name: 'FAQ', visible: true, order: 4 },
  ]);
  const [draggedSection, setDraggedSection] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderPage = () => {
    const pageProps = { darkMode, colors, products, setProducts, sections, setSections, setDraggedSection, draggedSection };
    
    switch(activePage) {
      case 'dashboard': return <DashboardHome {...pageProps} />;
      case 'homepage': return <HomepageControl {...pageProps} />;
      case 'sections': return <SectionsManager {...pageProps} />;
      case 'products': return <ProductsManager {...pageProps} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />;
      case 'theme': return <ThemeCustomizer {...pageProps} />;
      case 'media': return <MediaLibrary {...pageProps} />;
      case 'quiz': return <QuizManager {...pageProps} />;
      case 'orders': return <OrdersManager {...pageProps} />;
      case 'analytics': return <AnalyticsPage {...pageProps} />;
      case 'seo': return <SEOPanel {...pageProps} />;
      case 'ai': return <AIContentGenerator {...pageProps} />;
      default: return <DashboardHome {...pageProps} />;
    }
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-gray-900'}`}
      style={{ 
        '--primary': colors.primary,
        '--secondary': colors.secondary,
        '--accent': colors.accent,
      }}
    >
      {/* Animated Sidebar */}
      <motion.aside 
        className={`fixed md:relative z-40 h-full transition-all duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } border-r ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        animate={{ width: sidebarOpen ? 280 : 90 }}
        initial={{ width: 280 }}
      >
        {/* Logo Area */}
        <div className={`h-20 flex items-center justify-between px-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <motion.div 
            className="flex items-center gap-3"
            animate={{ opacity: sidebarOpen ? 1 : 0, width: sidebarOpen ? 'auto' : 0 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Herbii</span>
          </motion.div>
          <motion.button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-3">
          {SidebarNav.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                  isActive
                    ? darkMode
                      ? 'bg-emerald-900/40 text-emerald-400'
                      : 'bg-emerald-100 text-emerald-700'
                    : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
              >
                {isActive && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
                    layoutId="activeNav"
                  />
                )}
                <Icon className="w-5 h-5 flex-shrink-0 relative z-10" />
                <motion.span 
                  className="text-sm font-medium relative z-10"
                  animate={{ opacity: sidebarOpen ? 1 : 0, display: sidebarOpen ? 'block' : 'none' }}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className={`border-t p-4 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <motion.button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              darkMode
                ? 'hover:bg-red-900/20 text-red-400'
                : 'hover:bg-red-50 text-red-600'
            }`}
            whileHover={{ x: 4 }}
          >
            <LogOut className="w-5 h-5" />
            <motion.span 
              className="text-sm font-medium"
              animate={{ opacity: sidebarOpen ? 1 : 0, display: sidebarOpen ? 'block' : 'none' }}
            >
              Logout
            </motion.span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className={`sticky top-0 z-30 h-20 border-b ${
          darkMode 
            ? 'bg-gray-900/80 border-gray-800 backdrop-blur-xl' 
            : 'bg-white/80 border-gray-200 backdrop-blur-xl'
        }`}>
          <div className="h-full px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Menu className="w-5 h-5" />
              </motion.button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {SidebarNav.find(n => n.id === activePage)?.label || 'Dashboard'}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>
              <motion.button
                className={`p-2 rounded-lg transition-colors relative ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold cursor-pointer hover:ring-2 hover:ring-emerald-300 transition-all">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// ========== PAGE COMPONENTS ==========

function DashboardHome({ darkMode, colors }) {
  const stats = [
    { label: 'Total Sales', value: '$45,230', change: '+12.5%', icon: ShoppingCart, color: 'from-emerald-400 to-teal-500' },
    { label: 'Orders', value: '1,248', change: '+8.2%', icon: Package, color: 'from-blue-400 to-cyan-500' },
    { label: 'Quiz Completions', value: '3,891', change: '+23.1%', icon: Brain, color: 'from-purple-400 to-pink-500' },
    { label: 'Conversion Rate', value: '3.24%', change: '+1.2%', icon: TrendingUp, color: 'from-amber-400 to-orange-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                  : 'bg-white/60 border-white/80 hover:border-emerald-200 hover:bg-white'
              } backdrop-blur-xl`}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                  <p className={`text-xs font-semibold mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                  <Icon className="w-7 h-7" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          className={`lg:col-span-2 rounded-2xl p-6 border ${
            darkMode
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-white/60 border-white/80'
          } backdrop-blur-xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-6">Revenue Trend</h3>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[45, 52, 38, 71, 62, 85, 78, 92, 88, 95, 107, 115].map((val, idx) => (
              <motion.div
                key={idx}
                className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ height: `${(val / 120) * 100}%` }}
                whileHover={{ scaleY: 1.05 }}
                initial={{ height: 0 }}
                animate={{ height: `${(val / 120) * 100}%` }}
                transition={{ delay: idx * 0.05 }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          className={`rounded-2xl p-6 border ${
            darkMode
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-white/60 border-white/80'
          } backdrop-blur-xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-6">Top Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Wellness Blend', sales: 284 },
              { name: 'Calming Tea', sales: 156 },
              { name: 'Energy Boost', sales: 142 },
            ].map((product, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{product.name}</span>
                  <span className={`font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>{product.sales}</span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${(product.sales / 300) * 100}%` }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'New order #2845', time: '2 hours ago', type: 'order' },
            { action: 'User completed wellness quiz', time: '4 hours ago', type: 'quiz' },
            { action: 'Product stock low alert', time: '6 hours ago', type: 'warning' },
            { action: 'New customer review added', time: '8 hours ago', type: 'review' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex items-center gap-4 p-3 rounded-lg ${
                darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
              } transition-colors`}
              whileHover={{ x: 4 }}
            >
              <div className={`w-2 h-2 rounded-full ${
                item.type === 'warning' ? 'bg-amber-400' : 
                item.type === 'quiz' ? 'bg-purple-400' : 
                'bg-emerald-400'
              }`} />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.action}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function HomepageControl({ darkMode, sections, setSections, draggedSection, setDraggedSection }) {
  const [newSection, setNewSection] = useState('');

  const handleAddSection = () => {
    if (newSection.trim()) {
      setSections([...sections, { id: Math.random(), name: newSection, visible: true, order: sections.length + 1 }]);
      setNewSection('');
    }
  };

  const handleDeleteSection = (id) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const handleDragStart = (section) => {
    setDraggedSection(section);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetSection) => {
    if (draggedSection && draggedSection.id !== targetSection.id) {
      const newSections = [...sections];
      const draggedIdx = newSections.findIndex(s => s.id === draggedSection.id);
      const targetIdx = newSections.findIndex(s => s.id === targetSection.id);
      [newSections[draggedIdx], newSections[targetIdx]] = [newSections[targetIdx], newSections[draggedIdx]];
      setSections(newSections.map((s, idx) => ({ ...s, order: idx + 1 })));
      setDraggedSection(null);
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-bold mb-4">Add New Section</h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
            placeholder="Enter section name..."
            className={`flex-1 px-4 py-2 rounded-lg border transition-all ${
              darkMode
                ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
            } focus:outline-none focus:ring-2 focus:ring-emerald-400/50`}
            onKeyPress={(e) => e.key === 'Enter' && handleAddSection()}
          />
          <motion.button
            onClick={handleAddSection}
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Sections List */}
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-bold mb-6">Homepage Sections (Drag to Reorder)</h3>
        <div className="space-y-3">
          {sections.sort((a, b) => a.order - b.order).map((section, idx) => (
            <motion.div
              key={section.id}
              draggable
              onDragStart={() => handleDragStart(section)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(section)}
              className={`flex items-center gap-4 p-4 rounded-lg border-2 border-dashed cursor-move transition-all ${
                darkMode
                  ? 'bg-gray-700/30 border-gray-600 hover:border-emerald-500'
                  : 'bg-gray-50/50 border-gray-300 hover:border-emerald-400'
              } ${draggedSection?.id === section.id ? (darkMode ? 'border-emerald-500 bg-gray-700/50' : 'border-emerald-400 bg-white') : ''}`}
              whileHover={{ x: 4 }}
              layout
            >
              <GripVertical className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <div className="flex-1">
                <h4 className="font-semibold">{section.name}</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Section #{section.order}</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setSections(sections.map(s => s.id === section.id ? { ...s, visible: !s.visible } : s))}
                  className={`p-2 rounded-lg transition-colors ${
                    section.visible
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : darkMode ? 'text-gray-500 bg-gray-700' : 'text-gray-500 bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {section.visible ? <Eye className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </motion.button>
                <motion.button
                  onClick={() => handleDeleteSection(section.id)}
                  className={`p-2 rounded-lg transition-colors text-red-500 hover:bg-red-500/10`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Edit Sections */}
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-bold mb-6">Quick Edit Hero Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Headline</label>
            <input
              type="text"
              defaultValue="Discover Your Perfect Herbal Blend"
              className={`w-full px-4 py-2 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-gray-900/50 border-gray-700 text-white focus:border-emerald-500'
                  : 'bg-white/50 border-gray-300 text-gray-900 focus:border-emerald-500'
              } focus:outline-none focus:ring-2 focus:ring-emerald-400/50`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">CTA Button Text</label>
            <input
              type="text"
              defaultValue="Start Quiz"
              className={`w-full px-4 py-2 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-gray-900/50 border-gray-700 text-white focus:border-emerald-500'
                  : 'bg-white/50 border-gray-300 text-gray-900 focus:border-emerald-500'
              } focus:outline-none focus:ring-2 focus:ring-emerald-400/50`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SectionsManager({ darkMode }) {
  const [sectionType, setSectionType] = useState('card');

  const sectionTypes = [
    { id: 'card', name: 'Card Section', icon: Grid3x3 },
    { id: 'slider', name: 'Slider', icon: Layers },
    { id: 'banner', name: 'Banner', icon: ImageIcon },
    { id: 'gallery', name: 'Gallery', icon: Grid3x3 },
    { id: 'form', name: 'Form', icon: FileText },
    { id: 'video', name: 'Video', icon: Video },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-bold mb-6">Section Builder</h3>
        <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Select a section type to add to your homepage</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sectionTypes.map((type) => {
            const Icon = type.icon;
            return (
              <motion.button
                key={type.id}
                onClick={() => setSectionType(type.id)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  sectionType === type.id
                    ? darkMode
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-emerald-400 bg-emerald-50'
                    : darkMode
                    ? 'border-gray-700 hover:border-gray-600'
                    : 'border-gray-300 hover:border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${sectionType === type.id ? 'text-emerald-500' : 'text-gray-500'}`} />
                <p className="font-medium text-sm">{type.name}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Live Preview */}
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-bold mb-4">Live Preview</h3>
        <div className={`h-96 rounded-lg border-2 border-dashed flex items-center justify-center ${
          darkMode
            ? 'border-gray-700 bg-gray-900/30'
            : 'border-gray-300 bg-gray-50/50'
        }`}>
          <div className="text-center">
            <Sparkles className={`w-12 h-12 mx-auto mb-3 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Preview of selected section type</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProductsManager({ darkMode, products, setProducts, selectedProduct, setSelectedProduct }) {
  const [showNewProduct, setShowNewProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      setProducts([...products, {
        id: Math.random(),
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock)
      }]);
      setNewProduct({ name: '', price: '', stock: '', category: '' });
      setShowNewProduct(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add Product Form */}
      <AnimatePresence>
        {showNewProduct && (
          <motion.div
            className={`rounded-2xl p-6 border ${
              darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white/60 border-white/80'
            } backdrop-blur-xl`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-lg font-bold mb-4">Add New Product</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Product name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} className={`px-4 py-2 rounded-lg border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`} />
              <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className={`px-4 py-2 rounded-lg border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`} />
              <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})} className={`px-4 py-2 rounded-lg border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`} />
              <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({...newProduct, category: e.target.value})} className={`px-4 py-2 rounded-lg border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`} />
            </div>
            <div className="flex gap-3 mt-4">
              <motion.button onClick={handleAddProduct} className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Save</motion.button>
              <motion.button onClick={() => setShowNewProduct(false)} className={`px-6 py-2 rounded-lg font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`} whileHover={{ scale: 1.05 }}>Cancel</motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Products</h2>
        <motion.button
          onClick={() => setShowNewProduct(true)}
          className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" /> Add Product
        </motion.button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            onClick={() => setSelectedProduct(selectedProduct?.id === product.id ? null : product)}
            className={`rounded-2xl p-6 border cursor-pointer transition-all ${
              selectedProduct?.id === product.id
                ? darkMode
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-emerald-400 bg-emerald-50'
                : darkMode
                ? 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                : 'border-white/80 hover:border-emerald-200 bg-white/60'
            } backdrop-blur-xl`}
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="space-y-3">
              <h4 className="font-bold text-lg">{product.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                <span className={`text-sm px-3 py-1 rounded-full ${product.stock > 50 ? 'bg-green-100 text-green-700' : product.stock > 20 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                  {product.stock} in stock
                </span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{product.category}</p>
              <div className="flex gap-2 pt-3">
                <motion.button className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`} whileHover={{ scale: 1.05 }}>
                  <Edit2 className="w-4 h-4 mx-auto" />
                </motion.button>
                <motion.button className="px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors" whileHover={{ scale: 1.05 }} onClick={() => setProducts(products.filter(p => p.id !== product.id))}>
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ThemeCustomizer({ darkMode }) {
  const [activeTab, setActiveTab] = useState('colors');
  
  const colorOptions = [
    { name: 'Sage Green', value: '#2d5a4f' },
    { name: 'Olive', value: '#6b7f3a' },
    { name: 'Gold', value: '#c4b59a' },
    { name: 'Cream', value: '#f5f1ed' },
  ];

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className={`rounded-2xl p-6 border ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-white/60 border-white/80'
      } backdrop-blur-xl`}>
        <div className="flex gap-4 border-b mb-6" style={{ borderColor: darkMode ? '#374151' : '#e5e7eb' }}>
          {['colors', 'typography', 'effects'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition-colors relative text-capitalize ${
                activeTab === tab
                  ? 'text-emerald-600'
                  : darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500" layoutId="activeTab" />}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'colors' && (
            <motion.div key="colors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-bold mb-6">Brand Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colorOptions.map((color, idx) => (
                  <motion.div key={idx} className="space-y-2">
                    <div
                      className="w-full h-24 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="text-sm font-medium">{color.name}</p>
                    <p className={`text-xs font-mono ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{color.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === 'typography' && (
            <motion.div key="typography" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-bold mb-6">Font Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Display Font</label>
                  <select className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`}>
                    <option>Cairo</option>
                    <option>IBM Plex Sans Arabic</option>
                    <option>Playfair Display</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Body Font</label>
                  <select className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`}>
                    <option>Inter</option>
                    <option>Open Sans</option>
                    <option>Segoe UI</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
          {activeTab === 'effects' && (
            <motion.div key="effects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-bold mb-6">Visual Effects</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Glassmorphism</span>
                  <motion.div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center cursor-pointer" onClick={() => {}} whileHover={{ scale: 1.05 }}>
                    <motion.div className="w-5 h-5 bg-white rounded-full shadow-md" initial={{ x: 2 }} animate={{ x: 22 }} />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smooth Shadows</span>
                  <motion.div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center cursor-pointer" onClick={() => {}} whileHover={{ scale: 1.05 }}>
                    <motion.div className="w-5 h-5 bg-white rounded-full shadow-md" initial={{ x: 2 }} animate={{ x: 22 }} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Live Preview */}
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="font-bold mb-6">Live Preview</h3>
        <div className={`rounded-xl p-8 ${darkMode ? 'bg-gray-900/50' : 'bg-gradient-to-br from-emerald-50 to-teal-50'} border border-dashed`}>
          <h4 className="text-xl font-bold mb-2">Sample Heading</h4>
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>This is how your content will look with the selected theme.</p>
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Sample Button
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function MediaLibrary({ darkMode }) {
  const [mediaItems] = useState([
    { id: 1, name: 'Hero Banner', type: 'image', size: '2.4 MB' },
    { id: 2, name: 'Product Demo', type: 'video', size: '45 MB' },
    { id: 3, name: 'Testimonial Image', type: 'image', size: '1.2 MB' },
  ]);

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <motion.div
        className={`rounded-2xl p-8 border-2 border-dashed transition-all cursor-pointer ${
          darkMode
            ? 'border-gray-700 hover:border-emerald-500 bg-gray-800/50'
            : 'border-gray-300 hover:border-emerald-400 bg-white/60'
        } backdrop-blur-xl`}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center">
          <Upload className={`w-12 h-12 mx-auto mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <h3 className="font-bold mb-1">Drop media here or click to upload</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>PNG, JPG, MP4 up to 100MB</p>
        </div>
      </motion.div>

      {/* Media Grid */}
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="font-bold mb-6">Media Library</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`rounded-xl overflow-hidden border transition-all group ${
                darkMode
                  ? 'border-gray-700 hover:border-emerald-500 bg-gray-700/30'
                  : 'border-gray-300 hover:border-emerald-400 bg-gray-100'
              }`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={`h-32 flex items-center justify-center ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'}`}>
                {item.type === 'image' ? (
                  <ImageIcon className={`w-8 h-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                ) : (
                  <Video className={`w-8 h-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                )}
              </div>
              <div className="p-3 space-y-1 border-t" style={{ borderColor: darkMode ? '#374151' : '#e5e7eb' }}>
                <p className="font-medium text-sm truncate">{item.name}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{item.size}</p>
                <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button className={`flex-1 px-2 py-1 text-xs rounded font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`} whileHover={{ scale: 1.05 }}>
                    <Eye className="w-3 h-3 mx-auto" />
                  </motion.button>
                  <motion.button className="px-2 py-1 text-xs rounded font-medium text-red-500 hover:bg-red-500/10 transition-colors" whileHover={{ scale: 1.05 }}>
                    <Trash2 className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function QuizManager({ darkMode }) {
  const [quizzes] = useState([
    { id: 1, name: 'Wellness Quiz', questions: 8, completions: 234 },
    { id: 2, name: 'Herbal Preference', questions: 6, completions: 156 },
  ]);

  return (
    <div className="space-y-8">
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">Quizzes</h3>
          <motion.button
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <Plus className="w-4 h-4 inline mr-2" /> New Quiz
          </motion.button>
        </div>
        <div className="space-y-3">
          {quizzes.map((quiz, idx) => (
            <motion.div
              key={quiz.id}
              className={`p-4 rounded-lg border transition-all ${
                darkMode
                  ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-700/30'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100'
              }`}
              whileHover={{ x: 4 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold">{quiz.name}</h4>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{quiz.questions} questions • {quiz.completions} completions</p>
                </div>
                <div className="flex gap-2">
                  <motion.button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`} whileHover={{ scale: 1.05 }}>
                    <Edit2 className="w-4 h-4" />
                  </motion.button>
                  <motion.button className="p-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors" whileHover={{ scale: 1.05 }}>
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function OrdersManager({ darkMode }) {
  const [orders] = useState([
    { id: '#2845', customer: 'Sarah Ahmed', amount: '$125.50', status: 'Completed', date: '2 hours ago' },
    { id: '#2844', customer: 'Mohammed Hassan', amount: '$89.99', status: 'Processing', date: '4 hours ago' },
    { id: '#2843', customer: 'Fatima Mohamed', amount: '$245.00', status: 'Pending', date: '6 hours ago' },
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Processing': return 'bg-blue-100 text-blue-700';
      case 'Pending': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.div
      className={`rounded-2xl p-6 border ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-white/60 border-white/80'
      } backdrop-blur-xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="font-bold text-lg mb-6">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <th className="text-left py-3 px-4 font-semibold text-sm">Order</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <motion.tr
                key={order.id}
                className={`border-b transition-colors ${
                  darkMode
                    ? 'border-gray-700 hover:bg-gray-700/30'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <td className="py-3 px-4 font-medium text-sm">{order.id}</td>
                <td className="py-3 px-4 text-sm">{order.customer}</td>
                <td className="py-3 px-4 font-semibold text-sm">{order.amount}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className={`py-3 px-4 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{order.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function AnalyticsPage({ darkMode }) {
  return (
    <div className="space-y-8">
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="font-bold text-lg mb-6">Traffic Analytics</h3>
        <div className="h-64 flex items-end justify-between gap-2 px-2">
          {[35, 42, 38, 61, 52, 75, 68, 82, 78, 85, 97, 105].map((val, idx) => (
            <motion.div
              key={idx}
              className="flex-1 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${(val / 120) * 100}%` }}
              whileHover={{ scaleY: 1.05 }}
              initial={{ height: 0 }}
              animate={{ height: `${(val / 120) * 100}%` }}
              transition={{ delay: idx * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SEOPanel({ darkMode }) {
  return (
    <motion.div
      className={`rounded-2xl p-6 border ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-white/60 border-white/80'
      } backdrop-blur-xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="font-bold text-lg mb-6">SEO Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Meta Title</label>
          <input type="text" defaultValue="Discover Premium Herbal Blends | Herbii" className={`w-full px-4 py-2 rounded-lg border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Meta Description</label>
          <textarea rows="3" defaultValue="Explore our curated collection of premium herbal blends for wellness and vitality." className={`w-full px-4 py-2 rounded-lg border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-700 text-white' : 'bg-white/50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-400/50`} />
        </div>
      </div>
    </motion.div>
  );
}

function AIContentGenerator({ darkMode }) {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="space-y-8">
      <motion.div
        className={`rounded-2xl p-6 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white/60 border-white/80'
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-purple-500" /> AI Content Generator
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">What would you like to generate?</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., Write a product description for our Wellness Blend..."
              rows="4"
              className={`w-full px-4 py-2 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500'
                  : 'bg-white/50 border-gray-300 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-emerald-400/50`}
            />
          </div>
          <motion.button
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-5 h-5" /> Generate with AI
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}