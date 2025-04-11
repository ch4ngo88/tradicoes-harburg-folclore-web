
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/logo.jpg" alt="Rancho logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-seagreen object-cover" />
            <div className="text-center md:text-left">
              <span className="text-portuguesered text-sm md:text-base font-medium block">Rancho Folclórico</span> 
              <h1 className="text-lg md:text-xl font-bold text-seagreen leading-tight">
                Tradições Portuguesas de Harburg
              </h1>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col gap-2 items-end">
            <LanguageSwitcher />
          </div>
        </div>
        
        <nav className={`relative py-1 ${isScrolled ? 'bg-seagreen/95 backdrop-blur-sm' : 'bg-seagreen'} text-white rounded-md mb-2 transition-all duration-300`}>
          <div className="px-4 md:px-6 flex justify-between items-center">
            <div className="md:hidden flex justify-between items-center w-full py-2">
              <LanguageSwitcher />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 rounded-md border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            
            <ul className={`flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 w-full text-center transition-all duration-300 
                          ${isMenuOpen ? 'max-h-[300px] opacity-100 pb-4' : 'max-h-0 md:max-h-full opacity-0 md:opacity-100 overflow-hidden md:overflow-visible'}`}>
              <li className="md:py-2 py-3">
                <Link 
                  to="/" 
                  className={`block md:inline-block ${isActive('/') ? 'current' : 'nav-link'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                </Link>
              </li>
              <li className="md:py-2 py-3">
                <Link 
                  to="/activities" 
                  className={`block md:inline-block ${isActive('/activities') ? 'current' : 'nav-link'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('activities')}
                </Link>
              </li>
              <li className="md:py-2 py-3">
                <Link 
                  to="/archive" 
                  className={`block md:inline-block ${isActive('/archive') ? 'current' : 'nav-link'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('archive')}
                </Link>
              </li>
              <li className="md:py-2 py-3">
                <Link 
                  to="/center" 
                  className={`block md:inline-block ${isActive('/center') ? 'current' : 'nav-link'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('center')}
                </Link>
              </li>
              <li className="md:py-2 py-3">
                <Link 
                  to="/contact" 
                  className={`block md:inline-block ${isActive('/contact') ? 'current' : 'nav-link'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
