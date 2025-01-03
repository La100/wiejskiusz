import Image from "next/image";

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  images: {
    url: string;
    alt: string;
  }[];
  onImageClick: (image: { url: string; alt: string }) => void;
}

export default function GallerySection({ title, subtitle, images, onImageClick }: GallerySectionProps) {
  return (
    <div className="mb-16">
      <h2 className="font-futura pt-12 text-3xl md:text-4xl tracking-tight mb-3">{title}</h2>
      {subtitle && (
        <p className=" text-neutral-600 text-lg md:text-xl mb-4">{subtitle}</p>
      )}
      <div className="h-px w-16 bg-neutral-200 mb-8 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onImageClick(image)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 