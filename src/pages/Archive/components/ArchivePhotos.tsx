import React, { useState } from "react";
import { Grid2X2, Images } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import PhotoGalleryItem from "./PhotoGalleryItem";

interface ArchivePhotosProps {
  images: string[];
  imagesLoaded: boolean;
}

const ArchivePhotos = ({ images, imagesLoaded }: ArchivePhotosProps) => {
  const [isGridView, setIsGridView] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto mb-12 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Galeria de Fotos" : "Fotogalerie"}
        </h2>
        <div className="flex items-center gap-3 bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
          <div className="flex items-center text-gray-700">
            <Images size={18} aria-hidden="true" />
            <span className="sr-only">Karussell-Ansicht</span>
          </div>
          <Switch
            checked={isGridView}
            onCheckedChange={setIsGridView}
            className="data-[state=checked]:bg-seagreen data-[state=checked]:border-seagreen focus-visible:ring-2 focus-visible:ring-seagreen"
            id="view-switch"
            aria-label={
              isGridView
                ? "Zur Karussell-Ansicht wechseln"
                : "Zur Rasteransicht wechseln"
            }
          />
          <div className="flex items-center text-gray-700">
            <Grid2X2 size={18} aria-hidden="true" />
            <span className="sr-only">Rasteransicht</span>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        {isGridView ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {imagesLoaded &&
              images.map((image, index) => (
                <PhotoGalleryItem key={index} image={image} index={index} />
              ))}
          </div>
        ) : (
          <Carousel className="w-full">
            {imagesLoaded ? (
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 p-1"
                  >
                    <PhotoGalleryItem image={image} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            ) : (
              <div className="flex justify-center items-center w-full h-64">
                <div className="w-12 h-12 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <CarouselPrevious className="left-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm focus:ring-2 focus:ring-white/50" />
            <CarouselNext className="right-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm focus:ring-2 focus:ring-white/50" />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ArchivePhotos;
