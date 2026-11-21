import {createRoot} from 'react-dom/client';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/400-italic.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const win = window as unknown as { __PATNA_BOOT_TIMER__?: number };
if (typeof win.__PATNA_BOOT_TIMER__ === 'number') {
  window.clearTimeout(win.__PATNA_BOOT_TIMER__);
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
