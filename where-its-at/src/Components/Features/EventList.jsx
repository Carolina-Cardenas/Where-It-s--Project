import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EventCard from "../UI/EventCard";
import PaginationDots from "../UI/PaginationDots";

function SearchPage() {
  const [searchEvent, setSearchEvent] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 3;

  const { searchedString } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://santosnr6.github.io/Data/events.json"
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching events:", error);
        throw new Error("Failed to fetch events");
      }
    };

    const filterEvents = (events, query) => {
      return events.filter((event) =>
        event.name.toLowerCase().includes(query.toLowerCase())
      );
    };

    const loadSearchResults = async () => {
      setIsLoading(true);
      setError(null);
      setSearchEvent([]);

      try {
        const events = await fetchEvents();
        const filtered = filterEvents(events, searchedString);

        if (filtered.length === 0) {
          setError("No results found");
        } else {
          setSearchEvent(filtered);
          setCurrentPage(0);
        }
      } catch (error) {
        console.error("Search error:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchedString) {
      loadSearchResults();
    }
  }, [searchedString]);

  const totalPages = Math.ceil(searchEvent.length / eventsPerPage);
  const currentEvents = searchEvent.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage
  );

  if (isLoading) return <p className="no-match">Searching for event...</p>;
  if (error) return <p className="no-match error">{error}</p>;

  return (
    <div className="event-list">
      {currentEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationDots
        total={totalPages}
        current={currentPage}
        onDotClick={setCurrentPage}
      />
    </div>
  );
}

export default SearchPage;
