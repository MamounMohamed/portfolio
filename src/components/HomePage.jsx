import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import CodingCompetitions from "./sections/CodingCompetitions";
import Experience from "./sections/Experience";
export default function Homepage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>


            <div className="min-h-screen">
                    <Home />
                    <Experience />
                    <Education />
                    <Skills />
                    <Projects />
                    <CodingCompetitions />
                    <Contact />
            </div>
        </>
    );
}