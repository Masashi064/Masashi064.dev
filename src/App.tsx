import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useThemeStore } from './store/themeStore';
import './i18n/config';

function App() {
  const { isDark, setTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme on mount
    setTheme(isDark);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
