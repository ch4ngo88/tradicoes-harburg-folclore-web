
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ArchivePhotosProps {
  images: string[];
  imagesLoaded: boolean;
  language: string;
}

const ArchivePhotos = ({ images, imagesLoaded, language }: ArchivePhotosProps) => {
  return (
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
            <CarouselContent>
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
            </CarouselContent>
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
  );
};

export default ArchivePhotos;
