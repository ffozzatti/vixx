import React from "react";

// Define a estrutura de cada item de estatística
interface FeatureStat {
  title: string;
  value: string;
  description: string;
}

// Define as props que o componente Features irá receber
interface FeaturesProps {
  stats: FeatureStat[];
}

const Features: React.FC<FeaturesProps> = ({ stats }) => {
  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex justify-center text-center">
      {/* <!-- Grid --> */}
      <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        {stats.map((stat, index) => (
          // <!-- Stats -->
          <div key={index}>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              {stat.title}
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              {stat.value}
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              {stat.description}
            </p>
          </div>
          // <!-- End Stats -->
        ))}
      </div>
      {/* <!-- End Grid --> */}
    </div>
    // <!-- End Features -->
  );
};

export default Features;
