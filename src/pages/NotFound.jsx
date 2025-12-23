// Import du composant Link de React Router
// Il permet de naviguer dans l’application sans recharger la page
import { Link } from "react-router-dom";

// Import du fichier de styles spécifique à la page 404
import "../styles/notfound.scss";

// Composant NotFound : page affichée lorsque l’URL ne correspond à aucune route
function NotFound() {
  return (
    <main className="notfound">
      {/* Code d’erreur 404 affiché en grand */}
      <h1 className="notfound__code">404</h1>

      {/* Message indiquant que la page demandée n’existe pas */}
      <p className="notfound__text">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>

      {/* Lien permettant de retourner vers la page d’accueil */}
      {/* Utilisation de Link pour éviter un rechargement complet de la page */}
      <Link className="notfound__link" to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
}

// Export du composant NotFound pour pouvoir l’utiliser dans le routeur
export default NotFound;
