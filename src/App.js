import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./Skills.js";
import Footer from "./components/Footer.js";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleSwitch() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleSwitch} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
