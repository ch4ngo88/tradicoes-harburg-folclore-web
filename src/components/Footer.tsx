
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowUp, Facebook, Instagram, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="w-full bg-seagreen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="Rancho logo" 
                className="w-14 h-14 rounded-full border-2 border-white object-cover" 
              />
              <div>
                <h3 className="font-lusitana font-bold text-xl">Tradições Portuguesas</h3>
                <p className="text-xs text-white/70">Preservando a cultura portuguesa em Hamburgo desde 1979</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mt-3">
              Centro Português Harburg e.V.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-lusitana font-bold text-xl mb-4 border-b border-white/20 pb-2 px-2">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-white/80 mt-1" />
                <span className="text-sm">
                  Reetwerder 23<br />21029 Hamburg
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white/80" />
                <a href="mailto:info@tradicoesportuguesas.com" className="text-sm hover:text-lightgold transition-colors">
                  info@tradicoesportuguesas.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white/80" />
                <a href="tel:+4940123456789" className="text-sm hover:text-lightgold transition-colors">
                  +49 (0) 40 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white/80" />
                <span className="text-sm">Di. & Fr. 19:00 - 21:00 Uhr</span>
              </div>
            </div>
          </div>
          
          {/* Social Media & Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-lusitana font-bold text-xl mb-4 border-b border-white/20 pb-2 px-2">Folgen Sie uns</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.youtube.com/@tradicoesportuguesasdeharb1754" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-lightgold transition-colors">
                <Youtube size={28} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.facebook.com/portugiesischerverein.harburg?locale=de_DE" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-lightgold transition-colors">
                <Facebook size={28} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/centroportuguesharburg?igsh=MW9qbGpxNTZuN3M1Nw==" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-lightgold transition-colors">
                <Instagram size={28} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            
            <h3 className="font-lusitana font-bold text-xl mb-4 border-b border-white/20 pb-2 px-2">Rechtliches</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/impressum" className="text-white hover:text-lightgold transition-colors text-sm">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-white hover:text-lightgold transition-colors text-sm">
                Datenschutzerklärung
              </Link>
              <Link to="/agb" className="text-white hover:text-lightgold transition-colors text-sm">
                AGB
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-white/70">
            <span className="text-xs align-text-top mr-1">©</span> 2025 GCRFP. Alle Rechte vorbehalten.
          </span>
          
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp size={18} />
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
