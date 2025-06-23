import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';

export function useTranslation() {
  const { state } = useApp();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[state.language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, language: state.language };
}