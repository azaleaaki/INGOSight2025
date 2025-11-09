import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Shield, Activity, Clock, Smartphone, Users, 
  TrendingUp, Zap, ChevronRight, Menu, X, Sun, Moon, 
  Star, CheckCircle, ArrowRight, Play, Pause,
  Award, Target, BarChart3, ShieldCheck
} from 'lucide-react';

// Конфигурация приложения
const APP_CONFIG = {
  company: {
    name: 'ИнгоСтрах',
    slogan: 'Динамическое страхование для цифрового мира',
    year: 2025
  },
  theme: {
    gradients: {
      primary: 'from-blue-600 to-red-500',
      secondary: 'from-gray-800/50 to-blue-900/50',
      dark: 'from-gray-900 via-blue-900 to-gray-900',
      light: 'from-gray-50 via-blue-50 to-gray-50'
    }
  }
};

// Моковые данные
const MOCK_DATA = {
  healthMetrics: {
    activityScore: 87,
    sleepQuality: 92,
    heartHealth: 78,
    stressLevel: 45
  },
  insuranceData: {
    currentPremium: 12500,
    potentialSavings: 3750,
    coverageLevel: 95,
    nextAdjustment: '2025-12-01'
  },
  services: [
    { 
      name: 'ИнгоЛаб', 
      icon: Heart, 
      color: 'from-red-500 to-pink-500',
      description: 'Лабораторные исследования и диагностика'
    },
    { 
      name: 'Телемедицина', 
      icon: Smartphone, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Консультации врачей онлайн'
    },
    { 
      name: 'ДМС', 
      icon: Users, 
      color: 'from-green-500 to-emerald-500',
      description: 'Добровольное медицинское страхование'
    },
    { 
      name: 'Онкострахование', 
      icon: Shield, 
      color: 'from-purple-500 to-violet-500',
      description: 'Специализированная онкологическая защита'
    },
    { 
      name: 'Ментальное здоровье', 
      icon: Activity, 
      color: 'from-orange-500 to-red-500',
      description: 'Психологическая поддержка и терапия'
    },
    { 
      name: 'Международные', 
      icon: TrendingUp, 
      color: 'from-indigo-500 to-purple-500',
      description: 'Страхование для путешественников'
    }
  ],
  metrics: [
    { icon: Smartphone, label: 'Носимые устройства', data: '12,500+', description: 'Подключенные устройства' },
    { icon: Heart, label: 'Медицинские данные', data: '24/7', description: 'Мониторинг в реальном времени' },
    { icon: Activity, label: 'Поведенческий анализ', data: 'AI-powered', description: 'Искусственный интеллект' },
    { icon: Shield, label: 'Динамические премии', data: '-30%', description: 'Максимальная экономия' }
  ],
  recommendations: [
    'Увеличьте физическую активность на 15% для дополнительной скидки',
    'Пройдите профилактический осмотр для расширения покрытия',
    'Подключите носимое устройство для более точной тарификации'
  ],
  technologies: [
    { title: 'AI-тарификация', desc: 'Персонализированные премии', icon: BarChart3 },
    { title: 'Real-time данные', desc: 'Анализ в режиме реального времени', icon: Clock },
    { title: 'Превентивная аналитика', desc: 'Прогнозирование рисков', icon: Target },
    { title: 'Безопасность данных', desc: 'Защита вашей информации', icon: ShieldCheck }
  ]
};

// Компоненты
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={toggleTheme}
    className={`p-3 rounded-xl transition-colors ${
      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
    }`}
  >
    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </motion.button>
);

const MetricCard = ({ metric, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 group"
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <metric.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">{metric.label}</h3>
    <p className="text-2xl font-bold text-blue-400 mb-2">{metric.data}</p>
    <p className="text-sm text-gray-400">{metric.description}</p>
  </motion.div>
);

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
  >
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
      <service.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
  </motion.div>
);

