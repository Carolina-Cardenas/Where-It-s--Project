import React, { useState } from "react";
import { useEvents } from "./Server/Api";
import EventList from "./Components/Features/EventList";
import Barcode from "./Components/UI/Barcode";

function App() {
  const { events, isLoading, error } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app-container">
      {!selectedEvent ? (
        <EventList events={events} onSelectEvent={setSelectedEvent} />
      ) : (
        <Barcode event={selectedEvent} />
      )}
    </div>
  );
}

export default App;
