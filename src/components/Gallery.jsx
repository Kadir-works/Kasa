import { useState } from "react";
import leftArrow from "../assets/icons/arrow-left.svg";
import rightArrow from "../assets/icons/arrow-right.svg";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  // Changer l'image suivante
  const next = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Changer l'image précédente
  const prev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <div className="gallery">
      <img
        src={pictures[index]}
        alt={`photo ${index + 1}`}
        className="gallery__image"
      />

      {/* Masquer flèches et compteur si une seule image */}
      {total > 1 && (
        <>
          <img
            src={leftArrow}
            alt="previous"
            className="gallery__arrow gallery__arrow--left"
            onClick={prev}
          />
          <img
            src={rightArrow}
            alt="next"
            className="gallery__arrow gallery__arrow--right"
            onClick={next}
          />

          <span className="gallery__counter">
            {index + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}

export default Gallery;
