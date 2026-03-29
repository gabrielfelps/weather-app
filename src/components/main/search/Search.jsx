import { useState, useContext } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import { WeatherDataContext } from '../../../context/WeatherDataContext';

function Search() {
  const [searchQuery, setsearchQuery] = useState('');
  const { fetchWeatherData } = useContext(WeatherDataContext);

  const onSearchChange = (e) => {
    setsearchQuery(e.target.value);
  };

  const handleClick = () => {
    if (!searchQuery) return;

    fetchWeatherData(searchQuery);
  };

  return (
    <div className="flex flex-col gap-4 w-full mx-auto md:flex-row md:justify-between lg:max-w-158">
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <SearchButton onClick={handleClick} />
    </div>
  );
}

export default Search;
