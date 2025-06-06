export default function About(props) {
  return (
    <div
      id="about"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <div className="aboutContainer">
        <div className="aboutImgContainer">
          <h2>Nice to meet you! 👋🏻</h2>
          <img
            className="aboutImg"
            src={`${process.env.PUBLIC_URL}/images/aboutImg.png`}
            alt="avatar"
          />
        </div>
        <div className="aboutTextContainer">
          <div className="aboutDetails">
            <p className="aboutHighlight">
              <b>
                I am Karishma, a software developer and computer engineer
                currently based in USA.
              </b>
            </p>
            <p>
              As a recent graduate with a <b>Master of Science</b> in{" "}
              <b>Computer Science</b> from the <b>University of Georgia</b>,
              I’ve built strong technical foundations across{" "}
              <i>
                Data Science, Privacy-Preserving Data Analysis, Human-Computer
                Interaction
              </i>
              , and core areas like <i>Algorithm Design</i> and{" "}
              <i>Database Management</i>. My final project focused on research
              in <b>Affective Computing</b>, where I conducted an extensive
              survey of recent advances to highlight innovative AI
              methodologies, dataset considerations, and key gaps in developing
              more empathetic and inclusive emotion-aware systems.{" "}
            </p>

            <p>
              Previously at <b>IBM</b>, I led the development of scalable web
              applications and drove UI modernization for enterprise cloud
              solutions, enhancing performance and user experience across
              critical systems. At <b>Whatfix</b>, I partnered directly with
              global clients to integrate tailored digital adoption solutions,
              streamlining workflows and improving platform engagement.
            </p>
            <p>
              When I'm not channeling my efforts into improving technology, I
              find solace in the world of <b>painting</b> and <b>digital art</b>
              , immersing myself in the creative flow. I actively share my
              creative work and ideas on my art page, where I’ve built a growing
              community of followers and collaborated with major art brands.
            </p>
            <p>
              Driven by a blend of engineering rigor and creative instinct, I’m
              excited to contribute to impactful products and craft technology
              that’s thoughtful, accessible, and future-forward ✨.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
