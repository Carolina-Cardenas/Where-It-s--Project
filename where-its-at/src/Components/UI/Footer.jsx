import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer__container">
      <nav aria-label="Footer Navigation">
        <ul className="footer-content">
          <li className="">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/order" className="footer__link">
              Order
            </Link>
          </li>
          <li className="">
            <Link to="/events" className="footer__link">
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
