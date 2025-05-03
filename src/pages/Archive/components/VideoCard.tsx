import React from "react";

interface VideoCardProps {
  videoSrc: string;
  title: React.ReactNode;
  description: string;
}

const VideoCard = ({ videoSrc, title, description }: VideoCardProps) => {
  const isAbsolute = videoSrc.startsWith("http");
  const fullSrc = isAbsolute
    ? videoSrc
    : `${import.meta.env.BASE_URL}${videoSrc.replace(/^\/+/, "")}`;

  return (
    <div className="glass-card overflow-hidden">
      <video
        controls
        className="w-full rounded-t-xl hover:scale-[1.01] transition-transform"
        preload="metadata"
      >
        <source src={fullSrc} type="video/mp4" />
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
