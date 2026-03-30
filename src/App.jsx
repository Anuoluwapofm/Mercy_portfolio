import React from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      {/* 1. Navbar stays at the top */}
      <Navbar />

      {/* 2. All sections are stacked here. 
          The Navbar links (#home, #about) will now find these IDs instantly. */}
      <main>
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
