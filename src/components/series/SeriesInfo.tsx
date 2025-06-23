import React from 'react';
import { Calendar, User, Tag, Clock, Star, Play } from 'lucide-react';
import { Manga } from '../../types';
import { useApp } from '../../context/AppContext';
import { useTranslation } from '../../hooks/useTranslation';

interface SeriesInfoProps {
  manga: Manga;
}

export function SeriesInfo({ manga }: SeriesInfoProps) {
  const { state, setSelectedChapter, setCurrentPage } = useApp();
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-success-500';
      case 'completed': return 'bg-accent-500';
      case 'hiatus': return 'bg-warning-500';
      default: return 'bg-gray-500';
    }
  };

  const handleReadFirst = () => {
    if (manga.chapters.length > 0) {
      setSelectedChapter(manga.chapters[0]);
      setCurrentPage('reader');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-slide-up border border-gray-100">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={manga.cover}
          alt={manga.title[state.language]}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Status Badge */}
        <div className={`absolute top-6 left-6 ${getStatusColor(manga.status)} text-white text-sm px-4 py-2 rounded-full font-medium backdrop-blur-sm`}>
          {t(manga.status)}
        </div>

        {/* Rating */}
        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <Star className="h-4 w-4 text-warning-400 fill-current" />
          <span className="text-sm font-medium">4.8</span>
        </div>

        {/* Read Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleReadFirst}
            className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
          >
            <Play className="h-5 w-5" />
            <span>Commencer la lecture</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {manga.title[state.language]}
        </h1>

        {/* Synopsis */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-accent-500 rounded-full mr-3"></div>
            {t('synopsis')}
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            {manga.description[state.language]}
          </p>
        </div>

        {/* Metadata */}
        <div className="space-y-6">
          <div className="flex items-center text-gray-600">
            <User className="h-5 w-5 mr-4 text-accent-500" />
            <span className="font-medium mr-3">{t('author')}:</span>
            <span className="text-gray-800">{manga.author}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-4 text-accent-500" />
            <span className="font-medium mr-3">{t('chapters')}:</span>
            <span className="text-gray-800">{manga.chapters.length}</span>
          </div>

          <div className="flex items-start text-gray-600">
            <Tag className="h-5 w-5 mr-4 text-accent-500 mt-1" />
            <div>
              <span className="font-medium mr-3">{t('genres')}:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {manga.genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600">
                {manga.chapters.length}
              </div>
              <div className="text-sm text-gray-500 mt-1">Chapitres</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-500">4.8</div>
              <div className="text-sm text-gray-500 mt-1">Note</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}