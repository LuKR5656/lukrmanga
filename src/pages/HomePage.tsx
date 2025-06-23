import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { MangaGrid } from '../components/home/MangaGrid';
import { Hero } from '../components/home/Hero';
import { mangasData } from '../data/mangas';
import { useTranslation } from '../hooks/useTranslation';

export function HomePage() {
  const { t } = useTranslation();

  // Simulated data for different sections
  const popularMangas = mangasData.slice(0, 2);
  const latestUpdates = mangasData.slice(1, 3);
  const allMangas = mangasData;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="animate-fade-in">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Popular Mangas */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('popularMangas')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Découvrez les mangas les plus appréciés par notre communauté
              </p>
            </div>
            <MangaGrid mangas={popularMangas} />
          </section>

          {/* Latest Updates */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('latestUpdates')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-success-500 to-success-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Les derniers chapitres ajoutés à notre collection
              </p>
            </div>
            <MangaGrid mangas={latestUpdates} />
          </section>

          {/* All Mangas */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('allMangas')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Explorez notre collection complète de mangas
              </p>
            </div>
            <MangaGrid mangas={allMangas} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}