
import React, { useState } from "react";
import { Grid2X2, View } from "lucide-react";
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
  const { t, language } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto mb-12 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Galeria de Fotos" : "Fotogalerie"}
        </h3>
        <div className="flex items-center gap-2">
          <View className="w-4 h-4" />
          <Switch
            checked={isGridView}
            onCheckedChange={setIsGridView}
            className="data-[state=checked]:bg-seagreen"
          />
          <Grid2X2 className="w-4 h-4" />
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        {isGridView ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {imagesLoaded && images.map((image, index) => (
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
            <CarouselPrevious className="left-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm" />
            <CarouselNext className="right-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm" />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ArchivePhotos;
