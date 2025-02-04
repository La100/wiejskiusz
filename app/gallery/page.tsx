"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const images = Array.from({ length: 19 }, (_, i) => ({
  url: `/gallery/image-${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`
}));

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className=" text-4xl py-8 text-center mb-4">Gallery of apartment</h1>
       
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={image.url}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <div
              className="relative aspect-auto rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image.url)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority={index < 6}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
} 