import EventCard from "../UI/EventCard";

const EventList = ({ events, onSelectEvent }) => {
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
