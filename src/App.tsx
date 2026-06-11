import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import ProjectIndex from "./components/ProjectIndex";
import ExperienceSection from "./components/ExperienceSection";
import Skills from "./components/Skills";
import Recognition from "./components/Recognition";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { ScrollProgress } from "./components/motion";

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <CaseStudies />
        <ProjectIndex />
        <ExperienceSection />
        <Skills />
        <Recognition />
      </main>
      <Footer />
    </>
  );
}
