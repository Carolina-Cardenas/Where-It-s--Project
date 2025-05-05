import { NavLink, Outlet } from "react-router-dom";
import "../../Styles/Layout.css";

function Layout() {
  return (
    <section className="layout-container">
      <Outlet />
      <footer className="LandingPage__footer">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/order">Order</NavLink>
        </nav>
      </footer>
    </section>
  );
}

export default Layout;
