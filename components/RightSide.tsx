import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai"; // Import the copy icon

const RightSide = () => {
  const email = "safwansaffuh@gmail.com"; // Store email in a variable
  const [tooltip, setTooltip] = useState(""); // State for tooltip message

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setTooltip("Email copied to clipboard!"); // Set tooltip message on click
      setTimeout(() => setTooltip(""), 2000); // Clear tooltip after 2 seconds
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  const handleMouseEnter = () => {
    setTooltip("Copy email"); // Set tooltip message on hover
  };

  const handleMouseLeave = () => {
    setTooltip(""); // Clear tooltip on mouse leave
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 pb-8 text-textLight relative">
      <a href="mailto:safwansaffuh@gmail.com" target="_blank" rel="noopener noreferrer">
        <p className="text-sm rotate-90 w-[390px] tracking-widest text-textGreen">
          {email}
        </p>
      </a>
      <span className="w-[2px] h-44 bg-textDark inline-flex"></span>
      
      {/* Copy Icon */}
      <button 
        onClick={copyToClipboard} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        className="text-textGreen hover:scale-125 transition duration-300 relative"
      >
        <AiOutlineCopy size={20} />
      </button>

      {/* Tooltip */}
      {tooltip && (
        <div className="absolute bottom-8 left-[-15px] transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded px-2 py-1 z-10">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default RightSide;
