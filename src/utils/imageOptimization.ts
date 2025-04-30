
/**
 * Helper functions for image optimization
 */

// Image sizes for responsive loading
export const imageSizes = {
  thumbnail: { width: 200, height: 150 },
  small: { width: 400, height: 300 },
  medium: { width: 800, height: 600 },
  large: { width: 1200, height: 900 }
};

// Generate the srcset attribute for responsive images with WebP support
export const generateSrcSet = (imagePath: string, useWebP: boolean = true): string => {
  // Extract file extension
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  
  if (useWebP) {
    return `
      ${basePath}-400w.webp 400w,
      ${basePath}-800w.webp 800w,
      ${basePath}-1200w.webp 1200w
    `.trim();
  }
  
  return `
    ${basePath}-400w.${extension} 400w,
    ${basePath}-800w.${extension} 800w,
    ${basePath}-1200w.${extension} 1200w
  `.trim();
};

// Generate sizes attribute for responsive images
export const generateSizes = (): string => {
  return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
};

// Create a picture element with WebP support - exported as a type definition since we can't use JSX in .ts files
export type PictureElementProps = {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
};

// Function to determine if an image should be eager loaded
export const shouldEagerLoad = (imagePath: string): boolean => {
  // List of critical images that should be eager loaded
  const criticalImages = [
    'gruppe.jpg',
    'gruppe.webp',
    'logo.png',
    'logo.webp'
  ];
  
  return criticalImages.some(img => imagePath.includes(img));
};
