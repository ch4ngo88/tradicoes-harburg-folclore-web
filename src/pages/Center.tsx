
import { useLanguage } from '@/hooks/useLanguage';

const Center = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-seagreen mb-6">
        {language === 'pt' ? 'Centro' : 'Centro'}
      </h2>
      
      <img 
        src="/images/logo.jpg" 
        alt="Centro logo" 
        className="w-40 mb-6" 
      />
      
      <article className="prose max-w-prose text-justify mb-8">
        <p className="mb-4">
          {language === 'pt' 
            ? 'O Centro Português de Harburg é um ponto de encontro cultural e social para a comunidade portuguesa em Hamburgo.'
            : 'Das Portugiesische Zentrum in Harburg ist ein kultureller und sozialer Treffpunkt für die portugiesische Gemeinschaft in Hamburg.'}
        </p>
        
        <p className="mb-4">
          {language === 'pt'
            ? 'Oferecemos diversas atividades como aulas de dança folclórica, encontros comunitários, eventos culturais e muito mais.'
            : 'Wir bieten verschiedene Aktivitäten wie Volkstanzunterricht, Gemeinschaftstreffen, kulturelle Veranstaltungen und vieles mehr an.'}
        </p>
        
        <p className="mb-4">
          {language === 'pt'
            ? 'O nosso espaço está aberto a todos os interessados na cultura portuguesa. Venha visitar-nos!'
            : 'Unser Raum steht allen offen, die sich für die portugiesische Kultur interessieren. Besuchen Sie uns!'}
        </p>
      </article>
      
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

export default Center;
