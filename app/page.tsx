import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <Hero />
        <About />
        <Services />
        <CallToAction />
      </main>
    </div>
  );
}
