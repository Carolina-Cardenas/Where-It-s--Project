import Barcode from "react-barcode";

const BarcodeComponent = ({ event }) => {
  if (!event) return <p>No event selected</p>;

  return (
    <div className="barcode-wrapper">
      <h2>{event.name}</h2>
      <p>
        {event.when.date} at {event.where}
      </p>
      <Barcode value={event.id} format="CODE128" />
    </div>
  );
};

export default BarcodeComponent;
