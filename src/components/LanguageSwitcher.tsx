
import { useLanguage } from '@/hooks/useLanguage';

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
          <img 
            src="/images/pt-flag.png" 
            alt="Portuguese flag" 
            className="w-5 h-3.5 object-cover shadow-sm" 
          />
          <span>PT</span>
        </span>
      </button>
      
      <button
        onClick={() => setLanguage('de')}
        className={`flag-button ${language === 'de' ? 'bg-lightgold/20' : ''}`}
        aria-label="Switch to German"
      >
        <span className="flex items-center gap-1">
          <img 
            src="/images/de-flag.png" 
            alt="German flag" 
            className="w-5 h-3.5 object-cover shadow-sm" 
          />
          <span>DE</span>
        </span>
      </button>
    </div>
  );
};
