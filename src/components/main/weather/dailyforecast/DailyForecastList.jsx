import { useContext } from 'react';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import { PreferencesContext } from '@/context/PreferencesContext';
import { celsiusToFahrenheit } from '@/utils/unitConverter';
import DailyForecastCard from './DailyForecastCard';
import DailyForecastSkeletonCard from './DailyForecastSkeletonCard';

function DailyForecastList() {
  const { weatherData, isLoading } = useContext(WeatherDataContext);
  const { isMetricSystem } = useContext(PreferencesContext);

  const weekDaysWeather = weatherData?.daily.time.map((date, i) => ({
    id: i,
    date: date,
    maxTemp: isMetricSystem
      ? `${Math.floor(weatherData.daily.temperature_2m_max[i])}°`
      : `${Math.floor(celsiusToFahrenheit(weatherData.daily.temperature_2m_max[i]))}°`,
    minTemp: isMetricSystem
      ? `${Math.floor(weatherData.daily.temperature_2m_min[i])}°`
      : `${Math.floor(celsiusToFahrenheit(weatherData.daily.temperature_2m_min[i]))}°`,
    icon: weatherData.daily.weather_code[i],
  }));

  return (
    <div className="mt-8 flex flex-col gap-5">
      <h2 className="text-xl font-semibold leading-[120%]">Daily forecast</h2>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {isLoading
          ? Array.from({ length: 7 }).map((_, i) => (
              <DailyForecastSkeletonCard key={i} />
            ))
          : weekDaysWeather?.map(({ id, date, maxTemp, minTemp, icon }) => (
              <DailyForecastCard
                key={id}
                date={date}
                maxTemp={maxTemp}
                minTemp={minTemp}
                icon={icon}
              />
            ))}
      </div>
    </div>
  );
}

export default DailyForecastList;
