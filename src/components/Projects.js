import React from "react";
import { Slide } from "react-awesome-reveal";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.png";

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
              <img src={Project1} alt="Electric Bicycles"></img>
            </div>
            <div className="projectRight leftToRight">
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
          </div>
        </section>
      </Slide>
      <Slide duration={2000} direction="right">
        <section>
          <div className="projectContainer">
            <div className="projectLeft rightToLeft">
              <h3>My Staff Room</h3>
              <p>
                My StaffRoom Mobile Application is an Android Application that
                is built to facilitate the faculty of an institution to
                communicate with each other through a messaging interface.
                Teachers or Professors can send each other text messages, media,
                and documents of different formats such as PDFs, Docx, etc.
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
            <div className="projectRight rightToLeft">
              <div className="content">
                <img src={Project2} alt="Electric Bicycles"></img>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  );
}
