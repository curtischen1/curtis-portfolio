import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';
import { About } from './components/About';

type Page = 'home' | 'writing' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="px-6 py-4">
        {currentPage === 'home' && (
          <div className="max-w-5xl mx-auto">
            <Hero />
            <Timeline />
          </div>
        )}

        {currentPage === 'writing' && (
          <div className="max-w-4xl mx-auto">
            <Work />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto">
            <About />
          </div>
        )}
      </main>
    </div>
  );
}