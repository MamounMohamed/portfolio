import { Link } from 'react-router-dom';
import { useEffect } from "react";
export default function miniNavbar() {
    
    return (
        <div className="fixed top-0 left-0 w-full z-40 bg-black backdrop-blur-lg border-b border-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="font-mono text-xl font-bold text-white">
                        Mamoun's <span className="text-blue-500">Portfolio</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}