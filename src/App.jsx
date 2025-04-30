// src/App.js
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Project from './components/Project';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds delay for demonstration

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen onComplete={() => setIsLoading(false)} />;
    }

    return (
        <Router>
            <div className="min-h-screen transition-opacity duration-700 bg-black text-gray-100">
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:id" element={<Project />} /> {/* Dynamic route for project details */}
                </Routes>
            </div>
        </Router>
    );
}

export default App