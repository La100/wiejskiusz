'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCarouselProps {
  title: string;
  description: string;
  images: string[];
}

export default function ProjectCarousel({ title, description, images }: ProjectCarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-16">
      <div className="mb-16">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-neutral-800">{title}</h2>
        <div className="h-px w-24 bg-neutral-300"></div>
      </div>
      
      <div className="aspect-[9/16] md:aspect-[16/9]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          loopPreventsSliding={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="w-full h-full select-none"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              direction: 'vertical'
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              direction: 'horizontal'
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              direction: 'horizontal'
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
              <div className="w-full h-full relative p-2">
                <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img
                    src={image}
                    alt={`Projekt ${index + 1}`}
                    className="w-full h-full object-cover pointer-events-none absolute inset-0"
                    draggable="false"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-12">
        <p className="text-neutral-600 whitespace-pre-line leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
