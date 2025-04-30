// src/Projects.js
import React from 'react';
import ProjectCard from '../ProjectCard';
import projectsData from '../../data/projects.json'; // Import the JSON file

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center relative  text-white py-20">
            <div className="text-center px-4 z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Projects</h2>
                <div className="flex flex-wrap justify-center">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id}
                            id={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;