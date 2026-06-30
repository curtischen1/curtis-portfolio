import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';
import { About } from './components/About';
import { ArticleView } from './components/Article';
import { type Article } from './data/articles';
import { Footer } from './components/Footer';

type Page = 'home' | 'writing' | 'about';

function getPageFromPath(): Page {
  const path = window.location.pathname.replace(/^\//, '');
  if (path === 'about' || path === 'writing') return path;
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getPageFromPath());
      setSelectedArticle(null);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Two responsive scales driven off window width:
  //  --canvas-scale: 1 at >=1280px, shrinks to a 0.5 floor below that so the
  //    visually-composed sections (Hero/About) stay pixel-correct on small screens.
  //  --up-scale: 1 up to 1536px (every laptop renders the "design" layout
  //    unchanged), then grows so big monitors scale the whole home page up
  //    uniformly instead of stranding the timeline on the left. Applied via
  //    CSS `zoom` (not transform) so the timeline's scroll math keeps working.
  useEffect(() => {
    const DESIGN_WIDTH = 1280;
    const MIN_SCALE = 0.5;
    const UP_THRESHOLD = 1536;
    const MAX_UP = 1.75;
    const updateScale = () => {
      const w = window.innerWidth;
      const scale = Math.max(MIN_SCALE, Math.min(1, w / DESIGN_WIDTH));
      document.documentElement.style.setProperty('--canvas-scale', String(scale));
      const upScale = Math.max(1, Math.min(MAX_UP, w / UP_THRESHOLD));
      document.documentElement.style.setProperty('--up-scale', String(upScale));
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  function handleNavigate(page: Page) {
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', url);
    setCurrentPage(page);
    setSelectedArticle(null);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1EEE1' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="px-6 py-4">
        {currentPage === 'home' && (
          <div key="home" className="home-stage max-w-5xl mx-auto">
            <div className="page-enter">
              <Hero />
            </div>
            <div className="page-enter-delayed">
              <Timeline />
            </div>
          </div>
        )}

        {currentPage === 'writing' && !selectedArticle && (
          <div key="writing" className="max-w-4xl mx-auto">
            <Work onSelectArticle={setSelectedArticle} />
          </div>
        )}

        {currentPage === 'writing' && selectedArticle && (
          <div key={`article-${selectedArticle.id}`} className="max-w-6xl mx-auto page-enter">
            <ArticleView
              article={selectedArticle}
              onBack={() => setSelectedArticle(null)}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div key="about" className="max-w-4xl mx-auto">
            <About />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}