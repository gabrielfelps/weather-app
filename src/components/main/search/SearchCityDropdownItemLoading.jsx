function SearchBarDropdownItemLoading({ icon }) {
  return (
    <div className="flex px-2 py-2.5 gap-2.5">
      <img className="animate-spin" src={icon} alt="" />
      <p>Search in progress</p>
    </div>
  );
}

export default SearchBarDropdownItemLoading;
