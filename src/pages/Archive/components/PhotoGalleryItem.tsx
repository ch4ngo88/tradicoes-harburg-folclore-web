
import React from "react";

interface PhotoGalleryItemProps {
  image: string;
  index: number;
}

const PhotoGalleryItem = ({ image, index }: PhotoGalleryItemProps) => {
  return (
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
  );
};

export default PhotoGalleryItem;
