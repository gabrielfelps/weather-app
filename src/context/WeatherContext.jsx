import { useState, createContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [radioOptions, setRadioOptions] = useState({
    temperature: 'celsius',
    windspeed: 'kmh',
    precipitation: 'mm',
  });

  return (
    <WeatherContext.Provider value={{ radioOptions, setRadioOptions }}>
      {children}
    </WeatherContext.Provider>
  );
}
