// Import du composant Link depuis React Router
// Link permet de naviguer vers une autre page sans recharger l’application
import { Link } from "react-router-dom";

// Import des styles spécifiques au composant Card
import "../styles/card.scss";

// Composant Card
// Il reçoit trois props :
// - id : identifiant du logement (utilisé pour la navigation)
// - title : titre du logement
// - cover : image de couverture du logement
function Card({ id, title, cover }) {
  return (
    // Le composant Card est entièrement cliquable
    // Le clic redirige vers la page du logement correspondant
    <Link to={`/logement/${id}`} className="card">
      <div className="card__image-wrapper">
        {/* Affichage conditionnel de l’image de couverture */}
        {/* L’image n’est affichée que si la prop cover existe */}
        {cover && (
          <img src={cover} alt={title} className="card__image" />
        )}

        {/* Dégradé appliqué par-dessus l’image pour améliorer la lisibilité */}
        <div className="card__gradient" />

        {/* Titre du logement affiché sur la card */}
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

// Export du composant Card
export default Card;
