import React from 'react';
import { ArrowLeft, Settings, RotateCcw, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useTranslation } from '../../hooks/useTranslation';

interface ReaderControlsProps {
  isVisible: boolean;
  onClose: () => void;
}

export function ReaderControls({ isVisible, onClose }: ReaderControlsProps) {
  const { state, setCurrentPage, setReadingMode, setSelectedChapter } = useApp();
  const { t } = useTranslation();

  const handleBackToSeries = () => {
    setCurrentPage('series');
  };

  const toggleReadingMode = () => {
    setReadingMode(state.readingMode === 'horizontal' ? 'vertical' : 'horizontal');
  };

  const getCurrentChapterIndex = () => {
    if (!state.selectedManga || !state.selectedChapter) return -1;
    return state.selectedManga.chapters.findIndex(ch => ch.id === state.selectedChapter!.id);
  };

  const navigateChapter = (direction: 'prev' | 'next') => {
    if (!state.selectedManga || !state.selectedChapter) return;
    
    const currentIndex = getCurrentChapterIndex();
    const chapters = state.selectedManga.chapters;
    
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedChapter(chapters[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < chapters.length - 1) {
      setSelectedChapter(chapters[currentIndex + 1]);
    }
  };

  const currentIndex = getCurrentChapterIndex();
  const totalChapters = state.selectedManga?.chapters.length || 0;

  if (!isVisible) return null;

  return (
    <>
      {/* Top Controls */}
      <div className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-700/50 p-4 z-50 animate-slide-down">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToSeries}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">{t('backToSeries')}</span>
            </button>
            
            <div className="h-6 w-px bg-gray-600"></div>
            
            <div className="text-white">
              <span className="font-medium">
                {state.selectedManga?.title[state.language]}
              </span>
              <span className="text-gray-400 ml-2">
                - {t('chapter')} {state.selectedChapter?.number}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-700/50 p-4 z-50 animate-slide-up">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Chapter Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigateChapter('prev')}
              disabled={currentIndex <= 0}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Précédent</span>
            </button>
            
            <div className="text-gray-300 text-sm px-4 py-2 bg-gray-800 rounded-lg">
              {currentIndex + 1} / {totalChapters}
            </div>
            
            <button
              onClick={() => navigateChapter('next')}
              disabled={currentIndex >= totalChapters - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Suivant</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Reading Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleReadingMode}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">
                {t(state.readingMode === 'horizontal' ? 'vertical' : 'horizontal')}
              </span>
            </button>
            
            <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}