"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ServiceTab {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

interface Service2Props {
  mainTitle: string;
  tabs: ServiceTab[];
}

const Service2: React.FC<Service2Props> = ({ mainTitle, tabs }) => {
  const [textHasAppeared, setTextHasAppeared] = useState(false);
  const [imageHasAppeared, setImageHasAppeared] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !textHasAppeared) {
          setTextHasAppeared(true);
          textObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !imageHasAppeared) {
          setImageHasAppeared(true);
          imageObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }
    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, [textHasAppeared, imageHasAppeared]);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Seção da Imagem */}
          <div
            ref={imageRef}
            className={`
              lg:col-span-6
              transform transition-all duration-1000 ease-in-out
              ${imageHasAppeared ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div className="relative h-full">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  id={tab.id}
                  className={index === 0 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-item`}
                >
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl w-full h-full object-cover"
                    src={tab.imageUrl}
                    alt={`${tab.title} feature image`}
                    width={560}
                    height={720}
                  />
                </div>
              ))}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-[#01122E]"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Seção do Texto e Abas */}
          <div
            ref={textRef}
            className={`
              mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2
              transform transition-all duration-1000 ease-in-out delay-500
              ${textHasAppeared ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
              {mainTitle}
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl ${index === 0 ? "active" : ""}`}
                  id={`${tab.id}-item`}
                  aria-selected={index === 0}
                  data-hs-tab={`#${tab.id}`}
                  aria-controls={tab.id}
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800">
                      {tab.icon}
                    </span>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        {tab.title}
                      </span>
                      <span className="block mt-1 text-gray-800">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
        {/* Fundo cinza */}
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Service2;