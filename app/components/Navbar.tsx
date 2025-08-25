import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="p-2 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-800 dark:text-white text-2xl font-bold flex items-center gap-2">
            <Image
              src="/assets/logo_alt.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </div>

          <div className="flex-grow hidden md:flex justify-center space-x-4">
            <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">Home</a>
            <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">About</a>
            <a href="#service" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">Services</a>
            <a href="#service" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">Portifolio</a>
            <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">Contact</a>
          </div>

          <div className="hidden md:block">
            <Button name={"More"} url={"../pages/Contact"} />
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-800 dark:text-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu responsivo que aparece e desaparece */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-2 bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">Home</a>
            <a href="/about" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">About</a>
            <a href="/services" className="text-gray-800 dark:text-gray-200 hover:text-[#000080] dark:hover:text-blue-400">Services</a>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;