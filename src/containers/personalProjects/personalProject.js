import React from "react";
import "./personalProjects.css";
import { personalProjects as data } from "../../portfolio";
import { Fade } from "react-reveal";

export default function personalProjects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{data.title}</h1>
          <p className="subTitle project-subtitle">{data.subtitle}</p>
          <div className="personal-projects-main">
            <div className="personal-project-text">
              {data.projects.map((project) => {
                return (
                  <div
                    className="personal-project-item-div"
                    onClick={() => openProjectInNewWindow(project.link)}
                  >
                    <img alt={project.name} src={project.image}></img>
                    <p>{project.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="personal-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
