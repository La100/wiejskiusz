interface SpaceProps {
  title: string;
  description: string;
  image: string;
}

function Space({ title, description, image }: SpaceProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  const spaces = [
    {
      title: "Grand Salon",
      description: "Large prestigious salon with balcony. Connected with dining room",
      image: "/rooms/grand_salon_1.jpeg"
    },
    {
      title: "Dining Room",
      description: "Spacious to acommodate table for 24 people. Access to second balcony",
      image: "/rooms/dining_room_1.jpeg"
    },
    {
      title: "Gabinet",
      description: "Beautiful oak library connected by secret doors with private rooms",
      image: "/rooms/gabinet_1.jpeg"
    },
    {
      title: "Small Salon",
      description: "Octagonal shape, connecting official and private part of apartment",
      image: "/rooms/small_salon_1.jpeg"
    },
    {
      title: "Kitchen",
      description: "Large kitchen fully equipped with modern appliances",
      image: "/rooms/kitchen_1.jpeg"
    },
    {
      title: "Bedrooms",
      description: "Three quiet bedrooms",
      image: "/rooms/bedroom_1.jpeg"
    },
    {
      title: "Bathrooms",
      description: "Two bathrooms, Toilet, Separate laundry room",
      image: "/rooms/bathroom_1.jpeg"
    },
    {
      title: "Walk-in closets",
      description: "Five large walk-in closets",
      image: "/rooms/closet_1.jpeg"
    },
    {
      title: "Underground garage",
      description: "Two parallel places, access via comfortable ramp",
      image: "/rooms/garage_1.jpeg"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {spaces.map((space) => (
            <Space key={space.title} {...space} />
          ))}
        </div>
      </div>
    </section>
  );
} 