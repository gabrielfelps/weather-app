import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

function Search() {
  const [searchQuery, setsearchQuery] = useState('');

  const onSearchChange = (e) => {
    setsearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 w-full mx-auto md:flex-row md:justify-between lg:max-w-158">
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <SearchButton />
    </div>
  );
}

export default Search;
