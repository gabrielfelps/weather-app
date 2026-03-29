import { useState, createContext, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [radioOptions, setRadioOptions] = useState(() => {
    const savedUserSettings = localStorage.getItem('weatherUnits');

    if (!savedUserSettings) {
      return {
        temperature: 'celsius',
        windspeed: 'kmh',
        precipitation: 'mm',
      };
    }

    return JSON.parse(savedUserSettings);
  });

  useEffect(() => {
    const userSettings = JSON.stringify(radioOptions);
    localStorage.setItem('weatherUnits', userSettings);
  }, [radioOptions]);

  return (
    <PreferencesContext.Provider value={{ radioOptions, setRadioOptions }}>
      {children}
    </PreferencesContext.Provider>
  );
}
