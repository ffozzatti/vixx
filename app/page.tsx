"use client";

import React from "react";

import { useState } from "react";

import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";




// Importação dos componentes criados

import CarouselSlider from "./components/CarouselSlider";
import About from "./components/About";
//import Features from "./components/Features";
import Service from "./components/Service";
import Service2 from "./components/Service2";

import DividerParallax from "./components/DividerParallax";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Testimonials from "./components/Testimonials";


const App: React.FC = () => {

  const [showSplash, setShowSplash] = useState(true);

  const handleFinishSplash = () => {
    setShowSplash(false);
  };



  // --- DADOS PARA OS COMPONENTES (PROPS) ---

  const carouselData = [
    {
      brand: "Future.",
      title: "Every structure begins with a vision.",
      imageUrl: "/assets/banner_1.jpg",
    },
    {
      brand: "Dreams",
      title: "Your future begins with an idea, we turn it into reality.",
      imageUrl:
        "/assets/banner_2.jpg",
    },
    {
      brand: "Credibility",
      title: "We build more than homes — we build partnerships for life.",
      imageUrl:
        "/assets/banner_3.jpg",
    },
  ];

  

  const serviceData = {
    title: "Steps",
    description:
      "Discover how we turn your vision into reality",
    imageUrl:
      "/assets/logo_alt.png",
    steps: [
      {
        title: "Initial consultation:",
        description: "Understanding the client’s expectations, dreams, and vision; discussing color and material preferences; and establishing a clear budget.",
      },
      {
        title: "Design and blueprints",
        description: "In this step, we define layouts, materials, and finishes in detailed blueprints to bring clarity before construction begins.",
      },
      {
        title: "Free estimate",
        description: "We provide a detailed estimate that defines project scope, timelines, and costs with full transparency.",
      },
      {
        title: "Contract signing",
        description: "With the contract signed, all project details, deadlines, and responsibilities are officially secured.",
      },
       {
        title: "Permit application and mobilization",
        description: "We manage permit applications and prepare the site with crews, materials, and equipment for a smooth project",
      },
       {
        title: "Let’s start building",
        description: "The building phase begins — our team executes the approved plans with precision, safety, and quality.",
      },
       {
        title: "Project delivery:",
        description: "We complete the project and deliver it ready for you to enjoy, ensuring every detail meets our quality standards.",
      },
    ],
  };

  const service2Data = {
    mainTitle: "Expert services designed to transform your home",
    tabs: [
      {
        id: "tabs-with-card-1",
        title: "New construction",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-4.jpeg",
        icon: (
          <BsHouse />

        ),
      },
      {
        id: "tabs-with-card-2",
        title: "Additions",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-2.jpeg",
        icon: (
        <BsHouse />

        ),
      },
      {
        id: "tabs-with-card-3",
        title: "Remodeling",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-3.jpeg",
        icon: (
          <BsHouse />

        ),
      },
      {
        id: "tabs-with-card-4",
        title: "Decks",
        description:
          "Descrição",
        imageUrl:
          "/assets/service-1.jpeg",
        icon: (
          <BsHouse />

        ),
      },

    ],
  };

  const dividerParallaxData = {
    backgroundImageUrl:
      "/assets/paralax-image.jpeg",
    title: "Your project starts here",
    description:
      "Let’s build together",
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
      "VIX Construction is a family-owned company born from overcoming adversity, driven by a passion for building homes and trust, and turning challenges into quality projects and lasting partnerships.",
    usefulLinks: [

      { href: "#", text: "Terms of Service" },
      { href: "#", text: "Privacy Policy" },
    ],
    contactInfo: {
      email: "office@vixconstructionllc.com",
      phone: "(774) 285-1599",
      address: "Northborough, Massachusetts",
    },
    socialLinks: [
      {
        href: "https://www.instagram.com/vixconstructionllc/",
        label: "Instagram",
        icon: (
          <BsInstagram />
        ),
      },
      {
        href: "https://www.youtube.com/@VixConstructionLLC",
        label: "YouTube",
        icon: (
          <BsYoutube />
        ),
      },
    ],
    copyrightText: "VixConstructionllc",
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
          <Testimonials />
          <Service {...serviceData} />
          <Service2 mainTitle={service2Data.mainTitle} tabs={service2Data.tabs} />
          <DividerParallax {...dividerParallaxData} />
          <ImageGallery />
          <Contact />
          <Footer {...footerData} />
        </>
      )}
    </main>
  );
};

export default App;
