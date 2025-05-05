import React from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../Server/Api";
import Barcode from "../Components/UI/Barcode";
import "../Styles/TicketPage.css";

function TicketPage() {
  const { id } = useParams();
  const { events, isLoading, error } = useEvents();

  const selectedEvent = events.find((event) => event.id === id);

  if (isLoading) return <p>Loading event...</p>;
  if (error) return <p>{error}</p>;
  if (!selectedEvent) return <p>Event not found</p>;

  return (
    <select className="ticket-page">
      <Barcode event={selectedEvent} />
    </select>
  );
}

export default TicketPage;
