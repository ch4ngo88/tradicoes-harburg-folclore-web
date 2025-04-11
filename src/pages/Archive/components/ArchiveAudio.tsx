
import React, { useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

interface ArchiveAudioProps {
  language: string;
}

const ArchiveAudio = ({ language }: ArchiveAudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

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
    <div className="w-full max-w-3xl mx-auto mb-12 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Entrevistas e Áudio" : "Interviews und Audio"}
        </h3>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md bg-gradient-to-r from-seagreen/10 to-portuguesered/10 p-6 rounded-xl shadow-md mb-6">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={toggleAudio}
                className={`p-4 rounded-full ${
                  isAudioPlaying ? "bg-portuguesered" : "bg-seagreen"
                } text-white hover:opacity-90 transition-opacity`}
              >
                {isAudioPlaying ? (
                  <span className="block w-3 h-8 bg-white"></span>
                ) : (
                  <Play className="w-6 h-6" fill="white" />
                )}
              </button>
              <div>
                <h4 className="font-medium">Café com Leite & Pimenta Interview</h4>
                <p className="text-sm text-gray-600">2024</p>
              </div>
              <Volume2 className="w-6 h-6 ml-auto text-gray-400" />
            </div>

            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden relative">
              <div
                className={`absolute left-0 top-0 h-full bg-gradient-to-r from-seagreen to-portuguesered rounded-full transition-all duration-300 ${
                  isAudioPlaying ? "animate-pulse w-full" : "w-0"
                }`}
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
  );
};

export default ArchiveAudio;
