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
          <nav aria-label="Main Footer Navigation">
            <ul>
              <li>
                <NavLink to="/" aria-label="Go to Home page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" aria-label="Go to Events page">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" aria-label="Go to Order page">
                  Order
                </NavLink>
              </li>
            </ul>
          </nav>
        </footer>
      )}
    </section>
  );
}

export default Layout;
