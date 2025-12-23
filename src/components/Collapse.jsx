// Import du hook useState depuis React
// useState permet de gérer l’état ouvert / fermé du collapse
import { useState } from "react";

// Import de l’icône de la flèche
import arrow from "../assets/icons/arrow-down.svg";

// Import des styles spécifiques au composant Collapse
import "../styles/collapse.scss";

// Composant Collapse
// Il reçoit deux props :
// - title : le titre du collapse
// - children : le contenu à afficher à l’intérieur
function Collapse({ title, children }) {
  // État local indiquant si le collapse est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  // Fonction qui inverse l’état du collapse (ouvert / fermé)
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // Classe dynamique ajoutée si le collapse est ouvert
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      {/* En-tête du collapse */}
      <div className="collapse__header">
        {/* Titre du collapse */}
        <span className="collapse__title">{title}</span>

        {/* Seule la flèche est cliquable */}
        {/* Bouton accessible pour ouvrir / fermer le collapse */}
        <button
          type="button"
          className="collapse__icon-button"
          onClick={toggle}
          aria-expanded={isOpen} // Indique l’état ouvert ou fermé pour l’accessibilité
        >
          {/* Icône de la flèche */}
          <img
            src={arrow}
            alt={isOpen ? "Replier la section" : "Déplier la section"}
            className={`collapse__icon ${isOpen ? "open" : ""}`}
          />
        </button>
      </div>

      {/* Conteneur du contenu */}
      {/* La hauteur est gérée en CSS pour l’animation */}
      <div className="collapse__content-wrapper">
        {/* Contenu du collapse transmis via la prop children */}
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}

// Export du composant Collapse
export default Collapse;
