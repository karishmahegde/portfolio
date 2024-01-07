import { TypeAnimation } from "react-type-animation";

export default function Home(props) {
  return (
    <div id="home" className={`contentWrapper ${props.darkMode ? "dark" : ""}`}>
      <h1 id="introText">Hi, I'm Karishma.</h1>
      <h1 className="typeText">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Computer Engineer.",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Application Developer. ",
            2000,
            "Student.",
            2000,
            "Artist.",
            2000,
          ]}
          className="typeTextAnimation"
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <a href="#about">
        <button className="homeAboutBtn" type="button">
          about me ✨
        </button>
      </a>
    </div>
  );
}
