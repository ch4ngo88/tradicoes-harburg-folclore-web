
import { useLanguage } from '@/hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
          language === 'pt' ? 'font-bold text-secondary' : ''
        }`}
      >
        <img 
          src="/images/portugalflag.png" 
          alt="Portugal flag" 
          className="w-4 h-auto" 
        />
        <span>PT</span>
      </button>
      
      <button
        onClick={() => setLanguage('de')}
        className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
          language === 'de' ? 'font-bold text-secondary' : ''
        }`}
      >
        <img 
          src="/images/germanyflag.png" 
          alt="Germany flag" 
          className="w-4 h-auto" 
        />
        <span>DE</span>
      </button>
    </div>
  );
};
