import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-end gap-2">
              <img src="/logo.jpg" alt="Wiejska 11" width={40} height={40} />
              <span className="font-medium">Wiejska 11</span>
            </Link>
            <p className="text-sm text-neutral-600 mt-4">
              Comfortable apartment in the heart of Warsaw
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-neutral-600 hover:text-black">Home</Link></li>
              <li><Link href="/gallery" className="text-sm text-neutral-600 hover:text-black">Gallery</Link></li>
              <li><Link href="/rooms" className="text-sm text-neutral-600 hover:text-black">Rooms</Link></li>
              <li><Link href="/plan" className="text-sm text-neutral-600 hover:text-black">Plan of apartment</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-600 hover:text-black">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-neutral-600">apartment.wiejska11@gmail.com</li>
              <li className="text-sm text-neutral-600">+48 661 966 066</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Location</h3>
            <p className="text-sm text-neutral-600">
              Wiejska 11<br />
              Warsaw, Poland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 