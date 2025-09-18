'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ButtonInverse from "./ButtonInverse";

const About: React.FC = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);
  const [imagesAreVisible, setImagesAreVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        setTextIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const imagesObserver = new IntersectionObserver(
      ([entry]) => {
        setImagesAreVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (imagesRef.current) {
      imagesObserver.observe(imagesRef.current);
    }

    return () => {
      if (imagesRef.current) {
        imagesObserver.unobserve(imagesRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Container do Texto com Animação (Item do Grid) */}
          <div
            ref={textRef}
            className={`
              bg-[#01122E] p-8 md:p-12 lg:px-16 lg:py-24
              transform transition-all duration-1000 ease-in-out
              ${textIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl pb-4">
                Our story
              </h2>
              <p className=" text-white/90 sm:mt-4 sm:block text-justify">
                Every strong foundation starts with a challenge.
                VIX Construction was born during a difficult moment, when the desire to grow and provide a better life for our family became the driving force behind our work. What started as a way to overcome adversity quickly turned into a passion for building — not just homes, but also trust, stability, and opportunities.
                <br /><br />
                With dedication, hard work, and a clear vision, we transformed those early challenges into a company committed to quality, integrity, and long-lasting results. Today, VIX Construction proudly serves families and communities across Massachusetts, New Hampshire, and Rhode Island, helping each client bring their vision to life.
                <br /><br />
                For us, every project is more than construction — it’s a partnership, built on trust and the belief that better living starts with better building.
                <br /><br />
                <cite>Luis Ribeiro</cite>
                <br />
                CEO - VIX Construction
              </p>
              <div className="mt-4 md:mt-8">
                <ButtonInverse name={"More"} url={"../pages/Contact"} />
              </div>
            </div>
          </div>

          {/* Container das Imagens com Animação e Atraso (Item do Grid) */}
          <div
            ref={imagesRef}
            className={`
              grid grid-cols-1 gap-4 
              transform transition-all duration-1000 ease-in-out delay-500
              ${imagesAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <Image
              alt="Pessoa trabalhando em um laptop"
              src="/assets/about-1.jpeg"
              width={654}
              height={800}
              className="h-full w-full object-cover"
            />
            <Image
              alt="Pessoa sorrindo e usando óculos"
              src="/assets/about-2.jpeg"
              width={774}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;