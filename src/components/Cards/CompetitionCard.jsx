// src/components/CompetitionCard.js
import React from 'react';

const CompetitionCard = ({ title, year, description }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6">
            <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
            <p className="text-lg font-semibold text-gray-300">{year}</p>
            <p className="text-gray-400 mt-2 text-left">{description}</p>
        </div>
    );
};

export default CompetitionCard;