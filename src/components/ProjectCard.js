import React from "react";
import Modal from "./Modal/Modal";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="case-study">
      <div className="title-container">
        <h3>{props.data.title}</h3>
        <img
          className="project-image"
          src={props.data.image}
          alt="Case Study 1"
        />
      </div>
      <div className="project-link">
        {/* github link first or date first? */}
        <div className="date">{props.data.date}</div>
        {/* <i>
          <a href={props.data.link} target="_blank">
            Github
          </a>
        </i> */}
      </div>

      <p>{props.data.shortDescription}</p>

      <div className="techstack">
        <b>Tech Stack</b>{" "}
        <div className="tech-icons">
          {props.data.techIcon.map((icon, index) => {
            return (
              <img
                className="tech-icon"
                src={icon}
                key={index}
                style={{ zIndex: props.data.techIcon.length - index }}
              />
            );
          })}
        </div>
      </div>

      <div class="button-container">
        <Modal data={props.data} />
      </div>
    </div>
  );
}

export default ProjectCard;
