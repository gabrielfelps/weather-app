import { createContext } from 'react';
import useWeather from '../hooks/useWeather';

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherDataContext = createContext();

export function WeatherDataProvider({ children }) {
  const { weatherData, isLoading, foundResults, apiError, fetchWeatherData } =
    useWeather();

  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        isLoading,
        foundResults,
        apiError,
        fetchWeatherData,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}
