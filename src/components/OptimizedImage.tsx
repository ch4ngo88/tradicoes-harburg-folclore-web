import {
  useState,
  memo,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { preloadCriticalImage } from "@/lib/image-helpers";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  /** Nur true setzen, wenn wirklich LCP‑relevant (Above‑the‑fold) */
  preload?: boolean;
  onLoad?: () => void;
  /**
   * Legt fest, wie weit vorm Viewport (px) der Preload‑Trigger feuern darf.
   * Standard = 200 px; 0 = erst wenn im Viewport.
   */
  preloadOffset?: number;
}

/* --- 🔧  ONE‑TIME REGISTRY FÜR PRELOADETE SRCs ------------------- */
const preloadedSrcs = new Set<string>();

const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  preload = false,
  preloadOffset = 200,
  onLoad,
}: OptimizedImageProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  /** Hält Timeout‑ und Observer‑Instanzen */
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cleanupRef = useRef<() => void>(() => void 0);
  const timeoutRef = useRef<number>();

  /* -------------------- Reset bei neuem src --------------------- */
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  /* ---------------- Intelligent Preload ------------------------- */
  useLayoutEffect(() => {
    const el = imgRef.current;
    if (!preload || !src || !el || loading !== "eager") return;

    // Wenn diese URL schon einmal preloaded wurde: sofort raus
    if (preloadedSrcs.has(src)) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          // ① Link anlegen
          const link = preloadCriticalImage(src);
          preloadedSrcs.add(src);

          // ② Link entfernen, sobald Bild geladen (oder Timeout)
          cleanupRef.current = () => {
            link?.parentNode?.removeChild(link);
            window.clearTimeout(timeoutRef.current);
          };
          timeoutRef.current = window.setTimeout(cleanupRef.current, 5000);

          observerRef.current?.disconnect();
        }
      },
      { rootMargin: `${preloadOffset}px` }
    );

    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
      cleanupRef.current();
    };
  }, [src, preload, preloadOffset, loading]);

  /* ------------- Priority Hints für moderne Browser ------------- */
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const priority = loading === "eager" ? "high" : "auto";
    el.setAttribute("fetchpriority", priority);
    // draft‑Spec (Chrome ≥ 125) – harm‑free, falls nicht unterstützt
    el.setAttribute("importance", priority);
  }, [loading]);

  /* ---------------------- Handler ------------------------------- */
  const handleLoad = () => {
    setIsLoaded(true);
    cleanupRef.current(); // Preload‑Link aufräumen
    onLoad?.();
  };
  const handleError = () => {
    console.error(`Image failed to load: ${src}`);
    setHasError(true);
    cleanupRef.current(); // sicherheitshalber
    onLoad?.();
  };

  /* ---------------------- Render -------------------------------- */
  const imageSrc = !src || hasError ? "/logo.png" : src;
  const imageAlt =
    !src || hasError ? "Rancho Folclórico Tradições Portuguesas Logo" : alt;

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={imageAlt}
      className={`${className} ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      loading={loading}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
});

export default OptimizedImage;



