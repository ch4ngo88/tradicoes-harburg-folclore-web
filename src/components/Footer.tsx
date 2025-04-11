
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
          <div className="flex flex-col items-center md:items-start">
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
            <div className="mt-auto text-xs text-white/70 absolute bottom-4 md:relative md:bottom-auto md:mt-2">
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
                  <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.267 5.111 5.111 0 0 1-1.65-3.295h-3.36v13.328a2.579 2.579 0 0 1-2.568 2.567c-1.42 0-2.568-1.147-2.568-2.568 0-1.421 1.148-2.568 2.568-2.568.287 0 .569.045.83.135V8.084a6.033 6.033 0 0 0-.83-.05C5.068 8.034 2 11.102 2 14.863c0 3.76 3.068 6.829 6.829 6.829 3.76 0 6.828-3.069 6.828-6.83V9.805a8.615 8.615 0 0 0 3.664.822V7.304a5.178 5.178 0 0 1-3.664-1.471v.562c0 .047-.047-.047 0 0 0-.047.047-.094 0-.047-.047.047 0-.094 0-.047s.047.047 0 0c0-.046 0 .047 0 0s0-.094 0 0v-.14l-.047-.094s0 .094 0 0l.047-.094s-.047.094 0 0c0-.047 0 0 0 0v-.047s0 .047 0 0v-.047s0 .047 0 0l-.047-.094h.047z"/>
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
