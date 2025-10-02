// next.config.js (ou next.config.mjs)

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantém a exportação estática
  output: 'export', 

  images: {
    // DESABILITA A OTIMIZAÇÃO DE IMAGEM para ser compatível com o modo estático
    unoptimized: true, 
    // Mantém a configuração de domínios
    domains: ['pub-e4e2e5cae6524c088fbf837386bbf5de.r2.dev'],
  },
};

export default nextConfig;