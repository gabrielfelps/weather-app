import icon_search from '../../../assets/images/icon-search.svg';

function SearchBar() {
  return (
    <div className="flex flex-1 items-center text-xl self-stretch gap-4 px-6 py-4 rounded-xl bg-neutral-800 focus-within:shadow-[0_0_0_3px_#02012C,0_0_0_5px_#fff] transform-gpu">
      <img src={icon_search} alt="Search icon" />
      <input
        className="placeholder-neutral-200 placeholder:text-xl outline-hidden"
        type="text"
        placeholder="Search for a place..."
      />
    </div>
  );
}

export default SearchBar;
