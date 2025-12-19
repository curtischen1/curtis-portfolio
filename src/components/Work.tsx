import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MediumPost } from '../types/medium';

type Category = 'All' | 'Startups' | 'Off-Lesson' | 'Personal' | 'Tech';

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        
        // Use the Vercel API route (works in production, use 'vercel dev' for local)
        const apiUrl = '/api/medium-posts';
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }
        
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load articles');
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);

  const categories: Category[] = ['All', 'Startups', 'Off-Lesson', 'Personal', 'Tech'];

  const filteredPosts = posts.filter(
    post => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1
            className="text-gray-700 whitespace-nowrap"
            style={{ fontFamily: 'Georgia, serif', fontSize: '60px' }}
          >
            hey, i'm curtis
          </h1>
          <img
            src="/assets/my-notion-face-portrait.png"
            alt="Curtis Portrait"
            className="rounded-full object-cover flex-shrink-0"
            style={{ width: '16px !important', height: '16px !important' }}
          />
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
          <span>📍 san francisco, ca</span>
        </div>
        
        <p className="text-gray-600 max-w-xl mx-auto">
          sharing my unfiltered perspective on tech
          <br />
          read more on{' '}
          <a href="https://medium.com/@curtischen1" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:underline">
            Medium
          </a>
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-gray-700 mb-4">Browse by Category</h3>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <span>↓ Filter By Tags →</span>
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-700 mb-4">Previous Writings</h3>
      </div>

      {loading && (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading articles...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">Error loading articles: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-[#ff6b35] hover:underline"
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No articles found.</p>
        </div>
      )}

      {!loading && !error && filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => window.open(post.link, '_blank', 'noopener,noreferrer')}
            >
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback
                  src={post.image || `https://via.placeholder.com/400x250`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  unsplashQuery={post.category?.toLowerCase() || 'writing'}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.category && (
                    <>
                      <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                        {post.category}
                      </span>
                      <span className="text-gray-400">•</span>
                    </>
                  )}
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-gray-900 mb-2">{post.title}</h3>
                
                <p className="text-gray-600 mb-4">{post.description}</p>
                
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          check out my full collection of essays on Medium
        </p>
        <a
          href="https://medium.com/@curtischen1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff6b35] text-white px-6 py-3 rounded-full hover:bg-[#e55a25] transition-colors inline-flex items-center gap-2"
        >
          Read More on Medium
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
