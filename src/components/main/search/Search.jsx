import { useState, useContext, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import { WeatherDataContext } from '../../../context/WeatherDataContext';
import useDebounce from '../../../hooks/useDebounce';

function Search() {
  const [searchQuery, setsearchQuery] = useState('');
  const debouncedValue = useDebounce(searchQuery);
  const { fetchCitySuggestions, fetchWeatherByButton } =
    useContext(WeatherDataContext);

  useEffect(() => {
    fetchCitySuggestions(debouncedValue);
  }, [fetchCitySuggestions, debouncedValue]);

  const onSearchChange = (e) => {
    setsearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) return;

    fetchWeatherByButton(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full mx-auto md:flex-row md:justify-between lg:max-w-158"
    >
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <SearchButton />
    </form>
  );
}

export default Search;
