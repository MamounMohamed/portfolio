import EducationCard from "../cards/EducationCard";
import educationData from "../../data/education.json";
import Navbar from "../Navbar";
export default function Education() {
    return (
        <>
        <section id="education" className="min-h-screen flex flex-col items-center justify-center py-20  text-white ">
            <div className="text-center px-4 z-10 max-w-6xl ">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Education</h2>
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

            </div>
        </section>
        </>
    )
}

