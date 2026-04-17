import getWeatherIcon from '@/utils/getWeatherIcon';
import HourlyForecastCard from './HourlyForecastCard';
import HourlyForecastSelect from './HourlyForecastSelect';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import { useContext, useState } from 'react';
import HourlyForecastSkeletonCard from './HourlyForecastSkeletonCard';

function HourlyForecastList() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const { weatherData, isLoading } = useContext(WeatherDataContext);
  const start = selectedDayIndex * 24;
  const end = start + 24;

  const hourlyWeatherList = weatherData?.hourly.time
    .slice(start, end)
    .map((hourString, i) => {
      const indexPosition = start + i;

      const dateObj = new Date(hourString);

      const formattedHour = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: true,
      }).format(dateObj);

      const icon = getWeatherIcon(
        weatherData.hourly.weather_code[indexPosition],
      );

      return {
        id: hourString,
        icon: icon,
        time: formattedHour,
        temp: `${Math.floor(weatherData.hourly.temperature_2m[indexPosition])}°`,
      };
    });

  return (
    <div className="flex flex-col items-start gap-4 px-4 py-5 bg-neutral-800 rounded-[20px] h-171.25 md:h-125 xl:h-full min-h-0 xl:absolute xl:inset-0">
      <div className="flex justify-between items-center self-stretch shrink-0">
        <h2 className="text-xl font-semibold leading-[120%]">
          Hourly forecast
        </h2>
        <HourlyForecastSelect
          selectedDayIndex={selectedDayIndex}
          setSelectedDayIndex={setSelectedDayIndex}
        />
      </div>

      <div className="flex flex-col flex-1 self-stretch gap-4 overflow-y-auto scrollbar-hidden">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <HourlyForecastSkeletonCard key={i} />
            ))
          : hourlyWeatherList?.map(({ id, icon, time, temp }) => (
              <HourlyForecastCard
                key={id}
                icon={icon}
                time={time}
                temp={temp}
              />
            ))}
      </div>
    </div>
  );
}

export default HourlyForecastList;
