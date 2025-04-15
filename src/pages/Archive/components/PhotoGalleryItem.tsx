import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import React from "react";

interface PhotoGalleryItemProps {
  image: string;
  index: number;
}

const PhotoGalleryItem = ({ image, index }: PhotoGalleryItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="photo-grid-item h-full aspect-square cursor-pointer">
          <img
            src={image}
            alt={`Archive image ${index + 1}`}
            className="gallery-photo w-full h-full object-cover rounded-md"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <img
          src={image}
          alt={`Archive image ${index + 1}`}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGalleryItem;
