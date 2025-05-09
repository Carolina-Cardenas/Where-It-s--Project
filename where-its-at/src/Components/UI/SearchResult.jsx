import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSearchStore } from "../../Stores/SearchStore";
import EventCard from "../UI/EventCard";
import "../../Styles/SearchResult.css";

function SearchResults() {
  const { query } = useParams();
  const { searchResults, searchEvents, isLoading, error } = useSearchStore();

  useEffect(() => {
    if (query) {
      searchEvents(query);
    }
  }, [query, searchEvents]);

  return (
    <section className="search-results__container">
      <h1 className="search-titel">Resultat </h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {searchResults.length > 0 ? (
        <div className="event-list-container">
          {searchResults.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        !isLoading && <p>Inga resultat hittades.</p>
      )}
    </section>
  );
}

export default SearchResults;
