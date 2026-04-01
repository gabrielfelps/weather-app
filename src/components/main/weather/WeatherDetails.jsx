import DetailCard from './DetailCard';

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
        <DetailCard key={id} title={title} metrics={metrics} />
      ))}
    </div>
  );
}
