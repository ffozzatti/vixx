import React from "react";
import Image from "next/image"; // Importa o componente Image

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
    <div className="bg-[#000080]">
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

            <a
              className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
              href="#"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path
                  className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                  d="M14.05 2a9 9 0 0 1 8 7.94"
                ></path>
                <path
                  className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                  d="M14.05 6A5 5 0 0 1 18 10"
                ></path>
              </svg>
              Schedule a call
            </a>
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
