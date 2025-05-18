import CompetitionCard from "../cards/CompetitionCard";
import competitionData from "../../data/competitions.json";
import Navbar from "../Navbar";

export default function CodingCompetitions() {
    return (
        <>
        <section id="coding-competitions" className="min-h-screen flex flex-col items-center justify-center py-20  text-white ">
            <div className="text-center px-4 z-10 max-w-6xl ">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Coding Competitions</h2>
            </div>
            <div className="max-w-6xl mx-auto px-4 m-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl m-8 px-4">
                    {competitionData.map((competition, index) => (
                        <CompetitionCard key={index} title={competition.title} year={competition.year} description={competition.description} />
                    ))}
                </div>
            </div>

        </section>
        </>
    )
}