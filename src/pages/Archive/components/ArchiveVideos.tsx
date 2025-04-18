
import React from "react";
import VideoCard from "./VideoCard";
import { useLanguage } from "@/hooks/useLanguage";

const ArchiveVideos = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-portuguesered">
          {t("videos")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoCard
          videoSrc="/images/archive/videos/Portugueses da zona de Hamburgo comentam eliminacao da Selecao-01.mp4"
          title={
            <>
              Entrevista para <span className="text-[#ea384c]">A BOLA</span>
            </>
          }
          description={
            language === "pt"
              ? "Entrevista sobre como a comunidade portuguesa em Hamburgo acompanha a Seleção Nacional"
              : "Interview über die portugiesische Community in Hamburg und ihre Verbindung zur Nationalmannschaft"
          }
        />
        
        <VideoCard
          videoSrc="/images/archive/videos/Rancho Folclorico mantem viva a tradicao portuguesa em Hamburgo.mp4"
          title={
            <>
              Entrevista para <span className="text-[#ea384c]">A BOLA</span>
            </>
          }
          description={
            language === "pt"
              ? "Reportagem sobre a nossa história e a preservação da cultura portuguesa no estrangeiro"
              : "Bericht über unsere Geschichte und die Bewahrung der portugiesischen Kultur im Ausland"
          }
        />
      </div>
    </div>
  );
};

export default ArchiveVideos;
