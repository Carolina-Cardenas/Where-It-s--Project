import "../Styles/LandingPage.css";
import logo from "../assets/logo.png";

function LandingPage() {
  return (
    <section className="landing-page">
      <img className="logo__img" src={logo} alt="Logo" />
      <h1 className="landing-page__title">Where It's @ </h1>
      <h2 className="landing-page__h2">Ticketing made easy </h2>
    </section>
  );
}

export default LandingPage;
