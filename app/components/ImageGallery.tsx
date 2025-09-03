// components/ImageGallery.tsx
import Image from 'next/image';

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
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto " id="portifolio">
       <h2 className="text-2xl font-bold text-[#01122E] md:text-3xl pb-4 text-center mt-20">
                Portifolio
              </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-9">
        <div className="space-y-2">
          {images.slice(0, 3).map((src, index) => (
            <Image
              key={index}
              className="w-full h-auto object-cover"
              src={src}
              alt="Gallery Masonry Image"
              width={560}
              height={560}
              quality={80}
              priority={index < 2} // Otimiza o carregamento das primeiras imagens
            />
          ))}
        </div>
        <div className="space-y-2">
          {images.slice(3, 5).map((src, index) => (
            <Image
              key={index}
              className="w-full h-auto object-cover"
              src={src}
              alt="Gallery Masonry Image"
              width={560}
              height={560}
              quality={80}
            />
          ))}
        </div>
        <div className="space-y-2">
          {images.slice(5, 8).map((src, index) => (
            <Image
              key={index}
              className="w-full h-auto object-cover"
              src={src}
              alt="Gallery Masonry Image"
              width={560}
              height={560}
              quality={80}
            />
          ))}
        </div>
        <div className="space-y-2">
          {images.slice(8, 10).map((src, index) => (
            <Image
              key={index}
              className="w-full h-auto object-cover"
              src={src}
              alt="Gallery Masonry Image"
              width={560}
              height={560}
              quality={80}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;