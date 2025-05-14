import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Home() {
    return (
        <>
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center px-4 z-10">

            <h1 className="text-5xl md:text-7xl  font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Hello , I am Mamoun</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl  text-white px-4 text-left">
                    Full Stack Developer with 2+ years of experience building scalable web applications using modern technologies like React.js,
                    Next.js, Laravel, and Django. Proven ability to collaborate with cross-functional teams, mentor fresh programmers, and deliver
                    high-quality solutions under tight deadlines. Skilled in problem-solving with a strong background in competitive programming.

                </p>

                <div className="flex items-center justify-center space-x-4 mt-8">
                    <Link to="/projects" className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-800  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300">
                        View Projects
                    </Link>
                    <Link to="/contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300"> 
                        Contact Me
                    </Link>
                    </div>
            </div>
        </section>
        </>
    );
}