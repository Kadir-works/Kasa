import logoFooter from "../assets/logo-kasa-white.svg"; // le logo blanc du footer
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa" className="footer__logo" />

      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
