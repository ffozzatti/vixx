import React from "react";

// Adicione as propriedades 'type' e 'disabled' à interface
interface ButtonProps {
  name: string;
  url?: string; // Tornamos o 'url' opcional, já que não será usado em botões de formulário
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonForm: React.FC<ButtonProps> = ({ name, type = "button", disabled = false, url }) => {
  return (
    <div>
      <button
        // Use a tag <button> para formulários
        type={type}
        disabled={disabled}
        className=" cursor-pointer group inline-flex items-center justify-center gap-x-2 py-2 px-8 bg-[#01122E] hover:bg-white font-medium text-sm text-white hover:text-[#01122E] border-2 border-[#EEE] hover:border-solid rounded-full focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonForm;