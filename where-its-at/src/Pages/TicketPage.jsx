// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEvents } from "../Server/Api";
// import Barcode from "../Components/UI/Barcode";
// import "../Styles/TicketPage.css";

// function TicketPage() {
//   const { id } = useParams();
//   const { events, isLoading, error } = useEvents();

//   const selectedEvent = events.find((event) => event.id === id);

//   if (isLoading) return <p>Loading event...</p>;
//   if (error) return <p>{error}</p>;
//   if (!selectedEvent) return <p>Event not found</p>;

//   return (
//     <select className="ticket-page">
//       <Barcode event={selectedEvent} />
//     </select>
//   );
// }

// export default TicketPage;

import React from "react";
import useTicketStore from "../Stores/TicketStore";
import Barcode from "react-barcode";
import "../Styles/TicketPage.css";

function TicketPage() {
  const { ticketData } = useTicketStore();

  if (!ticketData || !ticketData.cart?.length)
    return <p>No ticket data available</p>;

  if (!ticketData.cart) return <p>Loading...</p>;

  return (
    <div className="ticket-container">
      {ticketData.cart.map((item, index) => (
        <section className="ticket" key={index}>
          <article className="ticket__header"></article>
          <h1 className="ticket__title">Ticket</h1>

          <section className="ticket__content">
            <p className="ticket__what">{item.name}</p>

            <div className="ticket__where">
              <strong>{item.where}</strong>
              <p>
                {item.locationDescription ||
                  "Göteborgs universitet. Pedagogen, hus A"}
              </p>
            </div>

            <div className="ticket__when">
              <div>
                <strong>WHEN</strong>
                <p>{item.when.date}</p>
              </div>
              <div>
                <strong>FROM</strong>
                <p>{item.when.from}</p>
              </div>
              <div>
                <strong>TO</strong>
                <p>{item.when.to}</p>
              </div>
            </div>

            <div className="ticket__info">
              <strong>INFO</strong>
              <p>
                Section C - seat {Math.floor(Math.random() * 300)}, bring
                umbrella
              </p>
            </div>
          </section>

          <section className="ticket__barcode">
            <Barcode value={`${ticketData.id}-${index}`} format="CODE128" />
            <p className="barcode-text">
              #{(ticketData.id + "-" + index).slice(-6)}
            </p>
          </section>
        </section>
      ))}
    </div>
  );
}

export default TicketPage;
