import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleSwitch() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleSwitch} />
      <Home darkMode={darkMode} toggleDarkMode={toggleSwitch} />
      <About darkMode={darkMode} toggleDarkMode={toggleSwitch} />
    </div>
  );
}
