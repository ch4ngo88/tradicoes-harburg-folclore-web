
import React from 'react';

// Create a picture element with WebP support
const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy"
}: {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
}): JSX.Element => {
  // Extract the base path by removing the file extension
  const getBasePath = (path: string) => {
    const lastDotIndex = path.lastIndexOf('.');
    return lastDotIndex !== -1 ? path.substring(0, lastDotIndex) : path;
  };
  
  const basePath = getBasePath(src);
  const webPSrc = `${basePath}.webp`;
  
  return (
    <picture>
      <source srcSet={webPSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        width={width} 
        height={height}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
