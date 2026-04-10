import SearchCityDropdownItem from './SearchCityDropdownItem';

function SearchCityDropdown({ cities }) {
  return (
    <ul className="absolute top-full flex flex-col items-start gap-1 mt-2.5 p-2 border border-neutral-700 rounded-xl bg-neutral-800 w-full">
      {cities.map(({ name, latitude, longitude, country }) => (
        <SearchCityDropdownItem
          key={`${latitude} - ${longitude}`}
          name={name}
          complement={country}
          latitude={latitude}
          longitude={longitude}
        />
      ))}
    </ul>
  );
}

export default SearchCityDropdown;
