import React from "react";
import HTML5 from "../images/skillIcons/html5.png";
import Java from "../images/skillIcons/java.png";
import CPlusPlus from "../images/skillIcons/c++.png";
import Python from "../images/skillIcons/python.png";
import ReactIcon from "../images/skillIcons/react.png";
import JavaScript from "../images/skillIcons/javascript.png";
import Tailwind from "../images/skillIcons/tailwind.png";
import OracleCPQ from "../images/skillIcons/oracleCPQ.png";
import AndroidStudio from "../images/skillIcons/androidStudio.png";
import Firebase from "../images/skillIcons/Firebase.svg";
import SQLIcon from "../images/skillIcons/sqlIcon.png";
import SpringBoot from "../images/skillIcons/springboot.png";
import Figma from "../images/skillIcons/figma.webp";

export default function skills(props) {
  return (
    <div
      id="skills"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <div className="skillsHeader">
        <h1>SKILLS 🛠️</h1>
        <p>what I bring in my toolbox</p>
      </div>
      <div className="skillsBody">
        <h3>programming languages</h3>
        <div className="skillsGrid languages">
          <div className="skillsGridItem">
            <img src={Java} className="skillsGridItemImg" alt="Core Java"></img>
            <p className="skillsGridItemText">Core Java</p>
          </div>
          <div className="skillsGridItem">
            <img src={Python} className="skillsGridItemImg" alt="Python"></img>
            <p className="skillsGridItemText">Python</p>
          </div>
          <div className="skillsGridItem">
            <img src={CPlusPlus} className="skillsGridItemImg" alt="C++"></img>
            <p className="skillsGridItemText">C++</p>
          </div>
          <div className="skillsGridItem">
            <img src={SQLIcon} className="skillsGridItemImg" alt="MySQL"></img>
            <p className="skillsGridItemText">SQL</p>
          </div>
        </div>
        <h3>frontend tools</h3>
        <div className="skillsGrid frontendTools">
          <div className="skillsGridItem">
            <img
              src={ReactIcon}
              className="skillsGridItemImg"
              alt="React"
            ></img>
            <p className="skillsGridItemText">React JS</p>
          </div>
          <div className="skillsGridItem">
            <img src={HTML5} className="skillsGridItemImg" alt="HTML 5"></img>
            <p className="skillsGridItemText">HTML 5</p>
          </div>
          <div className="skillsGridItem">
            <img
              src={JavaScript}
              className="skillsGridItemImg"
              alt="JavaScript"
            ></img>
            <p className="skillsGridItemText">JavaScript</p>
          </div>
          <div className="skillsGridItem">
            <img
              src={Tailwind}
              className="skillsGridItemImg"
              alt="Tailwind CSS"
            ></img>
            <p className="skillsGridItemText">Tailwind CSS</p>
          </div>
          <div className="skillsGridItem">
            <img src={Figma} className="skillsGridItemImg" alt="Figma"></img>
            <p className="skillsGridItemText">Figma</p>
          </div>
        </div>
        <h3>frameworks & applications</h3>
        <div className="skillsGrid applications">
          <div className="skillsGridItem">
            <img
              src={SpringBoot}
              className="skillsGridItemImg"
              alt="SpringBoot"
            ></img>
            <p className="skillsGridItemText">Spring Boot</p>
          </div>
          <div className="skillsGridItem">
            <img
              src={OracleCPQ}
              className="skillsGridItemImg"
              alt="Oracle CPQ"
            ></img>
            <p className="skillsGridItemText">Oracle CPQ</p>
          </div>
          <div className="skillsGridItem">
            <img
              src={AndroidStudio}
              className="skillsGridItemImg"
              alt="Android Studio"
            ></img>
            <p className="skillsGridItemText">Android Studio</p>
          </div>
          <div className="skillsGridItem">
            <img
              src={Firebase}
              className="skillsGridItemImg"
              alt="Google Firebase"
            ></img>
            <p className="skillsGridItemText">Google Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
