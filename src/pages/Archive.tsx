
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Volume2 } from "lucide-react";

// Lazy load components
const LazyCarouselContent = lazy(() => import('@/components/ui/carousel').then(module => ({ 
  default: module.CarouselContent 
})));

const Archive = () => {
  const { language } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"photos" | "audio" | "videos">(
    "photos",
  );
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load images progressively
  useEffect(() => {
    const loadFirstBatchImages = () => {
      const firstBatchImages = [
        "/images/Zeitungsartikel.jpg",
        "/images/Alt1.jpg",
        "/images/Alt2.jpg",
        "/images/Alt3.jpg",
      ];
      setImages(firstBatchImages);
      setImagesLoaded(true);
    };

    const loadRemainingImages = () => {
      const remainingImages = [
        "/images/Alt4.jpg",
        "/images/Jung1.jpg",
        "/images/Jung2.jpg",
        "/images/Jung4.jpg",
        "/images/Jung5.jpg",
        "/images/Jung8.jpg",
        "/images/mata.jpg",
        "/images/Jung9.jpg",
        "/images/Festival1.jpg",
        "/images/Festival2.jpg",
        "/images/Festival3.jpg",
        "/images/Festival4.jpg",
        "/images/Festival5.jpg",
        "/images/Neu1.jpg",
        "/images/Neu4.jpg",
        "/images/Bus.jpg",
        "/images/Neu5.jpg",
        "/images/Neu6.jpg",
      ];
      
      setImages(prev => [...prev, ...remainingImages]);
    };

    // Load first batch immediately
    loadFirstBatchImages();
    
    // Load the rest after the page has rendered
    const timer = setTimeout(loadRemainingImages, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="section-title mb-8 text-center">
        {language === "pt" ? "Arquivo" : "Archiv"}
      </h1>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "photos"
                ? "bg-white shadow-sm text-seagreen"
                : "text-gray-600 hover:text-seagreen"
            }`}
          >
            {language === "pt" ? "Fotos" : "Fotos"}
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "audio"
                ? "bg-white shadow-sm text-seagreen"
                : "text-gray-600 hover:text-seagreen"
            }`}
          >
            {language === "pt" ? "Áudio" : "Audio"}
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "videos"
                ? "bg-white shadow-sm text-seagreen"
                : "text-gray-600 hover:text-seagreen"
            }`}
          >
            {language === "pt" ? "Vídeos" : "Videos"}
          </button>
        </div>
      </div>

      {/* Photos Tab */}
      {activeTab === "photos" && (
        <div className="w-full max-w-5xl mx-auto mb-12 animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-portuguesered">
              {language === "pt" ? "Galeria de Fotos" : "Fotogalerie"}
            </h3>
            <p className="text-gray-600 mt-2">
              {language === "pt"
                ? "Clique nas imagens para ampliar"
                : "Klicken Sie auf die Bilder zum Vergrößern"}
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <Carousel className="w-full">
              {imagesLoaded ? (
                <Suspense fallback={<div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
                  <LazyCarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3 p-1"
                      >
                        <div className="photo-grid-item h-full aspect-square">
                          <a
                            href={image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                          >
                            <img
                              src={image}
                              alt={`Archive image ${index + 1}`}
                              className="gallery-photo"
                              loading="lazy"
                              width="300"
                              height="300"
                            />
                          </a>
                        </div>
                      </CarouselItem>
                    ))}
                  </LazyCarouselContent>
                </Suspense>
              ) : (
                <div className="flex justify-center items-center w-full h-64">
                  <div className="w-12 h-12 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
          </div>
        </div>
      )}

      {/* Audio Tab */}
      {activeTab === "audio" && (
        <div className="w-full max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-portuguesered">
              {language === "pt"
                ? "Entrevistas e Áudio"
                : "Interviews und Audio"}
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md bg-gradient-to-r from-seagreen/10 to-portuguesered/10 p-6 rounded-xl shadow-md mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={toggleAudio}
                    className={`p-4 rounded-full ${isAudioPlaying ? "bg-portuguesered" : "bg-seagreen"} text-white hover:opacity-90 transition-opacity`}
                  >
                    {isAudioPlaying ? (
                      <span className="block w-3 h-8 bg-white"></span>
                    ) : (
                      <Play className="w-6 h-6" fill="white" />
                    )}
                  </button>
                  <div>
                    <h4 className="font-medium">
                      Café com Leite & Pimenta Interview
                    </h4>
                    <p className="text-sm text-gray-600">2024</p>
                  </div>
                  <Volume2 className="w-6 h-6 ml-auto text-gray-400" />
                </div>

                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden relative">
                  <div
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r from-seagreen to-portuguesered rounded-full transition-all duration-300 ${isAudioPlaying ? "animate-pulse w-full" : "w-0"}`}
                  ></div>
                </div>

                <audio
                  ref={audioRef}
                  className="hidden"
                  onEnded={() => setIsAudioPlaying(false)}
                  preload="metadata"
                >
                  <source
                    src="/audio/Café com Leite & Pimenta Interview Tradicoes.mp3"
                    type="audio/mp3"
                  />
                  Your browser does not support the audio element.
                </audio>

                <p className="text-xs italic mt-4 text-center">
                  (Café com Leite & Pimenta Interview 2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <div className="w-full max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-portuguesered">
              {language === "pt" ? "Vídeos" : "Videos"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card overflow-hidden">
              <video
                controls
                className="w-full rounded-t-xl hover:scale-[1.01] transition-transform"
                poster="/images/video-thumbnail-1.jpg"
                preload="metadata"
                loading="lazy"
              >
                <source
                  src="/videos/Portugueses da zona de Hamburgo comentam eliminacao da Selecao-01.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h4 className="font-medium text-seagreen">
                  Portugueses da zona de Hamburgo
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Comentários sobre a Seleção
                </p>
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <video
                controls
                className="w-full rounded-t-xl hover:scale-[1.01] transition-transform"
                poster="/images/video-thumbnail-2.jpg"
                preload="metadata"
                loading="lazy"
              >
                <source
                  src="/videos/Rancho Folclorico mantem viva a tradicao portuguesa em Hamburgo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h4 className="font-medium text-seagreen">Rancho Folclórico</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Tradição portuguesa em Hamburgo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
