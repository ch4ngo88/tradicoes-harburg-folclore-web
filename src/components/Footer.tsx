
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="w-full bg-seagreen text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start h-full">
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/images/logo.jpg" 
                alt="Rancho logo" 
                className="w-10 h-10 object-cover" 
              />
              <div>
                <h3 className="font-lusitana font-bold text-base">Tradições Portuguesas</h3>
                <p className="text-xs text-white/70">
                  {language === 'pt' 
                    ? 'Preservando a cultura portuguesa em Hamburgo desde 1979' 
                    : 'Bewahrung der portugiesischen Kultur in Hamburg seit 1979'}
                </p>
              </div>
            </div>
            <p className="text-xs text-white/70 mt-1">
              Centro Português Harburg e.V.
            </p>
            
            {/* Copyright positioned at the bottom of the column */}
            <div className="text-xs text-white/70 mt-auto pt-8">
              <span className="text-xs align-text-top mr-1">©</span> 2025 GCRFP. Alle Rechte vorbehalten.
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-lusitana font-bold text-base mb-2 border-b border-white/20 pb-1 px-2">Kontakt</h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-white/80 mt-1 flex-shrink-0" />
                <span>
                  Reetwerder 23<br />21029 Hamburg
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-white/80 flex-shrink-0" />
                <a href="mailto:info@tradicoesportuguesas.com" className="hover:text-white/60 transition-colors">
                  info@tradicoesportuguesas.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-white/80 flex-shrink-0" />
                <a href="tel:+4940123456789" className="hover:text-white/60 transition-colors">
                  +49 (0) 40 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-white/80 flex-shrink-0" />
                <span>Di. & Fr. 19:00 - 21:00 Uhr</span>
              </div>
            </div>
          </div>
          
          {/* Social Media & Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-lusitana font-bold text-base mb-2 border-b border-white/20 pb-1 px-2">Folgen Sie uns</h3>
            <div className="flex gap-3 mb-3">
              <a href="https://www.youtube.com/@tradicoesportuguesasdeharb1754" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-white/60 transition-colors">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.facebook.com/portugiesischerverein.harburg?locale=de_DE" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-white/60 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/centroportuguesharburg?igsh=MW9qbGpxNTZuN3M1Nw==" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-white/60 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@tradicoesportuguesas" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-white/60 transition-colors">
                {/* Correct TikTok SVG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            
            <h3 className="font-lusitana font-bold text-base mb-2 border-b border-white/20 pb-1 px-2">Rechtliches</h3>
            <div className="grid grid-cols-1 gap-1">
              <Link to="/impressum" className="text-white hover:text-white/60 transition-colors text-xs">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-white hover:text-white/60 transition-colors text-xs">
                Datenschutzerklärung
              </Link>
              <Link to="/agb" className="text-white hover:text-white/60 transition-colors text-xs">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
