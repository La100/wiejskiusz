import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Full-width image container */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/image-17.jpg"
          alt="Luxury apartment interior"
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
          priority
        />
      </div>
      
      {/* Text overlay container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl mx-4 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-10 text-center shadow-lg">
          <h1 className="text-2xl tracking-wider mb-4 text-gray-800">
            Welcome to Wiejska 11 Apartment
          </h1>
          <p className="text-base leading-relaxed mb-6 text-gray-600">
            The 211 sq. m luxury apartment is located on the third floor of the four story building built in 1906.
          </p>
     
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-sm tracking-wider bg-gray-900 text-white border border-gray-900 rounded-sm hover:bg-gray-800 transition-all duration-300 shadow-sm"
          >
            Book a Viewing
          </a>
        </div>
      </div>
    </div>
  );
} 