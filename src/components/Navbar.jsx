// src/components/Navbar.js
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const isActive = (path) => {
    return location.pathname === path || (location.pathname === '/' && path === '#home');
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-black backdrop-blur-lg border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-mono text-xl font-bold text-white">
            Mamoun's <span className="text-blue-500">Portfolio</span>
          </Link>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className={`text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              Home
            </a>
            <a href="/#about" className={`text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              About
            </a>
            <a href="/#projects" className={`text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              Projects
            </a>
            <a href="/#contact" className={`text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-1">
            <a href="/" className={`block text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              Home
            </a>
            <a href="/#about" className={`block text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              About
            </a>
            <a href="/#projects" className={`block text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              Projects
            </a>
            <a href="/#contact" className={`block text-gray-300 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}>
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}