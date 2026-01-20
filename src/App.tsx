import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';
import { About } from './components/About';

type Page = 'home' | 'writing' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[#faf8f3] dark:bg-gray-900 transition-colors">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Timeline />
          </>
        )}

        {currentPage === 'writing' && <Work />}

        {currentPage === 'about' && <About />}
      </main>
    </div>
  );
}