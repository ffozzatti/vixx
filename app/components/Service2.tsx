"use client";

import React from "react";
import Image from "next/image"; // Importa o componente Image

// Define a estrutura de uma única aba (tab)
interface ServiceTab {
  id: string; // Ex: "tabs-with-card-1"
  title: string;
  description: string;
  icon: React.ReactNode; // Permite passar um componente SVG como ícone
  imageUrl: string;
}

// Define as props que o componente Service2 irá receber
interface Service2Props {
  mainTitle: string;
  tabs: ServiceTab[];
}

const Service2: React.FC<Service2Props> = ({ mainTitle, tabs }) => {
  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* <!-- Grid --> */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
              {mainTitle}
            </h2>

            {/* <!-- Tab Navs --> */}
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
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${index === 0 ? "active" : ""}`}
                  id={`${tab.id}-item`}
                  aria-selected={index === 0}
                  data-hs-tab={`#${tab.id}`}
                  aria-controls={tab.id}
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <span className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                      {tab.icon}
                    </span>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        {tab.title}
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
            {/* <!-- End Tab Navs --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-6">
            <div className="relative">
              {/* <!-- Tab Content --> */}
              <div>
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={index === 0 ? "" : "hidden"}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-item`}
                  >
                    <Image
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src={tab.imageUrl}
                      alt={`${tab.title} feature image`}
                      width={560}
                      height={720}
                    />
                  </div>
                ))}
              </div>
              {/* <!-- End Tab Content --> */}

              {/* <!-- SVG Element --> */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
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
              {/* <!-- End SVG Element --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Background Color --> */}
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
        </div>
        {/* <!-- End Background Color --> */}
      </div>
    </div>
    // <!-- End Features -->
  );
};

export default Service2;
