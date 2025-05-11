import React, { useEffect } from "react";
import TicketCounter from "../Components/Features/EventCounter";
import "../Styles/EventPage.css";
import { useParams, useNavigate } from "react-router-dom";
import useCartStore from "../Stores/CartStore";
import useEventStore from "../Stores/EventStore";

function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchEvents, selectEvent, selectedEvent, resetAll } = useEventStore();
  const { cart, addToCart, updateTicketQuantity } = useCartStore();

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      console.log("loadData");

      await fetchEvents();
      if (mounted) selectEvent(id);
      selectEvent(id);
    };
    resetAll();
    loadData();
    return () => {
      mounted = false;
    };
  }, [fetchEvents, id, selectEvent, resetAll]);

  const cartItem = cart.find((item) => item.id === selectedEvent?.id);
  const quantity = cartItem?.quantity || 0;
  console.log("cartItem", quantity);
  return (
    <article className="event-page">
      <h1 className="event-title">Event</h1>

      {selectedEvent && (
        <section className="event-container">
          <h1 className="event-name">{selectedEvent.name}</h1>
          <p className="event-date">
            {selectedEvent.when.date} kl {selectedEvent.when.from} -{" "}
            {selectedEvent.when.to}
          </p>
          <p className="event-location">{selectedEvent.where}</p>

          <section className="ticket-box">
            <span className="ticket-price">
              {selectedEvent.price * quantity} sek
            </span>
            <section className="ticket-counter-row">
              <div
                className="ticket-cell"
                onClick={() => {
                  if (cartItem) {
                    updateTicketQuantity(selectedEvent.id, -1);
                  }
                }}
              >
                −
              </div>
              <span className="ticket-cell" aria-live="polite">
                {quantity}
              </span>
              <div
                className="ticket-cell"
                onClick={() => {
                  if (!cartItem) {
                    addToCart({ ...selectedEvent, quantity: 1 });
                  } else {
                    updateTicketQuantity(selectedEvent.id, +1);
                  }
                }}
              >
                +
              </div>
            </section>
          </section>

          <button className="add-to-cart" onClick={() => navigate("/order")}>
            Till Varukorgen
          </button>
        </section>
      )}
    </article>
  );
}

export default EventPage;
