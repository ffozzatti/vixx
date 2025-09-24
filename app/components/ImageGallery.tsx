'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import ButtonBlue from './ButtonBlue';

const images = [
  '/assets/img-1.jpeg',
  '/assets/img-2.jpeg',
  '/assets/img-9.jpeg', 
  '/assets/img-8.jpeg',
  '/assets/img-4.jpeg',
  '/assets/img-6.jpeg',
  '/assets/img-5.jpeg',
  '/assets/img-7.jpeg',
  '/assets/img-3.jpeg',
  '/assets/img-10.jpeg',
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImages = (imgs: string[]) => {
    return imgs.map((src, index) => (
      <Image
        key={index}
        className="w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        src={src}
        alt="Gallery Masonry Image"
        width={560}
        height={560}
        quality={80}
        priority={index < 2} // Otimiza o carregamento das primeiras imagens
        onClick={() => openModal(src)}
      />
    ));
  };

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-8 mx-auto" id="portifolio">
      <h2 className="text-2xl font-bold text-[#01122E] md:text-3xl pb-4 text-center mt-20">
        Portfolio
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-9">
        <div className="space-y-2">
          {renderImages(images.slice(0, 3))}
        </div>
        <div className="space-y-2">
          {renderImages(images.slice(3, 5))}
        </div>
        <div className="space-y-2">
          {renderImages(images.slice(5, 8))}
        </div>
        <div className="space-y-2">
          {renderImages(images.slice(8, 10))}
        </div>
      </div>

      {/* Modal Condicional */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar na imagem
          >
            <button 
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Imagem em tela cheia"
              width={1024}
              height={768}
              quality={90}
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
        </div>
      )}

    <div className='text-center p-8' >

     <ButtonBlue name={'View More'} url={'../pages/ImageGalleryExt'} />

    </div>


    </div>
  );
};

export default ImageGallery;