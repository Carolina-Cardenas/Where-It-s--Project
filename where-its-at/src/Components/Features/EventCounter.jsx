import React from "react";
import useEventStore from "../../Stores/EventStore";
import "../../Styles/EventPage.css";

function EventCounter() {
  const { selectedEvent, tickets, addTicket, removeTicket } = useEventStore();

  if (!selectedEvent) return null;

  return (
    <section className="ticket-box">
      <div className="ticket-price">{selectedEvent.price} sek</div>
      <div className="ticket-counter-row">
        <div className="ticket-cell" onClick={removeTicket}>
          −
        </div>
        <div className="ticket-cell">{tickets}</div>
        <div className="ticket-cell" onClick={addTicket}>
          +
        </div>
      </div>
    </section>
  );
}

export default EventCounter;
