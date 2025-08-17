"use client";

import React from "react";

// Define a estrutura para cada bloco de ícone na parte inferior
interface IconBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

// Define as props que o componente Contact irá receber
interface ContactProps {
  iconBlocks: IconBlockProps[];
}

const Contact: React.FC<ContactProps> = ({ iconBlocks }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    details: "",
  });

  // Função para lidar com a mudança nos inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Form data submitted:", formData);
    alert("Inquiry sent! Check the console for the form data.");
  };

  return (
    // <!-- Contact Us -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-neutral-950">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold  sm:text-4xl ">Contact us</h1>
          <p className="mt-1 ">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 ">
          <h2 className="mb-8 text-xl font-semibold ">Fill in the form</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 lg:gap-6">
              {/* <!-- Grid --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm  font-medium "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm  font-medium "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              {/* <!-- Grid --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm  font-medium "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div>
                <label
                  htmlFor="details"
                  className="block mb-2 text-sm  font-medium "
                >
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                ></textarea>
              </div>
            </div>
            {/* <!-- End Grid --> */}

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Send inquiry
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
        {/* <!-- End Card --> */}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
        {iconBlocks.map((block, index) => (
          // <!-- Icon Block -->
          <a
            key={index}
            className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
            href={block.href}
          >
            <div className="size-9 mx-auto">
              {block.icon}
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">
                {block.title}
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                {block.description}
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                {block.linkText}
                <svg
                  className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          // <!-- End Icon Block -->
        ))}
      </div>
    </div>
    // <!-- End Contact Us -->
  );
};

export default Contact;
