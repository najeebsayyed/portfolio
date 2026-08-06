import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import AiTerminal from "../components/sections/AiTerminal";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import ImpactStats from "../components/sections/ImpactStats";
import Projects from "../components/sections/Projects";
import CustomCursor from "../components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="bg-background text-text selection:bg-primary selection:text-white">
        <Hero />
        <ImpactStats />
        <About />
        <Projects />
        <AiTerminal />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
