import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

interface PageViewerProps {
  onToggleControls: () => void;
}

export function PageViewer({ onToggleControls }: PageViewerProps) {
  const { state } = useApp();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const pages = state.selectedChapter?.pages || [];

  useEffect(() => {
    setCurrentPage(0);
    setIsLoading(true);
  }, [state.selectedChapter]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsLoading(true);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const clickPosition = x / width;

    // Center area (middle 20%) toggles controls
    if (clickPosition >= 0.4 && clickPosition <= 0.6) {
      onToggleControls();
      return;
    }

    // For horizontal mode: left side = next page (manga style), right side = previous page
    if (state.readingMode === 'horizontal') {
      if (clickPosition < 0.4) {
        nextPage(); // Left click = next page (manga style)
      } else if (clickPosition > 0.6) {
        prevPage(); // Right click = previous page
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') prevPage(); // Right arrow = previous page (manga style)
    if (e.key === 'ArrowLeft') nextPage(); // Left arrow = next page (manga style)
    if (e.key === 'Escape') onToggleControls();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, pages.length]);

  if (pages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-white bg-gray-900">
        <p>No pages available</p>
      </div>
    );
  }

  return (
    <div className="flex-1 relative bg-gray-900 cursor-pointer" onClick={handleClick}>
      {state.readingMode === 'horizontal' ? (
        // Horizontal reading mode (manga style - right to left)
        <div className="h-full flex items-center justify-center relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <img
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="max-h-full max-w-full object-contain"
            onLoad={handleImageLoad}
            draggable={false}
          />

          {/* Page indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
            {currentPage + 1} / {pages.length}
          </div>

          {/* Click zones indicators (only visible on hover) */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-blue-500/10 flex items-center justify-center">
              <div className="bg-black/50 text-white px-3 py-1 rounded text-sm">Suivant</div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-red-500/10 flex items-center justify-center">
              <div className="bg-black/50 text-white px-3 py-1 rounded text-sm">Précédent</div>
            </div>
            <div className="absolute left-2/5 top-0 bottom-0 w-1/5 bg-green-500/10 flex items-center justify-center">
              <div className="bg-black/50 text-white px-3 py-1 rounded text-sm">Menu</div>
            </div>
          </div>
        </div>
      ) : (
        // Vertical reading mode
        <div className="max-w-4xl mx-auto p-4">
          <div className="space-y-2">
            {pages.map((page, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={page}
                  alt={`Page ${index + 1}`}
                  className="max-w-full h-auto object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}