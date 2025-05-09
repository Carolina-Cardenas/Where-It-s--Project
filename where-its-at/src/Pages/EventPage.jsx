// import React, { useEffect } from "react";
// import TicketCounter from "../Components/Features/EventCounter";
// import "../Styles/EventPage.css";
// import { useParams } from "react-router-dom";
// import useCartStore from "../Stores/CartStore";
// import useEventStore from "../Stores/EventStore";
// import { useNavigate } from "react-router-dom";

// function EventPage() {
//   const { id } = useParams();
//   const { fetchEvents, selectEvent, selectedEvent } = useEventStore();
//   const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadData = async () => {
//       await fetchEvents();
//       selectEvent(id);
//     };

//     loadData();
//   }, [fetchEvents, id, selectEvent]);

//   console.log("📦 selectedEvent:", selectedEvent);

//   useEffect(() => {
//     if (selectedEvent && tickets > 0) {
//       addToCart({ ...selectedEvent, quantity: tickets });
//       // navigate("/order");
//     }
//   }, [selectedEvent, tickets, addToCart, navigate]);

//   return (
//     <section className="event-page">
//       <h1 className="event-title">Event</h1>
//       <p className="event-description"></p>

//       {selectedEvent && (
//         <section className="event-container">
//           <h2 className="event-name">{selectedEvent.name}</h2>
//           <p className="event-date">
//             {selectedEvent.when.date} kl {selectedEvent.when.from} -{" "}
//             {selectedEvent.when.to}
//           </p>
//           <p className="event-location">{selectedEvent.where}</p>
//           <TicketCounter />
//           <button
//             className="add-to-cart"
//             onClick={() => {
//               addToCart({ ...selectedEvent, quantity: tickets });
//               navigate("/order");
//             }}
//           >
//             Lägg i varukorgen
//           </button>
//         </section>
//       )}
//     </section>
//   );
// }

// export default EventPage;

import React, { useEffect } from "react";
import TicketCounter from "../Components/Features/EventCounter";
import "../Styles/EventPage.css";
import { useParams, useNavigate } from "react-router-dom";
import useCartStore from "../Stores/CartStore";
import useEventStore from "../Stores/EventStore";

function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchEvents, selectEvent, selectedEvent } = useEventStore();
  const { cart, addToCart, updateTicketQuantity } = useCartStore();

  useEffect(() => {
    const loadData = async () => {
      await fetchEvents();
      selectEvent(id);
    };
    loadData();
  }, [fetchEvents, id, selectEvent]);

  useEffect(() => {
    if (selectedEvent && !cart.find((item) => item.id === selectedEvent.id)) {
      addToCart({ ...selectedEvent, quantity: 1 });
    }
  }, [selectedEvent, cart, addToCart]);

  const cartItem = cart.find((item) => item.id === selectedEvent?.id);
  const quantity = cartItem?.quantity || 1;

  return (
    <section className="event-page">
      <h1 className="event-title">Event</h1>

      {selectedEvent && (
        <section className="event-container">
          <h2 className="event-name">{selectedEvent.name}</h2>
          <p className="event-date">
            {selectedEvent.when.date} kl {selectedEvent.when.from} -{" "}
            {selectedEvent.when.to}
          </p>
          <p className="event-location">{selectedEvent.where}</p>

          <section className="ticket-box">
            <div className="ticket-price">
              {selectedEvent.price * quantity} sek
            </div>
            <div className="ticket-counter-row">
              <div
                className="ticket-cell"
                onClick={() => updateTicketQuantity(selectedEvent.id, -1)}
              >
                −
              </div>
              <div className="ticket-cell">{quantity}</div>
              <div
                className="ticket-cell"
                onClick={() => updateTicketQuantity(selectedEvent.id, +1)}
              >
                +
              </div>
            </div>
          </section>

          <button className="add-to-cart" onClick={() => navigate("/order")}>
            Lägg i varukorgen
          </button>
        </section>
      )}
    </section>
  );
}

export default EventPage;
