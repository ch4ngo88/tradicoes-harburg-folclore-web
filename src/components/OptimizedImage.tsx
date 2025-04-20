
import React, { useState, memo } from 'react';

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

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    console.error(`Image failed to load: ${src}`);
    setHasError(true);
    if (onLoad) onLoad();
  };

  const imageSrc = !src || hasError ? "/images/logo.jpg" : src;
  const imageAlt = !src || hasError ? "Rancho Folclórico Tradições Portuguesas Logo" : alt;

  return (
    <img 
      src={imageSrc}
      alt={imageAlt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      fetchPriority={loading === "eager" ? "high" : "auto"}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
