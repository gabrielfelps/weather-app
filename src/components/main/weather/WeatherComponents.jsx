import CurrentWeatherBoard from './CurrentWeatherBoard';
import DailyForescastList from '../weather/dailyforecast/DailyForescastList';
import HourlyForecastList from '../weather/hourlyforecast/HourlyForecastList';
import WeatherDetails from '../weather/weatherdetails/WeatherDetails';

function WeatherComponents() {
  return (
    <section className="mt-8 flex flex-col xl:flex-row gap-8 items-stretch">
      <div className="flex-1">
        <CurrentWeatherBoard />
        <WeatherDetails />
        <DailyForescastList />
      </div>
      <div className="xl:relative w-full min-h-0 xl:w-87.5 shrink-0">
        <HourlyForecastList />
      </div>
    </section>
  );
}

export default WeatherComponents;
