import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Full-width image container */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Elegant architectural detail"
          fill
          className="object-cover w-full"
          sizes="100vw"
          quality={100}
          priority
        />
      </div>
      
      {/* Text overlay container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-2xl w-full mx-4 bg-white/95 rounded-2xl px-8 py-10 text-center shadow-lg">
          <h1 className="text-4xl tracking-wider mb-6 text-gray-800">
            Wiejska 11
          </h1>
          <p className="text-xl leading-relaxed mb-8 text-gray-600">
            A luxury 211 sq. m. apartment in a beautifully restored 1906 building
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-sm  tracking-wider bg-gray-900 text-white border border-gray-900 rounded-sm hover:bg-gray-800 transition-all duration-300 shadow-sm"
          >
            Book a Viewing
          </a>
        </div>
      </div>
    </div>
  );
} 