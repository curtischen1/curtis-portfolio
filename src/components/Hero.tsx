import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="text-center py-12">
      <h1 
        className="text-gray-700 mb-4 text-5xl"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        hey, i'm curtis
      </h1>
      
      <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
        <MapPin className="w-4 h-4" />
        <span>san francisco, ca</span>
      </div>
      
      <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
        computer science and psychology @{' '}
        <a href="https://uc.berkeley.edu" className="text-[#ff6b35] hover:underline">
          uc davis
        </a>
        <br />
        building{' '}
        <a href="#" className="text-[#ff6b35] hover:underline">
          substack
        </a>
        {' '}— an ai productivity platform for students
      </p>
    </section>
  );
}