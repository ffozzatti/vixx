import React from "react";
import ButtonBlue from "./ButtonBlue";

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
}) => {
  // Estilo dinâmico para a imagem de fundo
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <section
      // A MÁGICA ACONTECE AQUI 👇
      // O bg-fixed agora só é aplicado em telas grandes (lg:)
      // O bg-local é aplicado por padrão para dispositivos móveis
      className="overflow-hidden bg-cover bg-center bg-no-repeat bg-local lg:bg-fixed"
      style={sectionStyle}
    >
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24 ">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right flex-col flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {title}
          </h2>

          <p className="hidden text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-center">
            {description}
          </p>

          <div className="mt-4 sm:mt-8">
            <ButtonBlue name={"Contact"} url={"../pages/Contact.html"}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividerParallax;