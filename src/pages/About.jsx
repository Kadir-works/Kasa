import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/about.scss";
import homeBanner from "../assets/about-banner.png"; // on réutilise la bannière de la home pour l’instant

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
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
  },
];

function About() {
  return (
    <div className="about">
      <Banner image={homeBanner} />

      <div className="about__collapses">
        {aboutItems.map((item) => (
          <Collapse key={item.title} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
