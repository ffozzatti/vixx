import React from "react";

interface ButtonProps {
  name: string,
  url: string,
}


const ButtonInverse: React.FC<ButtonProps> = ({name, url}) => {
    
    return (
        <div>
            <a
              className="group inline-flex items-center gap-x-2 py-2 px-8 bg-white font-medium text-sm text-[#01122E] hover:bg-[#01122E] hover:text-white border-2 border-[#01122E] hover:border-white rounded-full focus:outline-hidden"
              href={url}
            >              
              {name}
            </a>
        
        </div>
    )
}

export default ButtonInverse