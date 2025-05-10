import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useTicketStore from "../Stores/TicketStore";
import useCartStore from "../Stores/CartStore";
import useEventStore from "../Stores/EventStore";
import "../Styles/LandingPage.css";
import logo from "../assets/logo.png";

function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearTicketData } = useTicketStore();
  const { clearCart } = useCartStore();
  const { clearTicket: clearEventTickets } = useEventStore();

  useEffect(() => {
    console.log("LandingPage mounted or path changed:", location.pathname);
    console.log("history.state:", window.history.state);
    const historyState = window.history.state;
    if (historyState?.from === "/ticket") {
      console.log("🧹 Limpiando stores porque venimos de /ticket a Home");
      clearCart();
      clearTicketData();
      if (clearEventTickets) {
        clearEventTickets();
      }
      window.history.replaceState({ ...historyState, from: null }, "");
      console.log("🧹 Stores cleaned (si la condición se cumplió)");
    } else {
      console.log("⏭️ No se limpiaron los stores porque no venimos de /ticket");
      // Si no venimos de /ticket, inicia la navegación automática a /events
      const timer = setTimeout(() => {
        navigate("/events");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [
    location.pathname,
    clearCart,
    clearTicketData,
    clearEventTickets,
    navigate,
  ]);

  return (
    <section className="landing-page">
      <img className="logo__img" src={logo} alt="Logo" />
      <h1 className="landing-page__title">Where It's @ </h1>
      <h2 className="landing-page__h2">Ticketing made easy </h2>
    </section>
  );
}

export default LandingPage;
