import React from "react";
import Barcode from "react-barcode";

const BarcodeComponent = ({ event }) => {
  if (!event || !event.id) return <p>No event selected</p>;

  return (
    <section className="ticket">
      <article className="ticket__header" />
      <h1 className="ticket__title">Ticket</h1>
      <p className="">{event.name}</p>
      <p>
        {event.when.date} at {event.where}
      </p>
      <Barcode value={event.id} format="CODE128" />
    </section>
  );
};

export default BarcodeComponent;
