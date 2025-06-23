import React, { useState } from 'react';
import { ReaderControls } from '../components/reader/ReaderControls';
import { PageViewer } from '../components/reader/PageViewer';
import { useApp } from '../context/AppContext';
import { useTranslation } from '../hooks/useTranslation';

export function ReaderPage() {
  const { state, setCurrentPage } = useApp();
  const { t } = useTranslation();
  const [showControls, setShowControls] = useState(false);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  if (!state.selectedChapter || !state.selectedManga) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <p className="text-white mb-4">{t('error')}</p>
          <button
            onClick={() => setCurrentPage('series')}
            className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {t('backToSeries')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Overlay when controls are visible */}
      {showControls && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleControls} />
      )}

      {/* Reader Controls */}
      <ReaderControls isVisible={showControls} onClose={toggleControls} />

      {/* Page Viewer */}
      <PageViewer onToggleControls={toggleControls} />
    </div>
  );
}