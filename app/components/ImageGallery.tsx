// components/ImageGallery.tsx
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
  'https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
];

const ImageGallery: React.FC = () => {
  return (
    <div  className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto " id="portifolio">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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