import React from 'react';
import { useApp } from '../context/AppContext';
import { HomePage } from '../pages/HomePage';
import { SeriesPage } from '../pages/SeriesPage';
import { ReaderPage } from '../pages/ReaderPage';

export function Router() {
  const { state } = useApp();

  const renderPage = () => {
    switch (state.currentPage) {
      case 'home':
        return <HomePage />;
      case 'series':
        return <SeriesPage />;
      case 'reader':
        return <ReaderPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}