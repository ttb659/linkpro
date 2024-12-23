import React from "react";
import { FaHome, FaUserCircle, FaBell, FaFileAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">LinkPro</h2>
      <button className="create-btn">+ Créer une annonce</button>
      <ul className="menu">
        <li>
          <FaHome /> Accueil
        </li>
        <li>
          <FaUserCircle /> Compte
        </li>
        <li>
          <FaFileAlt /> Annonces
        </li>
        <li>
          <FaBell /> Notifications
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
