import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
  year: string;
  description?: string;
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const AudioPlayer = ({ audioSrc, title, year, description }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const onLoadedMetadata = () => setDuration(audioRef.current?.duration || 0);
      audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        audioRef.current?.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }
  }, []);

  return (
    <div className="w-full max-w-md bg-gradient-to-r from-seagreen/10 to-portuguesered/10 p-6 rounded-xl shadow-md mb-6">
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={toggleAudio}
          className={`p-4 rounded-full ${
            isAudioPlaying ? "bg-portuguesered" : "bg-seagreen"
          } text-white`}
        >
          {isAudioPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" fill="white" />
          )}
        </button>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-gray-600">{year}</p>
        </div>
      </div>

      {/* Volume horizontal unterhalb */}
      <div className="flex items-center gap-2 mb-4 mt-2">
        <Volume2 className="w-4 h-4 text-seagreen" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full accent-seagreen appearance-none bg-seagreen/20 h-1 rounded-full 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:bg-seagreen 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-3"
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 w-12 text-right">{formatTime(progress)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
          step="0.1"
          onChange={handleSeek}
          className="w-full accent-seagreen appearance-none bg-seagreen/20 h-1 rounded-full 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:bg-seagreen 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-3"
        />
        <span className="text-sm text-gray-600 w-12">{formatTime(duration)}</span>
      </div>

      <audio
        ref={audioRef}
        className="hidden"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsAudioPlaying(false)}
        preload="metadata"
      >
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {description && (
        <p className="text-xs italic mt-4 text-center">Hamburg Radio FSK 93,0 MHz Antenne </p>
      )}
    </div>
  );
};

export default AudioPlayer;
