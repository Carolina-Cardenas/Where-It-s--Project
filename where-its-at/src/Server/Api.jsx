import { useState, useEffect } from "react";
import axios from "axios";

function FetchEventsComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://santosnr6.github.io/Data/events.json"
        );
        setEvents(response.data);
      } catch (error) {
        setError(
          `The events could not be loaded. Please try again later. ${error.message}`
        );
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return <p>Loading Event...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchEventsComponent;
