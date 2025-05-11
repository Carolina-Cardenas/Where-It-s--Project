import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    if (!searchString.trim()) return;
    navigate(`/search/${searchString}`);
  }

  return (
    <section className="searchbar">
      <h1 className="search-list-title">Event</h1>
      <form onSubmit={handleSearch} className="header__search-bar">
        <label htmlFor="search-input" className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            id="search-input"
            className="header__input"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
          />
        </label>
        <button
          className="search-button"
          type="submit"
          aria-label="Search"
        ></button>
      </form>
    </section>
  );
}

export default SearchBar;
