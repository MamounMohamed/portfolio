import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, title, subtitle, status, statusDescription, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4 transition hover:scale-105 duration-300 p-6 flex flex-col items-center">
            <img className="h-48 w-auto object-contain p-4" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="text-gray-400 text-lg text-center mb-1">{subtitle}</div>
                {status === "Completed" ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-green-400 border border-green-400"> {status} </span>

                ) : (
                    <span className=" bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{status}</span>

                )}

                <p className="mt-2 text-gray-400 text-base text-left">{description}</p>
            </div>
            <div className=" mt-auto px-6 pt-4 pb-2">
                <Link to={`/project/${id}`} className="inline-block bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-800  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;