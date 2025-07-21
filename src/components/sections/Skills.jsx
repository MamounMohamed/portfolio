import SkillCard from "../cards/SkillCard";
import skillsData from "../../data/skills.json";
import Navbar from "../Navbar";
export default function Skills() {
    return (
        <>
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20  text-white ">
            <div className="text-center px-4 z-10 max-w-6xl ">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Skills</h2>
                <div className="max-w-6xl mx-auto px-4 m-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 max-w-6xl m-8 px-4">
                        {skillsData.map((skillCategory, index) => (
                            <SkillCard key={index} title={skillCategory.title} skills={skillCategory.skills} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}
