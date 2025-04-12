
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
  const basePath = src.substring(0, src.lastIndexOf('.'));
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
