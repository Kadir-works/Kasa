// Hook de React Router permettant de récupérer les paramètres de l’URL
import { useParams } from "react-router-dom";

// Import des données logements depuis le fichier JSON
import logements from "../data/logements.json";

// Import de la page 404 affichée si le logement n’existe pas
import NotFound from "./NotFound";

// Import des composants utilisés sur la page logement
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";

// Import des icônes d’étoiles pour la notation
import starActive from "../assets/icons/star-active.svg";
import starInactive from "../assets/icons/star-inactive.svg";

// Composant Logement : affiche le détail d’un logement
function Logement() {
  // Récupération de l’identifiant du logement depuis l’URL
  const { id } = useParams();

  // Recherche du logement correspondant à l’ID dans les données
  const logement = logements.find((item) => item.id === id);

  // Si aucun logement ne correspond à l’ID, affichage de la page 404
  if (!logement) {
    return <NotFound />;
  }

  // Conversion de la note en nombre entier
  const rating = parseInt(logement.rating, 10);

  // Tableau servant à afficher les 5 étoiles de notation
  const ratingScale = [1, 2, 3, 4, 5];

  // Séparation du prénom et du nom de l’hôte
  const [hostFirstName, hostLastName] = logement.host.name.split(" ");

  return (
    <div className="logement">
      {/* Galerie d’images du logement */}
      <Gallery pictures={logement.pictures} />

      {/* Bloc principal contenant le titre, les informations et l’hôte */}
      <div className="logement__title-block">
        <div className="logement__main-info">
          {/* Titre et localisation du logement */}
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          {/* Liste des tags du logement */}
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bloc hôte et notation */}
        <div className="logement__host-rating">
          {/* Informations sur l’hôte */}
          <div className="logement__host">
            <div className="logement__host-name">
              <span>{hostFirstName}</span>
              <br />
              <span>{hostLastName}</span>
            </div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement__host-picture"
            />
          </div>

          {/* Affichage de la notation sous forme d’étoiles */}
          <div className="logement__rating">
            {ratingScale.map((value) => (
              <img
                key={value}
                src={value <= rating ? starActive : starInactive}
                alt="rating star"
                className="rating__star"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section des collapses : description et équipements */}
      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
