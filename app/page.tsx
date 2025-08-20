"use client";

import React from "react";

import { useEffect, useState } from "react";

import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";



// Importação dos componentes criados
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import About from "./components/About";
import Features from "./components/Features";
import Service from "./components/Service";
import Service2 from "./components/Service2";

import DividerParallax from "./components/DividerParallax";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

const App: React.FC = () => {

  const [showSplash, setShowSplash] = useState(true);

  const handleFinishSplash = () => {
    setShowSplash(false);
  };



  // --- DADOS PARA OS COMPONENTES (PROPS) ---

  const carouselData = [
    {
      brand: "Futuro.",
      title: "Projetamos o futuro, um pilar de cada vez.",
      imageUrl: "/assets/banner-1.jpeg",
    },
    {
      brand: "Sonhos",
      title: "Seu objetivo é nosso ponto de partida. Nossa expertise é o caminho.",
      imageUrl:
        "/assets/banner-2.jpeg",
    },
    {
      brand: "Credibildiade",
      title: "Construindo parcerias sólidas para resultados duradouros.",
      imageUrl:
        "/assets/banner-3.jpeg",
    },
  ];

  const featuresData = [
    {
      title: "Projetos Realizados",
      value: "50+",
      description: "Dos diferentes tipos de serviços",
    },
    {
      title: "Familias impactadas",
      value: "220+",
      description: "Sonhos tirados do papel",
    },
    {
      title: "Anos de Mercado",
      value: "10+",
      description: "Respeito e confiança",
    },
  ];

  const serviceData = {
    title: "Etapas",
    description:
      "A Ideia aqui é mostrar como a empresa trabalha, quais são as etapas do serviço prestado.",
    imageUrl:
      "/assets/logo_alt.png",
    steps: [
      {
        title: "Reunião de alinhamento",
        description: "Descrição da etapa 1",
      },
      {
        title: "Proposta comercial",
        description: "Descrição da etapa 2",
      },
      {
        title: "Desenvolvimento do projeto",
        description: "Descrição da etapa 3",
      },
      {
        title: "Construção",
        description: "Descrição da etapa 4",
      },
    ],
  };

  const service2Data = {
    mainTitle: "Aqui Vamos colocar os tipo de serviços que voces fazem",
    tabs: [
      {
        id: "tabs-with-card-1",
        title: "Construção de Decks",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-1.jpeg",
        icon: (
          <svg
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
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
        ),
      },
      {
        id: "tabs-with-card-2",
        title: "Reforma de interiores",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-2.jpeg",
        icon: (
          <svg
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
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
        ),
      },
      {
        id: "tabs-with-card-3",
        title: "Construção de escadas",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-3.jpeg",
        icon: (
          <svg
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
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
        ),
      },
      {
        id: "tabs-with-card-4",
        title: "Estruturação de casas",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-4.jpeg",
        icon: (
          <svg
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
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
        ),
      },

    ],
  };

  const dividerParallaxData = {
    backgroundImageUrl:
      "/assets/paralax-image.jpeg",
    title: " Construímos seu próximo projeto",
    description:
      "Vamos dar vida à sua visão. Entre em contato conosco para discutirmos como nossa experiência em engenharia pode transformar suas ideias em realidade, com soluções inovadoras e personalizadas.",
    buttonText: "Get Yours Today",
  };

  const contactData = [
    {
      icon: (
        <svg
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
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      title: "Knowledgebase",
      description: "We're here to help with any questions or code.",
      linkText: "Contact support",
      href: "#",
    },
    {
      icon: (
        <svg
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
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      ),
      title: "FAQ",
      description: "Search our FAQ for answers to anything you might ask.",
      linkText: "Visit FAQ",
      href: "#",
    },
    {
      icon: (
        <svg
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
          <path d="m7 11 2-2-2-2" />
          <path d="M11 13h4" />
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        </svg>
      ),
      title: "Developer APIs",
      description: "Check out our development quickstart guide.",
      linkText: "Contact sales",
      href: "#",
    },
  ];

  const footerData = {
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    usefulLinks: [

      { href: "#", text: "Terms of Service" },
      { href: "#", text: "Privacy Policy" },
    ],
    contactInfo: {
      email: "support@vixconstruction.com",
      phone: "(123) 456-7890",
      address: "123 Main Street, Anytown, USA",
    },
    socialLinks: [
      {
        href: "#",
        label: "Instagram",
        icon: (
          <BsInstagram />
        ),
      },
      {
        href: "#",
        label: "Linkedin",
        icon: (
          <BsLinkedin />
        ),
      },
      {
        href: "#",
        label: "X",
        icon: (
          <BsTwitterX />
        ),
      },
    ],
    copyrightText: "Your Company",
  };

  return (
    <main className="font-sans antialiased text-gray-800 bg-gray-50 ">
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onFinish={handleFinishSplash} />}
      </AnimatePresence>

      {!showSplash && (
        <>

          {/* Condicionalmente renderiza a splash screen */}

          <Navbar />
          <CarouselSlider slides={carouselData} />
          <About />
          <Features stats={featuresData} />
          <Service {...serviceData} />
          <Service2 mainTitle={service2Data.mainTitle} tabs={service2Data.tabs} />
          <DividerParallax {...dividerParallaxData} />
          <Contact iconBlocks={contactData} />
          <Footer {...footerData} />
        </>
      )}
    </main>
  );
};

export default App;
