import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';
import { setBaseUrl } from '@workspace/api-client-react';
import App from './App';
import './index.css';

// Configure the API base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
setBaseUrl(API_URL);

// Force dark mode by default
document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
