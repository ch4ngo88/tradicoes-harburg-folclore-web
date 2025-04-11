
import React from "react";

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
        <div className="glass-card overflow-hidden">
          <video
            controls
            className="w-full rounded-t-xl hover:scale-[1.01] transition-transform"
            poster="/images/video-thumbnail-1.jpg"
            preload="metadata"
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
  );
};

export default ArchiveVideos;
