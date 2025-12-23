// Import de React (nécessaire pour JSX)
import React from "react";

// Import de ReactDOM pour monter l’application dans le DOM
import ReactDOM from "react-dom/client";

// Import de BrowserRouter depuis React Router
// Il permet de gérer la navigation côté client (SPA)
import { BrowserRouter } from "react-router-dom";

// Import du composant App (racine de l’application)
import App from "./App.jsx";

// Import du fichier de styles principal (Sass)
import "./styles/main.scss";

// Création de la racine React et rendu de l’application
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode aide à détecter les problèmes potentiels en développement
  <React.StrictMode>
    {/* BrowserRouter englobe toute l’application
        pour activer le routage React Router */}
    <BrowserRouter>
      {/* Composant racine de l’application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
