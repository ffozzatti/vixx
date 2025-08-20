import React from "react";
import Image from "next/image"; // Importa o componente Image
import ButtonInverse from "./ButtonInverse";

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
  return (
    // <!-- Approach -->
    <div className="bg-[#000080]" id="service">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            {title}
          </h2>
          <p className="mt-1 text-neutral-400">{description}</p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
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
          {/* <!-- End Col --> */}

          {/* <!-- Timeline --> */}
          <div>
            {/* <!-- Heading --> */}
            <div className="mb-4">
              <h3 className="text-white text-xs font-medium uppercase">
                Steps
              </h3>
            </div>
            {/* <!-- End Heading --> */}

            {steps.map((step, index) => (
              // <!-- Item -->
              <div className="flex gap-x-5 ms-1" key={index}>
                {/* <!-- Icon --> */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                      {index + 1}
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">{step.title}:</span>{" "}
                    {step.description}
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              // <!-- End Item -->
            ))}

            <ButtonInverse name={"Contact"} url={"#"} />
          </div>
          {/* <!-- End Timeline --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </div>
    // <!-- End Approach -->
  );
};

export default Service;
