import Hero from "./components/Hero";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <Hero />
        <About />
     
      </main>
    </div>
  );
}
