import React from "react";

export default function Footer(props) {
  return (
    <footer
      id="footer"
      className={`sticky-bottom navbar ${props.darkMode ? "dark" : ""}`}
    >
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/karishma-hegde/"
          target="blank"
          className="sm-button"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"> </i>
        </a>
        <a
          href="https://github.com/karishmahegde"
          target="blank"
          className="sm-button"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <br />
      </div>
      <div>
        <p>
          &copy; Copyright <span>{new Date().getFullYear()}</span> Karishma
          Hegde | Designed using React JS
        </p>
      </div>
    </footer>
  );
}
