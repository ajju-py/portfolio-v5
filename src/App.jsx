import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import FeatureCards from "./sections/FeatureCards";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import LogoShowcase from "./sections/LogoShowcase";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => (
  <div className="bg-slate-950 text-white min-h-screen selection:bg-cyan-500 selection:text-black">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Certifications />
      <FeatureCards />
      <Projects />
      <TechStack />
      <LogoShowcase />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
