function HourlyForecastCard({ icon, time, temp }) {
  return (
    <div className="flex px-3 py-2.5 justify-between items-center gap-2 self-stretch border border-neutral-600 rounded-lg bg-neutral-700">
      <img className="size-10 object-contain" src={icon} alt="" />
      <p className="text-xl flex-1 text-start leading-[120%]">{time}</p>
      <p className="leading-[120%]">{temp}</p>
    </div>
  );
}

export default HourlyForecastCard;
