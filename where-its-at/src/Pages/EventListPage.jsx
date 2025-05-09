import React, { useEffect } from "react";
import EventCard from "../Components/UI/EventCard";
import useEventStore from "../Stores/EventStore";
import SearchBar from "../Components/UI/SearchBar";
import "../Styles/EventListPage.css";
import EventList from "../Components/Features/EventList";
import "../Styles/SearchBar.css";
import { useNavigate } from "react-router-dom";

function EventListPage() {
  const { events, fetchEvents } = useEventStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const goToCart = () => {
    navigate("/order");
  };

  return (
    <section className="event-list-page">
      <SearchBar />

      <div className="event-list-container">
        {events.length === 0 ? (
          <p>No events available</p>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
      <button className="event-list-btn" onClick={goToCart}>
        Lägg till varukorgen
      </button>
    </section>
  );
}

export default EventListPage;
