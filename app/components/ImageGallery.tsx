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
  '/assets/img-11.jpg',
  '/assets/img-12.jpg',
];

const ImageGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      // Se for null, retorna null para não fazer nada
      if (prevIndex === null) return null;
      // Calcula o próximo índice de forma circular
      return (prevIndex + 1) % images.length;
    });
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      // Se for null, retorna null para não fazer nada
      if (prevIndex === null) return null;
      // Calcula o índice anterior de forma circular
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const renderImages = (imgs: string[]) => {
    return imgs.map((src, index) => (
      <div 
        key={index}
        className="w-full aspect-square relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={() => openModal(index)}
      >
        <Image
          src={src}
          alt="Gallery Masonry Image"
          fill
          className="object-cover object-center"
          quality={80}
          priority={index < 2}
        />
      </div>
    ));
  };

  return (
    <section id="portifolio" className='py-1'>
      <div className=" max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-8 mx-auto" >
        <h2 className="text-2xl font-bold text-[#01122E] md:text-3xl pb-4 text-center mt-20">
          Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
          {renderImages(images)}
        </div>

        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
                onClick={closeModal}
              >
                &times;
              </button>

              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold p-2 bg-black bg-opacity-50 rounded-full"
                onClick={prevImage}
              >
                &#10094;
              </button>
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold p-2 bg-black bg-opacity-50 rounded-full"
                onClick={nextImage}
              >
                &#10095;
              </button>
              
              <Image
                src={images[selectedImageIndex]}
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
    </section>
  );
};

export default ImageGallery;