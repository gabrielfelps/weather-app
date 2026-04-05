import { createContext } from 'react';
import useWeather from '../hooks/useWeather';

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherDataContext = createContext();

export function WeatherDataProvider({ children }) {
  const {
    weatherData,
    isLoading,
    isSearchingCities,
    foundResults,
    apiError,
    citySuggestions,
    fetchCitySuggestions,
    fetchWeatherData,
    fetchWeatherByButton,
  } = useWeather();

  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        isLoading,
        isSearchingCities,
        foundResults,
        apiError,
        citySuggestions,
        fetchCitySuggestions,
        fetchWeatherData,
        fetchWeatherByButton,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}
