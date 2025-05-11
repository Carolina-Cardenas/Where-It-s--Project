import { useEffect, useRef, useState } from "react";
import useTicketStore from "../Stores/TicketStore";
import useCartStore from "../Stores/CartStore";
import useEventStore from "../Stores/EventStore";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import Barcode from "react-barcode";
import "../Styles/TicketPage.css";

function TicketPage() {
  const { ticketData, clearTicketData } = useTicketStore();
  const [showConfetti, setShowConfetti] = useState(true);
  const [width, height] = useWindowSize();
  const { clearCart } = useCartStore();
  const { clearTicket: clearEventTickets } = useEventStore();

  const [localTicketData, setLocalTicketData] = useState(null);

  useEffect(() => {
    if (ticketData && !localTicketData) {
      setLocalTicketData(ticketData);
      clearTicketData();
      clearCart();
      clearEventTickets?.();
    }
    setTimeout(() => setShowConfetti(false), 5000);
  }, [
    ticketData,
    clearTicketData,
    clearCart,
    clearEventTickets,
    localTicketData,
  ]);

  const generateRandomSection = () => {
    const letters = "ABCDEFG";

    return letters[Math.floor(Math.random() * letters.length)];
  };

  const generateRandomStartSeat = () => Math.floor(Math.random() * 300);

  if (!localTicketData) {
    return (
      <section className="ticket-container">
        <h2>Tack för ditt köp.</h2>
        <p>Dina biljetter har bearbetats.</p>
      </section>
    );
  }

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
          style={{ zIndex: 9999, position: "fixed", top: 0, left: 0 }}
        />
      )}
      <section className="ticket-container">
        {localTicketData.cart.map((item) => {
          const randomSection = generateRandomSection();
          const randomStartSeat = generateRandomStartSeat();

          return Array.from({ length: item.quantity }).map((_, index) => {
            const seat = randomStartSeat + index;

            return (
              <article className="ticket" key={`${item.id}-${index}`}>
                <header className="ticket__header" />

                <section className="ticket__content">
                  <h2 className="ticket__what" aria-label="Event Name">
                    {item.name}
                  </h2>

                  <section className="ticket__where" aria-label="Ubicación">
                    <strong>{item.where}</strong>
                    <p>
                      {item.locationDescription ||
                        "Göteborgs universitet. Pedagogen, hus A"}
                    </p>
                  </section>

                  <section className="ticket__when" aria-label="Horario">
                    <section>
                      <strong>WHEN</strong>
                      <time dateTime={item.when.date}>{item.when.date}</time>
                    </section>
                    <section>
                      <strong>FROM</strong>
                      <time dateTime={item.when.from}>{item.when.from}</time>
                    </section>
                    <section>
                      <strong>TO</strong>
                      <time dateTime={item.when.to}>{item.when.to}</time>
                    </section>
                  </section>

                  <section
                    className="ticket__info"
                    aria-label="Información adicional"
                  >
                    <strong>INFO</strong>
                    <p>
                      Section {randomSection} – seat {seat}, bring umbrella
                    </p>
                  </section>

                  <section className="ticket__barcode">
                    <Barcode
                      value={`${item.id.slice(0, 4)}-${index}`}
                      format="CODE128"
                    />
                    <p className="barcode-text">
                      #{(item.id.slice(0, 4) + "-" + index).slice(-6)}
                    </p>
                  </section>
                </section>
              </article>
            );
          });
        })}
      </section>
    </>
  );
}

export default TicketPage;
