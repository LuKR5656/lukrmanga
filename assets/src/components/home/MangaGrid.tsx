import React from 'react';
import { MangaCard } from './MangaCard';
import { Manga } from '../../types';

interface MangaGridProps {
  mangas: Manga[];
  title?: string;
}

export function MangaGrid({ mangas, title }: MangaGridProps) {
  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mangas.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
    </section>
  );
}