import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { prefetchResource } from "../utils/preloadManager";
function isValidResourceType(type) {
    return ["script", "style", "font", "image", "document"].includes(type);
}
/**
 * Enhanced Link component that prefetches route and associated resources
 */
const PreloadLink = ({ to, children, className, preloadResources = [], prefetchDelay = 100, onlyPrefetchOnHover = true, }) => {
    const [hasPrefetched, setHasPrefetched] = useState(false);
    const linkRef = useRef(null);
    const location = useLocation();
    const shouldPrefetch = to !== location.pathname && !hasPrefetched;
    const prefetchLinkedResources = () => {
        if (!shouldPrefetch)
            return;
        prefetchResource(to, { as: "document" });
        preloadResources.forEach((resource) => {
            prefetchResource(resource.href, {
                as: resource.as,
                ...(isValidResourceType(resource.type) ? { type: resource.type } : {}),
            });
        });
        setHasPrefetched(true);
    };
    const handleMouseEnter = () => {
        if (onlyPrefetchOnHover) {
            prefetchLinkedResources();
        }
    };
    useEffect(() => {
        if (onlyPrefetchOnHover || !shouldPrefetch)
            return;
        const timer = setTimeout(() => {
            prefetchLinkedResources();
        }, prefetchDelay);
        return () => clearTimeout(timer);
    }, [to, location.pathname]);
    return (_jsx(Link, { ref: linkRef, to: to, className: className, onMouseEnter: handleMouseEnter, children: children }));
};
export default PreloadLink;
