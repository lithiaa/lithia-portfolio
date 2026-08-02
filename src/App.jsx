import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import TechStack from "./components/TechStack";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import Certificates from "./pages/Certificates";
import Awards from "./pages/Awards";

const App = () => {
  // Simple fade-in animation logic can be handled via CSS or a small utility
  // For now, we'll just structure it. A proper implementation would use Intersection Observer.

  return (
    <div className={"bg-black min-h-screen flex flex-col"}>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="awards">
          <Awards />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
