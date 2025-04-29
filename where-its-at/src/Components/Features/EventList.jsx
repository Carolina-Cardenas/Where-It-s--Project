import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EventCard from "../UI/EventCard";

function SearchPage() {
  const [searchEvent, setSearchEvent] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { searchedString } = useParams();

  useEffect(() => {
    const fetchSearchEventResults = async () => {
      setIsLoading(true);
      setError(null);
      setSearchEvent([]);

      try {
        const response = await axios.get(
          "https://santosnr6.github.io/Data/events.json"
        );

        const filteredEvents = response.data.filter((event) =>
          event.name.toLowerCase().includes(searchedString.toLowerCase())
        );

        if (filteredEvents.length === 0) {
          setError("No results found");
        } else {
          setSearchEvent(filteredEvents);
        }
      } catch (error) {
        setError("Something went wrong while fetching events");
        console.error(`Fetch error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchedString) {
      fetchSearchEventResults();
    }
  }, [searchedString]);

  if (isLoading) {
    return (
      <div className="no-match">
        <p>Searching for event...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="no-match error">
        <p>{error}</p>
      </div>
    );
  }

  if (searchEvent.length === 0) {
    return (
      <div className="no-match">
        <p>No events found</p>
      </div>
    );
  }

  return (
    <div className="event-list">
      {searchEvent.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default SearchPage;
