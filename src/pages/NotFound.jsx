// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Page non trouvée</h1>
      <Link to="/">Retour à l’accueil</Link>
    </div>
  );
}

export default NotFound;
