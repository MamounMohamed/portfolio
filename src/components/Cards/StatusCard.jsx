// src/components/DetailCard.js
import React from 'react';

const StatusCard = ({ title, status, items }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6 text-left">
            <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
           {
           status === "Completed" ? <span className="bg-green-100 text-green-800 text-xs font-medium me-2 p-2 rounded-sm dark:bg-gray-700 dark:text-green-400 border border-green-400 mb-2"> {status} </span> :
           status === "In Progress" ? <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 p-2 rounded-sm dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400 mb-2"> {status} </span> :
           <span className="bg-red-100 text-red-800 text-xs font-medium me-2 p-2 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400 mb-2"> {status} </span>
}
            <ul className="list-disc list-inside text-gray-400 mt-4" >
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default StatusCard;