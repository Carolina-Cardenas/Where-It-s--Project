import EventCard from "../UI/EventCard";

const EventList = ({ events, onSelectEvent }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onClick={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
};

export default EventList;
