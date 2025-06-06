import home_photo from "../images/profile.png";

export default function Home(props) {
  return (
    <div id="home" className={`contentWrapper ${props.darkMode ? "dark" : ""}`}>
      {/* <h1 id="introText">Hi, I'm Karishma.</h1>
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
          ABOUT ME ✨
        </button>
      </a> */}
      <div className="homeContainer">
        <div className="homeTextContainer">
          <h1 id="introText">
            Hi, I'm <span className="homeName">Karishma</span>.
          </h1>
          <div className="homeDetails">
            With a background in full-stack development and applied machine
            learning, I specialize in building scalable, user-centric systems
            powered by intelligent design.
          </div>
          {/* <a href="#about">
            <button className="homeAboutBtn" type="button">
              ABOUT ME ✨
            </button>
          </a> */}
        </div>
        <div className="homeImgContainer">
          <img className="homeImg" src={home_photo} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
