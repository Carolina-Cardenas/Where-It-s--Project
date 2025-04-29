import React, { useState, useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import axios from "axios";

const TicketBarcodeGenerator = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [barcodeData, setBarcodeData] = useState("");
  const barcodeRef = useRef(null);

  useEffect(() => {
    const apiUrl = "https://santosnr6.github.io/Data/events.json";

    axios
      .get(apiUrl)
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching events: ", error);
      });
  }, []);

  const generateTicketBarcode = () => {
    if (!selectedEvent) {
      alert("Please select an event.");
      return;
    }

    const eventDetails = `${selectedEvent.name}-${selectedEvent.when.date}-${selectedEvent.price}-${selectedEvent.id}`;
    setBarcodeData(eventDetails);
  };

  useEffect(() => {
    if (barcodeData.trim() === "") return;
    JsBarcode(barcodeRef.current, barcodeData, {
      format: "EAN13",
      lineColor: "#0aa",
      width: 2,
      height: 100,
      displayValue: true,
    });
  }, [barcodeData]);

  return (
    <section>
      <h1>Concert Ticket Barcode Generator</h1>
      <section>
        <label>Select an event:</label>
        <select
          onChange={(e) =>
            setSelectedEvent(
              events.find((event) => event.id === e.target.value)
            )
          }
        >
          <option value="">Select an event</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name} - {event.when.date}
            </option>
          ))}
        </select>
      </section>

      <button onClick={generateTicketBarcode}>Generate Barcode</button>
      <section style={{ marginTop: "20px" }}>
        {barcodeData && <svg ref={barcodeRef}></svg>}
      </section>
    </section>
  );
};

export default TicketBarcodeGenerator;
