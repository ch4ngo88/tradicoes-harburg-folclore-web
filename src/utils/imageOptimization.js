/**
 * Helper functions for image optimization
 */
// Image sizes for responsive loading
export const imageSizes = {
    thumbnail: { width: 200, height: 150 },
    small: { width: 400, height: 300 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 900 },
};
// Generate the srcset attribute for responsive images with WebP support
export const generateSrcSet = (imagePath, useWebP = true) => {
    // Extract file extension
    const extension = imagePath.split(".").pop();
    const basePath = imagePath.substring(0, imagePath.lastIndexOf("."));
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
export const generateSizes = () => {
    return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
};
// Function to determine if an image should be eager loaded
export const shouldEagerLoad = (imagePath) => {
    // List of critical images that should be eager loaded
    const criticalImages = ["gruppe.jpg", "gruppe.webp", "logo.png", "logo.webp"];
    return criticalImages.some((img) => imagePath.includes(img));
};
// Function to determine if an image should be preloaded
export const shouldPreload = (imagePath) => {
    // Only preload critical above-the-fold images that are visible immediately
    // This is a more restrictive list than shouldEagerLoad
    const preloadImages = ["gruppe.jpg"];
    return preloadImages.some((img) => imagePath.includes(img));
};
// Get image type based on file extension
export const getImageType = (src) => {
    if (src.endsWith(".jpg") || src.endsWith(".jpeg"))
        return "image/jpeg";
    if (src.endsWith(".png"))
        return "image/png";
    if (src.endsWith(".webp"))
        return "image/webp";
    if (src.endsWith(".gif"))
        return "image/gif";
    if (src.endsWith(".svg"))
        return "image/svg+xml";
    return undefined;
};
// Create a preload link for a critical image
export const preloadCriticalImage = (src) => {
    if (!src || !shouldPreload(src))
        return null;
    // Check if we already have a preload for this image
    const existingPreload = document.querySelector(`link[rel="preload"][href="${src}"]`);
    if (existingPreload)
        return existingPreload;
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = src;
    link.as = "image";
    link.setAttribute("fetchpriority", "high");
    const imageType = getImageType(src);
    if (imageType)
        link.type = imageType;
    document.head.appendChild(link);
    return link;
};
