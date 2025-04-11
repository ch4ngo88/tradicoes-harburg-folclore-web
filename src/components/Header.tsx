
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="flex flex-col md:flex-row items-center justify-between py-2 px-4 gap-2">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/images/logo.jpg" 
              alt="Rancho logo" 
              className="w-12 h-12 object-cover" 
            />
            <div className="text-center md:text-left">
              <span className="text-portuguesered text-sm font-medium block">Rancho Folclórico</span> 
              <h1 className="text-lg font-bold text-seagreen leading-tight font-lusitana">
                Tradições Portuguesas
              </h1>
              <span className="text-xs text-gray-600 italic block">
                {language === 'pt' 
                  ? 'Preservando a cultura portuguesa em Hamburgo desde 1979' 
                  : 'Bewahrung der portugiesischen Kultur in Hamburg seit 1979'}
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col gap-2 items-end">
            <LanguageSwitcher />
          </div>
        </div>
        
        <nav className={`relative py-0.5 ${isScrolled ? 'bg-seagreen/95 backdrop-blur-sm' : 'bg-seagreen'} text-white rounded-md mb-2 transition-all duration-300`}>
          <div className="px-4 md:px-6 flex justify-between items-center">
            <div className="md:hidden flex justify-between items-center w-full py-1">
              <LanguageSwitcher />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 rounded-md border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
            
            <ul className={`flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 w-full text-center transition-all duration-300 
                          ${isMenuOpen ? 'max-h-[300px] opacity-100 pb-2' : 'max-h-0 md:max-h-full opacity-0 md:opacity-100 overflow-hidden md:overflow-visible'}`}>
              <li className="md:py-1.5 py-2 relative group">
                <Link 
                  to="/" 
                  className={`block md:inline-block hover:text-portuguesered transition-colors ${
                    isActive('/') ? 'font-bold relative' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                  {isActive('/') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="md:py-1.5 py-2 relative group">
                <Link 
                  to="/activities" 
                  className={`block md:inline-block hover:text-portuguesered transition-colors ${
                    isActive('/activities') ? 'font-bold relative' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('activities')}
                  {isActive('/activities') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="md:py-1.5 py-2 relative group">
                <Link 
                  to="/archive" 
                  className={`block md:inline-block hover:text-portuguesered transition-colors ${
                    isActive('/archive') ? 'font-bold relative' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('archive')}
                  {isActive('/archive') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="md:py-1.5 py-2 relative group">
                <Link 
                  to="/membros" 
                  className={`block md:inline-block hover:text-portuguesered transition-colors ${
                    isActive('/membros') ? 'font-bold relative' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'de' ? 'Member' : 'Membros'}
                  {isActive('/membros') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="md:py-1.5 py-2 relative group">
                <Link 
                  to="/contact" 
                  className={`block md:inline-block hover:text-portuguesered transition-colors ${
                    isActive('/contact') ? 'font-bold relative' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                  {isActive('/contact') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
