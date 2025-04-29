import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search/${searchString}`);
  }

  return (
    <form onSubmit={handleSearch} className="header__search-bar">
      <input
        className="header__input"
        onChange={(event) => setSearchString(event.target.value)}
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchString}
      />
      <button type="submit" className="header__form-btn">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
