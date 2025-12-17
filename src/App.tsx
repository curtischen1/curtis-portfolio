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