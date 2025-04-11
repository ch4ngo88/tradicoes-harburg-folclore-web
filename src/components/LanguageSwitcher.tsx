
import { useLanguage } from '@/hooks/useLanguage';
import { Flag } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`flag-button ${language === 'pt' ? 'bg-lightgold/20' : ''}`}
        aria-label="Switch to Portuguese"
      >
        <span className="flex items-center gap-1">
          <Flag className="w-4 h-4 text-portuguesered" />
          <span>PT</span>
        </span>
      </button>
      
      <button
        onClick={() => setLanguage('de')}
        className={`flag-button ${language === 'de' ? 'bg-lightgold/20' : ''}`}
        aria-label="Switch to German"
      >
        <span className="flex items-center gap-1">
          <Flag className="w-4 h-4 text-black" />
          <span>DE</span>
        </span>
      </button>
    </div>
  );
};
