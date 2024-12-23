import React from "react";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const Login = () => {
  return (
    <div className="login-container">
      {/* Section gauche */}
      <div className="left-section">
        <div className="image-container">
          <i className="fas fa-briefcase job-icon"></i>
          <i className="fas fa-search search-icon"></i>
          <div className="user-placeholder"></div>
        </div>
        <h2>Découvrir maintenant</h2>
        <p>
          Vous êtes à la recherche d'un stage enrichissant ou d'un emploi qui
          correspond à vos aspirations ? Nous sommes là pour vous accompagner !
        </p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Section droite */}
      <div className="right-section">
        <h1>Bon retour sur LinkPro</h1>
        <p>Entrez vos identifiants pour accéder à votre compte</p>
        <form>
          <label htmlFor="email">Adresse Mail</label>
          <input type="email" id="email" placeholder="email" />

          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" placeholder="mot de passe" />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Se souvenir de moi</label>
          </div>

          <button type="submit">Se connecter</button>
        </form>

        <div className="social-login">
          <button className="google-btn">
            <i className="fab fa-google"></i> Connectez-vous avec Google
          </button>
          <button className="apple-btn">
            <i className="fab fa-apple"></i> Connectez-vous avec Apple
          </button>
        </div>
        <p className="signup-link">
          Vous n'avez pas de compte ? <a href="/">Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
