import { WeatherDataContext } from '@/context/WeatherDataContext';
import { useContext } from 'react';
import icon_error from '@/assets/images/icon-error.svg';
import icon_retry from '@/assets/images/icon-retry.svg';

function APIError() {
  const { fetchWeatherByButton, currentCity } = useContext(WeatherDataContext);

  return (
    <div className="flex flex-col items-center gap-6 self-stretch pt-10">
      <img className="w-10.5 h-12.5" src={icon_error} alt="" />
      <h1 className="text-center text-[52px] text-neutral-0 font-bricolage font-bold leading-[120%]">
        Something went wrong
      </h1>
      <p className="text-xl text-center text-neutral-200 leading-[120%] max-w-138.5">
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        onClick={() => fetchWeatherByButton(currentCity || 'Montreal')}
        className="flex px-4 py-3 justify-center items-center gap-2.5 rounded-lg bg-neutral-800 cursor-pointer"
      >
        <img src={icon_retry} alt="" />
        Retry
      </button>
    </div>
  );
}

export default APIError;
