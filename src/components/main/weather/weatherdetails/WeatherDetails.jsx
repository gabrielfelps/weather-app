import DetailCard from './DetailCard';
import { WeatherDataContext } from '../../../../context/WeatherDataContext';
import { useContext } from 'react';

export default function WeatherDetails() {
  const { weatherData, isLoading } = useContext(WeatherDataContext);
  if (!weatherData && !isLoading) return null;

  const details = [
    {
      id: 1,
      title: 'Feels Like',
      metrics: `${Math.floor(weatherData?.current.apparent_temperature)}°`,
    },
    {
      id: 2,
      title: 'Humidity',
      metrics: `${Math.floor(weatherData?.current.relative_humidity_2m)}${weatherData?.current_units.relative_humidity_2m}`,
    },
    {
      id: 3,
      title: 'Wind',
      metrics: `${Math.floor(weatherData?.current.wind_speed_10m)} ${weatherData?.current_units.wind_speed_10m}`,
    },
    {
      id: 4,
      title: 'Precipitation',
      metrics: `${Math.floor(weatherData?.current.precipitation)} ${weatherData?.current_units.precipitation}`,
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
