import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, title, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-400 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`/project/${id}`} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;