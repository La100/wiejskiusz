import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        <About />
      </div>
    </main>
  );
}
