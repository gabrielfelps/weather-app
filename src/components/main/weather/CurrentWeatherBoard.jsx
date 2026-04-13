import { useContext } from 'react';
import { WeatherDataContext } from '../../../context/WeatherDataContext';
import getWeatherIcons from '../../../utils/getWeatherIcon';

function CurrentWeatherBoard() {
  const { weatherData, isLoading, currentCity } =
    useContext(WeatherDataContext);
  if (!weatherData && !isLoading) return null;

  const apiDateString = weatherData?.current.time;
  let formattedDate = '';

  if (apiDateString) {
    const date = new Date(apiDateString);

    const formatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    formattedDate = formatter.format(date);
  }

  return (
    <div
      className={`flex flex-col md:flex-row gap-5 bg-cover bg-center bg-no-repeat ${isLoading ? 'bg-neutral-800' : 'bg-weather-board'} rounded-[20px] py-10.25 px-[25.5px] justify-center ${isLoading ? 'md:justify-center' : 'md:justify-between'} items-center md:px-6 md:py-20.75 min-h-[289.2px] md:min-h-71.5`}
    >
      {isLoading ? (
        <div className="flex flex-col items-center gap-3.5">
          <div className="flex space-x-2 justify-center items-center">
            <div className="size-3 bg-neutral-0 opacity-80 rounded-xl animate-bounce [animation-delay:-0.3s]"></div>
            <div className="size-3 bg-neutral-0 opacity-80 rounded-xl animate-bounce [animation-delay:-0.15s]"></div>
            <div className="size-3 bg-neutral-0 opacity-80 rounded-xl animate-bounce"></div>
          </div>
          <p className="text-lg leading-[120%]">Loading...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <h2 className="text-2.5xl text-center font-bold leading-[120%] text-neutral-0">
              {`${currentCity.city}, ${currentCity.country}`}
            </h2>
            <p className="text-neutral-0/80 text-lg text-center font-medium leading-[120%]">
              {formattedDate}
            </p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <img
              className="size-30"
              src={getWeatherIcons(weatherData?.current.weather_code)}
              alt=""
            />
            <p className="text-8xl italic font-semibold leading-[100%] tracking-[-1.92px] pr-4">
              {`${Math.floor(weatherData?.current.temperature_2m)}°`}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CurrentWeatherBoard;
