import { useState, memo, useRef, useEffect } from "react";
import { shouldPreload, shouldEagerLoad, preloadCriticalImage } from "@/lib/image-helpers";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  preload?: boolean;
}

const OptimizedImage = memo(
  ({
    src,
    alt,
    className = "",
    loading = "lazy",
    onLoad,
    preload,
  }: OptimizedImageProps): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const effectivePreload = preload ?? shouldPreload(src);
    const effectiveLoading: "lazy" | "eager" =
      loading ?? (shouldEagerLoad(src) ? "eager" : "lazy");

    const handleLoad = () => {
      setIsLoaded(true);
      if (onLoad) onLoad();
    };

    const handleError = () => {
      console.error(`Image failed to load: ${src}`);
      setHasError(true);
      if (onLoad) onLoad();
    };

    // Reset bei src-Wechsel
    useEffect(() => {
      setHasError(false);
      setIsLoaded(false);
    }, [src]);

    // Dynamisches Preload bei Bedarf
    useEffect(() => {
      if (!src || !effectivePreload || effectiveLoading !== "eager") return;

      const link = preloadCriticalImage(src);
      return () => {
        if (link?.parentNode) {
          link.parentNode.removeChild(link);
        }
      };
    }, [src, effectivePreload, effectiveLoading]);

    // Set fetchpriority für Browser
    useEffect(() => {
      if (imgRef.current) {
        imgRef.current.setAttribute(
          "fetchpriority",
          effectiveLoading === "eager" ? "high" : "auto"
        );
      }
    }, [effectiveLoading]);

    const imageSrc = !src || hasError ? "/logo.png" : src;
    const imageAlt =
      !src || hasError ? "Rancho Folclórico Tradições Portuguesas Logo" : alt;

    return (
      <img
        ref={imgRef}
        src={imageSrc}
        alt={imageAlt}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        loading={effectiveLoading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
