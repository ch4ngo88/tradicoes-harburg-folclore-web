
import React, { useState } from 'react';

// Improved picture element with WebP support and loading state
const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
  onLoad
}: {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
}): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Extract the base path by removing the file extension
  const getBasePath = (path: string) => {
    const lastDotIndex = path.lastIndexOf('.');
    return lastDotIndex !== -1 ? path.substring(0, lastDotIndex) : path;
  };
  
  const basePath = getBasePath(src);
  const webPSrc = `${basePath}.webp`;
  
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <picture>
      <source srcSet={webPSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} 
        width={width} 
        height={height}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
      />
    </picture>
  );
};

export default OptimizedImage;
