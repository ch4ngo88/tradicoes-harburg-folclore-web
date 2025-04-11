
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { Users } from 'lucide-react';

type MemberData = {
  id: number;
  name: string;
  role: string;
  regularImage: string;
  costumeImage: string;
  description?: string;
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
      regularImage: "/images/member-1.jpg", // Replace with actual member images
      costumeImage: "/images/member-1-costume.jpg", // Replace with actual member costume images
      description: language === 'pt' ? "Membro desde 2015" : "Mitglied seit 2015"
    },
    {
      id: 2,
      name: "João Santos",
      role: language === 'pt' ? "Músico" : "Musiker",
      regularImage: "/images/member-2.jpg", // Replace with actual member images
      costumeImage: "/images/member-2-costume.jpg", // Replace with actual member costume images
      description: language === 'pt' ? "Membro desde 2010" : "Mitglied seit 2010"
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      role: language === 'pt' ? "Dançarina" : "Tänzerin",
      regularImage: "/images/member-3.jpg", // Replace with actual member images
      costumeImage: "/images/member-3-costume.jpg", // Replace with actual member costume images
      description: language === 'pt' ? "Membro desde 2018" : "Mitglied seit 2018"
    },
    {
      id: 4,
      name: "Pedro Almeida",
      role: language === 'pt' ? "Dançarino" : "Tänzer",
      regularImage: "/images/member-4.jpg", // Replace with actual member images
      costumeImage: "/images/member-4-costume.jpg", // Replace with actual member costume images
      description: language === 'pt' ? "Membro desde 2014" : "Mitglied seit 2014"
    },
    {
      id: 5,
      name: "Sofia Costa",
      role: language === 'pt' ? "Dançarina" : "Tänzerin",
      regularImage: "/images/logo.jpg", // Placeholder
      costumeImage: "/images/logo.jpg", // Placeholder
      description: language === 'pt' ? "Membro desde 2019" : "Mitglied seit 2019"
    },
    {
      id: 6,
      name: "Manuel Ferreira",
      role: language === 'pt' ? "Músico" : "Musiker",
      regularImage: "/images/logo.jpg", // Placeholder
      costumeImage: "/images/logo.jpg", // Placeholder
      description: language === 'pt' ? "Membro desde 2017" : "Mitglied seit 2017"
    },
    {
      id: 7,
      name: "Inês Oliveira",
      role: language === 'pt' ? "Dançarina" : "Tänzerin",
      regularImage: "/images/logo.jpg", // Placeholder
      costumeImage: "/images/logo.jpg", // Placeholder
      description: language === 'pt' ? "Membro desde 2020" : "Mitglied seit 2020"
    },
    {
      id: 8,
      name: "Ricardo Santos",
      role: language === 'pt' ? "Dançarino" : "Tänzer",
      regularImage: "/images/logo.jpg", // Placeholder
      costumeImage: "/images/logo.jpg", // Placeholder
      description: language === 'pt' ? "Membro desde 2016" : "Mitglied seit 2016"
    },
  ];
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">
            {language === 'pt' ? 'Membros' : 'Mitglieder'}
          </h2>
          
          <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-seagreen to-portuguesered p-1 mb-6 mt-8">
            <img 
              src="/images/logo.jpg" 
              alt="Centro logo" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          
          <article className="prose max-w-2xl mx-auto text-center text-gray-700 mb-8">
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
            
            <p>
              {language === 'pt'
                ? 'O nosso espaço está aberto a todos os interessados na cultura portuguesa. Venha visitar-nos!'
                : 'Unser Raum steht allen offen, die sich für die portugiesische Kultur interessieren. Besuchen Sie uns!'}
            </p>
          </article>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="text-seagreen" />
            <h3 className="text-xl font-bold text-seagreen">
              {language === 'pt' ? 'Nossa Equipe' : 'Unser Team'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map(member => (
              <div 
                key={member.id} 
                className="member-card"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="member-card-image-container">
                  <img 
                    src={hoveredMember === member.id ? member.costumeImage : member.regularImage} 
                    alt={member.name}
                    className="member-card-image"
                  />
                  <div className="member-card-overlay">
                    <div className="text-white p-4 w-full">
                      <p className="font-bold">{member.name}</p>
                      <p className="text-sm text-white/90">{member.role}</p>
                      {member.description && (
                        <p className="text-xs mt-1 text-white/70">{member.description}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="member-card-info">
                  <h4 className="font-semibold text-seagreen">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
