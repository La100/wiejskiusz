import Image from 'next/image';

export default function Services() {
  return (
    <main className="min-h-screen px-6 pt-20 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif italic mb-12 text-center">Moje Usługi</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl mb-16">
        <h3 className="text-2xl font-medium mb-6 text-center">Jak Pracuję?</h3>
        <p className="text-neutral-600 leading-relaxed text-center">
          Każdy projekt rozpoczynam od dokładnego poznania Twoich potrzeb i oczekiwań. 
          Następnie przechodzę przez etapy koncepcji, projektowania, wizualizacji i dokumentacji wykonawczej. 
          Wspieram Cię również podczas realizacji, aby zagwarantować najwyższą jakość wykonania.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="https://utfs.io/f/wooH0SnRkga3WALGGNQo1nONrkxFKAstWJDBwmVhLiYqe0zl"
            alt="Projektowanie wnętrz"
            className="w-full h-[600px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Projektowanie Wnętrz</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tworzę funkcjonalne i estetyczne przestrzenie mieszkalne, które odzwierciedlają Twój styl życia i potrzeby. Moje projekty obejmują:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Kompleksowe projekty mieszkań i domów</li>
              <li>Optymalizację układu pomieszczeń</li>
              <li>Dobór materiałów wykończeniowych</li>
              <li>Projekty mebli na wymiar</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="https://utfs.io/f/wooH0SnRkga30uwRNIOWDVvJRrE9Iwm5u28joLZAnHCcPzOF"
            alt="Przestrzenie komercyjne"
            className="w-full h-[600px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Przestrzenie Komercyjne</h2>
            <p className="text-neutral-600 leading-relaxed">
              Projektuję ergonomiczne i reprezentacyjne przestrzenie biurowe oraz lokale usługowe, które wspierają produktywność i budują profesjonalny wizerunek firmy.
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Aranżacja biur i przestrzeni coworkingowych</li>
              <li>Projekty lokali usługowych i sklepów</li>
              <li>Optymalizacja przestrzeni pod względem funkcjonalnym</li>
              <li>Dostosowanie do wymogów brandingu</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="https://utfs.io/f/wooH0SnRkga3UxiKppsCQ5qc1kiotnjEv0ZNsgSxBarmTFyu"
            alt="Wizualizacje 3D"
            className="w-full h-[600px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Wizualizacje 3D</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tworzę fotorealistyczne wizualizacje, które pozwalają zobaczyć efekt końcowy przed rozpoczęciem prac:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Renderingi wnętrz w wysokiej rozdzielczości</li>
              <li>Animacje i wirtualne spacery</li>
              <li>Wizualizacje poszczególnych pomieszczeń</li>
              <li>Prezentacje różnych wariantów wykończenia</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="https://utfs.io/f/wooH0SnRkga34nataOVdcntR5IYSlU98iaGPCVHQAmrjvOZE"
            alt="Konsultacje i doradztwo"
            className="w-full h-[600px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Konsultacje i Doradztwo</h2>
            <p className="text-neutral-600 leading-relaxed">
              Oferuję profesjonalne wsparcie na każdym etapie projektu:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Doradztwo w zakresie stylizacji wnętrz</li>
              <li>Dobór kolorystyki i materiałów</li>
              <li>Konsultacje z wykonawcami</li>
              <li>Nadzór nad realizacją projektu</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 