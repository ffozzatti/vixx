import type { Metadata } from "next";
import PrelineScript from "./components/PrelineScript";


import "./globals.css";
// Corrigido: O caminho relativo correto de layout.tsx para a pasta de componentes


// Metadata do site
export const metadata: Metadata = {
  title: "VixConstructionllc",
  description: "Building the Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A forma correta é usar as variáveis da fonte diretamente no className
    <html
      lang="pt-BR"
      className={` !scroll-smooth`}
    >
      <head>
        {/* Main SEO Meta Tags */}
        <title>Vix Construction LLC | Quality Engineering & Building Services</title>
        <meta name="description" content="VIX Construction LLC provides expert residential and commercial building services in Massachusetts, New Hampshire, and Rhode Island. Specializing in foundations, renovations, and custom projects. We build trust, stability, and opportunities." />
        <meta name="keywords" content="Vix Construction, VixConstructionLLC, construction, engineering, renovation, Massachusetts, MA, New Hampshire, NH, Rhode Island, RI, residential construction, commercial building, foundation, remodeling, custom projects" />
        <meta name="author" content="VixConstructionLLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:title" content="Vix Construction LLC | Building a Better Future" />
        <meta property="og:description" content="Expert construction and engineering services in Massachusetts, New Hampshire, and Rhode Island. We build more than structures; we build trust and lasting partnerships." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourcompany.com" />
        <meta property="og:image" content="https://www.yourcompany.com/images/logo-vixconstructionllc.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vix Construction LLC | Your Trusted Building Partner" />
        <meta name="twitter:description" content="Dedicated to quality engineering and construction services in MA, NH, and RI. We lay strong foundations for your dreams." />
        <meta name="twitter:image" content="https://www.yourcompany.com/images/logo-vixconstructionllc.png" />
      
      </head>
      <body className="antialiased">
        <main>{children}</main>

        {/* Adiciona o script da Preline para garantir a interatividade dos componentes */}
        <PrelineScript />

     
      </body>
    </html>
  );
}
