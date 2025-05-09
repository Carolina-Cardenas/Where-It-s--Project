import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/SearchBar.css";

function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search/${searchString}`);
  }

  return (
    <section className="searchbar">
      <h1 className="search-list-title">Event</h1>
      <form onSubmit={handleSearch} className="header__search-bar">
        <input
          className="header__input"
          onChange={(event) => setSearchString(event.target.value)}
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchString}
        />
      </form>
    </section>
  );
}

export default SearchBar;
