import { useState } from "react";
import arrow from "../assets/icons/arrow-down.svg";
import "../styles/collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <div className="collapse__header">
        <span className="collapse__title">{title}</span>

        {/* ⬇️ Seule la flèche est cliquable */}
        <button
          type="button"
          className="collapse__icon-button"
          onClick={toggle}
          aria-expanded={isOpen}
        >
          <img
            src={arrow}
            alt={isOpen ? "Replier la section" : "Déplier la section"}
            className={`collapse__icon ${isOpen ? "open" : ""}`}
          />
        </button>
      </div>

      <div className="collapse__content-wrapper">
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
