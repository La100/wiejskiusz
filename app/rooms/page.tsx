'use client';

import { useState } from "react";

import GallerySection from "../components/GallerySection";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryData = [
  {
    title: "Grand Salon",
    images: [
      {
        url: "/rooms/grand_salon_1.jpeg",
        alt: "Grand Salon - Elegant View",
      },
      {
        url: "/rooms/grand_salon_2.jpeg",
        alt: "Grand Salon - Main Area",
      },
      {
        url: "/rooms/grand_salon_3.jpeg",
        alt: "Grand Salon - Vertical View",
      },
      {
        url: "/rooms/grand_salon_4.jpeg",
        alt: "Grand Salon - Seating Area",
      },
      {
        url: "/rooms/grand_salon_5.jpeg",
        alt: "Grand Salon - Full Room View",
      },
      {
        url: "/rooms/grand_salon_6.jpeg",
        alt: "Grand Salon - Window View",
      },
      {
        url: "/rooms/grand_salon_7.jpeg",
        alt: "Grand Salon - Detail View",
      },
      
    ]
  },
  {
    title: "Dining Room",
    images: [
      {
        url: "/rooms/dining_room_1.jpeg",
        alt: "Dining Room - Main View",
      },
      {
        url: "/rooms/dining_room_2.jpeg",
        alt: "Dining Room - Table Setting",
      },
      {
        url: "/rooms/dining_room_3.jpeg",
        alt: "Dining Room - Window View",
      },
      {
        url: "/rooms/dining_room_4.jpeg",
        alt: "Dining Room - Full Space",
      },
      {
        url: "/rooms/dining_room_5.jpeg",
        alt: "Dining Room - Vertical View",
      }
    ]
  },
  {
    title: "Gabinet",
    images: [
      {
        url: "/rooms/gabinet_1.jpeg",
        alt: "Gabinet - Oak Library View",
      },
      {
        url: "/rooms/gabinet_2.jpeg",
        alt: "Gabinet - Desk Area",
      },
      {
        url: "/rooms/gabinet_3.jpeg",
        alt: "Gabinet - Full Room View",
      }
    ]
  },
  {
    title: "Main Hall",
    images: [
      {
        url: "/rooms/main_hall_1.jpeg",
        alt: "Main Hall - Grand Entrance",
      },
      {
        url: "/rooms/main_hall_2.jpeg",
        alt: "Main Hall - Vertical View",
      }
    ]
  },
  {
    title: "Kitchen",
    images: [
      {
        url: "/rooms/kitchen_1.jpeg",
        alt: "Kitchen - Modern Appliances View",
      },
      {
        url: "/rooms/kitchen_2.jpeg",
        alt: "Kitchen - Counter Space",
      },
      {
        url: "/rooms/kitchen_3.jpeg",
        alt: "Kitchen - Full View",
      }
    ]
  },
  {
    title: "Small Salon",
    images: [
      {
        url: "/rooms/small_salon_1.jpeg",
        alt: "Small Salon - Octagonal Room View",
      },
      {
        url: "/rooms/small_salon_2.jpeg",
        alt: "Small Salon - Connecting Space",
      },
      {
        url: "/rooms/small_salon_3.jpeg",
        alt: "Small Salon - Full Room View",
      }
    ]
  },
  {
    title: "Bathrooms",
    images: [
      {
        url: "/rooms/bathroom_1.jpeg",
        alt: "Bathroom - Modern Design",
      },
      {
        url: "/rooms/bathroom_2.jpeg",
        alt: "Bathroom - Full View",
      },
      {
        url: "/rooms/bathroom_3.jpeg",
        alt: "Bathroom - Additional Space",
      }
    ]
  },
  {
    title: "Bedrooms",
    images: [
      {
        url: "/rooms/bedroom_1.jpeg",
        alt: "Bedroom - Main View",
      },
      {
        url: "/rooms/bedroom_2.jpeg",
        alt: "Bedroom - Vertical View",
      }
    ]
  },
  {
    title: "Walk-in Closets",
    images: [
      {
        url: "/rooms/closet_1.jpeg",
        alt: "Walk-in Closet - Vertical View",
      },
      {
        url: "/rooms/closet_2.jpeg",
        alt: "Walk-in Closet - Storage Space",
      }
    ]
  },
  {
    title: "Garage",
    images: [
      {
        url: "/rooms/garage_1.jpeg",
        alt: "Garage - Main Entrance",
      },
      {
        url: "/rooms/garage_2.jpeg",
        alt: "Garage - Parking Space",
      },
      {
        url: "/rooms/garage_3.jpeg",
        alt: "Garage - Additional View",
      }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string; alt: string} | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl py-8 text-center mb-4">
            Rooms Gallery
          </h1>
          <p className="text-neutral-600 text-lg">
            Click on a room to explore its gallery
          </p>
        </motion.div>

        {galleryData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GallerySection
              title={section.title}
              images={section.images}
              onImageClick={setSelectedImage}
              isExpanded={expandedSection === section.title}
              onToggle={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
            />
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
                src={selectedImage.url}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
} 