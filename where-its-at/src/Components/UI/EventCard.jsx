import SearchBar from "./SearchBar";
import EventList from "../Features/EventList";
import Pagination from "./Pagination";
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

      <div className="event-card__info">
        <h1 className="event-card__title">{event.name}</h1>
        {/* <p>ID: {event.id}</p> */}
        <p> {event.where}</p>
        <span className="event-card__time">
          {event.when.from} to {event.when.to}
        </span>

        <p className="event-card__price">{event.price} sek</p>

        <Link to={`/event/${event.id}`} className="event-card__button"></Link>
      </div>
    </section>
  );
}

export default EventCard;
