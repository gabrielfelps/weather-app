// Temporary code to test the component layout.

function DailyForecastCard({ day, img, maxTemp, minTemp }) {
  return (
    <div className="flex flex-col px-2.5 py-4 items-center gap-4 bg-neutral-800 border border-neutral-600 rounded-xl">
      <p className="text-lg leading-[120%]">{day}</p>
      {/* look out to the "alt" property, put some icon-id from the API. Great Gemini tip */}
      <img className="w-15" src={img} alt="" />
      <div className="flex self-stretch justify-between">
        <p>{maxTemp}</p>
        <p>{minTemp}</p>
      </div>
    </div>
  );
}

export default DailyForecastCard;
