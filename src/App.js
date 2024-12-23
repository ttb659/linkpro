import React from "react";
import DashboardEntreprise from "./components/DashboardEntreprise";
import LoginPage from './components/loginPage'

function App() {
  // État pour savoir si l'utilisateur est connecté
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashboardEntreprise /> // Si connecté, affiche le tableau de bord
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} /> // Sinon, affiche la page de connexion
      )}
    </div>
  );
}

export default App;


/*import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
*/