import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";
import "./App.css";

function App() {
  return (
    <>
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App
