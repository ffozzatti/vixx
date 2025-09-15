import React from "react";

interface ButtonProps {
  name: string,
  url: string,
}


const ButtonInverse: React.FC<ButtonProps> = ({name, url}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); 
      window.open(url, "_blank");
    };
    
    return (
        <div>
            <button
            onClick={handleClick}
              className="cursor-pointer group inline-flex items-center gap-x-2 py-2 px-8 bg-white font-medium text-sm text-[#01122E] hover:bg-[#01122E] hover:text-white border-2 border-[#01122E] hover:border-white rounded-full focus:outline-hidden"

            >
              {name}
            </button>
        
        </div>
    )
}

export default ButtonInverse;