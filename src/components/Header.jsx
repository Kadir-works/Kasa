// Import du composant NavLink depuis React Router
// NavLink permet de gérer la navigation et l’état actif des liens
import { NavLink } from "react-router-dom";

// Import du logo Kasa
import logo from "../assets/logo-kasa.svg";

// Import des styles spécifiques au header
import "../styles/header.scss";

// Composant Header : affiché sur toutes les pages de l’application
function Header() {
  return (
    <header className="header">
      {/* Conteneur interne pour centrer le contenu */}
      <div className="header__inner">
        {/* Logo de l’application */}
        <img src={logo} alt="Kasa" className="header__logo" />

        {/* Menu de navigation principal */}
        <nav className="header__nav">
          {/* Lien vers la page d’accueil */}
          <NavLink
            to="/"
            // Ajout dynamique de la classe active selon la route courante
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            Accueil
          </NavLink>

          {/* Lien vers la page À propos */}
          <NavLink
            to="/about"
            // Gestion de la classe active pour la navigation
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

// Export du composant Header
export default Header;
