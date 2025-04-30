import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;