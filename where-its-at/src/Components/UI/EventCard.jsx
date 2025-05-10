import { Link } from "react-router-dom";
import "../../Styles/EventCard.css";

function EventCard({ event }) {
  if (!event || !event.when) return null;

  const [dayStr, monthStr] = event.when.date.split(" ");

  return (
    <section className="event-card">
      <article className="event-card__date-box">
        <span className="event-card__date">
          <span className="event-card__date-text">
            {`${dayStr} ${monthStr.slice(0, 3).toUpperCase()}`}
          </span>
        </span>
      </article>

      <section className="event-card__info">
        <Link to={`/event/${event.id}`} className="event-card__button">
          <p className="event-card__title">{event.name}</p>
          <p> {event.where}</p>
          <span className="event-card__time">
            {event.when.from} to {event.when.to}
          </span>
          <p className="event-card__price">{event.price} sek</p>
        </Link>
      </section>
    </section>
  );
}

export default EventCard;
