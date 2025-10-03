"use client";

import React, { useEffect } from "react";
import type { IStaticMethods } from "preline/preline";

import ButtonBlue from "./ButtonBlue";

// Declara a variável global do Preline para o TypeScript
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

// Define a estrutura de um único slide
interface Slide {
  brand: string;
  title: string;
  imageUrl: string;
}

// Define as props que o nosso componente de carrossel vai receber
interface CarouselSliderProps {
  slides: Slide[];
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ slides }) => {
  useEffect(() => {
    // Inicializa o carrossel da Preline quando o componente é montado no cliente
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, []); // O array vazio garante que isso rode apenas uma vez

  return (
    // <!-- Slider -->
    <div className="px-4 sm:px-6 lg:px-8 pt-12 my-8">
      <div
        data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-120 md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl ">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {slides.map((slide, index) => (
              // <!-- Item -->
              <div className="hs-carousel-slide" key={index}>
                <div
                  className="h-120 md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${slide.imageUrl}')` }}
                >
                  <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 text-shadow-lg ">
                    <span className="block text-white">{slide.brand}</span>
                    <span className="block text-white text-xl md:text-3xl text-shadow-lg ">
                      {slide.title}
                    </span>
                    <div className="mt-5">
                      <ButtonBlue name={"More"} url={"../pages/Contact.html"} />
                    </div>
                  </div>
                </div>
              </div>
              // <!-- End Item -->
            ))}
          </div>
        </div>

        {/* <!-- Arrows --> */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-hidden focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-hidden focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        </button>
        {/* <!-- End Arrows --> */}
      </div>
    </div>
    // <!-- End Slider -->
  );
};

export default CarouselSlider;
