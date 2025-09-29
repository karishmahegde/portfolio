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

  const frontEnd = [
    {
      name: "React JS",
      icon: "react.png",
    },
    {
      name: "Next JS",
      icon: "nextjs.png",
    },
    {
      name: "Vite",
      icon: "vite.png",
    },

    {
      name: "Streamlit",
      icon: "streamlit.png",
    },
    {
      name: "HTML5",
      icon: "html5.png",
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

  const backEnd = [
    {
      name: "Nest.js",
      icon: "nestjs.png",
    },
    {
      name: "Spring Boot",
      icon: "springboot.png",
    },
    {
      name: "Node.js",
      icon: "nodejs.png",
    },
    {
      name: "Google Firebase",
      icon: "firebase.png",
    },
  ];

  const database = [
    {
      name: "MySQL",
      icon: "sql.png",
    },
    {
      name: "MongoDB",
      icon: "mongodb.png",
    },
  ];

  const app_framework = [
    {
      name: "Git",
      icon: "git.png",
    },
    {
      name: "OpenAI API",
      icon: "openai.png",
    },
    {
      name: "Figma",
      icon: "figma.png",
    },
    {
      name: "Postman",
      icon: "postman.png",
    },
    {
      name: "Oracle CPQ",
      icon: "oraclecpq.png",
    },
    {
      name: "Android Studio",
      icon: "android.png",
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
        <h2>programming languages</h2>
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
        <h2>frameworks & libraries</h2>
        <h3>frontend</h3>
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

        <h3>backend</h3>
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

        <h3>database</h3>
        <div className="skillsGrid">
          {database.map((skill, idx) => (
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

        <h2>applications & frameworks</h2>
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
      </div>
    </div>
  );
}
