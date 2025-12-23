// Import des composants Routes et Route depuis React Router
// Routes permet de définir l’ensemble des routes de l’application
// Route permet d’associer une URL à un composant
import { Routes, Route } from "react-router-dom";

// Import des pages de l’application
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Logement from "./pages/Logement.jsx";
import NotFound from "./pages/NotFound.jsx";

// Composant AppRouter : centralise toute la logique de routage
function AppRouter() {
  return (
    <Routes>
      {/* Route de la page d’accueil */}
      <Route path="/" element={<Home />} />

      {/* Route de la page À propos */}
      <Route path="/about" element={<About />} />

      {/* Route dynamique pour les logements */}
      {/* :id correspond à l’identifiant du logement dans l’URL */}
      <Route path="/logement/:id" element={<Logement />} />

      {/* Route wildcard */}
      {/* Elle capture toutes les routes inexistantes et affiche la page 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Export du routeur pour l’utiliser dans l’application
export default AppRouter;
