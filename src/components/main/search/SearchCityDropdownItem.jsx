import { useContext } from 'react';
import { WeatherDataContext } from '@/context/WeatherDataContext';

function SearchCityDropdownItem({ name, complement, latitude, longitude }) {
  const { fetchWeatherData, setCurrentCity } = useContext(WeatherDataContext);

  const handleClick = () => {
    setCurrentCity({ city: name, country: complement });
    fetchWeatherData(latitude, longitude);
  };

  return (
    <li
      className="flex items-center gap-2.5 self-stretch px-2 py-2.5 border border-transparent rounded-lg hover:bg-neutral-700 hover:border-neutral-600 cursor-pointer"
      onClick={handleClick}
    >
      {name}, {complement}
    </li>
  );
}

export default SearchCityDropdownItem;
