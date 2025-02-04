"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-8">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-medium flex items-end gap-2">
           <img src="/logo.jpg" alt="Wiejska 11" width={50} height={50} />
           <span className="mb-0">Wiejska 11</span>
          </Link>
          
          {/* Przycisk menu mobilnego */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 relative"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={isMenuOpen ? "text-black" : "text-black"}
            >
              {isMenuOpen ? (
                <path 
                  d="M6 18L18 6M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          {/* Menu desktopowe */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-neutral-600">
             Home
            </Link>
            <Link href="/gallery" className="text-sm hover:text-neutral-600">
              Gallery
            </Link>
            <Link href="/rooms" className="text-sm hover:text-neutral-600">
              Rooms
            </Link>
            <Link href="/neighbourhood" className="text-sm hover:text-neutral-600">
              Neighbourhood
            </Link>
            <Link href="/plan" className="text-sm hover:text-neutral-600">
              Plan of apartment
            </Link>
            <Link
              href="/contact"
              className="text-sm px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Menu mobilne */}
        <div 
          className={`
            fixed inset-y-0 right-0 w-72 transform transition-transform duration-300 ease-in-out bg-[hsl(36,33%,97%)]
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
            shadow-lg
          `}
          style={{ top: '0', zIndex: 40 }}
        >
          <div className="pt-24 px-8">
            <nav className="flex flex-col space-y-8">
              <Link 
                href="/" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/gallery" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/rooms" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link 
                href="/neighbourhood" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Neighbourhood
              </Link>
              <Link 
                href="/plan" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan of apartment
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 inline-block text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Social Media Section */}
            <div className="mt-16 space-y-6 text-neutral-600">
              <div>
                <h3 className="text-sm font-medium text-black mb-2">Contact</h3>
                <p className="text-sm">apartment.wiejska11@gmail.com</p>
                <p className="text-sm">Tel: +48 661 966 066</p>
              </div>
             
            </div>
          </div>
        </div>

        {/* Overlay dla menu mobilnego */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ zIndex: 30 }}
          />
        )}
      </div>
    </header>
  );
} 