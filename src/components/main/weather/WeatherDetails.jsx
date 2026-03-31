// Temporary code to test the component layout.
const details = [
  { id: 1, title: 'Feels Like', metrics: '18°' },
  { id: 2, title: 'Humidity', metrics: '46%' },
  { id: 3, title: 'Wind', metrics: '14km/h' },
  { id: 4, title: 'Precipitation', metrics: '0mm' },
];

export default function WeatherDetails() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
      {details.map(({ id, title, metrics }) => (
        <div
          className="flex flex-col p-5 items-start gap-6 bg-neutral-800 border border-neutral-600 rounded-xl"
          key={id}
        >
          <p className="text-neutral-200 text-center text-lg font-medium leading-[120%]">
            {title}
          </p>
          <p className="text-[2rem] font-light leading-[120%]">{metrics}</p>
        </div>
      ))}
    </div>
  );
}
