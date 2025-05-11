import React, { useEffect } from "react";
import EventCard from "../UI/EventCard";
import useEventStore from "../../Stores/EventStore";
import { useLocation } from "react-router-dom";

const EventList = ({ onSelectEvent }) => {
  const {
    events,
    fetchEvents,
    shouldResetEvents,
    resetEventsList,
    setShouldResetEvents,
  } = useEventStore();

  const location = useLocation();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (shouldResetEvents) {
      resetEventsList();
      setShouldResetEvents(false);
    }
  }, [shouldResetEvents, resetEventsList, setShouldResetEvents]);

  useEffect(() => {
    return () => {
      resetEventsList();
    };
  }, [resetEventsList]);

  return (
    <section className="event-card__container">
      <h1 className="event__title">Events</h1>
      <ul>
        {events.length === 0 && <p>No events available</p>}
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => onSelectEvent(event)}
          />
        ))}
      </ul>
    </section>
  );
};

export default EventList;
