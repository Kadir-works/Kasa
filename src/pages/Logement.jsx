import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import NotFound from "./NotFound";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import starActive from "../assets/icons/star-active.svg";
import starInactive from "../assets/icons/star-inactive.svg";


function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <NotFound />;
  }

  const rating = parseInt(logement.rating, 10);
  const ratingScale = [1, 2, 3, 4, 5];
  const [hostFirstName, hostLastName] = logement.host.name.split(" ");

  return (
    <div className="logement">
      <Gallery pictures={logement.pictures} />

      <div className="logement__title-block">
        <div className="logement__main-info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
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
