import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Lazy load App component
const App = lazy(() => import("./App"));

// Loading fallback
const LoadingFallback = () => (
  <div className="app-loading flex items-center justify-center min-h-screen bg-[#f9f9f9]">
    <div className="loader w-16 h-16 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Mount React app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Prefetch critical routes with correct base URL
if ("requestIdleCallback" in window) {
  window.requestIdleCallback(() => {
    const base = import.meta.env.BASE_URL || "/";
    const routesToPrefetch = [
      "activities",
      "archive",
      "contact",
      "membros",
    ];

    routesToPrefetch.forEach((route) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = `${base}${route}`;
      link.as = "document";
      document.head.appendChild(link);
    });
  });
}
