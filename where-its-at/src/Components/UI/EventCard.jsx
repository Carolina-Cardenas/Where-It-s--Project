import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Counter from "./Counter";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  if (!event || !event.when) return null;

  return (
    <section className="event-card">
      <article className="event-card__date">
        <p>
          {event.when.date} — {event.when.from} to {event.when.to}
        </p>
      </article>
      <div className="event-card__info">
        <h1 className="event-title">Event</h1>
        <h3 className="event-card__title">{event.title || event.name}</h3>
        <p>ID: {event.id}</p>
        <p>Name: {event.name}</p>
        <p>Location: {event.where}</p>
        <p className="event-card__price">{event.price} sek</p>

        <Link to={`/event/${event.id}`} className="event-card__button">
          View Details
        </Link>
      </div>
    </section>
  );
}

export default EventCard;
