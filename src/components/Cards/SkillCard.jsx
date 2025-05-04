// src/components/SkillCard.js
import React from 'react';

const SkillCard = ({ title, skills }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6 text-left ">
            <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
            <ul className="list-disc list-inside text-gray-400 text-left">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;