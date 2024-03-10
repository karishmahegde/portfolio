import React from "react";

export default function Footer() {
  return (
    <footer id="footer" class="sticky-bottom navbar">
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/karishma-hegde/"
          target="blank"
          class="sm-button"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"> </i>
        </a>
        <a
          href="https://github.com/karishmahegde"
          target="blank"
          class="sm-button"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
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
