
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
            <div className="mt-2 text-xs text-white/70">
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
                <svg width="18" height="18" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M38.0766 15.8881C38.0766 15.8881 38.1895 15.8881 38.0766 15.8881C37.8507 11.0112 34.9896 6.81706 29.7303 6.81706C29.04 6.81706 21.3376 6.81706 21.3376 6.81706C21.3376 6.81706 21.3376 6.93006 21.3376 7.04306V18.6209L21.3376 25.1946C21.3376 25.5339 21.3376 25.8731 21.2247 26.2124C20.6474 28.1887 19.0407 29.7041 17.0508 30.2802C16.4736 30.3932 15.8963 30.5062 15.3191 30.5062C12.1199 30.5062 9.6073 27.9936 9.6073 24.7944C9.6073 21.5952 12.1199 19.0826 15.3191 19.0826C15.8963 19.0826 16.4736 19.1956 17.0508 19.4217L17.0508 12.3977C16.4736 12.2847 15.8963 12.2847 15.3191 12.2847C8.45303 12.2847 2.90723 17.8305 2.90723 24.6966C2.90723 31.5627 8.45303 37.1085 15.3191 37.1085C22.1851 37.1085 27.7309 31.5627 27.7309 24.6966V18.9601C29.8338 20.4755 32.3464 21.369 35.0971 21.369L38.0766 21.369V15.8881ZM41.0984 9.42069V15.9619V18.9413V21.3371V24.6965H38.0767H35.097C32.3464 24.6965 30.0597 23.4071 28.6573 21.3371C27.8385 20.1825 27.3483 18.8061 27.3483 17.2908L27.3483 12.9967L27.3483 9.40771H30.37H36.3642H41.0984V9.42069Z"/>
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
