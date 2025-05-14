// src/Projects.js
import React from 'react';
import ProjectCard from '../Cards/ProjectCard';
import projectsData from '../../data/projects.json'; // Import the JSON file

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="text-center px-4 z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  m-8 max-w-6xl mx-auto">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id}
                            id={project.id}
                            image={project.image}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            status={project.status}
                            
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;