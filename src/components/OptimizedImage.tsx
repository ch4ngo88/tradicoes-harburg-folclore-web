import React, { useState } from 'react';

const OptimizedImage = ({
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

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Image failed to load: ${src}`);
    setHasError(true);
    if (onLoad) onLoad();
  };

  if (!src || hasError) {
    src = "/images/logo.jpg"; // fallback
  }

  return (
    <img 
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default OptimizedImage;
