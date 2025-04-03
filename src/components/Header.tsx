
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        <div className="flex items-center gap-4">
          <img src="/images/logo.jpg" alt="Rancho logo" className="w-32 h-auto" />
          <h1 className="text-lg md:text-xl font-bold max-w-[160px]">
            <span className="text-seagreen block">Rancho Folclórico</span> 
            <span className="text-portuguesered">Tradições Portuguesas de Harburg</span>
          </h1>
        </div>
        
        <div className="hidden md:flex flex-col gap-2">
          <LanguageSwitcher />
          <div className="flex gap-2">
            <a href="https://www.youtube.com/@tradicoesportuguesasdeharb1754" target="_blank" rel="noopener noreferrer">
              <img src="/images/youtube.png" alt="YouTube" className="icon" />
            </a>
            <a href="https://www.facebook.com/portugiesischerverein.harburg?locale=de_DE" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.webp" alt="Facebook" className="icon" />
            </a>
            <a href="https://www.instagram.com/centroportuguesharburg?igsh=MW9qbGpxNTZuN3M1Nw==" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.webp" alt="Instagram" className="icon" />
            </a>
            <a href="https://www.tiktok.com/@tradies.portugues?_t=8lbFMCvtLA8&_r=1" target="_blank" rel="noopener noreferrer">
              <img src="/images/tiktok.webp" alt="TikTok" className="icon" />
            </a>
          </div>
        </div>
      </div>
      
      <nav className="bg-seagreen text-white p-4 relative">
        <div className="md:hidden flex justify-between items-center">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        
        <ul className={`flex flex-col md:flex-row justify-center md:gap-12 text-center ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <li className={`py-3 ${isActive('/') ? 'current' : ''}`}>
            <Link to="/">{t('home')}</Link>
          </li>
          <li className={`py-3 ${isActive('/activities') ? 'current' : ''}`}>
            <Link to="/activities">{t('activities')}</Link>
          </li>
          <li className={`py-3 ${isActive('/archive') ? 'current' : ''}`}>
            <Link to="/archive">{t('archive')}</Link>
          </li>
          <li className={`py-3 ${isActive('/center') ? 'current' : ''}`}>
            <Link to="/center">{t('center')}</Link>
          </li>
          <li className={`py-3 ${isActive('/contact') ? 'current' : ''}`}>
            <Link to="/contact">{t('contact')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
