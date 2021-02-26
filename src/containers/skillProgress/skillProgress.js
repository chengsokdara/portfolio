import React from "react";
import "./Progress.css";
import SkillSvg from "../../assests/images/skill.svg";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div className="skill">
                  <p>{exp.stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <img alt="Skills" src={SkillSvg} />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
