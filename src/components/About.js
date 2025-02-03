import React from "react";
import AboutImg from "../images/profile.png";

export default function About(props) {
  return (
    <div id="about" className="contentWrapper">
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <h2>Nice to meet you! 👋🏻</h2>
          <div className="aboutDetails">
            <p>
              I'm <b>Karishma</b>, a passionate application developer and
              computer engineer 💻. I’m a master’s student{" "}
              <b>Computer Science</b> at The <b>University of Georgia, USA</b>.
              I’ll be graduating in May 2025 🎓. My coursework revolves around
              core Computer Science domains such as Algorithms, Database
              Management and Human-Computer Interaction. I have also completed
              courses in the area of Data Science and Privacy-Preserving Data
              Analysis.
            </p>
            <p>
              Prior to my academic pursuit, I was contributing my expertise at
              <b> IBM</b> as an <b>Web Cloud Application Developer</b> for 2.5
              years 💼. I contributed my skills by coding the business logic for
              complex user stories and leading the UI redesigning initiatives
              primarily using HTML, CSS, JavaScript and the cloud application’s
              language - BML. <br />I also worked at <b>Whatfix</b>, a digital
              adoption platform startup, where I directly worked with clients to
              set up the platform on their Web Application, primarily using
              JavaScript 🚀.
            </p>
            <br />
            <p>
              When I'm not channeling my efforts into improving technology, I
              find solace in the world of painting 🎨, immersing myself in the
              creative flow. I work with both traditional mediums like gouache
              and acrylic paints as well as digital art with software such as
              Procreate. My
              <b>
                {" "}
                Instagram page{" "}
                <a
                  href="https://www.instagram.com/miracle.creates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @miracle.creates
                </a>
              </b>
              , where I share my work has amassed numerous <b> followers 🎉</b>{" "}
              and collaborated with major art brands.
            </p>
            <p>
              I am deeply passionate about advancing my career as a{" "}
              <b>full stack developer.</b> As an engineer, my aspiration is to
              craft technology solutions that address contemporary challenges,
              driven by a blend of creativity, responsibility, and unwavering
              dedication to my organization ✨.
            </p>
          </div>
        </div>
        <div className="aboutImgContainer">
          <img className="aboutImg" src={AboutImg} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
