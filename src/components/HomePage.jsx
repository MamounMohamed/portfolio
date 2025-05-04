import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
export default function Homepage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="min-h-screen">
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
            </div>
        </>
    );
}