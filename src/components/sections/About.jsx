import SkillCard from '../Cards/SkillCard';
import EducationCard from '../Cards/EducationCard';
import CompetitionCard from '../Cards/CompetitionCard';
import educationData from '../../data/education.json';
import competitionData from '../../data/competitions.json';
import skillsData from '../../data/skills.json';
import { useState, useEffect } from 'react';
import MiniNavbar from '../MiniNavbar';
export default function About() {
    return (
        <>
        <MiniNavbar />
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20  text-white ">
            <div className="text-center px-4 z-10 max-w-6xl ">

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">About Me</h2>

                <h3 className="text-2xl font-bold my-4">Education</h3>
                <div className="max-w-6xl mx-auto px-4 m-8">
                    <EducationCard
                        institution={educationData.institution}
                        degree={educationData.degree}
                        cgpa={educationData.cgpa}
                        duration={educationData.duration}
                        position={educationData.position}
                        responsibilities={educationData.responsibilities}
                    />
                </div>

                <h3 className="text-2xl font-bold my-4">Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl m-8 px-4">
                    {skillsData.map((skillCategory, index) => (
                        <SkillCard key={index} title={skillCategory.title} skills={skillCategory.skills} />
                    ))}
                </div>

                <h3 className="text-2xl font-bold my-4">Coding Competitions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl m-8 px-4">
                    {competitionData.map((competition, index) => (
                        <CompetitionCard key={index} title={competition.title} year={competition.year} description={competition.description} />
                    ))}
                </div>

 
            </div>
 
        </section>
        </>
    );
}