
import { useState, useEffect } from "react";

const useArchiveImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadFirstBatchImages = () => {
      const firstBatchImages = Array.from({ length: 4 }, (_, i) => `/images/archive/images/${i + 1}.jpg`);
      setImages(firstBatchImages);
      setImagesLoaded(true);
    };

    const loadRemainingImages = () => {
      const remainingImages = Array.from({ length: 25 }, (_, i) => `/images/archive/images/${i + 5}.jpg`);
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
