import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ButtonBlue from './ButtonBlue';

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
          isScrolled ? 'bg-[#01122E] shadow-lg' : 'bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="text-2xl font-bold flex items-center gap-2">
            
            <Image
              className="drop-shadow-xl"
              src={isScrolled ? '/assets/logo_alt.png' : '/assets/logo_azul.png'}
              alt="Logo"
              width={90}
              height={90}
            />
          </div>

          <div className="flex-grow hidden md:flex justify-center space-x-4">
            <a href="#" className={`${isScrolled ? 'text-white hover:underline' : 'text-gray-800 hover:text-[#01122E]'}`}>Home</a>

            <a href="#about" className={`${isScrolled ? 'text-white hover:underline' : 'text-gray-800 hover:text-[#01122E]'}`}>Our Story</a>

            <a href="#service" className={`${isScrolled ? 'text-white hover:underline' : 'text-gray-800 hover:text-[#01122E]'}`}>Steps</a>

            <a href="#service2" className={`${isScrolled ? 'text-white hover:underline' : 'text-gray-800 hover:text-[#01122E]'}`}>Services</a>

            <a href="#portifolio" className={`${isScrolled ? 'text-white hover:underline' : 'text-gray-800 hover:text-[#01122E]'}`}>Portfolio</a>

            <a href="#contact" className={`${isScrolled ? 'text-white hover:underline' : 'text-gray-800 hover:text-[#01122E]'}`}>Contact us</a>
          </div>

          <div className="hidden md:block">
            <ButtonBlue name={"Get a free Quote"} url={"../pages/Contact"} />
          </div>

          <div className="md:hidden">
            <button
              className={`${isScrolled ? 'text-white' : 'text-gray-800'} cursor-pointer`}
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu responsivo que ocupa a tela toda */}
        <div className={`
          md:hidden
          ${isMobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}
          bg-[#01122E]
          text-white
          transition-opacity duration-300 ease-in-out
        `}>
          {/* Botão de fechar */}
          <button 
            className="absolute top-4 right-4 text-white text-3xl font-bold" 
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-4 text-3xl font-medium">
            <a href="#" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" onClick={toggleMobileMenu}>Our Story</a>
            <a href="#service" onClick={toggleMobileMenu}>Steps</a>
            <a href="#service2" onClick={toggleMobileMenu}>Services</a>
            <a href="#portifolio" onClick={toggleMobileMenu}>Portfolio</a>
            <a href="#contact" onClick={toggleMobileMenu}>Contact us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;