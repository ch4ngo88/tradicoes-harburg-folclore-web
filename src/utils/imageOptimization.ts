
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

// Generate the srcset attribute for responsive images
export const generateSrcSet = (imagePath: string): string => {
  // Extract file extension
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  
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
