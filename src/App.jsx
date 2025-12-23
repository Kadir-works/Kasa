// Import du composant Layout
// Il contient la structure globale de l'application (Header + Footer)
import Layout from "./components/Layout";

// Import du routeur de l'application
// Il gère l'affichage des pages selon l'URL
import AppRouter from "./router";

// Composant principal de l'application
function App() {
  return (
    // Le Layout englobe toute l'application
    // Toutes les pages seront affichées à l'intérieur grâce à children
    <Layout>
      {/* Le routeur décide quelle page afficher */}
      <AppRouter />
    </Layout>
  );
}

// Export du composant App
export default App;
