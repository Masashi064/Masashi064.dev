import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
              {t('hero.greeting')}
            </p>
            <img
              src="/baree-hiyoko.gif"
              alt="My photo"
              className="w-24 h-24 rounded-full mx-auto mt-10 border-4 border-gray-300 shadow-lg object-cover"
            />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              {t('hero.name')}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
              {t('hero.title')}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg font-medium transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              {t('hero.contact')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
