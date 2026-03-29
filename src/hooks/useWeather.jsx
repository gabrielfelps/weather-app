import { useState } from 'react';

export default function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foundResults, setFoundResults] = useState(null);
  const [apiError, setApiError] = useState(false);

  async function fetchWeatherData(cityName) {
    try {
      setIsLoading(true);
      setApiError(false);
      setFoundResults(null);

      const responseGeoCoding = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`,
      );
      if (!responseGeoCoding.ok)
        throw new Error('Something went wrong with the GeoCoding API!');

      const dataGeocoding = await responseGeoCoding.json();
      if (!dataGeocoding.results) {
        setFoundResults(false);
        return;
      }

      const latitude = dataGeocoding.results[0].latitude;
      const longitude = dataGeocoding.results[0].longitude;

      const responseOpenMeteo = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
      );
      if (!responseOpenMeteo.ok)
        throw new Error('Something went wrong with the OpenMeteo API!');

      const dataOpenMeteo = await responseOpenMeteo.json();

      setWeatherData(dataOpenMeteo);
      setFoundResults(true);
    } catch (error) {
      console.error(error);
      setApiError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return { weatherData, isLoading, foundResults, apiError, fetchWeatherData };
}
