import logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import homeBanner from "../assets/home-banner.jpg";

function Home() {
  return (
    <div className="home">
      <Banner
        image={homeBanner}
        text="Chez vous, partout et ailleurs"
      />

      <section className="home__grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
