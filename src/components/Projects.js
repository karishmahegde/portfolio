import React, { useState, useEffect } from "react";
import projectData from "../projectData.json";

export default function Projects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const categories = ["All", "AI/ML", "Full-Stack", "Other"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div
      id="projects"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <h1>💻 Technical Projects</h1>
      {/* Category Filter Bar */}
      <div className="segmentedControl">
        {categories.map((category) => (
          <button
            key={category}
            className={`segmentedBtn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      <div className="projectGridContainer">
        <div className="projectGrid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projectCard">
              <h3 className="projectTitle">{project.title}</h3>
              <div className="projectDetailSec">
                <div className="projectImgContainer">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`}
                    alt={project.title}
                    className="projectImage"
                  />
                </div>

                <div
                  className="projectDesc"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></div>
                <ul>
                  {project.points?.map((point, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>

                <div className="projectDomain">
                  <b>Domain:</b> {project.domain}
                </div>
                <p className="projectTools">
                  <b>Tools:</b> {project.tools.join(", ")}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink"
                  >
                    Know More
                  </a>
                )}
                {project.links &&
                  Object.entries(project.links).map(([label, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink"
                    >
                      {label}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
