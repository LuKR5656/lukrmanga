import React from 'react';
import { Heart, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent-500/20 rounded-lg">
              <BookOpen className="h-6 w-6 text-accent-400" />
            </div>
            <span className="text-2xl font-bold">LuKR</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>for manga lovers</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 LuKR. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}