import React from "react";

const candidates = [
  { name: "Pierre Damien KOUMASSI", type: "Stage • 3 mois", time: "Il y a 2 jours", job: "Intelligence Artificial & Computer Engineering Student" },
  { name: "Borel Tamekeng TIDO", type: "PFA • 3 mois", time: "Il y a 3 jours", job: "Cyber Security & Cloud Computing Student" },
  { name: "Gilles Ingrid AKPINFIA", type: "PFE • 6 mois", time: "Il y a 3 jours", job: "Computer Engineering Student" },
  { name: "Damien Koffi", type: "Travail", time: "Il y a une semaine", job: "Web developer" },
];

function CandidatesList() {
  return (
    <div className="candidates-list">
      <h2>Candidatures Récentes</h2>
      {candidates.map((candidate, index) => (
        <div key={index} className="candidate-card">
          <div className="candidate-info">
            <h3>{candidate.name}</h3>
            <p>{candidate.type} • {candidate.time}</p>
            <p>{candidate.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidatesList;
