
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="w-full bg-seagreen text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/images/logo.jpg" 
                alt="Rancho logo" 
                className="w-12 h-12 object-cover" 
              />
              <div>
                <h3 className="font-lusitana font-bold text-lg">Tradições Portuguesas</h3>
                <p className="text-xs text-white/70">
                  {language === 'pt' 
                    ? 'Preservando a cultura portuguesa em Hamburgo desde 1979' 
                    : 'Bewahrung der portugiesischen Kultur in Hamburg seit 1979'}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/80 mt-2">
              Centro Português Harburg e.V.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-lusitana font-bold text-lg mb-3 border-b border-white/20 pb-1 px-2">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <span>
                  Reetwerder 23<br />21029 Hamburg
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
                <a href="mailto:info@tradicoesportuguesas.com" className="hover:text-lightgold transition-colors">
                  info@tradicoesportuguesas.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/80 flex-shrink-0" />
                <a href="tel:+4940123456789" className="hover:text-lightgold transition-colors">
                  +49 (0) 40 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span>Di. & Fr. 19:00 - 21:00 Uhr</span>
              </div>
            </div>
          </div>
          
          {/* Social Media & Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-lusitana font-bold text-lg mb-3 border-b border-white/20 pb-1 px-2">Folgen Sie uns</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://www.youtube.com/@tradicoesportuguesasdeharb1754" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-lightgold transition-colors">
                <Youtube size={22} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.facebook.com/portugiesischerverein.harburg?locale=de_DE" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-lightgold transition-colors">
                <Facebook size={22} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/centroportuguesharburg?igsh=MW9qbGpxNTZuN3M1Nw==" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-lightgold transition-colors">
                <Instagram size={22} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@tradicoesportuguesas" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-lightgold transition-colors">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M16 8v8"></path>
                  <path d="M12 16c0-2.5 1.5-6 4-6"></path>
                  <path d="M17 10c1.5 0 3-1 3-3"></path>
                  <path d="M16 5c0 .5-.5 1-1 2l-1 1"></path>
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            
            <h3 className="font-lusitana font-bold text-lg mb-3 border-b border-white/20 pb-1 px-2">Rechtliches</h3>
            <div className="grid grid-cols-1 gap-1.5">
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
        <div className="border-t border-white/20 mt-5 pt-4 text-center max-w-4xl mx-auto">
          <span className="text-sm text-white/70">
            <span className="text-xs align-text-top mr-1">©</span> 2025 GCRFP. Alle Rechte vorbehalten.
          </span>
        </div>
      </div>
    </footer>
  );
};
