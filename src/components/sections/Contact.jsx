import ContactCard from '../Cards/ContactCard';
import contactsData from '../../data/contacts.json';
import MiniNavbar from '../MiniNavbar';
export default function Contact() {
    return (
        <>
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center relative  text-white py-20">
            <div className="text-center px-4 z-10">

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Contact Me</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl m-8 ">
                    {contactsData.map((contact, index) => (
                        <ContactCard key={index} name={contact.name} link={contact.link} />
                    ))}

                </div>
            </div>
        </section>
        </>
    );
};