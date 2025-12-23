// Import des données logements depuis le fichier JSON
import logements from "../data/logements.json";

// Import des composants utilisés sur la page
import Banner from "../components/Banner";
import Card from "../components/Card";

// Import de l’image de la bannière de la page d’accueil
import homeBanner from "../assets/home-banner.jpg";

// Composant Home : page d’accueil de l’application
function Home() {
  return (
    <div className="home">
      {/* Bannière principale avec image et texte */}
      <Banner
        image={homeBanner}
        text="Chez vous, partout et ailleurs"
      />

      {/* Section contenant la liste des logements */}
      <section className="home__grid">
        {/* Génération dynamique des cards à partir des données JSON */}
        {logements.map((logement) => (
          <Card
            key={logement.id}        // Clé unique requise par React
            id={logement.id}         // Identifiant utilisé pour la navigation
            title={logement.title}   // Titre du logement
            cover={logement.cover}   // Image de couverture
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
