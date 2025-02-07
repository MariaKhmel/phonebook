import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, onFilterChange }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="input"
        value={filterValue}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
