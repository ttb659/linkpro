// src/Menu.js  
import React, { useEffect, useState } from 'react';  

function Menu() {  
    const [recentCandidates, setRecentCandidates] = useState([]);  

    useEffect(() => {  
        // Remplacer ceci par l'URL de ton API pour récupérer les candidatures récentes  
        fetch("https://reqres.in/api/users?page=1")  
            .then((response) => response.json())  
            .then((data) => {  
                // Simuler des candidats récents  
                const recent = data.data.slice(0, 3).map((user) => ({  
                    id: user.id,  
                    name: `${user.first_name} ${user.last_name}`,  
                    avatar: user.avatar,  
                }));  
                setRecentCandidates(recent);  
            });  
    }, []);  

    return (  
        <aside className="w-64 bg-white border-r shadow-md p-4">  
            <div className="flex items-center mb-6">  
                <img src="https://example.com/logo.png" alt="Logo" className="w-12 h-12 mr-2" />  
                <h1 className="text-2xl font-bold text-blue-600">LinkPro</h1>  
            </div>  

            <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">  
                + Créer une annonce  
            </button>  

            {/* Section principale */}  
            <nav className="mb-8">  
                <ul className="space-y-4">  
                    <li>  
                        <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">  
                            <img src="https://example.com/dashboard-icon.png" alt="Tableau de bord" className="w-5 h-5" />  
                            <span>Tableau de bord</span>  
                        </a>  
                    </li>  
                    <li>  
                        <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">  
                            <img src="https://example.com/account-icon.png" alt="Compte" className="w-5 h-5" />  
                            <span>Compte</span>  
                        </a>  
                    </li>  
                    <li>  
                        <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">  
                            <img src="https://example.com/annonces-icon.png" alt="Annonces" className="w-5 h-5" />  
                            <span>Annonces</span>  
                        </a>  
                    </li>  
                    <li>  
                        <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">  
                            <img src="https://example.com/candidatures-icon.png" alt="Candidatures" className="w-5 h-5" />  
                            <span>Candidatures</span>  
                        </a>  
                    </li>  
                    <li>  
                        <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">  
                            <img src="https://example.com/notifications-icon.png" alt="Notifications" className="w-5 h-5" />  
                            <span>Notifications</span>  
                        </a>  
                    </li>  
                    <li>  
                        <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">  
                            <img src="https://example.com/followers-icon.png" alt="Abonnés" className="w-5 h-5" />  
                            <span>Abonnés</span>  
                        </a>  
                    </li>  
                </ul>  
            </nav>  

            {/* Section des candidatures récentes */}  
            <div>  
                <h3 className="font-semibold mb-2">Candidatures Récentes</h3>  
                <ul className="space-y-2">  
                    {recentCandidates.map(candidate => (  
                        <li key={candidate.id} className="flex items-center">  
                            <img src={candidate.avatar} alt={candidate.name} className="w-8 h-8 rounded-full mr-2" />  
                            <span>{candidate.name}</span>  
                        </li>  
                    ))}  
                </ul>  
            </div>  
        </aside>  
    );  
}  

export default Menu;