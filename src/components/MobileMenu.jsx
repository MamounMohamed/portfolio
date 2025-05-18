import { Link } from "react-router-dom";
export default function MobileMenu({ menuOpen, setMenuOpen }) {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out overflow-hidden
        ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
    `}>
            <button onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-absolute-white text-3xl focus:outline-none cursor-pointer">
                &times;
            </button>

            <Link to="/"
                onClick={() => setMenuOpen(false)}

                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Home</Link>

            <Link to="/experience"

                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}> Experience </Link>

            <Link to="/education"

                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Education</Link>


            <Link to="/skills"

                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>  Skills   </Link>

            <Link to="/projects"

                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Projects</Link>


            <Link to="/coding-competitions"

                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Coding Competitions</Link>

            <Link to="/contact"

                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-absolute-white my-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Contact Me</Link>



        </div>
    );
}