import { useContext } from 'react';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import { PreferencesContext } from '@/context/PreferencesContext';
import { celsiusToFahrenheit, kmhToMph, mmToInch } from '@/utils/unitConverter';
import DetailCard from './DetailCard';

export default function WeatherDetails() {
  const { weatherData, isLoading } = useContext(WeatherDataContext);
  const { isMetricSystem } = useContext(PreferencesContext);
  if (!weatherData && !isLoading) return null;

  const details = [
    {
      id: 1,
      title: 'Feels Like',
      metrics: isMetricSystem
        ? `${Math.floor(weatherData?.current.apparent_temperature)}°`
        : `${Math.floor(celsiusToFahrenheit(weatherData?.current.apparent_temperature))}°`,
    },
    {
      id: 2,
      title: 'Humidity',
      metrics: `${Math.floor(weatherData?.current.relative_humidity_2m)}%`,
    },
    {
      id: 3,
      title: 'Wind',
      metrics: isMetricSystem
        ? `${Math.floor(weatherData?.current.wind_speed_10m)} km/h`
        : `${Math.floor(kmhToMph(weatherData?.current.wind_speed_10m))} mph`,
    },
    {
      id: 4,
      title: 'Precipitation',
      metrics: isMetricSystem
        ? `${Math.floor(weatherData?.current.precipitation)} mm`
        : `${Math.floor(mmToInch(weatherData?.current.precipitation))} in`,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
      {details.map(({ id, title, metrics }) => (
        <DetailCard
          key={id}
          title={title}
          metrics={metrics}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
