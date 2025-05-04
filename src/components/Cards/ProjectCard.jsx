import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, title, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4  transition  hover:scale-105 duration-300 p-6 ">
            <img className="h-48 w-auto object-contain p-4" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-400 text-base text-left">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`/project/${id}`} className="inline-block bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-800  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;