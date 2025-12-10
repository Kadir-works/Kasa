import { NavLink } from "react-router-dom";
import logo from "../assets/logo-kasa.svg"; // adapte le nom si besoin
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <img src={logo} alt="Kasa" className="header__logo" />

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
