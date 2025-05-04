// src/App.js
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './components/Project';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './components/HomePage';
import MiniNavbar from './components/MiniNavbar';
// import MiniMobileMenu from './components/MiniMobileMenu';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay for loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen transition-opacity duration-700  text-gray-100">
        <MiniNavbar  />
        {/* <MiniMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/#home" element={<Home />} />
          <Route path="/#about" element={<About />} />
          <Route path="/#projects" element={<Projects />} />
          <Route path="/#contact" element={<Contact />} />
          <Route path="/project/:id" element={<Project />} /> {/* Dynamic route for project details */}
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />

      </div>
    </Router>
  );
}

export default App