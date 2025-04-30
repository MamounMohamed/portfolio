export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center relative bg-gray-900 text-white py-20">
            <div className="text-center px-4 z-10">

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Contact Me</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl text-left px-4">
                    Hello, I am Mamoun, a Full Stack Developer with over 2 years of experience building scalable web applications using modern technologies like React.js, Next.js, Laravel, and Django. Proven ability to collaborate with cross-functional teams, mentor fresh programmers, and deliver high-quality solutions under tight deadlines. Skilled in problem-solving with a strong background in competitive programming.
                </p>

                <div className="flex flex-wrap justify-center">
                    <div className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Contact Me</div>
                            <p className="text-gray-400 text-base">
                                You can contact me through the following methods:
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="https://github.com/mamoudes" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/mamoudes/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                LinkedIn
                            </a>
                            <a href="https://twitter.com/mamoudes" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                Twitter
                            </a>
                        </div>
                    </div>                    
                </div>

            </div>
        </section>
    );
};