import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-20 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1">
          <h1 className="max-w-4xl text-6xl md:text-6xl lg:text-7xl tracking-tight md:pr-12 lg:pr-20">
            Zaprojektuje przestrzeń, którą
            <span className="font-serif italic"> pokochasz</span> 
            <br />
            <span className="block text-4xl mt-3 md:mt-4">
              Projekty i wizualizacje wnętrz z dbałością o każdy detal
            </span>
          </h1><div className="mt-8 ">
            <a
              href="/gallery"
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-600"
            >
              Zobacz moje realizacje
            </a>
          </div>
        </div>
        <div className="order-2 md:order-2">
          <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl">
            <Image
              src="https://utfs.io/f/wooH0SnRkga36nQbodxJsL1yfa0XgupBWGbeUVrknDiNISQm"
              alt="Modern living room with sage green sofa, decorative elements, and plants"
              width={1600}
              height={900}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        
        </div>
      </div>
    </div>
  );
} 