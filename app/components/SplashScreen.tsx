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
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#01122E] z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Image
        src="/assets/logo_alt.png"
        alt="Logo"
        width={150}
        height={150}
      />
      <p className="text-gray-400 -mt-5 font-serif text-sm text-center">We build more than homes - We build trust</p>
    </motion.div>
  );
}