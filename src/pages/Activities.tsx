
import { useLanguage } from '@/hooks/useLanguage';

const Activities = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <article className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold text-seagreen mb-6">{t('news')}</h2>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="/images/info.jpg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block border-2 border-transparent hover:border-portuguesered transition-colors"
          >
            <img 
              src="/images/info.jpg" 
              alt="Information" 
              className="w-24 h-auto object-cover" 
            />
          </a>
          
          <a 
            href="/images/kinder.mp4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block border-2 border-transparent hover:border-portuguesered transition-colors"
          >
            <video 
              src="/images/kinder.mp4" 
              className="w-24 h-auto object-cover" 
            >
              Your browser does not support the video tag.
            </video>
          </a>
          
          <a 
            href="/images/tiktok.mp4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block border-2 border-transparent hover:border-portuguesered transition-colors"
          >
            <video 
              src="/images/tiktok.mp4" 
              poster="/images/TikFrontt.JPG"
              className="w-24 h-auto object-cover" 
            >
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
      </article>
      
      <h2 className="text-2xl font-bold text-seagreen mb-6">{t('upcomingActivities')}</h2>
      
      <img 
        src="/images/dia_de_Portugal.jpeg" 
        alt="Dia de Portugal" 
        className="w-full max-w-md rounded-md shadow-md mb-8" 
      />
      
      <div className="md:hidden flex gap-4 mt-8">
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

export default Activities;
