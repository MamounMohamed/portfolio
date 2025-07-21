import React from 'react';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-6 text-left">
      <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium 
                 hover:bg-gray-600 transition-colors duration-200 
                 transform hover:scale-105 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
