import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ company, position, from, to, responsibilities, associated_projects }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6 text-left text-white">
            {/* Company Name */}
            <h4 className="text-xl font-bold mb-2">{company}</h4>

            {/* Position */}
            <p className="text-lg font-semibold text-gray-300">{position}</p>

            {/* Duration */}
            <p className="text-gray-400">{from} – {to}</p>

            {/* Responsibilities */}
            <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>

            {/* Associated Projects */}
            {associated_projects.length > 0 && (
                <>
                    <h5 className="mt-4 font-semibold text-gray-300">Associated Projects:</h5>
                    <ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
                        {associated_projects.map((project, index) => (
                            <li>
                                <Link to={project.link} key={index} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">{project.name}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default ExperienceCard;
