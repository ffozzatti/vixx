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
      <body className="antialiased">
        <main>{children}</main>

        {/* Adiciona o script da Preline para garantir a interatividade dos componentes */}
        <PrelineScript />

     
      </body>
    </html>
  );
}
