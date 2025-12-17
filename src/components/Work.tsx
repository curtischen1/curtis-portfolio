import { useState } from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Category = 'All' | 'Startups' | 'Off-Lesson' | 'Personal' | 'Tech';

const posts = [
  {
    id: 1,
    title: "How I (Almost) Won the World's Biggest AI Hackathon - With Zero Coding Experience",
    category: 'Startups',
    date: 'March 15, 2024',
    readTime: '5 min read',
    description: 'the whole preposition of a product manager at hackathons',
    image: 'startup team meeting'
  },
  {
    id: 2,
    title: 'how to win a 💘 life, explained in poker terms',
    category: 'Personal',
    date: 'February 28, 2024',
    readTime: '4 min read',
    description: 'random thoughts i like to scribble on the bus',
    image: 'playing cards poker'
  },
  {
    id: 3,
    title: 'Building AI Products That Users Actually Love',
    category: 'Tech',
    date: 'January 20, 2024',
    readTime: '7 min read',
    description: 'lessons from designing AI experiences at scale',
    image: 'artificial intelligence design'
  },
  {
    id: 4,
    title: 'The Art of Product Management at Startups',
    category: 'Startups',
    date: 'December 10, 2023',
    readTime: '6 min read',
    description: 'what I learned managing products at early-stage companies',
    image: 'startup office workspace'
  }
];

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const categories: Category[] = ['All', 'Startups', 'Off-Lesson', 'Personal', 'Tech'];

  const filteredPosts = posts.filter(
    post => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 
          className="text-gray-700 mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          hi, i'm nicholas
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
          <span>📍 san francisco, ca</span>
        </div>
        
        <p className="text-gray-600 max-w-xl mx-auto">
          documenting my thoughts on tech and startups
          <br />
          read more on{' '}
          <a href="#" className="text-[#ff6b35] hover:underline">
            substack
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="aspect-video bg-gray-100">
              <ImageWithFallback
                src={`https://via.placeholder.com/400x250`}
                alt={post.title}
                className="w-full h-full object-cover"
                unsplashQuery={post.image}
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {post.category}
                </span>
                <span className="text-gray-400">•</span>
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

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          check out my full collection of essays on substack
        </p>
        <button className="bg-[#ff6b35] text-white px-6 py-3 rounded-full hover:bg-[#e55a25] transition-colors inline-flex items-center gap-2">
          Read More on Substack
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
