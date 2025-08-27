import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 p-2 transition-colors duration-300 ease-in-out ${
          // Alteração 1: Fundo inicial branco (bg-white)
          isScrolled ? 'bg-[#01122E] shadow-lg' : 'bg-white shadow-md'
          }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Image
              className="drop-shadow-xl"
              src="/assets/logo_alt.png"
              alt="Logo"
              width={90}
              height={90}
            />
          </div>

          <div className="flex-grow hidden md:flex justify-center space-x-4">
            {/* Alteração 2 e 3: Cor do texto dinâmica e novo hover */}
            <a href="#" className={`${isScrolled ? 'text-white' : 'text-gray-800'} hover:text-[#01122E] dark:hover:text-blue-400`}>Home</a>
            <a href="#about" className={`${isScrolled ? 'text-white' : 'text-gray-800'} hover:text-[#01122E] dark:hover:text-blue-400`}>About</a>
            <a href="#service" className={`${isScrolled ? 'text-white' : 'text-gray-800'} hover:text-[#01122E] dark:hover:text-blue-400`}>Services</a>
            <a href="#service" className={`${isScrolled ? 'text-white' : 'text-gray-800'} hover:text-[#01122E] dark:hover:text-blue-400`}>Portifolio</a>
            <a href="#contact" className={`${isScrolled ? 'text-white' : 'text-gray-800'} hover:text-[#01122E] dark:hover:text-blue-400`}>Contact</a>
          </div>

          <div className="hidden md:block">
            <Button name={"More"} url={"../pages/Contact"} />
          </div>

          <div className="md:hidden">
            <button
              // Cor do ícone do menu também muda dinamicamente
              className={`${isScrolled ? 'text-white' : 'text-gray-800'} cursor-pointer`}
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
            <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-[#01122E] dark:hover:text-blue-400">Home</a>
            <a href="/about" className="text-gray-800 dark:text-gray-200 hover:text-[#01122E] dark:hover:text-blue-400">About</a>
            <a href="/services" className="text-gray-800 dark:text-gray-200 hover:text-[#01122E] dark:hover:text-blue-400">Services</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;