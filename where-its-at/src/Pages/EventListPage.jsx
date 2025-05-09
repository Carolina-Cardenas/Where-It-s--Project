import React, { useEffect } from "react";
import EventCard from "../Components/UI/EventCard";
import useEventStore from "../Stores/EventStore";
import SearchBar from "../Components/UI/SearchBar";
import "../Styles/EventListPage.css";
import EventList from "../Components/Features/EventList";
import "../Styles/SearchBar.css";
// import "../Styles/EventListPage.css";

function EventListPage() {
  const { events, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

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
    </section>
  );
}

export default EventListPage;
