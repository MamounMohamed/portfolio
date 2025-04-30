export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20  text-white">
            <div className="text-center px-4 z-10 max-w-4xl">

                <h2 className="text-center text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">About Me</h2>

                <h3 className="text-center text-2xl font-bold mb-4">Education</h3>
                <div className="8 max-w-2xl mx-auto text-left px-4 ">
                    <p className="font-semibold">Faculty of Computers and Data Science, Alexandria University</p>
                    <p>Bachelor's of Science in Computer Science, CGPA: 3.52 (A-)</p>
                    <p>Sep 2019 – Jun 2023</p>
                    <p className="mt-2">Head of Training Committee, FCDS Alexandria ICPC Community</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Coached and prepared 120+ students and 40+ teams for local and national collegiate programming contests.</li>
                        <li>Prepared learning material, practice sheets, contests, and onsite sessions.</li>
                    </ul>
                </div>

                <h3 className="text-center text-2xl font-bold mb-4">Skills</h3>
                <div className="8 max-w-2xl mx-auto text-left px-4">
                    <ul className="list-disc list-inside text-gray-400">
                        <li><strong>Languages:</strong> C++, Java, Python, PHP, C#, HTML, CSS, JavaScript, TypeScript, SQL</li>
                        <li><strong>Frontend:</strong> React.js, Next.js, Bootstrap, TailwindCSS</li>
                        <li><strong>Backend:</strong> Laravel, Django, Spring Boot</li>
                        <li><strong>DevOps:</strong> Docker, AWS (EC2), Google Cloud Platform (GCF, GCS), Hostinger (VPS, Cloud)</li>
                        <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Redis</li>
                        <li><strong>Tools:</strong> VS Code, Git, GitHub, Postman, Docker Hub</li>
                        <li><strong>Concepts:</strong> Data Structures, Algorithms, OOP, Design Patterns, SOLID Principles, REST API, MVC Architecture, Unit Testing</li>
                    </ul>
                </div>

                <h3 className="text-center text-2xl font-bold mb-4">Coding Competitions</h3>
                <div className="8 max-w-2xl mx-auto text-left px-4" >
                    <ul className="list-disc list-inside text-gray-400">
                        <li><strong>ACPC Finalist, 2023</strong>: Reached regional finals at the Arab & Africa Collegiate Programming Contest, ranking in the top 1% out of 3600+ teams.</li>
                        <li><strong>ECPC Finalist 4x, 2020, 2021, 2022, 2023</strong>: Reached national finals of the Egyptian Collegiate Programming Contest, ranking in the top 10% out of 2500+ teams.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}