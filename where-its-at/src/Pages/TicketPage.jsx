import React from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "./server/Api";
import BarcodeComponent from "../components/Barcode";

function TicketPage() {
  const { id } = useParams();
  const { events, isLoading, error } = useEvents();

  const selectedEvent = events.find((event) => event.id === id);

  if (isLoading) return <p>Loading event...</p>;
  if (error) return <p>{error}</p>;
  if (!selectedEvent) return <p>Event not found</p>;

  return (
    <div className="ticket-page">
      <BarcodeComponent event={selectedEvent} />
    </div>
  );
}

export default TicketPage;
