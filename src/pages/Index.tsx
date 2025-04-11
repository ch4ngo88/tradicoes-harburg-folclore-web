
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section with gradient background */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-seagreen to-portuguesered opacity-80 mix-blend-multiply"/>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="mb-6 flex justify-center">
            <img 
              src="/images/gruppe.jpg" 
              alt="Group photo" 
              className="w-32 h-32 rounded-full border-2 border-white object-cover shadow-lg" 
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in font-lusitana">
            {language === 'pt' ? 'Tradições Portuguesas' : 'Portugiesische Traditionen'}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up font-lusitana" style={{animationDelay: '0.2s'}}>
            {language === 'pt' 
              ? 'Preservando a cultura portuguesa em Hamburgo desde 1979' 
              : 'Bewahrung der portugiesischen Kultur in Hamburg seit 1979'}
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link to="/activities" className="button-primary inline-flex items-center gap-2 group font-lusitana">
              {language === 'pt' ? 'Descobrir Mais' : 'Mehr Entdecken'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h2 className="section-title mb-8 font-lusitana">{t('aboutUs')}</h2>
          
          <article className="prose max-w-none text-justify text-gray-700 space-y-6 font-lusitana">
            <p className="font-bold text-lg">{t('welcome')}</p>
            
            <p>{t('intro')}</p>
            
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <video 
                src="/images/offen.mp4" 
                controls 
                poster="/images/offen.jpeg"
                className="w-full rounded-md"
              >
                Your browser cannot play this video
              </video>
            </div>
            
            <div className="bg-cream p-6 rounded-xl border-l-4 border-seagreen shadow-md my-8">
              <h3 className="text-xl font-bold text-seagreen mb-3 font-lusitana">{t('generations')}</h3>
              <p>{t('generationsText')}</p>
            </div>
            
            <div className="bg-cream p-6 rounded-xl border-l-4 border-portuguesered shadow-md my-8">
              <h3 className="text-xl font-bold text-portuguesered mb-3 font-lusitana">{t('variety')}</h3>
              <p>{t('varietyText')}</p>
            </div>
            
            <div className="bg-cream p-6 rounded-xl border-l-4 border-seagreen shadow-md my-8">
              <h3 className="text-xl font-bold text-seagreen mb-3 font-lusitana">{t('timeTravel')}</h3>
              <p>{t('timeTravelText')}</p>
            </div>
            
            <div className="bg-lightgold/20 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-portuguesered mb-3 font-lusitana">{t('joinUs')}</h3>
              <p>
                {t('joinUsText').split('Atividades').map((text, i, arr) => {
                  if (i === 0) {
                    return (
                      <span key={i}>
                        {text}
                        <Link to="/activities" className="text-portuguesered font-medium hover:underline inline-flex items-center gap-1 font-lusitana">
                          {language === 'pt' ? 'Atividades' : 'Aktivitäten'}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </span>
                    );
                  } else {
                    return (
                      <span key={i}>
                        {text.split('Contacto').map((innerText, j, innerArr) => {
                          if (j === 0) {
                            return (
                              <span key={j}>
                                {innerText}
                                <Link to="/contact" className="text-portuguesered font-medium hover:underline inline-flex items-center gap-1 font-lusitana">
                                  {language === 'pt' ? 'Contacto' : 'Kontakt'}
                                  <ChevronRight className="w-4 h-4" />
                                </Link>
                              </span>
                            );
                          } else {
                            return <span key={j}>{innerText}</span>;
                          }
                        })}
                      </span>
                    );
                  }
                })}
              </p>
              <p className="font-bold mt-4 text-center">{t('finalMessage')}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Index;
