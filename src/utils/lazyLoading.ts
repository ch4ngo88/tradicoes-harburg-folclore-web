
import React from 'react';

/**
 * Lazy loading utilities for improving performance
 */

// Dynamic import function that can be used for components that aren't needed immediately
export const lazyImport = <T extends React.ComponentType<any>, I extends { [K2 in K]: T }, K extends keyof I>(
  factory: () => Promise<I>,
  name: K
): React.LazyExoticComponent<T> => {
  return React.lazy(() => factory().then((module) => ({ default: module[name] })));
};

// Load a script only when needed
export const loadScriptWhenNeeded = (src: string, id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.body.appendChild(script);
  });
};
