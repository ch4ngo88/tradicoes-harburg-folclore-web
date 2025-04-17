
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
  const [hasError, setHasError] = useState(false);
  
  // Extract the base path and extension
  const getBasePath = (path: string) => {
    const lastDotIndex = path.lastIndexOf('.');
    return {
      base: lastDotIndex !== -1 ? path.substring(0, lastDotIndex) : path,
      ext: lastDotIndex !== -1 ? path.substring(lastDotIndex + 1).toLowerCase() : ''
    };
  };
  
  const { base, ext } = getBasePath(src);
  
  // Only create WebP alternative if the source is not already WebP
  const webPSrc = ext !== 'webp' ? `${base}.webp` : src;
  
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    console.error(`Image failed to load: ${src}`);
    setHasError(true);
    // Still trigger onLoad to remove placeholder
    if (onLoad) onLoad();
  };

  // Use fallback image if original has error
  const actualSrc = hasError ? "/images/logo.jpg" : src;
  const actualWebPSrc = hasError ? "/images/logo.webp" : webPSrc;

  return (
    <picture>
      {/* Only use WebP source if not already using WebP format */}
      {ext !== 'webp' && <source srcSet={actualWebPSrc} type="image/webp" />}
      <img 
        src={actualSrc} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} 
        width={width} 
        height={height}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </picture>
  );
};

export default OptimizedImage;
