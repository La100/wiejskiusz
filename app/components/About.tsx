import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main grid of spaces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Grand Salon</h3>
            <p className="text-gray-700">Large prestigious salon with balcony. Connected with dining room</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Dining Room</h3>
            <p className="text-gray-700">Spacious to acommodate table for 24 people. Access to second balcony</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Gabinet</h3>
            <p className="text-gray-700">Beautiful oak library connected by secret doors with private rooms</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Small Salon</h3>
            <p className="text-gray-700">Octagonal shape, connecting official and private part of apartment</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Kitchen</h3>
            <p className="text-gray-700">Large kitchen fully equipped with modern appliances</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Bedrooms</h3>
            <p className="text-gray-700">Three quiet bedrooms</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Bathrooms</h3>
            <p className="text-gray-700">Two bathrooms, Toilet, Separate laundry room</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Walk-in closets</h3>
            <p className="text-gray-700">Five large walk-in closets</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-gray-900">Underground garage</h3>
            <p className="text-gray-700">Two parallel places, access via comfortable ramp</p>
          </div>
        </div>

        {/* Image below */}
        <div className="relative aspect-[3/4] w-1/2 mx-auto">
          <Image
            src="/hero2.jpg"
            alt="Grand Salon"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
} 