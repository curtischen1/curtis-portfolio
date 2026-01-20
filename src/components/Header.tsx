import { Moon, Sun } from 'lucide-react';

type Page = 'home' | 'writing' | 'about';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Header({ currentPage, onNavigate, isDarkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
      <button
        onClick={() => onNavigate('home')}
        className="text-[#ff6b35] italic cursor-pointer hover:opacity-80 transition-opacity text-xl"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        curtis chen
      </button>

      <div className="flex items-center gap-3">
        <nav className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
          <button
            onClick={() => onNavigate('about')}
            className={`px-5 py-2 transition-colors ${
              currentPage === 'about'
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            about
          </button>
          <button
            onClick={() => onNavigate('writing')}
            className={`px-5 py-2 transition-colors ${
              currentPage === 'writing'
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            writing
          </button>
        </nav>

        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}