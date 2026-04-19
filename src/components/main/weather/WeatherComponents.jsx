import { useContext } from 'react';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import CurrentWeatherBoard from './CurrentWeatherBoard';
import DailyForecastList from '../weather/dailyforecast/DailyForecastList';
import HourlyForecastList from '../weather/hourlyforecast/HourlyForecastList';
import WeatherDetails from '../weather/weatherdetails/WeatherDetails';
import NoResults from '../NoResults';

function WeatherComponents() {
  const { foundResults } = useContext(WeatherDataContext);

  return (
    <section className="mt-8 flex flex-col xl:flex-row gap-8 items-stretch">
      {!foundResults ? (
        <NoResults />
      ) : (
        <>
          <div className="flex-1">
            <CurrentWeatherBoard />
            <WeatherDetails />
            <DailyForecastList />
          </div>
          <div className="xl:relative w-full min-h-0 xl:w-87.5 shrink-0">
            <HourlyForecastList />
          </div>
        </>
      )}
    </section>
  );
}

export default WeatherComponents;
