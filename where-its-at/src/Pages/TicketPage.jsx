// import useTicketStore from "../Stores/TicketStore";
// import Barcode from "react-barcode";
// import "../Styles/TicketPage.css";

// function TicketPage() {
//   const { ticketData } = useTicketStore();

//   const generateRandomSection = () => {
//     const letters = "ABCDEFG";
//     const randomIndex = Math.floor(Math.random() * letters.length);
//     return letters[randomIndex];
//   };

//   const generateRandomStartSeat = () => {
//     return Math.floor(Math.random() * 300);
//   };

//   return (
//     <div className="ticket-container">
//       {ticketData &&
//         ticketData.cart.map((item) => {
//           const randomSection = generateRandomSection();
//           const randomStartSeat = generateRandomStartSeat();
//           return Array.from({ length: item.quantity }).map((_, index) => {
//             const seat = randomStartSeat + index;
//             return (
//               <section className="ticket" key={index}>
//                 <article className="ticket__header"></article>
//                 <section className="ticket__content">
//                   <p className="ticket__what">{item.name}</p>
//                   <div className="ticket__where">
//                     <strong>{item.where}</strong>
//                     <p>
//                       {item.locationDescription ||
//                         "Göteborgs universitet. Pedagogen, hus A"}
//                     </p>
//                   </div>
//                   <div className="ticket__when">
//                     <div>
//                       <strong>WHEN</strong>
//                       <p>{item.when.date}</p>
//                     </div>
//                     <div>
//                       <strong>FROM</strong>
//                       <p>{item.when.from}</p>
//                     </div>
//                     <div>
//                       <strong>TO</strong>
//                       <p>{item.when.to}</p>
//                     </div>
//                   </div>
//                   <div className="ticket__info">
//                     <strong>INFO</strong>
//                     <p>
//                       Section {randomSection} - seat {seat}, bring umbrella
//                     </p>
//                   </div>
//                   <section className="ticket__barcode">
//                     <Barcode
//                       value={`${item.id.slice(0, 4)}-${index}`}
//                       format="CODE128"
//                     />
//                     <p className="barcode-text">
//                       #{(item.id.slice(0, 4) + "-" + index).slice(-6)}
//                     </p>
//                   </section>{" "}
//                 </section>
//               </section>
//             );
//           });
//         })}
//     </div>
//   );
// }

// export default TicketPage;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTicketStore from "../Stores/TicketStore";
// import { clearTicket } from "../Stores/EventStore";
import Barcode from "react-barcode";
import "../Styles/TicketPage.css";

function TicketPage() {
  const navigate = useNavigate();

  const { ticketData } = useTicketStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { state: { from: "/ticket" } });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const generateRandomSection = () => {
    const letters = "ABCDEFG";
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  };

  const generateRandomStartSeat = () => {
    return Math.floor(Math.random() * 300);
  };

  return (
    <section className="ticket-container">
      {ticketData &&
        ticketData.cart.map((item) => {
          const randomSection = generateRandomSection();
          const randomStartSeat = generateRandomStartSeat();
          return Array.from({ length: item.quantity }).map((_, index) => {
            const seat = randomStartSeat + index;
            return (
              <article className="ticket" key={index}>
                <header className="ticket__header"></header>
                <section className="ticket__content">
                  <p className="ticket__what">
                    {item.name} aria-label="Platsinformation"
                  </p>
                  <p className="ticket__where">
                    <strong>{item.where}</strong>
                    <p>
                      {item.locationDescription ||
                        "Göteborgs universitet. Pedagogen, hus A"}
                    </p>
                  </p>
                  <p className="ticket__when">
                    <p>
                      <strong>WHEN</strong>
                      <p>{item.when.date}</p>
                    </p>
                    <parseFloat>
                      <strong>FROM</strong>
                      <p>{item.when.from}</p>
                    </parseFloat>
                    <p>
                      <strong>TO</strong>
                      <p>{item.when.to}</p>
                    </p>
                  </p>
                  <section
                    className="ticket__info"
                    aria-label="Ytterligare information"
                  >
                    <strong>INFO</strong>
                    <p>
                      Section {randomSection} - seat {seat}, bring umbrella
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
  );
}

export default TicketPage;
