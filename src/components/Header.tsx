import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'writing' | 'about';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
      <button 
        onClick={() => onNavigate('home')}
        className="text-[#ff6b35] italic cursor-pointer hover:opacity-80 transition-opacity text-xl"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        curtis chen
      </button>
      
      <nav className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => onNavigate('about')}
          className={`px-5 py-2 transition-colors ${
            currentPage === 'about'
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          about
        </button>
        <button
          onClick={() => onNavigate('writing')}
          className={`px-5 py-2 transition-colors ${
            currentPage === 'writing'
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          writing
        </button>
      </nav>
    </header>
  );
}