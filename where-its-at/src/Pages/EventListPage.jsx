import React, { useEffect } from "react";
import EventCard from "../Components/UI/EventCard";
import useEventStore from "../Stores/EventStore";
import SearchBar from "../Components/UI/SearchBar";
import "../Styles/EventListPage.css";
import EventList from "../Components/Features/EventList";
import "../Styles/SearchBar.css";
import { useNavigate } from "react-router-dom";

function EventListPage({ onSelectEvent }) {
  const {
    events,
    fetchEvents,
    // shouldResetEvents,
    // resetEventsList,
    // setShouldResetEvents,
  } = useEventStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // useEffect(() => {
  //   if (shouldResetEvents) {
  //     resetEventsList();
  //     setShouldResetEvents(false);
  //   }
  // }, [shouldResetEvents, resetEventsList, setShouldResetEvents]);

  const goToCart = () => {
    navigate("/order");
  };

  return (
    <section className="event-list-page">
      <SearchBar />

      <ul
        className="event-list-container"
        aria-label="Lista över tillgängliga evenemang"
      >
        {events.length === 0 ? (
          <p>No events available</p>
        ) : (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => onSelectEvent(event)}
            />
          ))
        )}
      </ul>
      <button className="event-list-btn" onClick={goToCart}>
        Lägg till varukorgen
      </button>
    </section>
  );
}

export default EventListPage;
