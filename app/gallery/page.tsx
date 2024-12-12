'use client';

import Image from "next/image";
import { useState } from "react";
import ImageModal from "../components/ImageModal";

const images = [
  {
    url: "https://utfs.io/f/wooH0SnRkga3vKQbbPll7ItFN3RhM8KXWZYbBCxajPnw4mqT",
    alt: "Zdjęcie 1",
  },
  {
    url: "https://utfs.io/f/wooH0SnRkga3OOPtpr7WZ7ASPw5Hokg0TvVYbED2BeKxiLuQ", 
    alt: "Zdjęcie 2",
  },
  {
    url: "https://utfs.io/f/wooH0SnRkga3ZTU74FpfEOXksDWaBL0coh6vd59URiT1glyJ",
    alt: "Zdjęcie 3", 
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string; alt: string} | null>(null);

  return (
    <main className="min-h-screen px-6 pt-20 md:px-8">
      <h1 className="text-4xl md:text-5xl font-serif italic mb-8">Galeria</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={index < 2}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.url}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
} 