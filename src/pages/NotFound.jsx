import { Link } from "react-router-dom";
import "../styles/notfound.scss";

function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link className="notfound__link" to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
}

export default NotFound;
