
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Optimize lazy loading with prefetch and clear naming
const App = lazy(() => import('./App'));

// Improve loading fallback with semantic class names
const LoadingFallback = () => (
  <div className="app-loading flex items-center justify-center min-h-screen bg-gray-100">
    <div className="loader w-16 h-16 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Preload strategy with requestIdleCallback for better performance
const preloadApp = () => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = '/src/App.tsx';
  document.head.appendChild(link);
};

// Render with performance optimizations
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Use requestIdleCallback for non-blocking preloading
if ('requestIdleCallback' in window) {
  (window as any).requestIdleCallback(preloadApp);
} else {
  setTimeout(preloadApp, 0);
}
