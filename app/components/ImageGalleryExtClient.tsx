'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryExtClientProps {
  images: string[];
}

const ImageGalleryExtClient: React.FC<ImageGalleryExtClientProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
        {images.map((src, index) => (
          <div 
            key={index}
            className="w-full aspect-square relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(src)}
          >
            <Image
              src={src}
              alt="Gallery Image"
              fill
              className="object-cover object-center"
              quality={80}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
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
    </>
  );
};

export default ImageGalleryExtClient;