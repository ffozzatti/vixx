'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ButtonBlue from './ButtonBlue';

// Interface para as props do AnimatedNumber (mantido)
interface AnimatedNumberProps {
  targetNumber: number;
  unit: string;
  isPercentage?: boolean;
}

// Seus cards de depoimentos (mantido)
const testimonialCards = [
  {
    id: 1,
    quote: "They built our deck one year ago, and it still looks perfect! The quality is amazing, and the team did an excellent job. Very professional and reliable. Highly recommend!",
    name: "Gabriela Filgueiras",
    source: "Google Review",
    link: 'https://share.google/dVjdJqGgLDYniAxpk',
  },
  {
    id: 2,
    quote: "Great experience from start to finish! The team was professional, efficient, and delivered a beautiful deck with excellent quality. Highly recommend their services!",
    name: "Ellen Salvador",
    source: "Google Review",
    link: 'https://share.google/Za5jNyR4nnGFQcnml',
  },
  {
    id: 3,
    quote: "So happy with our baby room addition! The VIX team was professional, fast, and detail-oriented. The result is perfect!",
    name: "Jess Isidoro",
    source: "Google Review",
    link: 'https://share.google/VOZe93ekPUfdhIhzR',
  },
  {
    id: 4,
    quote: "They renovated our kitchen and living room, and the results are beyond our expectations. The attention to detail, professionalism, and quality of work were outstanding. It truly feels like a brand-new home. Thank you guys!",
    name: "Dheny Miranda",
    source: "Google Review",
    link: 'https://share.google/VOZe93ekPUfdhIhzR',
  },
];

