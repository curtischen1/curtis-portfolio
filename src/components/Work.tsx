import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MediumPost } from '../types/medium';

const GH = "'Gloria Hallelujah', cursive";

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
        const response = await fetch('/api/medium-posts');
        if (!response.ok) throw new Error('Failed to fetch Medium posts');
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
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <section className="py-12">
      {/* Page title */}
      <div className="mb-10">
        <h1 style={{ fontFamily: GH, fontSize: '48px', lineHeight: 1.2 }} className="mb-2">
          writing.
        </h1>
        <p style={{ fontFamily: GH, fontSize: '16px', color: '#555' }}>
          sharing my unfiltered perspective on tech
        </p>
      </div>

      {/* Category filter */}
      <div className="mb-8">
        <h3 style={{ fontFamily: GH, fontSize: '18px' }} className="mb-4">
          Browse by Category
        </h3>

        <div className="flex flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                fontFamily: GH,
                fontSize: '13px',
                padding: '6px 16px',
                border: '2px solid black',
                borderRadius: '9999px',
                cursor: 'pointer',
                backgroundColor: selectedCategory === category ? '#000' : '#faf8f3',
                color: selectedCategory === category ? '#fff' : '#000',
                transition: 'all 0.15s ease',
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Section heading */}
      <h3 style={{ fontFamily: GH, fontSize: '20px' }} className="mb-6">
        Previous Writings
      </h3>

      {/* States */}
      {loading && (
        <div className="text-center py-12">
          <p style={{ fontFamily: GH, fontSize: '16px', color: '#555' }}>Loading articles...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">Error loading articles: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="hover:underline"
            style={{ fontFamily: GH, fontSize: '14px' }}
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p style={{ fontFamily: GH, fontSize: '16px', color: '#555' }}>No articles found.</p>
        </div>
      )}

      {!loading && !error && filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              style={{
                border: '2px solid black',
                backgroundColor: '#faf8f3',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              className="hover:shadow-lg"
              onClick={() => window.open(post.link, '_blank', 'noopener,noreferrer')}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback
                  src={post.image || 'https://via.placeholder.com/400x250'}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  unsplashQuery={post.category?.toLowerCase() || 'writing'}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.category && (
                    <>
                      <span
                        style={{
                          border: '1px solid black',
                          padding: '2px 10px',
                          fontSize: '12px',
                          fontFamily: GH,
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-gray-400">•</span>
                    </>
                  )}
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-gray-900 mb-2 font-medium">{post.title}</h3>

                <p className="text-gray-600 mb-4 text-sm">{post.description}</p>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-8">
        <p style={{ fontFamily: GH, fontSize: '14px', color: '#555' }} className="mb-4">
          check out my full collection on Medium
        </p>
        <a
          href="https://medium.com/@curtischen1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: GH,
            fontSize: '14px',
            backgroundColor: '#000',
            color: '#fff',
            padding: '12px 24px',
            border: '2px solid black',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.15s ease',
          }}
        >
          Read More on Medium →
        </a>
      </div>
    </section>
  );
}
