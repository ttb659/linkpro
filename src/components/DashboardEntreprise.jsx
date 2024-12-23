import React, { useEffect, useState } from "react";  
import Menu from "./Menu";  

function DashboardEntreprise() {  
  const [candidatures, setCandidatures] = useState([]);  
  const [companyData, setCompanyData] = useState({  
    name: "Jireh Gifts",  
    packagesLink: "#", // Remplacer par le lien réel  
    favoriteLink: "#" // Remplacer par le lien réel  
  });  
  const [search, setSearch] = useState("");  
  const [filteredCandidatures, setFilteredCandidatures] = useState([]);  

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
          specialization:  
            index % 2 === 0  
              ? "Intelligence Artificielle & Computer Engineering"  
              : "Cyber Sécurité & Cloud Computing",  
          announcement: index % 2 === 0 ? "Développeur IA" : "Analyste Sécurité",  
          avatar: user.avatar,  
        }));  
        setCandidatures(transformedData);  
        setFilteredCandidatures(transformedData);  
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
    <div className="dashboard bg-gray-50 h-screen flex">  
      <Menu />  

      <main className="flex-1 p-6">  
        {/* Barre de recherche et actions */}  
        <div className="flex items-center justify-between mb-6">  
          {/* Barre de Recherche */}  
          <div className="flex-grow">  
            <input  
              type="text"  
              value={search}  
              onChange={handleSearch}  
              placeholder="Rechercher ..."  
              className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"  
            />  
          </div>  

          {/* Actions à droite */}  
          <div className="flex items-center space-x-6 ml-6">  
            <button className="text-gray-500 hover:text-blue-500">  
              <i className="bi bi-bell text-2xl"></i>  
            </button>  
            <button className="text-gray-500">  
              <i className="bi bi-gear text-2xl"></i>  
            </button>  
            <div className="flex items-center space-x-2">  
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white">  
                JG  
              </div>  
              <span className="text-gray-700 font-medium">Professionnel</span>  
            </div>  
          </div>  
        </div>  

        {/* Header avec informations de l'entreprise */}  
        <header  
          className="p-6 text-white rounded-lg shadow-md mb-6 flex justify-start items-end relative"  
          style={{  
            width: "1019px",  
            height: "224px",  
            background: "linear-gradient(90deg, #7EC8E3 0%, rgba(0, 6, 179, 0.5) 50%, rgba(0, 0, 255, 0) 100%)",  
            borderRadius: "20px",  
          }}  
        >  
          <div className="flex flex-col items-start">  
            <h2 className="text-5xl font-bold">{companyData.name}</h2>  
            <div className="flex space-x-4 mt-4">  
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">  
          <div className="flex flex-col items-center bg-blue-50 p-3 rounded-lg shadow-md">  
            <img  
              src="https://example.com/icon-new-candidatures.png"  
              alt="Nouvelles Candidatures"  
              className="w-12 h-12 mb-2"  
            />  
            <h3 className="text-2xl font-semibold text-blue-600">5</h3>  
            <p className="text-sm text-center">Nouvelles candidatures</p>  
          </div>  
          <div className="flex flex-col items-center bg-red-50 p-3 rounded-lg shadow-md">  
            <img  
              src="https://example.com/icon-attente.png"  
              alt="Candidatures en Attente"  
              className="w-12 h-12 mb-2"  
            />  
            <h3 className="text-2xl font-semibold text-red-600">50</h3>  
            <p className="text-sm text-center">Candidatures en attente</p>  
          </div>  
          <div className="flex flex-col items-center bg-yellow-50 p-3 rounded-lg shadow-md">  
            <img  
              src="https://example.com/icon-annonces.png"  
              alt="Annonces Publiées"  
              className="w-12 h-12 mb-2"  
            />  
            <h3 className="text-2xl font-semibold text-yellow-600">25</h3>  
            <p className="text-sm text-center">Annonces publiées</p>  
          </div>  
          <div className="flex flex-col items-center bg-green-50 p-3 rounded-lg shadow-md">  
            <img  
              src="https://example.com/icon-abonnes.png"  
              alt="Abonnés"  
              className="w-12 h-12 mb-2"  
            />  
            <h3 className="text-2xl font-semibold text-green-600">150</h3>  
            <p className="text-sm text-center">Abonnés</p>  
          </div>  
        </div>  
        
        {/* Candidatures */}  
        <section className="mt-6">  
          <h3 className="text-xl font-bold mb-4">Candidatures</h3>  
          {filteredCandidatures.length > 0 ? (  
            <div className="space-y-4">  
              {filteredCandidatures.map((cand) => (  
                <div  
                  key={cand.id}  
                  className="flex items-center justify-between p-4 bg-white shadow-md rounded-md"  
                >  
                  <div className="flex items-center">  
                    <img  
                      src={cand.avatar}  
                      alt={cand.name}  
                      className="w-14 h-14 rounded-full mr-4"  
                    />  
                    <div>  
                      <h4 className="text-lg font-semibold">{cand.name}</h4>  
                      <p className="text-sm text-gray-500">  
                        {cand.type} • {cand.duration} • {cand.date}  
                      </p>  
                      <p className="text-sm text-gray-400">  
                        {cand.specialization}  
                      </p>  
                      <p className="text-sm text-gray-600">  
                        Annonce : {cand.announcement}  
                      </p>  
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