const Testimonials = () => {
  const [cardsInView, setCardsInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [currentCard, setCurrentCard] = useState(0); 
  const [cardsPerView, setCardsPerView] = useState(1); // Novo estado para controlar a visualização
  
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const numCards = testimonialCards.length;

  // 1. Função para determinar o número de cards visíveis
  const calculateCardsPerView = () => {
    if (typeof window === 'undefined') return 1; 
    
    // As classes Tailwind determinam 1 card (default), 2 (sm) ou 3 (lg)
    if (window.innerWidth >= 1024) return 3; // lg: 3 cards
    if (window.innerWidth >= 640) return 2; // sm: 2 cards
    return 1; // Mobile: 1 card
  };

  // 2. useEffect para atualizar cardsPerView na montagem e redimensionamento
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(calculateCardsPerView());
    };

    updateCardsPerView(); // Atualiza na montagem inicial
    window.addEventListener('resize', updateCardsPerView);

    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  // O índice máximo que o carrossel pode atingir sem mostrar espaços vazios
  const maxIndex = Math.max(0, numCards - cardsPerView);

  // 3. Lógica de Navegação Corrigida (Sem Loop, Parando no Último Card Visível)
  
  const goToNext = () => {
    setCurrentCard((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentCard((prev) => Math.max(prev - 1, 0));
  };
  
  // O deslocamento precisa ser a largura de um único card.
  // A largura de um card é 100% dividido pelo número de cards no 'trilho'
  // Como estamos movendo 1 card por vez, usamos 100% (a largura de um card visível, 
  // que no trilho flexível é 100% da visualização móvel, 50% da visualização SM, etc.)
  // Para que o movimento corresponda ao índice, mantemos o `currentCard * 100%`
  // e dependemos da restrição `maxIndex` e das classes Tailwind no card.
  const getTranslateX = () => {
    // Isso move o trilho a largura de UM card, independentemente de quantos são visíveis
    // Mobile: -100% * 0, -100% * 1, -100% * 2, -100% * 3 (até maxIndex = 3)
    // Desktop (3 cards visíveis): -100% * 0, -100% * 1 (até maxIndex = 1)
    return `translateX(-${currentCard * (100 / cardsPerView)}%)`;
  };


  // Efeito para a animação de entrada da seção (mantido)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCardsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  // useEffect para a animação das estatísticas (mantido)
  useEffect(() => {
    // ... (Mantido)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Componente AnimatedNumber (mantido)
  const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
    targetNumber,
    unit,
    isPercentage = false,
  }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (statsInView) {
        let start = 0;
        const duration = 2000;
        const increment = targetNumber / (duration / 10);
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetNumber) {
            setCurrentNumber(targetNumber);
            clearInterval(timer);
          } else {
            setCurrentNumber(start);
          }
        }, 10);
        return () => clearInterval(timer);
      } else {
        setCurrentNumber(0);
      }
    }, [statsInView, targetNumber]);

    return (
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#01122E]">
        {isPercentage
          ? `${currentNumber.toFixed(2)}`
          : currentNumber.toLocaleString()}
        {unit}
      </p>
    );
  };

  return (
    <div className="overflow-hidden">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        
        {/* Título (mantido) */}
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-semibold">
            See what our clients have to say about the quality and professionalism of our projects.
          </h2>
        </div>
        {/* Fim do Título */}

        {/* Carrossel de Cards com Animação */}
        <div
          ref={cardsRef}
          className={`
            relative
            transform transition-all duration-1000 ease-in-out
            ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Container do Carrossel que esconde o overflow */}
          <div className="overflow-hidden">
            {/* O "trilho" dos cards */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              // 🚨 CORREÇÃO PRINCIPAL: O getTranslateX está usando 100 / cardsPerView
              style={{ transform: getTranslateX() }} 
            >
              {testimonialCards.map((card) => (
                <a
                  key={card.id}
                  // Largura do card: 1 card por vez, 2, ou 3
                  className="flex h-auto min-w-full sm:min-w-[50%] lg:min-w-[33.3333%] p-3"
                  href={card.link}
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-full">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-gray-800  overflow-hidden py-4">
                        &quot;{card.quote}&quot;
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                      <div className="flex items-center gap-x-3">
                        <div className="grow">
                          <p className="text-sm sm:text-base font-semibold text-gray-800">
                            {card.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            <span className='flex text-yellow-500'>
                              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </span>
                            {card.source}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Botões de Navegação */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              onClick={goToPrev}
              className="p-2 m-2 bg-white rounded-full shadow-md text-gray-800 hover:bg-gray-100 disabled:opacity-50 transition"
              // Habilita/Desabilita para parar no início
              disabled={currentCard === 0} 
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={goToNext}
              className="p-2 m-2 bg-white rounded-full shadow-md text-gray-800 hover:bg-gray-100 disabled:opacity-50 transition"
              // Habilita/Desabilita para parar no último card visível
              disabled={currentCard >= maxIndex}
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicadores de Posição */}
          <div className="flex justify-center space-x-2 mt-4">
            {/* O indicador deve ir apenas até o maxIndex */}
            {testimonialCards.slice(0, maxIndex + 1).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentCard === index ? 'bg-[#01122E] w-5' : 'bg-gray-300'
                  }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

        </div>
        {/* Fim do Carrossel */}

        {/* ... Restante do código (mantido) ... */}
        
        <div className="text-center mt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-semibold mb-8">
            Your opinion matters! Help others find us by leaving your review.
          </h2>
          <ButtonBlue name={"Leave a review"} url={'https://maps.app.goo.gl/Yco4NaEG7h7gQYGd9'} />
        </div>

        {/* Grid de Estatísticas com Animação (mantido) */}
        <div
          ref={statsRef}
          className={`
            mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8
            transform transition-all duration-1000 ease-in-out delay-500
            ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Estatística 1, 2, 3 (mantidas) */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800">Year in business</h4>
            <AnimatedNumber targetNumber={4} unit="+" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800">Satisfied clients</h4>
            <AnimatedNumber targetNumber={400} unit="+" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800">Completed projects</h4>
            <AnimatedNumber targetNumber={800} unit="+" />
          </div>

        </div>
        {/* Fim do Grid */}

        {/* Elemento SVG (mantido) */}
        <div className="absolute bottom-0 end-0 transform lg:translate-x-32" aria-hidden="true">
          <svg className="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" className="fill-[#01122E]" />
            <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" className="fill-[#01122E]" />
            <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" className="fill-white" />
          </svg>
        </div>
        {/* Fim do Elemento SVG */}
      </div>
    </div>
  );
};

export default Testimonials;