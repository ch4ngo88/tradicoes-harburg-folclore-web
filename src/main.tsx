
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Use lazy loading for the main App component - without file extension
const App = lazy(() => import('./App'));

// Simple loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9]">
    <div className="w-16 h-16 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Get the root element
const rootElement = document.getElementById('root');

// Check if we already have a root before creating a new one
let root;
if (rootElement) {
  // Create root only if it doesn't exist yet
  // This helps prevent the "container has already been passed to createRoot()" warning
  root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </React.StrictMode>
  );
}
