// src/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json'; // Import the JSON file
import DetailCard from './Cards/DetailCard'; // Import the DetailCard component
import MiniNavbar from './MiniNavbar';
const Project = () => {
    // Find the project by ID
    const { id } = useParams();

    // Find the project by ID
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="text-center text-2xl font-bold mt-10">Project not found</div>;
    }

    return (
        <> 
        <MiniNavbar />
        <div id="project" className="min-h-screen flex flex-col items-center justify-center relative  text-white py-20">
            <div className="text-center px-4 z-10 max-w-6xl">

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">{project.title}</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl text-left px-4">
                    {project.detailedDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-6xl mx-auto p-4">

                    <DetailCard title="Tech Stack" items={project.techStack} />
                    <DetailCard title="Features" items={project.features} />

                </div>

                <div className="grid grid-cols-1  gap-6 max-w-6xl mx-auto p-4">
                    <DetailCard title="Responsibilities" items={project.responsibilities} />
                </div>
                <div className="mt-8">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-800 overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transition-all duration-300">
                        View Project
                    </a>
                </div>

            </div>
        </div>
        </>

    );
};

export default Project;