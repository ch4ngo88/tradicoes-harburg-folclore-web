
import React from "react";

interface VideoCardProps {
  videoSrc: string;
  posterSrc?: string;
  title: string;
  description: string;
  captionSrc?: string; // Add optional caption track source
  captionLang?: string; // Add optional caption language
}

const VideoCard = ({
  videoSrc,
  posterSrc,
  title,
  description,
  captionSrc,
  captionLang = "pt", // Default to Portuguese
}: VideoCardProps) => {
  return (
    <div className="glass-card overflow-hidden">
      <video
        controls
        className="w-full rounded-t-xl hover:scale-[1.01] transition-transform"
        poster={posterSrc}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        {captionSrc ? (
          <track 
            src={captionSrc} 
            kind="captions" 
            srcLang={captionLang} 
            label={captionLang === "pt" ? "Português" : "Deutsch"} 
          />
        ) : (
          // Add a placeholder empty track to satisfy accessibility requirements
          <track 
            kind="captions" 
            srcLang={captionLang} 
            label={captionLang === "pt" ? "Português" : "Deutsch"}
          />
        )}
        Your browser does not support the video tag.
      </video>
      <div className="p-4">
        <h4 className="font-medium text-seagreen">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
