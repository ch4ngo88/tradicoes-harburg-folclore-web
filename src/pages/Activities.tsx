
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type NewsItem = {
  type: 'image' | 'video';
  thumbnail: string;
  source: string;
  title: string;
};

const Activities = () => {
  const { t } = useLanguage();
  
  // News items data
  const newsItems: NewsItem[] = [
    {
      type: 'image',
      thumbnail: '/images/info.jpg',
      source: '/images/info.jpg',
      title: 'Information Flyer'
    },
    {
      type: 'video',
      thumbnail: '/images/kinder.jpg', // Thumbnail for the video
      source: '/videos/kinder.mp4',
      title: 'Kinder Video'
    },
    {
      type: 'video',
      thumbnail: '/images/TikFrontt.JPG',
      source: '/videos/tiktok.mp4',
      title: 'TikTok Video'
    }
  ];
  
  // Upcoming activities - this would come from an API or CMS in a real app
  const upcomingEvents = [
    {
      id: 1,
      title: 'Dia de Portugal',
      date: '2025-06-10',
      image: '/images/dia_de_Portugal.jpeg',
      description: 'Celebration of Portugal Day with traditional music and dance performances.'
    }
  ];
  
  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <article className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-seagreen mb-6 text-center">{t('news')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="relative overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg cursor-pointer aspect-square">
                  {item.type === 'image' ? (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <a 
                    href={item.source} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-blue-600 hover:underline"
                  >
                    {t('openInNewTab')}
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </article>
      
      <h2 className="text-2xl font-bold text-seagreen mb-6 text-center">{t('upcomingActivities')}</h2>
      
      <div className="w-full max-w-3xl space-y-6 mb-12">
        {upcomingEvents.map(event => (
          <div 
            key={event.id} 
            className="bg-white/80 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/2">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-portuguesered mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
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
