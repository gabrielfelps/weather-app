import formatDate from '../../../../utils/formatDate';
import getWeatherIcon from '../../../../utils/getWeatherIcon';

function DailyForecastCard({ date, icon, maxTemp, minTemp }) {
  return (
    <div className="flex flex-col px-2.5 py-4 items-center gap-4 bg-neutral-800 border border-neutral-600 rounded-xl min-h-[171.59px]">
      <p className="text-lg leading-[120%]">{formatDate(date)}</p>
      {/* look out to the "alt" property, put some icon-id from the API. Great Gemini tip */}
      <img
        className="size-15 object-contain"
        src={getWeatherIcon(icon)}
        alt=""
      />
      <div className="flex self-stretch justify-between">
        <p className="text-neutral-0 text-center leading-[120%]">{`${Math.floor(
          maxTemp,
        )}°`}</p>
        <p className="text-neutral-200 text-center leading-[120%]">{`${Math.floor(
          minTemp,
        )}°`}</p>
      </div>
    </div>
  );
}

export default DailyForecastCard;
