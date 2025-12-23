// Import du fichier de styles spécifique au composant Banner
import "../styles/banner.scss";

// Composant Banner
// Il reçoit des props :
// - image : l’image de fond de la bannière
// - text : le texte à afficher (optionnel)
function Banner({ image, text }) {
  return (
    // Section principale de la bannière
    // L’image est appliquée en background via le style inline
    <section
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay sombre par-dessus l’image (effet visuel) */}
      <div className="banner__overlay" />

      {/* 
        Le texte est affiché uniquement si la prop "text" existe.
        Cela permet de réutiliser le composant avec ou sans texte
        (ex : Home avec texte / About sans texte)
      */}
      {text && <h1 className="banner__text">{text}</h1>}
    </section>
  );
}

// Export du composant pour pouvoir l’utiliser dans les pages
export default Banner;
