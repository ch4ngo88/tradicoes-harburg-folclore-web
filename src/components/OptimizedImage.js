import { jsx as _jsx } from "react/jsx-runtime";
import { useState, memo, useRef, useEffect } from "react";
const OptimizedImage = memo(({ src, alt, className = "", loading = "lazy", onLoad, preload = false, }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);
    const handleLoad = () => {
        setIsLoaded(true);
        if (onLoad)
            onLoad();
    };
    const handleError = () => {
        console.error(`Image failed to load: ${src}`);
        setHasError(true);
        if (onLoad)
            onLoad();
    };
    // 🆕 Reset bei src-Wechsel: Wichtig!
    useEffect(() => {
        setHasError(false);
        setIsLoaded(false);
    }, [src]);
    // Preload-Logic
    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.setAttribute("fetchpriority", loading === "eager" ? "high" : "auto");
            if (preload && loading === "eager" && src) {
                const link = document.createElement("link");
                link.rel = "preload";
                link.as = "image";
                link.href = src;
                link.setAttribute("fetchpriority", "high");
                if (src.endsWith(".jpg") || src.endsWith(".jpeg")) {
                    link.type = "image/jpeg";
                }
                else if (src.endsWith(".png")) {
                    link.type = "image/png";
                }
                else if (src.endsWith(".webp")) {
                    link.type = "image/webp";
                }
                document.head.appendChild(link);
                return () => {
                    document.head.removeChild(link);
                };
            }
        }
    }, [loading, src, preload]);
    const imageSrc = !src || hasError ? "/logo.png" : src;
    const imageAlt = !src || hasError ? "Rancho Folclórico Tradições Portuguesas Logo" : alt;
    return (_jsx("img", { ref: imgRef, src: imageSrc, alt: imageAlt, className: `${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`, loading: loading, decoding: "async", onLoad: handleLoad, onError: handleError }));
});
OptimizedImage.displayName = "OptimizedImage";
export default OptimizedImage;
