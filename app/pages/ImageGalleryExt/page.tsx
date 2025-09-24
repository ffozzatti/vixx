import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import ImageGalleryExtClient from '@/app/components/ImageGalleryExtClient';

// Este é um componente do lado do cliente para a galeria
// Você pode mantê-lo em um arquivo separado, como 'components/ImageGalleryExtClient.tsx'
// ou colocá-lo aqui mesmo para simplicidade (se for pequeno).
// Vamos assumir que você o colocará em um arquivo separado para organização.


// Função para buscar os caminhos das imagens do lado do servidor
async function getImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const galleryDir = path.join(publicDir, 'assets', 'imagens-galeria');
  
  try {
    const files = await fs.readdir(galleryDir);
    const imageFiles = files.filter(file => /\.(png|jpe?g|svg|gif|webp)$/i.test(file));
    return imageFiles.map(file => `/assets/imagens-galeria/${file}`);
  } catch (error) {
    console.error("Erro ao ler o diretório da galeria:", error);
    return []; // Retorna um array vazio para evitar erros na renderização
  }
}

// Esta é a sua página principal, que é um Server Component
const FullImageGalleryPage = async () => {
  const images = await getImages();

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Portfolio</h1>
      
      {/* O componente cliente que gerencia o estado e o modal */}
      <ImageGalleryExtClient images={images} />
    </div>
  );
};

export default FullImageGalleryPage;