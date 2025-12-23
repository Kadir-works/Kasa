// Import du composant Banner utilisé en haut de la page À propos
import Banner from "../components/Banner";

// Import du composant Collapse pour afficher les sections déroulantes
import Collapse from "../components/Collapse";

// Import du fichier de styles spécifique à la page À propos
import "../styles/about.scss";

// Import de l’image utilisée dans la bannière de la page À propos
import homeBanner from "../assets/about-banner.png"; 
// (on réutilise ici une bannière fournie par la maquette)

// Données affichées dans les collapses de la page À propos
// Chaque objet représente une section avec un titre et un contenu
const aboutItems = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

// Composant About : page À propos de l’application
function About() {
  return (
    <div className="about">
      {/* Bannière de la page À propos */}
      <Banner image={homeBanner} />

      {/* Section contenant les différents collapses */}
      <div className="about__collapses">
        {/* Génération dynamique des collapses à partir du tableau aboutItems */}
        {aboutItems.map((item) => (
          <Collapse key={item.title} title={item.title}>
            {/* Le contenu du collapse est passé via la prop children */}
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

// Export du composant About
export default About;
