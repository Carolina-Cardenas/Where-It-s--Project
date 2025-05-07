import React, { useEffect } from "react";
import TicketCounter from "../Components/Features/EventCounter";
import "../Styles/EventPage.css";
import { useParams } from "react-router-dom";
// import useCartStore from "../Stores/CartStore";
import useEventStore from "../Stores/EventStore";

function EventPage() {
  const { id } = useParams();
  const { fetchEvents, selectEvent, selectedEvent } = useEventStore();
  // const { cart, addToCart, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    const loadData = async () => {
      await fetchEvents();
      selectEvent(id);
    };

    loadData();
  }, [fetchEvents, id, selectEvent]);

  console.log("📦 selectedEvent:", selectedEvent);

  return (
    <section className="event-page">
      <h1 className="event-title">Event</h1>
      <p className="event-description"></p>

      {selectedEvent && (
        <section className="event-container">
          <h2 className="event-name">{selectedEvent.name}</h2>
          <p className="event-date">
            {selectedEvent.when.date} kl {selectedEvent.when.from} -{" "}
            {selectedEvent.when.to}
          </p>
          <p className="event-location">{selectedEvent.where}</p>
          <TicketCounter />
          <button className="add-to-cart">Lägg i varukorgen</button>
        </section>
      )}
    </section>
  );
}

export default EventPage;
