import { useState, useEffect } from "react";

const useArchiveImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const loadFirstBatchImages = () => {
      const firstBatchImages = Array.from(
        { length: 4 },
        (_, i) => `${base}images/archive/images/${i + 1}.jpg`,
      );
      setImages(firstBatchImages);
      setImagesLoaded(true);
    };

    const loadRemainingImages = () => {
      const remainingImages = Array.from(
        { length: 25 },
        (_, i) => `${base}images/archive/images/${i + 5}.jpg`,
      );
      setImages((prev) => [...prev, ...remainingImages]);
    };

    loadFirstBatchImages();
    const timer = setTimeout(loadRemainingImages, 1000);

    return () => clearTimeout(timer);
  }, [base]);

  return { images, imagesLoaded };
};

export default useArchiveImages;
