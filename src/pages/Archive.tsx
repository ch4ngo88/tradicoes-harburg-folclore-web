
import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';

const Archive = () => {
  const { language } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  
  // This effect would load the images in a real environment
  useEffect(() => {
    // In a real implementation, these would be loaded from your actual images
    const archiveImages = [
      '/images/Zeitungsartikel.jpg',
      '/images/Alt1.jpg',
      '/images/Alt2.jpg',
      '/images/Alt3.jpg',
      '/images/Alt4.jpg',
      '/images/Jung1.jpg',
      '/images/Jung2.jpg',
      '/images/Jung4.jpg',
      '/images/Jung5.jpg',
      '/images/Jung8.jpg',
      '/images/mata.jpg',
      '/images/Jung9.jpg',
      '/images/Festival1.jpg',
      '/images/Festival2.jpg',
      '/images/Festival3.jpg',
      '/images/Festival4.jpg',
      '/images/Festival5.jpg',
      '/images/Neu1.jpg',
      '/images/Neu4.jpg',
      '/images/Bus.jpg',
      '/images/Neu5.jpg',
      '/images/Neu6.jpg',
    ];
    
    setImages(archiveImages);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <article className="w-full max-w-2xl mb-8 text-center zeitung">
        <h2 className="text-2xl font-bold text-seagreen mb-6">
          {language === 'pt' ? 'Arquivo' : 'Archiv'}
        </h2>
        
        <div className="my-4">
          <audio 
            controls 
            title="Café com Leite & Pimenta Interview - Tradições"
            className="max-w-full"
          >
            <source src="/audio/Café com Leite & Pimenta Interview Tradicoes.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-xs italic mt-2">
            (Café com Leite & Pimenta Interview 2024)
          </p>
        </div>
      </article>

      {/* Image Gallery - In a real implementation we would use a carousel library */}
      <div className="w-full overflow-x-auto mb-8">
        <div className="flex flex-nowrap gap-4 p-2 min-w-full">
          {images.map((image, index) => (
            <div key={index} className="flex-none w-60 h-44 relative overflow-hidden">
              <a href={image} target="_blank" rel="noopener noreferrer" className="block border-2 border-transparent hover:border-portuguesered transition-colors">
                <img 
                  src={image} 
                  alt={`Archive image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="video-container flex flex-col gap-6 w-full items-center mb-8">
        <video 
          controls 
          className="w-full max-w-md rounded-md shadow-md"
        >
          <source src="/videos/Portugueses da zona de Hamburgo comentam eliminacao da Selecao-01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <video 
          controls 
          className="w-full max-w-md rounded-md shadow-md"
        >
          <source src="/videos/Rancho Folclorico mantem viva a tradicao portuguesa em Hamburgo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

export default Archive;
