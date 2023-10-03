import React from "react";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiMui,
  SiPython,
  SiNodedotjs,
  SiMicrosoftazure,
} from "react-icons/si";
const TechStack = () => {
  return (
    <>
      <p style={{ alignSelf: "center", marginBottom: '.3rem' }}>Techstack</p>
      <div className="home__techstack">
        <SiHtml5 className="home__techstack-icon" />
        <SiCss3 className="home__techstack-icon" />
        <SiJavascript className="home__techstack-icon" />
        <SiReact className="home__techstack-icon" />
        <SiTypescript className="home__techstack-icon" />
        <SiRedux className="home__techstack-icon" />
        <SiNodedotjs className="home__techstack-icon" />
        <SiMui className="home__techstack-icon" />
        <SiPython className="home__techstack-icon" />
        <SiMicrosoftazure className="home__techstack-icon" />
      </div>
    </>
  );
};

export default TechStack;
