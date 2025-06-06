import React from "react";
import VantaNetBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Footer from "./components/Footer.js";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleSwitch() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <VantaNetBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleSwitch} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
