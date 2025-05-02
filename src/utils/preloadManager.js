/**
 * Utility for managing preloads and prefetches in the application
 */
import React from "react";
/**
 * Dynamically preload a resource
 * @param href URL of the resource to preload
 * @param options Preload options
 */
export const preloadResource = (href, options) => {
    // Check if this resource is already being preloaded
    const existingPreload = document.querySelector(`link[rel="preload"][href="${href}"]`);
    if (existingPreload) {
        return existingPreload;
    }
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = options.as;
    if (options.type)
        link.setAttribute("type", options.type);
    if (options.crossOrigin)
        link.setAttribute("crossorigin", options.crossOrigin);
    if (options.media)
        link.setAttribute("media", options.media);
    if (options.fetchPriority)
        link.setAttribute("fetchpriority", options.fetchPriority);
    document.head.appendChild(link);
    return link;
};
/**
 * Dynamically prefetch a resource for future use
 * @param href URL of the resource to prefetch
 * @param options Prefetch options
 */
export const prefetchResource = (href, options) => {
    // Check if this resource is already being prefetched
    const existingPrefetch = document.querySelector(`link[rel="prefetch"][href="${href}"]`);
    if (existingPrefetch) {
        return existingPrefetch;
    }
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = href;
    link.as = options.as;
    if (options.type)
        link.setAttribute("type", options.type);
    if (options.crossOrigin)
        link.setAttribute("crossorigin", options.crossOrigin);
    document.head.appendChild(link);
    return link;
};
/**
 * Prefetch an image that will be needed soon but not immediately
 * @param src Image URL to prefetch
 */
export const prefetchImage = (src) => {
    prefetchResource(src, { as: "image" });
};
/**
 * Preload an image that is needed immediately (above the fold)
 * @param src Image URL to preload
 * @param priority Whether this is a high priority image
 */
export const preloadImage = (src, priority = "auto") => {
    const imageType = src.endsWith(".jpg") || src.endsWith(".jpeg")
        ? "image/jpeg"
        : src.endsWith(".png")
            ? "image/png"
            : src.endsWith(".webp")
                ? "image/webp"
                : undefined;
    const preloadOptions = {
        as: "image",
        fetchPriority: priority,
    };
    if (imageType) {
        preloadOptions.type = imageType;
    }
    preloadResource(src, preloadOptions);
};
/**
 * Create a React hook to preload assets when a component mounts
 */
export const usePagePreload = (resources) => {
    React.useEffect(() => {
        // Clean up function to remove preloads when component unmounts
        const links = [];
        resources.forEach((resource) => {
            const link = preloadResource(resource.href, resource.options);
            links.push(link);
        });
        return () => {
            // Remove preloads when the component unmounts
            links.forEach((link) => {
                if (link && link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            });
        };
    }, [resources]);
};
/**
 * Intelligently preload resources needed for a specific route
 * @param route The route that will be navigated to
 */
export const preloadRoute = (route) => {
    // This function would be expanded based on route analysis
    // For now, we'll just prefetch the route document
    prefetchResource(route, { as: "document" });
};
