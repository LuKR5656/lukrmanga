export interface Manga {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  cover: string;
  author: string;
  status: 'ongoing' | 'completed' | 'hiatus';
  genres: string[];
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  mangaId: string;
  number: number;
  title: {
    fr: string;
    en: string;
  };
  pages: string[];
  releaseDate: string;
  language: 'fr' | 'en';
}

export type Language = 'fr' | 'en';
export type ReadingMode = 'horizontal' | 'vertical';

export interface AppState {
  currentPage: 'home' | 'series' | 'reader';
  selectedManga?: Manga;
  selectedChapter?: Chapter;
  language: Language;
  readingMode: ReadingMode;
}