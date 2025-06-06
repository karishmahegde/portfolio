import React from "react";

export default function Experience(props) {
  return (
    <div
      id="experience"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <div>
        <h2>💼 Experience</h2>
        <div className="experienceContainer">
          <div className="centerLine"></div>

          <div className="row row-1">
            <section>
              <i className="icon fa fa-briefcase"></i>
              <div className="experienceText">
                <p className="experienceRole">Application Developer</p>
                <p className="experienceComapny">
                  <span class="companyName">IBM</span> | Jan 2021 - Jul 2023
                </p>
                <ul className="experienceCard">
                  <li>
                    Developed scalable{" "}
                    <span className="experiencePtHigh">Oracle CPQ</span> user
                    stories for complex quoting workflows and financial
                    reporting to support telecom operations – increasing product
                    adoption by 80% and expanding platform functionality.
                  </li>
                  <li>
                    Led UI design initiative using custom{" "}
                    <span className="experiencePtHigh">CSS stylesheets</span> –
                    transformed visual consistency across 10+ tab segments and 2
                    core modules, aligned with AT&T’s style guide.
                  </li>
                  <li>
                    Implemented quote escalation functionality using{" "}
                    <span className="experiencePtHigh">JSON</span> and automated
                    email alerts – enabling real-time tracking and reducing
                    approval time by 25%.
                  </li>
                  <li>
                    Optimized legacy backend and database code enhancing
                    financial report generation workflows – boosting application
                    performance above 50%.
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fa fa-briefcase"></i>
              <div className="experienceText">
                <p className="experienceRole">Solutions Engineer</p>
                <p className="experienceComapny">
                  <span class="companyName">Whatfix</span> | Jul 2020 - Jan 2021
                </p>
                <ul className="experienceCard">
                  <li>
                    Integrated the digital adoption platform on diverse client
                    web applications like Workday and Salesforce through
                    extensive <span className="experiencePtHigh">HTML</span> DOM
                    analysis using{" "}
                    <span className="experiencePtHigh">JavaScript</span> –
                    transforming user experience and streamlining workflows for
                    over 10 accounts.
                  </li>
                  <li>
                    Resolved 50+ technical support tickets – improving system
                    performance, reducing downtime, and enhancing user
                    experience.
                  </li>
                  <li>
                    Composed technical articles and organized workshops on
                    upcoming mobile application features of the product –
                    benefitting CSMs and members across teams with knowledge
                    transfer.
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fa fa-briefcase"></i>
              <div className="experienceText">
                <p className="experienceRole">Frontend Developer Intern</p>
                <p className="experienceComapny">
                  <span class="companyName">Bosch</span> | Aug 2019 - Mar 2020
                </p>
                <ul className="experienceCard">
                  <li>
                    Developed an end-to-end in-campus mobility tracking
                    application – facilitating employees to track buses and rent
                    electric bicycles.
                  </li>
                  <li>
                    Led the{" "}
                    <span className="experiencePtHigh">
                      Android Application development
                    </span>{" "}
                    initiative – pioneering a solution for administrators to
                    track vehicle status.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
