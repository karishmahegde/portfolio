export default function skills(props) {
  const programmingLang = [
    {
      name: "Java",
      icon: "java.png",
    },
    {
      name: "Python",
      icon: "python.png",
    },
    {
      name: "JavaScript",
      icon: "javascript.png",
    },
    {
      name: "C",
      icon: "c.png",
    },
    {
      name: "C++",
      icon: "cplusplus.png",
    },
    {
      name: "R",
      icon: "r.png",
    },
  ];

  const backEnd = [
    {
      name: "SQL",
      icon: "sql.png",
    },
    {
      name: "Spring Boot",
      icon: "springboot.png",
    },
  ];

  const frontEnd = [
    {
      name: "React JS",
      icon: "react.png",
    },
    {
      name: "HTML5",
      icon: "html5.png",
    },
    {
      name: "Streamlit",
      icon: "streamlit.png",
    },
    {
      name: "CSS3",
      icon: "css.png",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind.png",
    },
  ];

  const app_framework = [
    {
      name: "OpenAI API",
      icon: "openai.png",
    },
    {
      name: "Git",
      icon: "git.png",
    },
    {
      name: "Figma",
      icon: "figma.png",
    },
    {
      name: "Oracle CPQ",
      icon: "oraclecpq.png",
    },
    {
      name: "Android Studio",
      icon: "android.png",
    },
    {
      name: "Google Firebase",
      icon: "firebase.png",
    },
  ];
  return (
    <div
      id="skills"
      className={`contentWrapper ${props.darkMode ? "dark" : ""}`}
    >
      <div className="skillsHeader">
        <h1>SKILLS 🛠️</h1>
        <p>what I bring in my toolbox</p>
      </div>
      <div className="skillsBody">
        <h3>programming languages</h3>
        <div className="skillsGrid">
          {programmingLang.map((skill, idx) => (
            <div className="skillsGridItem" key={idx}>
              <img
                src={`${process.env.PUBLIC_URL}/images/skillIcons/${skill.icon}`}
                className="skillsGridItemImg"
                alt={skill.name}
              ></img>
              <p className="skillsGridItemText">{skill.name}</p>
            </div>
          ))}
        </div>
        <h3>applications and frameworks</h3>
        <div className="skillsGrid">
          {app_framework.map((skill, idx) => (
            <div className="skillsGridItem" key={idx}>
              <img
                src={`${process.env.PUBLIC_URL}/images/skillIcons/${skill.icon}`}
                className="skillsGridItemImg"
                alt={skill.name}
              ></img>
              <p className="skillsGridItemText">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3>frontend tools</h3>
        <div className="skillsGrid">
          {frontEnd.map((skill, idx) => (
            <div className="skillsGridItem" key={idx}>
              <img
                src={`${process.env.PUBLIC_URL}/images/skillIcons/${skill.icon}`}
                className="skillsGridItemImg"
                alt={skill.name}
              ></img>
              <p className="skillsGridItemText">{skill.name}</p>
            </div>
          ))}
        </div>
        <h3>backend tools</h3>
        <div className="skillsGrid">
          {backEnd.map((skill, idx) => (
            <div className="skillsGridItem" key={idx}>
              <img
                src={`${process.env.PUBLIC_URL}/images/skillIcons/${skill.icon}`}
                className="skillsGridItemImg"
                alt={skill.name}
              ></img>
              <p className="skillsGridItemText">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
