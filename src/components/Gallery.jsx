// Import du hook useState depuis React
// useState permet de gérer un état local dans un composant fonctionnel
import { useState } from "react";

// Import des icônes de navigation de la galerie
import leftArrow from "../assets/icons/arrow-left.svg";
import rightArrow from "../assets/icons/arrow-right.svg";

// Composant Gallery
// Il reçoit une prop "pictures" qui est un tableau d’images
function Gallery({ pictures }) {
  // État local qui stocke l’index de l’image actuellement affichée
  const [index, setIndex] = useState(0);

  // Nombre total d’images dans la galerie
  const total = pictures.length;

  // Fonction pour afficher l’image suivante
  // Si on est sur la dernière image, on revient à la première
  const next = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Fonction pour afficher l’image précédente
  // Si on est sur la première image, on va à la dernière
  const prev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <div className="gallery">
      {/* Image actuellement affichée */}
      <img
        src={pictures[index]}
        alt={`photo ${index + 1}`}
        className="gallery__image"
      />

      {/* Si le logement contient plus d’une image,
          on affiche les flèches et le compteur */}
      {total > 1 && (
        <>
          {/* Flèche gauche : image précédente */}
          <img
            src={leftArrow}
            alt="previous"
            className="gallery__arrow gallery__arrow--left"
            onClick={prev}
          />

          {/* Flèche droite : image suivante */}
          <img
            src={rightArrow}
            alt="next"
            className="gallery__arrow gallery__arrow--right"
            onClick={next}
          />

          {/* Compteur d’images */}
          <span className="gallery__counter">
            {index + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}

// Export du composant Gallery
export default Gallery;
