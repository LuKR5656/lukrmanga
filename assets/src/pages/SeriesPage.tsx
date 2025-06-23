import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { SeriesInfo } from '../components/series/SeriesInfo';
import { ChapterList } from '../components/series/ChapterList';
import { useApp } from '../context/AppContext';
import { useTranslation } from '../../hooks/useTranslation';

export function SeriesPage() {
  const { state, setCurrentPage } = useApp();
  const { t } = useTranslation();

  if (!state.selectedManga) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500 mb-4">{t('error')}</p>
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {t('backToHome')}
          </button>
        </div>
      </div>
    );
  }

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="animate-fade-in">
        {/* Back button */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-accent-600 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t('backToHome')}</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Series Info */}
            <div className="lg:col-span-1">
              <SeriesInfo manga={state.selectedManga} />
            </div>

            {/* Chapter List */}
            <div className="lg:col-span-2">
              <ChapterList manga={state.selectedManga} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}