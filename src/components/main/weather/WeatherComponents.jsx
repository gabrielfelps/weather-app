import CurrentWeatherBoard from './CurrentWeatherBoard';
import DailyForescastList from './DailyForescastList';
import WeatherDetails from './WeatherDetails';

function WeatherComponents() {
  return (
    <section className="mt-8">
      <CurrentWeatherBoard />
      <WeatherDetails />
      <DailyForescastList />
    </section>
  );
}

export default WeatherComponents;
