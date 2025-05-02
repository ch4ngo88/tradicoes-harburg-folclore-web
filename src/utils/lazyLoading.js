import React from "react";
export const lazyImport = (factory, name) => {
    return React.lazy(() => factory()
        .then((module) => ({ default: module[name] }))
        .catch((error) => {
        console.error(`Error loading module: ${String(name)}`, error);
        throw error;
    }));
};
export const loadScriptWhenNeeded = (src, id) => {
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
