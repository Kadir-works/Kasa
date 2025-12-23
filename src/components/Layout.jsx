// Import du composant Header (en-tête du site)
import Header from "./Header";

// Import du composant Footer (pied de page du site)
import Footer from "./Footer";

// Import des styles spécifiques au layout
import "../styles/layout.scss";

// Composant Layout
// Il reçoit une prop spéciale : children
// children représente le contenu des pages (Home, About, Logement, etc.)
function Layout({ children }) {
  return (
    // Conteneur principal du layout
    <div className="layout">
      
      {/* Header affiché sur toutes les pages */}
      <Header />

      {/* Zone principale où s'affichent les pages */}
      <main className="layout__content">
        {children}
      </main>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </div>
  );
}

// Export du composant Layout
export default Layout;
