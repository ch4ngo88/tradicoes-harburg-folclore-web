
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Calendar, ExternalLink, Info } from 'lucide-react';

type NewsItem = {
  type: 'image' | 'video';
  thumbnail: string;
  source: string;
  title: string;
  description?: string;
};

const Activities = () => {
  const { t, language } = useLanguage();
  
  // News items data
  const newsItems: NewsItem[] = [
    {
      type: 'image',
      thumbnail: '/images/info.jpg',
      source: '/images/info.jpg',
      title: language === 'pt' ? 'Folheto Informativo' : 'Information Flyer',
      description: language === 'pt' ? 'Detalhes sobre o nosso grupo folclórico' : 'Details über unsere Folkloregruppe'
    },
    {
      type: 'video',
      thumbnail: '/images/kinder.jpg', // Thumbnail for the video
      source: '/videos/kinder.mp4',
      title: language === 'pt' ? 'Vídeo das Crianças' : 'Kinder Video',
      description: language === 'pt' ? 'Os nossos pequenos dançarinos em ação' : 'Unsere kleinen Tänzer in Aktion'
    },
    {
      type: 'video',
      thumbnail: '/images/TikFrontt.JPG',
      source: '/videos/tiktok.mp4',
      title: 'TikTok',
      description: language === 'pt' ? 'Nossa presença nas redes sociais' : 'Unsere Präsenz in sozialen Medien'
    }
  ];
  
  // Upcoming activities
  const upcomingEvents = [
    {
      id: 1,
      title: 'Dia de Portugal',
      date: '2025-06-10',
      image: '/images/dia_de_Portugal.jpeg',
      description: language === 'pt' 
        ? 'Celebração do Dia de Portugal com música tradicional e apresentações de dança.'
        : 'Feier des Dia de Portugal mit traditioneller Musik und Tanzaufführungen.',
      location: 'Hamburgo'
    },
    {
      id: 2,
      title: language === 'pt' ? 'Workshop de Dança' : 'Tanzworkshop',
      date: '2025-05-15',
      image: '/images/gruppe.jpg',
      description: language === 'pt'
        ? 'Aprenda danças tradicionais portuguesas em nosso workshop especial.'
        : 'Lernen Sie traditionelle portugiesische Tänze in unserem speziellen Workshop.',
      location: 'Centro Português de Harburg'
    }
  ];
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="section-title text-center">
        {language === 'pt' ? 'Atividades e Eventos' : 'Aktivitäten und Events'}
      </h2>
      
      {/* News Section */}
      <section className="mb-16 mt-8">
        <div className="flex items-center gap-2 mb-8">
          <Info className="text-portuguesered" />
          <h3 className="text-xl font-bold text-portuguesered">
            {t('news')}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white/90 card-hover cursor-pointer">
                  <div className="aspect-[4/3]">
                    {item.type === 'image' ? (
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full relative">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-3 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-seagreen">{item.title}</h4>
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-0 overflow-hidden">
                <div className="p-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                  <a 
                    href={item.source} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-seagreen hover:underline flex items-center gap-1 mt-3"
                  >
                    {t('openInNewTab')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>
      
      {/* Events Calendar Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="text-seagreen" />
          <h3 className="text-xl font-bold text-seagreen">
            {t('upcomingActivities')}
          </h3>
        </div>
        
        <div className="space-y-6">
          {upcomingEvents.map(event => (
            <div 
              key={event.id} 
              className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row card-hover"
            >
              <div className="md:w-1/3 relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-0 left-0 bg-seagreen text-white px-4 py-2 rounded-br-lg font-medium">
                  {new Date(event.date).toLocaleDateString(language === 'pt' ? 'pt-PT' : 'de-DE', { 
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-portuguesered mb-2">{event.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700">{event.description}</p>
                
                <button className="mt-4 button-secondary self-start">
                  {language === 'pt' ? 'Mais Informações' : 'Mehr Informationen'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;
