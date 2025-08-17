import React from "react";

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

const App: React.FC = () => {
  // --- DADOS PARA OS COMPONENTES (PROPS) ---

  const carouselData = [
    {
      brand: "Nike React",
      title: "Rewriting sport's playbook for billions of athletes",
      imageUrl:
        "/assets/banner-1.jpeg",
    },
    {
      brand: "CoolApps",
      title: "From mobile apps to gaming consoles",
      imageUrl:
        "/assets/banner-2.jpeg",
    },
    {
      brand: "Grumpy",
      title: "Bringing Art to everything",
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
      description: "partner with Preline",
    },
    {
      title: "Anos de Mercado",
      value: "10+",
      description: "this year alone",
    },
  ];

  const serviceData = {
    title: "Etapas",
    description:
      "A Ideia aqui é mostrar como a empresa trabalha, quais são as etapas do serviço prestado.",
    imageUrl:
      "/assets/service-video.gif",
    steps: [
      {
        title: "Etapa 1",
        description: "Descrição da etapa 1",
      },
      {
        title: "Etapa 2",
        description: "Descrição da etapa 2",
      },
      {
        title: "Etapa 3",
        description: "Descrição da etapa 3",
      },
      {
        title: "Etapa 4",
        description: "Descrição da etapa 4",
      },
    ],
  };

  const service2Data = {
    mainTitle: "Aqui Vamos colocar os tipo de serviços que voces fazem",
    tabs: [
      {
        id: "tabs-with-card-1",
        title: "Serviço",
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
        title: "Serviço 2",
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
        title: "Serviço 3",
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
        title: "Serviço 4",
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
    title: "Latest Shirts",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum beatae excepturi dolores.",
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
      { href: "#", text: "About Us" },
      { href: "#", text: "Help Center" },
      { href: "#", text: "Terms of Service" },
      { href: "#", text: "Privacy Policy" },
    ],
    contactInfo: {
      email: "support@example.com",
      phone: "(123) 456-7890",
      address: "123 Main Street, Anytown, USA",
    },
    socialLinks: [
      {
        href: "#",
        label: "Facebook",
        icon: (
          <svg
            className="w-6 h-6 fill-current text-blue-600 dark:text-blue-400"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
          </svg>
        ),
      },
      {
        href: "#",
        label: "Twitter",
        icon: (
          <svg
            className="w-6 h-6 fill-current text-blue-400 dark:text-blue-300"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616v.061a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z" />
          </svg>
        ),
      },
    ],
    copyrightText: "Your Company",
  };

  return (
    <main className="font-sans antialiased text-gray-800 bg-gray-50 ">
      <Header />
      <CarouselSlider slides={carouselData} />
      <About />
      <Features stats={featuresData} />
      <Service {...serviceData} />
      <Service2 mainTitle={service2Data.mainTitle} tabs={service2Data.tabs} />

   

      <DividerParallax {...dividerParallaxData} />
      <Contact iconBlocks={contactData} />
      <Footer {...footerData} />
    </main>
  );
};

export default App;
