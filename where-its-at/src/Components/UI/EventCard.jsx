import Counter from " ./Counter";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

function EventCard() {
  return (
    <section className="event-card">
      <article className="event-card__date">
        <p>
          {event.when.date} — {event.when.from} to {event.when.to}
        </p>
      </article>
      <div className="event-card__info">
        <h1 className="event-title">Event</h1>
        <h3 className="event-card__title">{event.title}</h3>
        <p>{event.id}</p>
        <p>{event.name}</p>
        <p>{event.where}</p>
        <p>{event.price}sek </p>

        <p className="event-card__price">{event.price} sek</p>
        <Link to={`/event/${event.id}`} className="event-card__button">
          View Details
        </Link>
      </div>
    </section>
  );
}

export default EventCard;
