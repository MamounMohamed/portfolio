// src/components/ContactCard.js
import React from 'react';
import { toast } from 'react-toastify';

const ContactCard = ({ name, link }) => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success(`${name} copied to clipboard!`, {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).catch(err => {
            toast.error(`Failed to copy ${name}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6 ">
            <h4 className="text-xl font-bold mb-4 text-white">{name}</h4>

            {name !== "Email" && name !== "Phone" &&
                <div className = 'grid grid-cols-1 gap-2 items-center xl:grid-cols-2'>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-800  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300">
                        Open
                    </a>
                    <button className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transition-all duration-300 cursor-pointer" onClick={() => copyToClipboard(link)}>
                        Copy Link
                    </button>
                </div>
            }
            {name === "Email" &&
                <div className = 'grid grid-cols-1 gap-2  items-center xl:grid-cols-2'>
                    <a href={`mailto:${link}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-800  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300">
                        Email Me
                    </a>
                    <button className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transition-all duration-300 cursor-pointer" onClick={() => copyToClipboard(link)}>
                        Copy Email
                    </button>
                </div>
            }
            {name === "Phone" &&
                <div className = 'grid grid-cols-1 gap-2  items-center xl:grid-cols-2'>
                    <a href={`tel:${link}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-800  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transistion-all duration-300">
                        Call Me
                    </a>
                    <button className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.4)] transition transition-all duration-300 cursor-pointer" onClick={() => copyToClipboard(link)}>
                        Copy Phone
                    </button>
                </div>
            }
        </div>
    );
};

export default ContactCard;