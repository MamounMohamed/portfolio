// src/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json'; // Import the JSON file

const Project = () => {

    // Find the project by ID
    const { id } = useParams();

    // Find the project by ID
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="text-center text-2xl font-bold mt-10">Project not found</div>;
    }

    return (
        <div id ='project' className="min-h-screen flex flex-col items-center justify-center relative bg-gray-900 text-white py-20">
            <div className="text-center px-4 z-10 max-w-4xl">

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">{project.title}</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl text-left px-4">
                    {project.detailedDescription}
                </p>

                <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="mb-8 max-w-2xl mx-auto text-left px-4">
                    <ul className="list-disc list-inside text-gray-400">
                        {project.techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <h3 className="text-2xl font-bold mb-4">Features</h3>
                <div className="mb-8 max-w-2xl mx-auto text-left px-4">
                    <ul className="list-disc list-inside text-gray-400">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                        View Project
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Project;