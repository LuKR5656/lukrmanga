import React from 'react';
import { PlayCircle, Calendar, Globe, Clock } from 'lucide-react';
import { Manga } from '../../types';
import { useApp } from '../../context/AppContext';
import { useTranslation } from '../../hooks/useTranslation';

interface ChapterListProps {
  manga: Manga;
}

export function ChapterList({ manga }: ChapterListProps) {
  const { state, setSelectedChapter, setCurrentPage } = useApp();
  const { t } = useTranslation();

  const handleChapterClick = (chapter: any) => {
    setSelectedChapter(chapter);
    setCurrentPage('reader');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(state.language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-slide-up border border-gray-100">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <div className="w-1 h-8 bg-accent-500 rounded-full mr-4"></div>
            {t('chapters')}
          </h2>
          <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
            {manga.chapters.length} {manga.chapters.length === 1 ? 'chapitre' : 'chapitres'}
          </div>
        </div>

        <div className="space-y-4">
          {manga.chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              onClick={() => handleChapterClick(chapter)}
              className="group p-6 rounded-xl border border-gray-100 hover:border-accent-200 hover:bg-accent-50/50 cursor-pointer transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      {chapter.number}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-accent-700 transition-colors text-lg">
                      {t('chapter')} {chapter.number}: {chapter.title[state.language]}
                    </h3>
                    <div className="flex items-center space-x-6 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(chapter.releaseDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span>{chapter.language.toUpperCase()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{chapter.pages.length} pages</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <PlayCircle className="h-8 w-8 text-accent-500 group-hover:text-accent-600 group-hover:scale-110 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {manga.chapters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-300 mb-6">
              <PlayCircle className="h-20 w-20 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">{t('noChapters')}</p>
          </div>
        )}
      </div>
    </div>
  );
}