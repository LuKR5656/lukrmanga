import React from 'react';
import { Clock, Star, BookOpen, Eye } from 'lucide-react';
import { Manga } from '../../types';
import { useApp } from '../../context/AppContext';
import { useTranslation } from '../../hooks/useTranslation';

interface MangaCardProps {
  manga: Manga;
}

export function MangaCard({ manga }: MangaCardProps) {
  const { setCurrentPage, setSelectedManga, state } = useApp();
  const { t } = useTranslation();

  const handleClick = () => {
    setSelectedManga(manga);
    setCurrentPage('series');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-success-500';
      case 'completed': return 'bg-accent-500';
      case 'hiatus': return 'bg-warning-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] border border-gray-100"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={manga.cover}
          alt={manga.title[state.language]}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status badge */}
        <div className={`absolute top-4 right-4 ${getStatusColor(manga.status)} text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm`}>
          {t(manga.status)}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Eye className="h-6 w-6 text-gray-800" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-1 group-hover:text-accent-600 transition-colors">
          {manga.title[state.language]}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {manga.description[state.language]}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>{manga.chapters.length} {manga.chapters.length === 1 ? 'chapitre' : 'chapitres'}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-warning-400 fill-current" />
            <span className="font-medium">4.8</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {manga.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              {genre}
            </span>
          ))}
          {manga.genres.length > 2 && (
            <span className="text-xs text-gray-400 px-2 py-1">+{manga.genres.length - 2}</span>
          )}
        </div>
      </div>
    </div>
  );
}