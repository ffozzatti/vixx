"use client";

import Button from "@/app/components/Button";
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

            <div className="mt-6 grid text-center">
              <Button name={"Send"} url={"#"} />
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

      
    </div>
    // <!-- End Contact Us -->
  );
};

export default Contact;
