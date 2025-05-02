import { jsx as _jsx } from "react/jsx-runtime";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Define a properly structured lazy loading for App
const App = lazy(() => import("./App"));
// Improved loading fallback with semantic class names
const LoadingFallback = () => (_jsx("div", { className: "app-loading flex items-center justify-center min-h-screen bg-[#f9f9f9]", children: _jsx("div", { className: "loader w-16 h-16 border-4 border-seagreen border-t-transparent rounded-full animate-spin" }) }));
// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(App, {}) }) }));
// Use requestIdleCallback for prefetching non-critical routes
if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
        // Prefetch other important routes that users might navigate to
        const routesToPrefetch = [
            "/activities",
            "/archive",
            "/contact",
            "/membros",
        ];
        routesToPrefetch.forEach((route) => {
            const link = document.createElement("link");
            link.rel = "prefetch";
            link.href = route;
            link.as = "document";
            document.head.appendChild(link);
        });
    });
}
