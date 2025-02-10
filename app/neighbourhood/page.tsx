import Image from 'next/image'

const neighborhoodData = [
  {
    title: "Royal Łazienki Park",
    image: "/neighbourhood/lazienki.jpg",
  },
  {
    title: "Powiśle Park",
    image: "/neighbourhood/powisle.jpg",
  },
  {
    title: "Ujazdowski Castle and Park",
    image: "/neighbourhood/ujazdowski.jpg",
  },
  {
    title: "French Embassy",
    image: "/neighbourhood/french.jpg",
  },
  {
    title: "Swiss Embassy",
    image: "/neighbourhood/swiss.jpg",
  },
  {
    title: "Canadian Embassy",
    image: "/neighbourhood/canadian.jpg",
  },
  {
    title: "Sejm. Houses of Parliament",
    image: "/neighbourhood/sejm.jpg",
  },
  {
    title: "Desa Art Salon and Auction House",
    image: "/neighbourhood/desa.jpg",
  },
  {
    title: "Trzech Krzyży Square",
    image: "/neighbourhood/trzech.jpg",
  }
];

export default function NeighbourhoodPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl py-8 text-center mb-4">Our Neighbourhood</h1>
      
      <div className="w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9359444419247!2d21.024595776680706!3d52.22675667189745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf3e6f4c8a7%3A0x5f9c81c16e3adc83!2sWiejska%2011%2C%2000-480%20Warszawa!5e0!3m2!1sen!2spl!4v1710271144435!5m2!1sen!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
        Discover the prestigious surroundings of Wiejska 11, where history, culture, and diplomacy converge in the heart of Warsaw.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {neighborhoodData.map((item, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-neutral-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
} 