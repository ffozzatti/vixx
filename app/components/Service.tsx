'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ButtonInverse from './ButtonInverse';

// Define a estrutura de um passo da timeline
interface TimelineStep {
  title: string;
  description: string;
}

// Define as props que o componente Service irá receber
interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  steps: TimelineStep[];
}

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  imageUrl,
  steps,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#000080]" id="service">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            {title}
          </h2>
          <p className="mt-1 text-neutral-400">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <Image
              className="w-full object-cover rounded-xl"
              src={imageUrl}
              alt="Features Image"
              width={480}
              height={600}
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-white text-xs font-medium uppercase">
                Steps
              </h3>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <button
                    className="flex items-center w-full text-left focus:outline-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="text-sm lg:text-base text-white font-semibold">
                      {step.title}
                    </span>
                    <span className="ml-auto text-white transition-transform duration-300">
                      {openIndex === index ? '▲' : '▼'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 text-sm lg:text-base text-neutral-400">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <ButtonInverse name={"Contact"} url={"#"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;