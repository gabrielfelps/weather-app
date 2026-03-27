import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

function Search() {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto md:flex-row md:justify-between lg:max-w-158">
      <SearchBar />
      <SearchButton />
    </div>
  );
}

export default Search;
