import React from "react";
import "./App.css";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;

// About
// Skills
// Projects
// Experience
// Contact
