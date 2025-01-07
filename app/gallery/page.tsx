'use client';

import { useState } from "react";
import ImageModal from "../components/ImageModal";
import GallerySection from "../components/GallerySection";

const galleryData = [
  {
    title: "ŁAZIENKA W DOMU JEDNORODZINNYM",
    images: [
      {
        url: "/gallery/image00034.jpeg",
        alt: "Zdjęcie 1",
      },
      {
        url: "/gallery/image00035.jpeg",
        alt: "Zdjęcie 2",
      },
      {
        url: "/gallery/image00036.jpeg",
        alt: "Zdjęcie 3",
      },
      {
        url: "/gallery/image00037.jpeg",
        alt: "Zdjęcie 4",
      }
    ]
  },
  {
    title: "APARTAMENT W CENTRUM MIASTA",
    images: [
      {
        url: "/gallery/image00010.jpeg",
        alt: "Zdjęcie 1",
      },
      {
        url: "/gallery/image00001.jpeg",
        alt: "Zdjęcie 2",
      },
      {
        url: "/gallery/image00009.jpeg",
        alt: "Zdjęcie 3",
      }
    ]
  },
  {
    title: "MIESZKANIE W MODERNISTYCZNEJ KAMIENICY",
    images: [
      {
        url: "/gallery/image00057.jpeg",
        alt: "Zdjęcie 1",
      },
      {
        url: "/gallery/image00058.jpeg",
        alt: "Zdjęcie 2",
      },
      {
        url: "/gallery/image00059.jpeg",
        alt: "Zdjęcie 3",
      },
      {
        url: "/gallery/image00060.jpeg",
        alt: "Zdjęcie 4",
      }
    ]
  },
  {
    title: "ŁAZIENKA W STYLU FARMHOUSE",
    subtitle: "Projekt stworzony dla KRESarchitekci",
    images: [
      {
        url: "/gallery/image00038.jpeg",
        alt: "Zdjęcie 1",
      },
      {
        url: "/gallery/image00039.jpeg",
        alt: "Zdjęcie 2",
      },
      {
        url: "/gallery/image00040.jpeg",
        alt: "Zdjęcie 3",
      },
      {
        url: "/gallery/image00041.jpeg",
        alt: "Zdjęcie 4",
      }
    ]
  },
  {
    title: "NOWOCZESNY DOM POD WARSZAWĄ",
    subtitle: "Projekt stworzony dla KRESarchitekci",
    images: [
      {
        url: "/gallery/image00025.jpeg",
        alt: "Zdjęcie 1",
      },
      {
        url: "/gallery/image00026.jpeg",
        alt: "Zdjęcie 2",
      },
      {
        url: "/gallery/image00027.jpeg",
        alt: "Zdjęcie 3",
      },
      {
        url: "/gallery/image00028.jpeg",
        alt: "Zdjęcie 4",
      },
      {
        url: "/gallery/image00029.jpeg",
        alt: "Zdjęcie 5",
      }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string; alt: string} | null>(null);

  return (
    <main className="min-h-screen px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-16">
        <h1 className="font-futura text-center text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">PROJEKTY</h1>
        <div className="h-px w-16 bg-neutral-200 mb-8 mx-auto"></div>
        <p className="text-center text-neutral-600 text-lg md:text-xl mb-12">
          Odkryj moje wizualizacje, które oddają unikalny charakter każdej przestrzeni.
        </p>

        {galleryData.map((section, index) => (
          <GallerySection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            images={section.images}
            onImageClick={setSelectedImage}
          />
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