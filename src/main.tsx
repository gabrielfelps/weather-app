import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { PreferencesProvider } from './context/PreferencesContext.jsx';
import { WeatherDataProvider } from './context/WeatherDataContext.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherDataProvider>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </WeatherDataProvider>
  </StrictMode>,
);
