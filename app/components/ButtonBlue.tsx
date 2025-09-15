// components/Button.tsx
'use client'; 

import React from 'react';

interface ButtonProps {
  name: string;
  url: string;
}

const ButtonBlue: React.FC<ButtonProps> = ({ name, url }) => { // Name changed to Button
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    window.open(url, "_blank");
  };

  return (
    <button 
      onClick={handleClick}
      className="cursor-pointer group inline-flex items-center justify-center gap-x-2 py-2 px-8 bg-[#01122E] hover:bg-white font-medium text-sm text-white hover:text-[#01122E] border-2 border-[#EEE] hover:border-solid rounded-full focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
    >
      {name}
    </button>
  );
};

export default ButtonBlue; // Exported as Button