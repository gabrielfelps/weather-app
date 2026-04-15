import icon_search from '@/assets/images/icon-search.svg';

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <label
      htmlFor="countryInput"
      className="flex flex-1 items-center text-xl self-stretch gap-4 px-6 py-4 rounded-xl bg-neutral-800 focus-within:shadow-[0_0_0_3px_#02012C,0_0_0_5px_#fff] cursor-text transform-gpu"
    >
      <img src={icon_search} alt="Search icon" />
      <input
        className="flex-1 placeholder-neutral-200 placeholder:text-xl outline-hidden"
        type="text"
        id="countryInput"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search for a place..."
      />
    </label>
  );
}

export default SearchBar;
