import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"] 
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Fioro - Creative Studio",
  description: "Interior design solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <Header />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          {children}
        </div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
