import React from 'react';
import { BookOpen, Twitter, Instagram, MessageCircle, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useTranslation } from '../../hooks/useTranslation';
import { Language } from '../../types';

export function Header() {
  const { state, setLanguage, setCurrentPage } = useApp();
  const { t } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={handleHomeClick}
          >
            <div className="relative">
              <BookOpen className="h-8 w-8 text-primary-600 group-hover:text-accent-500 transition-colors duration-200" />
              <div className="absolute -inset-1 bg-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              LuKR
            </span>
          </div>

          {/* Right side - Language switcher and social icons */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
              <Globe className="h-4 w-4 text-gray-600" />
              <select
                value={state.language}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="bg-transparent text-gray-700 text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="fr" className="text-gray-900">FR</option>
                <option value="en" className="text-gray-900">EN</option>
              </select>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-gray-500 hover:text-accent-500 transition-colors p-2 rounded-lg hover:bg-gray-50"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-accent-500 transition-colors p-2 rounded-lg hover:bg-gray-50"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-accent-500 transition-colors p-2 rounded-lg hover:bg-gray-50"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}