"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from 'next/image';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    // Apenas um timer para remover a splash screen da tela
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 5000ms da espera + 500ms da animação de saída

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#01122E] z-50 flex flex-col items-center justify-center"
      // Animação de entrada
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Animação de saída
      exit={{ opacity: 0 }}
    >
      <Image
        src="/assets/logo_alt.png"
        alt="Logo"
        width={250}
        height={250}
      />
      <p className="text-white text-lg mt-2">Bulding dreams</p>
    </motion.div>
  );
}