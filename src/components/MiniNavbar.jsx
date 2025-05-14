import { Link } from 'react-router-dom';
import { Undo2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
export default function MiniNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    setIsDarkMode(isDark);
  };


  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setIsDarkMode(isDark);
  },[])
  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-gray-800 backdrop-blur-lg border-b border-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex flex-row items-center gap-2 font-mono text-sm font-bold text-gray-200 "
          >
            <Undo2 />
            <span>Back to Homepage</span>
          </Link>

          <button onClick={toggleTheme} className="text-gray-900 dark:text-white"> {isDarkMode ? <Sun className="w-5 h-5 text-gray-100" /> : <Moon className="w-5 h-5 text-gray-900" />} </button>
        </div>
      </div>
    </div>
  );
}
