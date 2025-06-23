import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, Language, ReadingMode, Manga, Chapter } from '../types';

interface AppContextType {
  state: AppState;
  setCurrentPage: (page: AppState['currentPage']) => void;
  setSelectedManga: (manga: Manga | undefined) => void;
  setSelectedChapter: (chapter: Chapter | undefined) => void;
  setLanguage: (language: Language) => void;
  setReadingMode: (mode: ReadingMode) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppAction =
  | { type: 'SET_CURRENT_PAGE'; payload: AppState['currentPage'] }
  | { type: 'SET_SELECTED_MANGA'; payload: Manga | undefined }
  | { type: 'SET_SELECTED_CHAPTER'; payload: Chapter | undefined }
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_READING_MODE'; payload: ReadingMode };

const initialState: AppState = {
  currentPage: 'home',
  selectedManga: undefined,
  selectedChapter: undefined,
  language: 'fr',
  readingMode: 'horizontal',
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_SELECTED_MANGA':
      return { ...state, selectedManga: action.payload };
    case 'SET_SELECTED_CHAPTER':
      return { ...state, selectedChapter: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_READING_MODE':
      return { ...state, readingMode: action.payload };
    default:
      return state;
  }
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setCurrentPage = (page: AppState['currentPage']) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const setSelectedManga = (manga: Manga | undefined) => {
    dispatch({ type: 'SET_SELECTED_MANGA', payload: manga });
  };

  const setSelectedChapter = (chapter: Chapter | undefined) => {
    dispatch({ type: 'SET_SELECTED_CHAPTER', payload: chapter });
  };

  const setLanguage = (language: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  const setReadingMode = (mode: ReadingMode) => {
    dispatch({ type: 'SET_READING_MODE', payload: mode });
  };

  const value: AppContextType = {
    state,
    setCurrentPage,
    setSelectedManga,
    setSelectedChapter,
    setLanguage,
    setReadingMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}