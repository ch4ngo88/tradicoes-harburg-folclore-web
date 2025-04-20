
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Optimize lazy loading with prefetch
const App = lazy(() => import('./App.tsx'));

// Optimize the loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9]">
    <div className="w-16 h-16 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Preload the App component after initial render
const preloadApp = () => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = '/src/App.tsx';
  document.head.appendChild(link);
};

// Render with optimized settings
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);

// Preload App component after initial render
requestIdleCallback(() => preloadApp());
