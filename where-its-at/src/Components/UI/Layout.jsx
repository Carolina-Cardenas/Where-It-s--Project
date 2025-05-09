import { NavLink, Outlet, useLocation, matchPath } from "react-router-dom";
import Footer from "../UI/Footer";
import "../../Styles/Layout.css";

const footerRoutes = [
  "/",
  "/event/:id",
  "/ticket/:id",
  "/event/",
  "/order",
  "/events",
  "/search/:query",
  "/ticket",
];

function Layout() {
  const location = useLocation();

  const showFooter = footerRoutes.some((pattern) =>
    matchPath({ path: pattern, end: true }, location.pathname)
  );

  return (
    <section className="layout-container">
      <main className="layout-content">
        <Outlet />
      </main>
      {showFooter && (
        <footer className="LandingPage__footer">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/order">Order</NavLink>
          </nav>
        </footer>
      )}
    </section>
  );
}

export default Layout;
