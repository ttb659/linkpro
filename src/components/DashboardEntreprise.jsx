import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function DashboardEntreprise() {
  const [candidatures, setCandidatures] = useState([]);
  const [companyData, setCompanyData] = useState({
    name: "Jireh Gifts",
    packagesLink: "#",
    favoriteLink: "#"
  });
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCandidatures, setFilteredCandidatures] = useState([]);

  // Fetch candidatures  
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.data.map((user, index) => ({
          id: user.id,
          name: `${user.first_name} ${user.last_name}`,
          type: index % 2 === 0 ? "Stage" : "PFA",
          duration: `${Math.ceil(Math.random() * 6)} mois`,
          date: `Il y a ${Math.ceil(Math.random() * 7)} jours`,
          specialization: index % 2 === 0
            ? "Intelligence Artificielle & Computer Engineering"
            : "Cyber Sécurité & Cloud Computing",
          announcement: index % 2 === 0 ? "Développeur IA" : "Analyste Sécurité",
          avatar: user.avatar,
        }));
        setCandidatures(transformedData);
        setFilteredCandidatures(transformedData);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        const transformedNotifications = data.map((item) => ({
          id: item.id,
          title: item.title,
          body: item.body,
        }));
        setNotifications(transformedNotifications);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = candidatures.filter((cand) =>
      cand.announcement.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCandidatures(filtered);
  };

  return (
    <div className="dashboard bg-gray-50 h-screen flex flex-col md:flex-row">
      <Menu />
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Search and Actions Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 relative">
          {/* Search Bar */}
          <div className="flex-grow mb-4 md:mb-0">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Rechercher les candidatures par annonces..."
              className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Actions on the right */}
          <div className="flex items-center space-x-6 relative">
            {/* Notifications */}
            <div className="relative">
              <button
                className="text-gray-500 hover:text-blue-500"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <i className="bi bi-bell text-2xl"></i>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b font-bold text-gray-700">Notifications</div>
                  <ul className="p-4 max-h-60 overflow-y-auto"> {/* Ajout de la gestion de l'overflow */}
                    {notifications.map((notif) => (
                      <li key={notif.id} className="mb-2">
                        <p className="font-semibold">{notif.title}</p>
                        <p className="text-sm text-gray-600">{notif.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* User Information */}
            <div className="relative">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowCompanyMenu(!showCompanyMenu)}>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white">
                  JG
                </div>
                <span className="text-gray-700 font-medium">{companyData.name}</span>
              </div>
              {/* Dropdown for Company Information */}
              {showCompanyMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b font-bold text-gray-700">{companyData.name}</div>
                  <ul className="p-4 space-y-2">
                    <li className="flex items-center text-gray-600">
                      <i className="bi bi-person mr-2"></i>
                      <a href={companyData.packagesLink} className="hover:underline">
                        Profil
                      </a>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="bi bi-box-arrow-right mr-2"></i>
                      <button onClick={() => alert("Déconnexion")} className="hover:underline">
                        Déconnexion
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Header with Company Information */}
        <header
          className="p-6 text-white rounded-2xl shadow-md mb-6 flex justify-start items-end relative"
          style={{
            background: "linear-gradient(90deg, #7EC8E3 0%, rgba(0, 6, 179, 0.5) 50%, rgba(0, 0, 255, 0) 100%)",
          }}
        >
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-5xl font-bold">{companyData.name}</h2> {/* Responsive text size */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-4">
              <a
                href={companyData.packagesLink}
                className="text-sm bg-white text-blue-600 py-1 px-3 rounded hover:underline"
              >
                Nos Packs Annonces
              </a>
              <a
                href={companyData.favoriteLink}
                className="text-sm bg-white text-blue-600 py-1 px-3 rounded hover:underline"
              >
                Vos candidatures favorites
              </a>
            </div>
          </div>
        </header>
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="flex flex-row items-center bg-blue-50 p-3 rounded-lg shadow-md">
            <img src="new-candidature.png" alt="Nouvelles Candidatures" className="w-20 h-20 mb-2" />
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-semibold text-blue-600">5</h3>
              <p className="text-sm text-center">Nouvelles candidatures</p>
            </div>
          </div>
          {/* Other statistics... */}
          <div className="flex flex-row items-center bg-red-50 p-3 rounded-lg shadow-md">
            <img
              src="icon-attente.png"
              alt="Candidatures en Attente"
              className="w-20 h-20 mb-2"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-semibold text-red-600">50</h3>
              <p className="text-sm text-center">Candidatures en attente</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-yellow-50 p-3 rounded-lg shadow-md">
            <img
              src="icon-annonces.png"
              alt="Annonces Publiées"
              className="w-20 h-20 mb-2"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-semibold text-yellow-600">25</h3>
              <p className="text-sm text-center">Annonces publiées</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-green-50 p-3 rounded-lg shadow-md">
            <img
              src="icon-abonnes.png"
              alt="Abonnés"
              className="w-20 h-20 mb-2"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-semibold text-green-600">150</h3>
              <p className="text-sm text-center">Abonnés</p>
            </div>
          </div>
        </div>
        {/* Candidatures */}
        <section className="mt-6">
          <h3 className="text-xl font-bold mb-4">Candidatures</h3>
          {filteredCandidatures.length > 0 ? (
            <div className="space-y-4">
              {filteredCandidatures.map((cand) => (
                <div key={cand.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                  <div className="flex items-center">
                    <img src={cand.avatar} alt={cand.name} className="w-14 h-14 rounded-full mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold">{cand.name}</h4>
                      <p className="text-sm text-gray-500">{cand.type} • {cand.duration} • {cand.date}</p>
                      <p className="text-sm text-gray-400">{cand.specialization}</p>
                      <p className="text-sm text-gray-600">Annonce : {cand.announcement}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Aucune candidature trouvée.</p>
          )}
        </section>
      </main>
    </div>
  );
}
export default DashboardEntreprise;