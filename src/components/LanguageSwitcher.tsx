
import { useLanguage } from '@/hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`flag-button ${language === 'pt' ? 'current' : ''}`}
        aria-label="Switch to Portuguese"
      >
        <img src="/images/portugalflag.png" alt="Portuguese" className="w-5 h-5 rounded-full" />
        <span>PT</span>
      </button>
      
      <button
        onClick={() => setLanguage('de')}
        className={`flag-button ${language === 'de' ? 'current' : ''}`}
        aria-label="Switch to German"
      >
        <img src="/images/germanyflag.png" alt="German" className="w-5 h-5 rounded-full" />
        <span>DE</span>
      </button>
    </div>
  );
};
