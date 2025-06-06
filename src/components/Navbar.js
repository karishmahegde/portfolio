export default function Navbar(props) {
  return (
    <nav
      id="navContainer"
      className={`navContainer ${props.darkMode ? "dark" : ""}`}
    >
      <div id="logoContainer">
        <img
          id="logoImg"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="Logo"
        ></img>
      </div>
      <div id="navRightContainer">
        <input id="navToggle" type="checkbox" />
        <label className="menuBtnContainer" for="navToggle">
          <div className="menuBtn"></div>
        </label>
        <ul className="navList">
          <li>
            <a className="navLink" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navLink" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navLink" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="navLink" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navLink" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a
              id="resumeNav"
              className="navLink"
              href="https://drive.google.com/uc?export=download&id=1IICfVYiEsVEnN0eYLLH5ZHBe6yB3vXwQ"
              download="Resume - Karishma Hegde"
            >
              Resume <i class="fa fa-download" />
            </a>
          </li>
          <li id="separator">|</li>
          <li id="theme">
            <div id="themeToggle" className="toggler">
              <p className="togglerLight">Light</p>
              <div className="togglerSlider" onClick={props.toggleDarkMode}>
                <div className="togglerSliderCircle"></div>
              </div>
              <p className="togglerDark">Dark</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
