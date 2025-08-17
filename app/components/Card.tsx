import React from "react";
import Image from "next/image"; // Importa o componente Image

// Define a estrutura das props que o componente Card irá receber
interface CardProps {
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  tag,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="bg-blue-200 dark:bg-blue-900 rounded-xl shadow-lg max-w-xs mx-auto p-4 m-4">
      <div className="bg-white dark:bg-gray-700 rounded-lg h-36 flex items-center justify-center mb-4 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-4">
        <span className="text-xs font-semibold text-blue-900 dark:text-blue-300 bg-blue-300 dark:bg-blue-700 px-2 py-1 rounded">
          {tag}
        </span>
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mt-2">
          {title}
        </h2>
        <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
          {description}
        </p>
      </div>

      <div>
        <button className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
