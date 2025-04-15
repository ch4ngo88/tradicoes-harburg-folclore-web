
import React from "react";
import VideoCard from "./VideoCard";

interface ArchiveVideosProps {
  language: string;
}

const ArchiveVideos = ({ language }: ArchiveVideosProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Vídeos" : "Videos"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoCard
          videoSrc="/images/archive/videos/Portugueses da zona de Hamburgo comentam eliminacao da Selecao-01.mp4"
          title="Portugueses da zona de Hamburgo"
          description="Comentários sobre a Seleção"
        />
        
        <VideoCard
          videoSrc="/images/archive/videos/Rancho Folclorico mantem viva a tradicao portuguesa em Hamburgo.mp4"
          title="Rancho Folclórico"
          description="Tradição portuguesa em Hamburgo"
        />
      </div>
    </div>
  );
};

export default ArchiveVideos;
