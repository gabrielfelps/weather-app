import { useState, createContext, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [isMetricSystem, setIsMetricSystem] = useState(() => {
    const savedUserSettings = localStorage.getItem('isMetric');
    return savedUserSettings !== null ? JSON.parse(savedUserSettings) : true;
  });

  useEffect(() => {
    localStorage.setItem('isMetric', isMetricSystem);
  }, [isMetricSystem]);

  const toggleUnitSystem = () => {
    setIsMetricSystem((prev) => !prev);
  };

  return (
    <PreferencesContext.Provider value={{ isMetricSystem, toggleUnitSystem }}>
      {children}
    </PreferencesContext.Provider>
  );
}
