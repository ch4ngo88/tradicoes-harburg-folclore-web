import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { prefetchResource } from "../utils/preloadManager";

interface PreloadLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  preloadResources?: Array<{ href: string; as: string; type?: string }>;
  prefetchDelay?: number; // Milliseconds to wait before prefetching
  onlyPrefetchOnHover?: boolean; // Only prefetch when user hovers
}

/**
 * Enhanced Link component that prefetches route and associated resources
 */
const PreloadLink: React.FC<PreloadLinkProps> = ({
  to,
  children,
  className,
  preloadResources = [],
  prefetchDelay = 100,
  onlyPrefetchOnHover = true,
}) => {
  const [hasPrefetched, setHasPrefetched] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  // Don't prefetch if we're already on that route
  const shouldPrefetch = to !== location.pathname && !hasPrefetched;

  const prefetchLinkedResources = () => {
    if (!shouldPrefetch) return;

    // Prefetch the route document itself
    prefetchResource(to, { as: "document" });

    // Prefetch additional resources if specified
    preloadResources.forEach((resource) => {
      prefetchResource(resource.href, {
        as: resource.as as any,
        type: resource.type,
      });
    });

    setHasPrefetched(true);
  };

  // Handle hover prefetching
  const handleMouseEnter = () => {
    if (onlyPrefetchOnHover) {
      prefetchLinkedResources();
    }
  };

  // Optionally prefetch after delay (if not hover-only)
  useEffect(() => {
    if (onlyPrefetchOnHover || !shouldPrefetch) return;

    const timer = setTimeout(() => {
      prefetchLinkedResources();
    }, prefetchDelay);

    return () => clearTimeout(timer);
  }, [to, location.pathname]);

  return (
    <Link
      ref={linkRef}
      to={to}
      className={className}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </Link>
  );
};

export default PreloadLink;
