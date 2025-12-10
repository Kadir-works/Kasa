import { Link } from "react-router-dom";
import "../styles/card.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="card__image-wrapper">
        {cover && (
          <img src={cover} alt={title} className="card__image" />
        )}
        <div className="card__gradient" />
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
