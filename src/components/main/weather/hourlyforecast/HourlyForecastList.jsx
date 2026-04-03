// Temporary code to test the component layout.
import HourlyForecastCard from './HourlyForecastCard';
import sunny from '../../../../assets/images/icon-sunny.webp';
import partly_cloudy from '../../../../assets/images/icon-partly-cloudy.webp';
import snow from '../../../../assets/images/icon-snow.webp';
import fog from '../../../../assets/images/icon-fog.webp';
import overcast from '../../../../assets/images/icon-overcast.webp';
import HourlyForecastSelect from './HourlyForecastSelect';

const hourlyForecast = [
  {
    id: 1,
    img: overcast,
    hour: '3 PM',
    temp: '68°',
  },
  {
    id: 2,
    img: partly_cloudy,
    hour: '4 PM',
    temp: '68°',
  },
  {
    id: 3,
    img: sunny,
    hour: '5 PM',
    temp: '68°',
  },
  {
    id: 4,
    img: overcast,
    hour: '6 PM',
    temp: '66°',
  },
  {
    id: 5,
    img: snow,
    hour: '7 PM',
    temp: '66°',
  },
  {
    id: 6,
    img: fog,
    hour: '8 PM',
    temp: '64°',
  },
  {
    id: 7,
    img: snow,
    hour: '9 PM',
    temp: '63°',
  },
  {
    id: 8,
    img: overcast,
    hour: '10 PM',
    temp: '63°',
  },
];

function HourlyForecastList() {
  return (
    <div className="flex flex-col items-start gap-4 px-4 py-5 bg-neutral-800 rounded-[20px] h-full min-h-0 xl:absolute xl:inset-0">
      <div className="flex justify-between items-center self-stretch shrink-0">
        <h2 className="text-xl font-semibold leading-[120%]">
          Hourly forecast
        </h2>
        <HourlyForecastSelect />
      </div>

      <div className="flex flex-col flex-1 self-stretch gap-4 overflow-y-auto scrollbar-hidden">
        {hourlyForecast.map(({ id, img, hour, temp }) => (
          <HourlyForecastCard key={id} img={img} hour={hour} temp={temp} />
        ))}
      </div>
    </div>
  );
}

export default HourlyForecastList;
