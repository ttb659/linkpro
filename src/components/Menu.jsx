import React, { useEffect, useState } from 'react';

function Menu() {
    const [recentCandidates, setRecentCandidates] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((data) => {
                const recent = data.data.slice(0, 3).map((user) => ({
                    id: user.id,
                    name: `${user.first_name} ${user.last_name}`,
                    avatar: user.avatar,
                }));
                setRecentCandidates(recent);
            });
    }, []);

    return (
        <>
            {/* Version bureau */}
            <aside className="hidden md:block w-64 bg-white border-r shadow-md p-4">
                <div className="flex items-center mb-6">
                    <img src="log.png" alt="Logo" className="w-12 h-12 mr-2" />
                    <h1 className="text-2xl font-bold text-blue-600">LinkPro</h1>
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">
                    + Créer une annonce
                </button>

                {/* Navigation principale */}
                <nav className="mb-8">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                                <i className="bi bi-speedometer2"></i>
                                <span>Tableau de bord</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                                <i className="bi bi-person-circle"></i>
                                <span>Compte</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                                <i className="bi bi-megaphone"></i>
                                <span>Annonces</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                                <i className="bi bi-file-earmark-text"></i>
                                <span>Candidatures</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                                <i className="bi bi-bell"></i>
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                                <i className="bi bi-people"></i>
                                <span>Abonnés</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Version mobile */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden flex justify-around p-2 border-t">
                <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
                    <i className="bi bi-speedometer2 text-2xl"></i>
                    <span className="text-sm">Tableau</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
                    <i className="bi bi-person-circle text-2xl"></i>
                    <span className="text-sm">Compte</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
                    <i className="bi bi-megaphone text-2xl"></i>
                    <span className="text-sm">Annonces</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
                    <i className="bi bi-file-earmark-text text-2xl"></i>
                    <span className="text-sm">Candidatures</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
                    <i className="bi bi-bell text-2xl"></i>
                    <span className="text-sm">Notif.</span>
                </a>
            </nav>
        </>
    );
}

export default Menu;
