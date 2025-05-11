import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useTicketStore from "../Stores/TicketStore";
import useCartStore from "../Stores/CartStore";
import useEventStore from "../Stores/EventStore";
import "../Styles/LandingPage.css";
import logo from "../assets/logo.png";

function LandingPage() {
  const location = useLocation();

  const { resetAll: resetCart } = useCartStore();
  const { resetAll: resetEvent } = useEventStore();
  const { setTicketData } = useTicketStore();
  const { setShouldResetEvents } = useEventStore();

  useEffect(() => {
    const historyState = window.history.state;
    const cameFromTicketPage = historyState?.from === "/ticket";

    if (cameFromTicketPage) {
      resetCart();
      setShouldResetEvents(true);
      resetEvent();
      setTicketData(null);
      window.history.replaceState({ ...historyState, from: null }, "");
    }
  }, [
    location.pathname,
    resetCart,
    resetEvent,
    setTicketData,
    setShouldResetEvents,
  ]);

  return (
    <section className="landing-page">
      <img className="logo__img" src={logo} alt="Logo" />
      <h1 className="landing-page__title">Where It's @</h1>
      <h2 className="landing-page__h2">Ticketing made easy</h2>
    </section>
  );
}

export default LandingPage;
