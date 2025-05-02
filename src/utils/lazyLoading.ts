import React from "react";

export const lazyImport = <
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I,
>(
  factory: () => Promise<I>,
  name: K,
): React.LazyExoticComponent<T> => {
  return React.lazy(() =>
    factory()
      .then((module) => ({ default: module[name] }))
      .catch((error) => {
        console.error(`Error loading module: ${String(name)}`, error);
        throw error;
      }),
  );
};

export const loadScriptWhenNeeded = (
  src: string,
  id: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;

    const cleanup = () => {
      script.onerror = null;
      script.onload = null;
    };

    script.onload = () => {
      cleanup();
      resolve();
    };

    script.onerror = () => {
      cleanup();
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(script);
  });
};
