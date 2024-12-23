import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>Jireh Gifts</h1>
      <div className="stats">
        <div>
          <h2>5</h2>
          <p>Nouvelles candidatures</p>
        </div>
        <div>
          <h2>50</h2>
          <p>Candidatures en attente</p>
        </div>
        <div>
          <h2>25</h2>
          <p>Annonces publiées</p>
        </div>
        <div>
          <h2>150</h2>
          <p>Abonnés</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
