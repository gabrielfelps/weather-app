import { useContext } from 'react';
import SearchCityDropdownItem from './SearchCityDropdownItem';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import icon_loading from '@/assets/images/icon-loading.svg';
import SearchBarDropdownItemLoading from './SearchCityDropdownItemLoading';

function SearchCityDropdown({ cities }) {
  const { isSearchingCities } = useContext(WeatherDataContext);

  if (!isSearchingCities && cities.length === 0) {
    return null;
  }

  return (
    <ul className="absolute top-full flex flex-col items-start gap-1 mt-2.5 p-2 border border-neutral-700 rounded-xl bg-neutral-800 w-full">
      {isSearchingCities ? (
        <SearchBarDropdownItemLoading icon={icon_loading} />
      ) : (
        cities.map(({ name, latitude, longitude, country }) => (
          <SearchCityDropdownItem
            key={`${latitude} - ${longitude}`}
            name={name}
            complement={country}
            latitude={latitude}
            longitude={longitude}
          />
        ))
      )}
    </ul>
  );
}

export default SearchCityDropdown;
