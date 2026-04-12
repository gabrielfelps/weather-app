import { useCallback, useEffect, useState } from 'react';

export default function useWeather() {
  const [isSearchingCities, setIsSearchingCities] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foundResults, setFoundResults] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState({ city: '', country: '' });

  const fetchCitySuggestions = useCallback(async (city) => {
    if (!city.trim()) {
      setCitySuggestions([]);
      return;
    }

    try {
      setIsSearchingCities(true);

      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=4&language=en&format=json`,
      );
      if (!response.ok)
        throw new Error('Something went wrong with the GeoCoding API!');

      const { results } = await response.json();
      if (!results) {
        setFoundResults(false);
        setCitySuggestions([]);
        return;
      }

      const data = results.map(
        ({ name, latitude, longitude, country, admin1 }) => ({
          name,
          latitude,
          longitude,
          country,
          admin1,
        }),
      );

      setCitySuggestions(data);
      setFoundResults(true);
    } catch (error) {
      console.error(error);
      setApiError(true);
    } finally {
      setIsSearchingCities(false);
    }
  }, []);

  async function fetchWeatherData(lat, lon) {
    try {
      setIsLoading(true);
      setApiError(false);
      setCitySuggestions([]);

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
      );
      if (!response.ok)
        throw new Error('Something went wrong with the OpenMeteo API!');

      const data = await response.json();

      setWeatherData(data);
      setFoundResults(true);
    } catch (error) {
      console.error(error);
      setApiError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchWeatherByButton(city) {
    try {
      setCitySuggestions([]);
      setIsLoading(true);
      setApiError(false);

      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
      );
      if (!response.ok)
        throw new Error('Something went wrong with the GeoCoding API!');

      const { results } = await response.json();
      if (!results) {
        setFoundResults(false);
        return;
      }

      const lat = results[0].latitude;
      const lon = results[0].longitude;
      const cityName = results[0].name;
      const countryName = results[0].country;

      await fetchWeatherData(lat, lon);
      setCurrentCity({ city: cityName, country: countryName });
    } catch (error) {
      console.error(error);
      setApiError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherData(45.49902, -73.59793);
    setCurrentCity({ city: 'Montreal', country: 'Canada' });
  }, []);

  return {
    weatherData,
    isLoading,
    isSearchingCities,
    foundResults,
    apiError,
    citySuggestions,
    fetchCitySuggestions,
    fetchWeatherData,
    fetchWeatherByButton,
    setCitySuggestions,
    currentCity,
    setCurrentCity,
  };
}
