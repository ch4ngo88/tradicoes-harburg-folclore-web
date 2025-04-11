
import React from "react";
import AudioPlayer from "./AudioPlayer";

interface ArchiveAudioProps {
  language: string;
}

const ArchiveAudio = ({ language }: ArchiveAudioProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Entrevistas e Áudio" : "Interviews und Audio"}
        </h3>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <AudioPlayer 
            audioSrc="/audio/Café com Leite & Pimenta Interview Tradicoes.mp3"
            title="Café com Leite & Pimenta Interview"
            year="2024"
            description="(Café com Leite & Pimenta Interview 2024)"
          />
        </div>
      </div>
    </div>
  );
};

export default ArchiveAudio;
