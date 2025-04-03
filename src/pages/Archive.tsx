
import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

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
        
        <div className="my-4 bg-white/80 p-6 rounded-lg shadow-md">
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

      {/* Photo Gallery */}
      <div className="w-full max-w-3xl mb-12">
        <h3 className="text-xl font-bold text-portuguesered mb-4 text-center">
          {language === 'pt' ? 'Galeria de Fotos' : 'Fotogalerie'}
        </h3>
        
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <a 
                    href={image} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block overflow-hidden rounded-lg border border-slate-200 hover:border-portuguesered transition-all duration-300"
                  >
                    <img
                      src={image}
                      alt={`Archive image ${index + 1}`}
                      className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>

      {/* Videos */}
      <div className="w-full max-w-3xl mb-8">
        <h3 className="text-xl font-bold text-portuguesered mb-4 text-center">
          {language === 'pt' ? 'Vídeos' : 'Videos'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 p-3 rounded-lg shadow-md">
            <video 
              controls 
              className="w-full rounded-md shadow-inner"
            >
              <source src="/videos/Portugueses da zona de Hamburgo comentam eliminacao da Selecao-01.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="bg-white/80 p-3 rounded-lg shadow-md">
            <video 
              controls 
              className="w-full rounded-md shadow-inner"
            >
              <source src="/videos/Rancho Folclorico mantem viva a tradicao portuguesa em Hamburgo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
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
