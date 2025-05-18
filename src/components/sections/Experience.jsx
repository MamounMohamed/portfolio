import ExperienceCard from "../cards/ExperienceCard";
import experienceData from "../../data/experience.json";
import Navbar from "../Navbar";
export default function Experience() {
    return (
        <>
        <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-20  text-white ">
            <div className="text-center px-4 z-10 max-w-6xl ">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Experience</h2>
                <div className="max-w-6xl mx-auto px-4 m-8">
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-6 max-w-6xl m-8 px-4">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            company={experience.company}
                            position={experience.position}
                            from={experience.from}
                            to={experience.to}
                            responsibilities={experience.responsibilities}  
                            associated_projects={experience.associated_projects}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}