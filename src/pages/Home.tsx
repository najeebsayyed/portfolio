import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-text">
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}
