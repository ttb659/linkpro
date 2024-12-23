// src/Dashboard.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import './Dashboard.css'; // Import du fichier CSS  

const Dashboard = () => {  
    const [candidatures, setCandidatures] = useState([]);  
    const [searchTerm, setSearchTerm] = useState('');  
    const [filteredCandidatures, setFilteredCandidatures] = useState([]);  

    useEffect(() => {  
        const fetchCandidatures = async () => {  
            const response = await axios.get('https://reqres.in/api/users?page=1');  
            setCandidatures(response.data.data || []); // Ajuster selon la structure des données  
        };  
        fetchCandidatures();  
    }, []);  

    useEffect(() => {  
        setFilteredCandidatures(  
            candidatures.filter(candidature =>  
                `${candidature.first_name} ${candidature.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())  
            )  
        );  
    }, [searchTerm, candidatures]);  

    return (  
        <div className="dashboard">  
            <header className="header">  
                <h1>LinkPro</h1>  
                <input  
                    type="text"  
                    className="search-input"  
                    placeholder="Rechercher ..."  
                    value={searchTerm}  
                    onChange={(e) => setSearchTerm(e.target.value)}  
                />  
            </header>  
            <section className="stats">  
                <h2>Jireh Gifts</h2>  
                <div className="statistics">  
                    <div className="stat-item">5 Nouvelles candidatures</div>  
                    <div className="stat-item">50 Candidatures en attente</div>  
                    <div className="stat-item">25 Annonces publiées</div>  
                    <div className="stat-item">150 Abonnés</div>  
                </div>  
            </section>  
            <section className="candidatures">  
                <h3>Candidatures</h3>  
                <ul>  
                    {filteredCandidatures.map(candidature => (  
                        <li key={candidature.id} className="candidature-item">  
                            <div className="candidature-info">  
                                <h4>{candidature.first_name} {candidature.last_name}</h4>  
                                <p>Stage • 3 mois • Il y a 2 jours</p>  
                                <p>Intelligence Artificial & Computer Engineering Student</p>  
                            </div>  
                        </li>  
                    ))}  
                </ul>  
            </section>  
        </div>  
    );  
};  

export default Dashboard;