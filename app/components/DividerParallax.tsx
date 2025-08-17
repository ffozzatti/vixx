import React from "react";

// Define a estrutura das props para o componente
interface DividerParallaxProps {
  backgroundImageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string; // O link do botão é opcional
}

const DividerParallax: React.FC<DividerParallaxProps> = ({
  backgroundImageUrl,
  title,
  description,
  buttonText,
  buttonLink = "#", // Valor padrão para o link
}) => {
  // Estilo dinâmico para a imagem de fundo
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <section
      // A MÁGICA ACONTECE AQUI 👇
      className="overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={sectionStyle}
    >
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24 ">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right flex-col flex items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {title}
          </h2>

          <p className="hidden text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            {description}
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href={buttonLink}
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividerParallax;