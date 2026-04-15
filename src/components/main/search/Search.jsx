import { useState, useContext, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import useDebounce from '@/hooks/useDebounce';
import SearchCityDropdown from './SearchCityDropdown';
import useClickOutside from '@/hooks/useClickOutside';

function Search() {
  const [searchQuery, setsearchQuery] = useState('');
  const debouncedValue = useDebounce(searchQuery);
  const {
    fetchCitySuggestions,
    citySuggestions,
    setCitySuggestions,
    fetchWeatherByButton,
  } = useContext(WeatherDataContext);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    if (citySuggestions.length > 0) setCitySuggestions([]);
  });

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
      <div ref={ref} className="relative w-full z-40">
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
        {citySuggestions.length ? (
          <SearchCityDropdown cities={citySuggestions} />
        ) : null}
      </div>
      <SearchButton />
    </form>
  );
}

export default Search;
