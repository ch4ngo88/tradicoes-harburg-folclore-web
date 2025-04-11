
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="w-full">
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="font-lusitana font-bold text-seagreen">
                Tradições Portuguesas de Harburg
              </span>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.youtube.com/@tradicoesportuguesasdeharb1754" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-portuguesered transition-colors">
                <img src="/images/youtube.png" alt="YouTube" className="icon" />
              </a>
              <a href="https://www.facebook.com/portugiesischerverein.harburg?locale=de_DE" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-portuguesered transition-colors">
                <img src="/images/facebook.webp" alt="Facebook" className="icon" />
              </a>
              <a href="https://www.instagram.com/centroportuguesharburg?igsh=MW9qbGpxNTZuN3M1Nw==" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-portuguesered transition-colors">
                <img src="/images/instagram.webp" alt="Instagram" className="icon" />
              </a>
              <a href="https://www.tiktok.com/@tradies.portugues?_t=8lbFMCvtLA8&_r=1" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-portuguesered transition-colors">
                <img src="/images/tiktok.webp" alt="TikTok" className="icon" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className="p-2 bg-seagreen rounded-full text-white hover:bg-seagreen/80 transition-all duration-300"
            >
              <ArrowUp size={18} />
              <span className="sr-only">Scroll to top</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-seagreen text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>
            <Link to="/impressum" className="hover:text-lightgold transition-colors underline underline-offset-2">
              Impressum
            </Link>
          </span>
          <span className="flex items-center">
            <span className="text-xs align-text-top mr-1">©</span> 2025 GCRFP
          </span>
        </div>
      </div>
    </footer>
  );
};
