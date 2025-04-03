
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';

type MemberData = {
  id: number;
  name: string;
  role: string;
  regularImage: string;
  costumeImage: string;
};

const Center = () => {
  const { language } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  // Example member data - in a real implementation, this would come from a database or API
  const members: MemberData[] = [
    {
      id: 1,
      name: "Maria Silva",
      role: language === 'pt' ? "Dançarina" : "Tänzerin",
      regularImage: "/images/logo.jpg", // Replace with actual member images
      costumeImage: "/images/logo.jpg", // Replace with actual member costume images
    },
    {
      id: 2,
      name: "João Santos",
      role: language === 'pt' ? "Músico" : "Musiker",
      regularImage: "/images/logo.jpg", // Replace with actual member images
      costumeImage: "/images/logo.jpg", // Replace with actual member costume images
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      role: language === 'pt' ? "Dançarina" : "Tänzerin",
      regularImage: "/images/logo.jpg", // Replace with actual member images
      costumeImage: "/images/logo.jpg", // Replace with actual member costume images
    },
    {
      id: 4,
      name: "Pedro Almeida",
      role: language === 'pt' ? "Dançarino" : "Tänzer",
      regularImage: "/images/logo.jpg", // Replace with actual member images
      costumeImage: "/images/logo.jpg", // Replace with actual member costume images
    },
  ];
  
  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-seagreen mb-6">
        {language === 'pt' ? 'Membros' : 'Mitglieder'}
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
      
      <div className="w-full max-w-4xl mb-12">
        <h3 className="text-xl font-bold text-portuguesered mb-6 text-center">
          {language === 'pt' ? 'Nossa Equipe' : 'Unser Team'}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map(member => (
            <div 
              key={member.id} 
              className="bg-white/80 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={hoveredMember === member.id ? member.costumeImage : member.regularImage} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4 w-full">
                    <p className="font-bold">{member.name}</p>
                    <p className="text-sm text-white/80">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-seagreen">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
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

export default Center;
