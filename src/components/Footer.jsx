// Import du logo blanc utilisé dans le footer
import logoFooter from "../assets/logo-kasa-white.svg";

// Import du fichier de styles spécifique au footer
import "../styles/footer.scss";

// Composant Footer
// Il ne reçoit pas de props car son contenu est fixe
function Footer() {
  return (
    // Élément footer HTML sémantique
    <footer className="footer">
      
      {/* Logo Kasa en version blanche */}
      <img src={logoFooter} alt="Kasa" className="footer__logo" />

      {/* Texte de copyright */}
      <p className="footer__text">© 2020 Kasa. All <span>rights reserved</span></p>
    </footer>
  );
}

// Export du composant pour pouvoir l'utiliser dans Layout ou App
export default Footer;
