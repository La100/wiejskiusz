import ProjectCarousel from '../components/ProjectCarousel';

export default function Projects() {
  const singleFamilyHouse = {
    title: "DOM JEDNORODZINNY",
    description: `Projekt domu jednorodzinnego dla sześciosobowej rodziny obejmował kompleksową przebudowę kilku kluczowych pomieszczeń, mając na celu stworzenie nowoczesnej, funkcjonalnej przestrzeni sprzyjającej wspólnemu spędzaniu czasu. Głównym celem remontu było poprawienie komfortu i efektywności użytkowania przestrzeni, a także dostosowanie jej do potrzeb rosnącej rodziny.

    Pierwszym krokiem była przebudowa strefy dziennej, która stała się sercem domu. Dzięki wyburzeniu części ścian, możliwe było stworzenie otwartej, przestronnej przestrzeni, w której z łatwością można było zorganizować kuchnie, jadalnię oraz strefę wypoczynkową. Zmieniono układ pomieszczeń, aby zapewnić jak najlepszy przepływ światła naturalnego, co dodatkowo poprawiło komfort użytkowania wnętrz. Wymiana okien na duże, nowoczesne, energooszczędne modele pozwoliła na lepsze doświetlenie strefy dziennej. Powstało zjawisko, w którym zewnętrze zaczęło płynnie łączyć się z wnętrzem. Duże, panoramiczne okna pozwoliły na uzyskanie szerokiego widoku na ogród i otaczającą przyrodę, co sprawiło, że natura stała się integralną częścią codziennego życia mieszkańców. Przestronność, jaką zyskały pomieszczenia, a także duża ilość naturalnego światła, wprowadziły do wnętrza atmosferę świeżości i lekkości.

    Kolejnym ważnym elementem remontu była przebudowa kuchni. Dzięki zmianom w rozkładzie pomieszczenia, powstała funkcjonalna, otwarta kuchnia połączona z jadalnią. Wyposażenie zostało zaprojektowane z myślą o dużych rodzinach, uwzględniając przestronną wyspę kuchenną, nowoczesne urządzenia oraz mnóstwo miejsca do przechowywania. Całość została zaprojektowana tak, aby gotowanie i wspólne posiłki stały się przyjemnością, a przestrzeń była odpowiednia do organizowania spotkań rodzinnych.`,
    images: [
   
      'https://utfs.io/f/wooH0SnRkga3TmUSQX5hP0gC2OjH4pS9YoJeRsulcZErV1aA',
        'https://utfs.io/f/wooH0SnRkga3oMbYkxPLkSQ6YDUT3X7hVlg49ieJnFvWsPN0', 
      'https://utfs.io/f/wooH0SnRkga3xOBTD52RfzjVHtInU037mQMCihecBWZ1KvA8',
      'https://utfs.io/f/wooH0SnRkga3pBJRSRi7J4AMiSZwNXDRLeCYhEgGfHco0F6j',
      'https://utfs.io/f/wooH0SnRkga3E9EBctPsKO6LQZ9TFEjntUcm4WBbzpA3yHNl',
      'https://utfs.io/f/wooH0SnRkga3TmgaKVchP0gC2OjH4pS9YoJeRsulcZErV1aA',
      'https://utfs.io/f/wooH0SnRkga3Csz8Mjpr6qvcfbALYI1yxVFdSuO90DKEWJi4',
    
      'https://utfs.io/f/wooH0SnRkga3LcKSzDkCzY32ZJH5AgbnauxPGcw0sVflF94X',
      'https://utfs.io/f/wooH0SnRkga3CjiwqGIpr6qvcfbALYI1yxVFdSuO90DKEWJi',
    



    ],
  };

  return (
    <main className="min-h-screen ">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-32 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">Moje projekty</h1>
        <div className="h-px w-16 bg-neutral-200 mb-8"></div>
       
      </div>
      
      <ProjectCarousel {...singleFamilyHouse} />
    </main>
  );
} 