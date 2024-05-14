import React from "react";
import AboutImg from "../images/aboutAvatar.png";

export default function About(props) {
  return (
    <div id="about" className="contentWrapper">
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <h2>Nice to meet you! 👋🏻</h2>
          <div className="aboutDetails">
            <p>
              I'm <b>Karishma</b>, a passionate computer engineer. I'm currently
              a master's student at the <b>University of Georgia, USA</b> in the
              <b> MS Computer Science</b> Program. My coursework revolves around
              core Computer Science domains such as Algorithms, Database
              Management, Data Science and more.
            </p>
            <p>
              Prior to my academic pursuit, I was contributing my expertise at
              <b> IBM</b> as an <b>Application Developer</b> for over two years.
              In a typical day, I delved into coding intricate business logic,
              specializing in the generation of complex contract reports and
              crafting a user-friendly UI within the client's application -
              specifically, Oracle CPQ.
            </p>
            <br />
            <p>
              When I'm not channeling my efforts into improving technology, I
              find solace in the world of painting, immersing myself in the
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
              , where I share my work has amassed over{" "}
              <b>10 thousand followers 🎉</b> and collaborated with major art
              brands.
            </p>
            <p>
              I am deeply passionate about advancing my career as a{" "}
              <b>full stack or front-end developer.</b> As an engineer, my
              aspiration is to craft technology solutions that address
              contemporary challenges, driven by a blend of creativity,
              responsibility, and unwavering dedication to my organization.
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
