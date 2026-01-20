import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="text-center py-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <h1
          className="text-gray-700 dark:text-gray-200 whitespace-nowrap transition-colors"
          style={{ fontFamily: 'Georgia, serif', fontSize: '60px' }}
        >
          hey, i'm curtis
        </h1>
        <img
          src="/assets/my-notion-face-portrait.png"
          alt="Curtis Portrait"
          className="portrait-icon rounded-full object-cover flex-shrink-0"
        />
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-6 transition-colors">
        <MapPin className="w-4 h-4" />
        <span>san francisco, ca</span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed transition-colors">
        computer science and psychology @{' '}
        <a href="https://uc.berkeley.edu" className="text-[#ff6b35] hover:underline">
          uc davis
        </a>
        <br />
        building products and legos
      </p>
    </section>
  );
}