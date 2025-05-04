// src/components/EducationCard.js
import React from 'react';

const EducationCard = ({ institution, degree, cgpa, duration, position, responsibilities }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6 text-left">
            <h4 className="text-xl font-bold mb-4 text-white">{institution}</h4>
            <p className="text-lg font-semibold text-gray-300">{degree}, CGPA: {cgpa}</p>
            <p className="text-gray-400">{duration}</p>
            <p className="mt-2 text-gray-400">{position}</p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

export default EducationCard;