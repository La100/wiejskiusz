import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Sonia Projects</h3>
            <p className="text-sm text-neutral-600">
              Profesjonalne projekty i wizualizacje wnętrz
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-sm text-neutral-600 hover:text-black">Projekty</Link></li>
              <li><Link href="/services" className="text-sm text-neutral-600 hover:text-black">Usługi</Link></li>
              <li><Link href="/gallery" className="text-sm text-neutral-600 hover:text-black">Galeria</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-600 hover:text-black">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-sm text-neutral-600">soniaarchitektura@gmail.com</li>
              <li className="text-sm text-neutral-600">+48 696 600 364</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/sonia_projects/" className="text-sm text-neutral-600 hover:text-black">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 