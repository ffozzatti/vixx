import React from "react";
import Image from "next/image"; // Importa o componente Image
import ButtonInverse from "./ButtonInverse";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-[#000080] p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Engenharia que transforma o futuro.
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Somos uma empresa de engenharia dedicada a construir e inovar. Com projetos que vão da infraestrutura à sustentabilidade, nossa missão é entregar soluções de alta qualidade, seguras e eficientes, superando as expectativas de nossos clientes.
              </p>

              <div className="mt-4 md:mt-8">
                <ButtonInverse name={"More"} url={"#"} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="Pessoa trabalhando em um laptop"
              src="/assets/about-1.jpeg"
              width={654}
              height={800}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <Image
              alt="Pessoa sorrindo e usando óculos"
              src="/assets/about-2.jpeg"
              width={774}
              height={800}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
