
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <img 
        src="/images/gruppe.jpg" 
        alt="Gruppe" 
        className="gruppo-image mb-8" 
      />
      
      <h2 className="text-2xl font-bold text-seagreen mb-4">{t('aboutUs')}</h2>
      
      <article className="prose max-w-prose text-justify mb-8">
        <p className="font-bold mb-4">{t('welcome')}</p>
        
        <p className="mb-4">{t('intro')}</p>
        
        <p className="font-bold mb-2">{t('generations')}</p>
        <p className="mb-4">{t('generationsText')}</p>
        
        <p className="font-bold mb-2">{t('variety')}</p>
        <p className="mb-4">{t('varietyText')}</p>
        
        <p className="font-bold mb-2">{t('timeTravel')}</p>
        <p className="mb-4">{t('timeTravelText')}</p>
        
        <p className="mb-2">{t('joinUs')}</p>
        <p className="mb-4">
          {t('joinUsText').split('Atividades').map((text, i, arr) => {
            if (i === 0) {
              return (
                <span key={i}>
                  {text}
                  <Link to="/activities" className="text-blue-800 italic">
                    {language === 'pt' ? 'Atividades' : 'Aktivitäten'}
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
                          <Link to="/contact" className="text-blue-800 italic">
                            {language === 'pt' ? 'Contacto' : 'Kontakt'}
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
        
        <p className="font-bold">{t('finalMessage')}</p>
      </article>
      
      <div className="w-full flex justify-center mb-8">
        <video 
          src="/images/offen.mp4" 
          controls 
          poster="/images/offen.jpeg"
          className="w-full max-w-md rounded-md shadow-md"
        >
          Your browser cannot play this video
        </video>
      </div>
      
      <div className="md:hidden flex gap-4 my-4">
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
  );
};

export default Index;
