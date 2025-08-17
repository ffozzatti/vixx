import React from "react";
import CarouselSlider from "./CarouselSlider"; // Ajuste o caminho se necessário

const App: React.FC = () => {
  // Dados dos slides que queremos exibir
  const slideData = [
    {
      brand: "Nike React",
      title: "Rewriting sport's playbook for billions of athletes",
      imageUrl:
        "https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop",
    },
    {
      brand: "CoolApps",
      title: "From mobile apps to gaming consoles",
      imageUrl:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop",
    },
    {
      brand: "Grumpy",
      title: "Bringing Art to everything",
      imageUrl:
        "https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      {/* Outros componentes do seu app */}
      <CarouselSlider slides={slideData} />
      {/* Outros componentes do seu app */}
    </div>
  );
};

export default App;
