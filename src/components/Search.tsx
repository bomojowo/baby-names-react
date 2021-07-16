import "./Search.css";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ setSearch }: SearchProps): JSX.Element {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
