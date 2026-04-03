import CurrentWeatherBoard from './CurrentWeatherBoard';
import DailyForescastList from './DailyForescastList';
import HourlyForecastList from './HourlyForecastList';
import WeatherDetails from './WeatherDetails';

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
