
import { useState, useEffect } from "react";

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Preconnect and preload critical resources
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectGoogle);
    
    // Add a short timeout to ensure smooth transition
    const timer = setTimeout(() => setIsLoading(false), 200);
    
    // Lazy load non-critical resources
    const lazyLoad = () => {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      lazyImages.forEach(img => {
        (img as HTMLImageElement).loading = "lazy";
      });
    };
    
    if (document.readyState === 'complete') {
      lazyLoad();
    } else {
      window.addEventListener('load', lazyLoad);
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', lazyLoad);
    };
  }, []);

  return { isLoading };
};
