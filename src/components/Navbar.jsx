// src/components/Navbar.js
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { Moon, Sun } from 'lucide-react';
export default function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const isActive = (path) => location.pathname === path || (location.pathname === '/' && path === '#home');

  return (
    <nav className="fixed top-0 w-full z-40 bg-black border-gray-800 backdrop-blur-lg border-b  shadow-md transition-colors duration-300 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-mono text-xl font-bold ">
            Mamoun's <span className="text-blue-500">Portfolio</span>
          </Link>

          <button
            onClick={toggleTheme}
            className={`text-gray-900 dark:text-white cursor-pointer`}
          
          >
            {theme === "dark" ? <Moon className="w-5 h-5 text-gray-200" /> : <Sun className="w-5 h-5 text-gray-200" />}
          </button>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className={`hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Home</a>
            <a href="/#about" className={`hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>About</a>
            <a href="/#projects" className={`hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Projects</a>
            <a href="/#contact" className={`hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Contact</a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-1">
            <a href="/" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Home</a>
            <a href="/#about" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>About</a>
            <a href="/#projects" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Projects</a>
            <a href="/#contact" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
