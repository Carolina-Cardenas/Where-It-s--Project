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
      <span className="ticket-price">{totalPrice} sek</span>
      <section className="ticket-counter-row">
        <button className="ticket-cell" onClick={removeTicket}>
          −
        </button>
        <span className="ticket-cell">{tickets}</span>
        <button className="ticket-cell" onClick={addTicket}>
          +
        </button>
      </section>
    </section>
  );
}

export default EventCounter;
