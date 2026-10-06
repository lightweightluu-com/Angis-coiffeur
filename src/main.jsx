import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App.jsx';

// Der Service Worker wird von vite-plugin-pwa automatisch registriert (registerType: 'autoUpdate').
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
