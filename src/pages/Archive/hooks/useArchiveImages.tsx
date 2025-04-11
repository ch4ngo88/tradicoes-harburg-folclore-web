
import { useState, useEffect } from "react";

const useArchiveImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadFirstBatchImages = () => {
      const firstBatchImages = [
        "/images/Zeitungsartikel.jpg",
        "/images/Alt1.jpg",
        "/images/Alt2.jpg",
        "/images/Alt3.jpg",
      ];
      setImages(firstBatchImages);
      setImagesLoaded(true);
    };

    const loadRemainingImages = () => {
      const remainingImages = [
        "/images/Alt4.jpg",
        "/images/Jung1.jpg",
        "/images/Jung2.jpg",
        "/images/Jung4.jpg",
        "/images/Jung5.jpg",
        "/images/Jung8.jpg",
        "/images/mata.jpg",
        "/images/Jung9.jpg",
        "/images/Festival1.jpg",
        "/images/Festival2.jpg",
        "/images/Festival3.jpg",
        "/images/Festival4.jpg",
        "/images/Festival5.jpg",
        "/images/Neu1.jpg",
        "/images/Neu4.jpg",
        "/images/Bus.jpg",
        "/images/Neu5.jpg",
        "/images/Neu6.jpg",
      ];
      
      setImages(prev => [...prev, ...remainingImages]);
    };

    // Load first batch immediately
    loadFirstBatchImages();
    
    // Load the rest after the page has rendered
    const timer = setTimeout(loadRemainingImages, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return { images, imagesLoaded };
};

export default useArchiveImages;
