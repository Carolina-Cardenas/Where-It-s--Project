import React from "react";
import useEventStore from "../../Stores/EventStore";
import "../../Styles/EventPage.css";

function EventCounter() {
  const { selectedEvent, tickets, addTicket, removeTicket } = useEventStore();

  if (!selectedEvent || !selectedEvent.price) return null;

  const pricePerTicket = Number(selectedEvent.price);
  const totalPrice = pricePerTicket * tickets;

  return (
    <section className="ticket-box">
      <div className="ticket-price">{totalPrice} sek</div>
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