const HealthMetric = ({ label, value, type }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="text-center group"
  >
    <div className="relative w-20 h-20 mx-auto mb-3">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-700" />
        <circle 
          cx="50" cy="50" r="40" 
          stroke="url(#gradient)" 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
          strokeDasharray={251.2}
          strokeDashoffset={251.2 - (251.2 * value) / 100}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
        {value}%
      </span>
    </div>
    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors capitalize">
      {label}
    </p>
  </motion.div>
);

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? `bg-gradient-to-br ${APP_CONFIG.theme.gradients.dark} text-white` 
        : `bg-gradient-to-br ${APP_CONFIG.theme.gradients.light} text-gray-900`
    }`}>
      
      {/* Навигация */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark ? 'bg-gray-900/90 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl'
      } border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${APP_CONFIG.theme.gradients.primary} rounded-xl flex items-center justify-center shadow-lg`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                {APP_CONFIG.company.name}
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Главная', 'Продукты', 'Кабинет', 'Поддержка'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ y: -2 }}
                  href="#"
                  className="hover:text-blue-400 transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="md:hidden p-3 rounded-xl transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent leading-tight"
            >
              Страхование,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                которое дышит с вами
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Инновационное динамическое страхование здоровья, 
              адаптирующееся к вашему образу жизни в реальном времени
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${APP_CONFIG.theme.gradients.primary} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center`}
              >
                Начать персонализацию
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Узнать больше
              </motion.button>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative bg-gradient-to-r from-gray-800/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_DATA.metrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Hub Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Цифровой хаб страхования
            </h2>
            <p className="text-xl text-gray-400">Ваше здоровье в цифрах, ваша защита в реальном времени</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Dashboard */}
            <div className="lg:col-span-2 space-y-8">
              {/* Health Metrics */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Heart className="w-7 h-7 mr-3 text-red-400" />
                  Метрики здоровья
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {Object.entries(MOCK_DATA.healthMetrics).map(([key, value]) => (
                    <HealthMetric 
                      key={key}
                      label={key === 'activityScore' ? 'Активность' :
                             key === 'sleepQuality' ? 'Сон' :
                             key === 'heartHealth' ? 'Сердце' : 'Стресс'}
                      value={value}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Insurance Analytics */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <TrendingUp className="w-7 h-7 mr-3 text-green-400" />
                  Страховая аналитика
                </h3>
                
                <div className="space-y-6">
                  {[
                    { label: 'Текущая премия', value: `₽${MOCK_DATA.insuranceData.currentPremium.toLocaleString()}`, color: 'text-blue-400' },
                    { label: 'Потенциальная экономия', value: `-₽${MOCK_DATA.insuranceData.potentialSavings.toLocaleString()}`, color: 'text-green-400' },
                    { label: 'Уровень покрытия', value: `${MOCK_DATA.insuranceData.coverageLevel}%`, color: 'text-yellow-400' }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex justify-between items-center p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="text-lg">{item.label}</span>
                      <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recommendations */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Zap className="w-7 h-7 mr-3 text-yellow-400" />
                  Рекомендации AI
                </h3>
                
                <div className="space-y-4">
                  {MOCK_DATA.recommendations.map((rec, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{rec}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Быстрые действия</h3>
                
                <div className="space-y-4">
                  {[
                    { label: 'Открыть страховой случай', color: 'from-blue-600 to-blue-700' },
                    { label: 'Загрузить документы', color: 'from-green-600 to-green-700' },
                    { label: 'AI-ассистент', color: 'from-purple-600 to-purple-700' }
                  ].map((action, index) => (
                    <motion.button
                      key={action.label}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${action.color} text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium`}
                    >
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Медицинская экосистема
            </h2>
            <p className="text-xl text-gray-400">Полный спектр интеллектуальных медицинских решений</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_DATA.services.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Технологический стек
            </h2>
            <p className="text-xl text-gray-400">Инновации, обеспечивающие вашу безопасность</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_DATA.technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{tech.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 sm:px-6 lg:px-8 border-t ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${APP_CONFIG.theme.gradients.primary} rounded-xl flex items-center justify-center`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                  {APP_CONFIG.company.name}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">{APP_CONFIG.company.slogan}</p>
            </div>
            
            {[
              { title: 'Продукты', items: ['ДМС', 'Онко', 'Ментальное здоровье', 'Международные'] },
              { title: 'Поддержка', items: ['Помощь', 'Контакты', 'Документы', 'FAQ'] },
              { title: 'Компания', items: ['О нас', 'Карьера', 'Новости', 'Партнеры'] }
            ].map((section, index) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-lg text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-8 text-center text-gray-400">
            <p>&copy; {APP_CONFIG.company.year} {APP_CONFIG.company.name}. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
