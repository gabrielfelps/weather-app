import CurrentWeatherBoard from './CurrentWeatherBoard';
import DailyForecastList from '../weather/dailyforecast/DailyForecastList';
import HourlyForecastList from '../weather/hourlyforecast/HourlyForecastList';
import WeatherDetails from '../weather/weatherdetails/WeatherDetails';

function WeatherComponents() {
  return (
    <section className="mt-8 flex flex-col xl:flex-row gap-8 items-stretch">
      <div className="flex-1">
        <CurrentWeatherBoard />
        <WeatherDetails />
        <DailyForecastList />
      </div>
      <div className="xl:relative w-full min-h-0 xl:w-87.5 shrink-0">
        <HourlyForecastList />
      </div>
    </section>
  );
}

export default WeatherComponents;
