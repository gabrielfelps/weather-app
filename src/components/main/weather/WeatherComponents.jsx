import CurrentWeatherBoard from './CurrentWeatherBoard';
import DailyForescastList from '../weather/dailyforecast/DailyForescastList';
import HourlyForecastList from '../weather/hourlyforecast/HourlyForecastList';
import WeatherDetails from '../weather/weatherdetails/WeatherDetails';

function WeatherComponents() {
  return (
    <section className="mt-8">
      <CurrentWeatherBoard />
      <WeatherDetails />
      <DailyForescastList />
      <HourlyForecastList />
    </section>
  );
}

export default WeatherComponents;
