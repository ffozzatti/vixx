import React from "react";

interface ButtonProps {
  name: string,
  url: string,
}


const Button: React.FC<ButtonProps> = ({name, url}) => {
    
    return (
        <div>
            <a
              className="group inline-flex items-center gap-x-2 py-2 px-8 bg-[#01122E] hover:bg-white font-medium text-sm text-white hover:text-[#01122E] border-2 border-[#EEE] hover:border-solid rounded-full focus:outline-hidden"
              href={url}
            >              
              {name}
            </a>
        
        </div>
    )
}

export default Button