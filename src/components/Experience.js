import React from "react";

export default function Experience(props) {
  return (
    <div
      id="experience"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <div>
        <h2>Experience 💼</h2>
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
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fa fa-briefcase"></i>
              <div className="experienceText">
                <p className="experienceRole">Project Intern</p>
                <p className="experienceComapny">
                  <span class="companyName">Bosch</span> | Aug 2019 - Mar 2020
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
