import React from "react";
import { Slide } from "react-awesome-reveal";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import Project4 from "../images/project4.png";
import Project5 from "../images/project5.png";

export default function Experience(props) {
  return (
    <div
      id="projects"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <h1>My Projects</h1>
      <Slide duration={2000} direction="left">
        <section>
          <div className="projectContainer">
            <div className="projectLeft leftToRight">
              <img src={Project5} alt="Differentially-Private Classifier"></img>
            </div>
            <div className="projectRight leftToRight">
              <div className="content">
                <h3>Differentially-Private Image Classifier </h3>
                <p>
                  This project focuses on implementing{" "}
                  <b>
                    Differentially Private Stochastic Gradient Descent (DP-SGD)
                  </b>{" "}
                  using <b>Opacus</b>, incorporating:
                  <ul>
                    <li>
                      <b>Adaptive Gradient Clipping</b> and{" "}
                      <b>Weight Standardization</b> to enhance privacy-utility
                      trade-offs.
                    </li>
                    <li>
                      Optimization of <b>ResNet-20</b> and <b>WRN-16-4</b> for
                      image classification on the CIFAR-10 dataset
                    </li>
                    <li>
                      Achieved best accuracy <b>63%</b> accuracy under privacy
                      constraints, approaching the state-of-the-art benchmark of
                      70%
                    </li>
                  </ul>
                </p>
                <p className="projectDomain">Domain: Machine Learning</p>
                <p className="projectTools">
                  <p className="projectTools">
                    Tools 🔧: Python | Opacus | Google Colaboratory
                  </p>
                </p>
                <a
                  href="https://github.com/karishmahegde/dp-optimizer"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      <Slide duration={2000} direction="right">
        <section>
          <div className="projectContainer">
            <div className="projectLeft rightToLeft">
              <div className="content">
                <h3>
                  CollabPal - Collaborative Tools for Group Projects on EdTech
                  Platforms
                </h3>
                <p>
                  As part of the Human Computer Interaction course in my
                  Master's program, this project involves extensive user
                  research leading to a high-fidelity protoype for the lack of
                  user-friendly tools to assist group assignments and projects
                  on edTech platforms.
                  <ul>
                    <li>
                      Developed a smart platform that suggests appropriate tools
                      based on the project and course.
                    </li>
                    <li>
                      Integrated a calendar feature that tracks group members'
                      schedules and suggests feasible meeting times.
                    </li>
                  </ul>
                </p>
                <p className="projectDomain">
                  Domain: User Experience Design | User Research | Design
                  Principles
                </p>
                <p className="projectTools">
                  <p className="projectTools">
                    Tools 🔧: Figma | SurveyMonkey | Google Suite
                  </p>
                </p>
                <a
                  href="https://www.figma.com/proto/z47m6gue0e62IFhRn4wLra/Squad-HCI%253A-Milestone-5---Prototyping?node-id=2004-89&t=V2vu4vNNXo4JNEV6-1&scaling=scale-down&page-id=2004%3A88&starting-point-node-id=2004%3A89"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hi-fi Prototype
                </a>
                <a
                  href="https://drive.google.com/drive/folders/13e_QfbkE4GEzDNHKMx-VFdswuR6kuGdl?usp=sharing"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="projectRight rightToLeft">
              <img src={Project3} alt="Tenzies Game"></img>
            </div>
          </div>
        </section>
      </Slide>
      <Slide duration={2000} direction="left">
        <section>
          <div className="projectContainer">
            <div className="projectLeft leftToRight">
              <img src={Project4} alt="Tenzies Game"></img>
            </div>
            <div className="projectRight leftToRight">
              <div className="content">
                <h3>Tenzies - The Game</h3>
                <p>
                  This project involves the development of a game using key
                  concepts of React JS, including
                  <ul>
                    <li>
                      Management of Custom Components & Parent-Child
                      relationships
                    </li>
                    <li>Utilization of Props efficiently</li>
                    <li>Implementation of Conditional Rendering</li>
                    <li>
                      State management with React.useState() and handling Side
                      Effects with React.useEffect()
                    </li>
                    <li>LocalStorage for data persistence.</li>
                  </ul>
                </p>
                <p className="projectDomain">
                  Domain: Web Application Development
                </p>
                <p className="projectTools">
                  <p className="projectTools">Tools 🔧: React JS</p>
                </p>
                <a
                  href="https://karishmahegde.github.io/tenziesGame/"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now!
                </a>
                <a
                  href="https://github.com/karishmahegde/tenziesGame"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      <Slide duration={2000} direction="right">
        <section>
          <div className="projectContainer">
            <div className="projectLeft rightToLeft">
              <div className="content">
                <h3>
                  Building Sustainable Transportation Solutions for Large
                  Campuses
                </h3>
                <p>
                  Vast campuses pose commuting challenges due to their size,
                  discouraging walking and aggravating pollution and parking
                  issues. This project at BOSCH utilizes a microservices
                  architecture for a streamlined on-campus transportation
                  system. Users book two-wheelers through an Android app, while
                  admins manage assets and track usage through a backend
                  database and mobile app.
                </p>
                <p className="projectDomain">
                  Domain: Mobile Application Development | Full-Stack
                  Development
                </p>
                <p className="projectTools">
                  Tools 🔧: Android Studio (Frontend Mobile Application) |
                  Google Firebase OAuth and FCM (user authentication) | Spring
                  Boot Tool Suite (core server) | MySQL (organization asset
                  database) | Raspberry Pi 3 (docking station simulation)
                </p>
                <a
                  href="https://drive.google.com/file/d/1egzkAZaZtNWktjk5_HBzIJ33ywXgQW5v/view?usp=sharing"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="projectRight rightToLeft">
              <img src={Project1} alt="Electric Bicycles"></img>
            </div>
          </div>
        </section>
      </Slide>
      <Slide duration={2000} direction="left">
        <section>
          <div className="projectContainer">
            <div className="projectLeft leftToRight">
              <img src={Project2} alt="Electric Bicycles"></img>
            </div>
            <div className="projectRight leftToRight">
              <div className="content">
                <h3>My Staff Room</h3>
                <p>
                  The StaffRoom Mobile Application, designed for Android,
                  facilitates seamless communication among faculty members
                  within an institution. Teachers and professors can exchange
                  text messages, media, and various document formats, including
                  PDFs and docx.
                </p>
                <p className="projectDomain">
                  Domain: Mobile Application Development
                </p>
                <p className="projectTools">
                  Tools 🔧: Android Studio (Frontend Mobile Application), Google
                  Firebase (User authentication and database)
                </p>
                <a
                  href="https://github.com/karishmahegde/MyStaffRoom_Mobile_Application"
                  className="projectBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  );
}
