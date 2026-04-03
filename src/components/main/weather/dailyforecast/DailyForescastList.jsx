// Temporary code to test the component layout.
import DailyForecastCard from './DailyForecastCard';
import tue from '../../../../assets/images/icon-rain.webp';
import wed from '../../../../assets/images/icon-drizzle.webp';
import thu from '../../../../assets/images/icon-sunny.webp';
import fri from '../../../../assets/images/icon-partly-cloudy.webp';
import sat from '../../../../assets/images/icon-storm.webp';
import sun from '../../../../assets/images/icon-snow.webp';
import mon from '../../../../assets/images/icon-fog.webp';

const weekDaysWeather = [
  {
    id: 1,
    day: 'Tue',
    maxTemp: '68°',
    minTemp: '57°',
    img: tue,
  },
  {
    id: 2,
    day: 'Wed',
    maxTemp: '70°',
    minTemp: '59',
    img: wed,
  },
  {
    id: 3,
    day: 'Thu',
    maxTemp: '75°',
    minTemp: '57°',
    img: thu,
  },
  {
    id: 4,
    day: 'Fri',
    maxTemp: '77°',
    minTemp: '55°',
    img: fri,
  },
  {
    id: 5,
    day: 'Sat',
    maxTemp: '70°',
    minTemp: '59°',
    img: sat,
  },
  {
    id: 6,
    day: 'Sun',
    maxTemp: '77°',
    minTemp: '61°',
    img: sun,
  },
  {
    id: 7,
    day: 'Mon',
    maxTemp: '75°',
    minTemp: '59°',
    img: mon,
  },
];

function DailyForescastList() {
  return (
    <div className="mt-8 flex flex-col gap-5">
      <h2 className="text-xl font-semibold leading-[120%]">Daily forecast</h2>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {weekDaysWeather.map(({ id, day, maxTemp, minTemp, img }) => (
          <DailyForecastCard
            key={id}
            day={day}
            maxTemp={maxTemp}
            minTemp={minTemp}
            img={img}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyForescastList;
