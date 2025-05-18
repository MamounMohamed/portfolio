// src/components/Navbar.js
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { List, Moon, Sun } from 'lucide-react';

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

  const isActive = (path) => {
    return location.pathname === path ||
      (location.pathname === '/' && path === '/#/')
      || (location.pathname === '/experience' && path === '/#/experience')
      || (location.pathname === '/education' && path === '/#/education')
      || (location.pathname === '/skills' && path === '/#/skills')
      || (location.pathname === '/projects' && path === '/#/projects')
      || (location.pathname === '/coding-competitions' && path === '/#/coding-competitions')
      || (location.pathname === '/contact' && path === '/#/contact')

  }

  return (
    <nav className="fixed top-0 w-full z-41 bg-black border-gray-800 backdrop-blur-lg border-b  shadow-md transition-colors duration-300 text-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-mono text-xl font-bold ">
            Mamoun's <span className="text-blue-500">Portfolio</span>
          </Link>

          <div className="flex items-center gap-4">

            <div className="relative cursor-pointer z-40 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <List aria-label="Toggle Menu" />
            </div>

            <div className="flex flex-row items-center gap-5">

              <button
                onClick={toggleTheme}
                className={`text-gray-900 dark:text-white cursor-pointer`}

              >
                {theme === "dark" ? <Moon className="text-gray-200" aria-label="Toggle Theme" /> : <Sun className="text-gray-200" aria-label="Toggle Theme" />}
              </button>



              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/" className=  {`hover:text-blue-500  ${isActive('/') ? 'text-blue-500' : ''}`}>Home</Link>
                <Link to="/experience" className=  {`hover:text-blue-500  ${isActive('/experience') ? 'text-blue-500' : ''}`}>Experience</Link>
                <Link to="/education" className=  {`hover:text-blue-500  ${isActive('/education') ? 'text-blue-500' : ''}`}>Education</Link>
                <Link to="/skills" className=  {`hover:text-blue-500  ${isActive('/skills') ? 'text-blue-500' : ''}`}>Skills</Link>
                <Link to="/projects" className={  `hover:text-blue-500   ${isActive('/projects') ? 'text-blue-500' : ''}`}>Projects</Link>
                <Link to="/coding-competitions" className=  {`hover:text-blue-500  ${isActive('/coding-competitions') ? 'text-blue-500' : ''}`}>Coding Competitions</Link>
                <Link to="/contact" className={`hover:text-blue-500    ${isActive('/contact') ? 'text-blue-500' : ''}`}>Contact Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden ">
            <Link to="/" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Home</Link>
            <Link to="/about" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>About</Link>
            <Link to="/projects" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Projects</Link>
            <Link to="/contact" className={`block hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}>Contact</Link>
        </div>
      )} */}
    </nav>
  );
}
