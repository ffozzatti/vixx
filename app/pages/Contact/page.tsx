"use client";

import React from "react";

import { useForm, ValidationError } from "@formspree/react";
import ButtonForm from "@/app/components/ButtonForm";


const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xeolrzqz");

  if (state.succeeded) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-neutral-950">
        <div className="text-center p-8 bg-green-100 rounded-xl">
          <p className="text-lg font-semibold text-green-800">
            Message sent successfully! We appreciate your contact.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-neutral-950" id="contact">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact us</h1>
          <p className="mt-1">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 className="mb-8 text-xl font-semibold">Fill in the form</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 lg:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="(nnn) nnn-nnnn "
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <ValidationError prefix="Phone Number" field="phoneNumber" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block mb-2 text-sm font-medium">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  required
                ></textarea>
                <ValidationError prefix="Details" field="details" errors={state.errors} />
              </div>
            </div>

            <div className="mt-6 grid text-center">
              <ButtonForm name={"Send"} type="submit" disabled={state.submitting} url={"#"} />
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;