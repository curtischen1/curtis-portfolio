import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';
import { About } from './components/About';
import { ArticleView } from './components/Article';
import { type Article } from './data/articles';
import { Footer } from './components/Footer';

type Page = 'home' | 'writing' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  function handleNavigate(page: Page) {
    setCurrentPage(page);
    setSelectedArticle(null);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1EEE1' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="px-6 py-4">
        {currentPage === 'home' && (
          <div className="max-w-5xl mx-auto">
            <Hero />
            <Timeline />
          </div>
        )}

        {currentPage === 'writing' && !selectedArticle && (
          <div className="max-w-4xl mx-auto">
            <Work onSelectArticle={setSelectedArticle} />
          </div>
        )}

        {currentPage === 'writing' && selectedArticle && (
          <div className="max-w-4xl mx-auto">
            <ArticleView
              article={selectedArticle}
              onBack={() => setSelectedArticle(null)}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto">
            <About />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}