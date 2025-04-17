
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Use lazy loading for the main App component
const App = lazy(() => import('./App.tsx'));

// Simple loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9]">
    <div className="w-16 h-16 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Render the app directly without using data URIs that might get preloaded incorrectly
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
