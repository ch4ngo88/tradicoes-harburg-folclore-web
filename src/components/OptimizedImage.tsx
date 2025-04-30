import React, { useState, memo, useRef, useEffect } from 'react';

const OptimizedImage = memo(({
  src,
  alt,
  className = "",
  loading = "lazy",
  onLoad
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
}): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    console.error(`Image failed to load: ${src}`);
    setHasError(true);
    if (onLoad) onLoad();
  };

  const imageSrc = !src || hasError ? "/logo.png" : src;
  const imageAlt = !src || hasError ? "Rancho Folclórico Tradições Portuguesas Logo" : alt;

  // 👉 Direktes DOM-Setzen des fetchpriority-Attributs
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute('fetchpriority', loading === 'eager' ? 'high' : 'auto');
    }
  }, [loading]);

  return (
    <img 
      ref={imgRef}
      src={imageSrc}
      alt={imageAlt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
