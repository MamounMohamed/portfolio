// src/App.js
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './components/Project';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './components/HomePage';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import CodingCompetitions from './components/sections/CodingCompetitions';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
// import MiniMobileMenu from './components/MiniMobileMenu';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds delay for loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router basename='/'>
      <div className="min-h-screen transition-opacity duration-700  text-gray-100">
        {/* <MiniMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/coding-competitions" element={<CodingCompetitions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} /> {/* Dynamic route for project details */}
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />

      </div>
    </Router>
  );
}

export default App