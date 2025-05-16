import React, { useEffect, useState } from "react";

const darkMode = localStorage.getItem("theme") === "dark";
export default function LoadingScreen({onComplete}) {
  const [text,setText] = useState("");
    const fullText = "<Mamoun's Portofolio/>;";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);        
            }
        }, 100);
        return () => {
            clearInterval(interval);
        };

    }, [onComplete]);
  return (
    <div className={`fixed ${darkMode?'bg-white' : 'bg-black'} inset-0 z-50  flex flex-col justify-center items-center`}>
      <div className={`mb-4 text-2xl md:text-3xl lg:md-4xl font-mono font-bold ${darkMode? 'text-gray-900' : 'text-gray-100'} text-center`}>
      {text} <span className="animate-blink">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-200 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">

        </div>
      </div>
    </div>
  );
};