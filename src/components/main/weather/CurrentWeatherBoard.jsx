// Temporary code to test the component layout.
import weatherIcon from '../../../assets/images/icon-sunny.webp';

function CurrentWeatherBoard() {
  return (
    <div className="flex flex-col gap-5 bg-cover bg-center bg-no-repeat bg-weather-board rounded-[20px] py-10.25 px-[25.5px] md:flex-row md:justify-between items-center md:px-6 md:py-20.75">
      <div className="flex flex-col items-center gap-3 shrink-0">
        <h2 className="text-2.5xl text-center font-bold leading-[120%] text-neutral-0">
          Berlin, Germany
        </h2>
        <p className="text-neutral-0/80 text-lg text-center font-medium leading-[120%]">
          Tuesday, Aug 5, 2025
        </p>
      </div>

      <div className="flex justify-start items-center gap-5">
        <img className="size-30" src={weatherIcon} alt="" />
        <p className="text-8xl italic font-semibold leading-[100%] tracking-[-1.92px] pr-4">
          68°
        </p>
      </div>
    </div>
  );
}

export default CurrentWeatherBoard;
