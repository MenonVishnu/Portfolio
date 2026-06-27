import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

// Icon Import:
import Github from "../../../assets/github.png";
import www from "../../../assets/www.png";

const overlayStyle = { background: "rgba(0,0,0,0.5)" };

const Modal = (props) => (
  <Popup
    trigger={<button className="button">Details</button>}
    modal
    contentStyle={{ overflowY: "auto", maxHeight: "90vh" }}
    {...{ overlayStyle }}
  >
    {(close) => (
      <div className="modal-container">
        <div className="modal-inside-container">
          <div className="x-button" onClick={() => close()}>
            x
          </div>
          <div className="modal-title">{props.data.title}</div>
        </div>
        <div className="content-container">
          <div className="left">
            <img
              className="architecture"
              src={props.data.architecture}
              alt="Architecture"
            />
          </div>
          <div className="center"></div>
          <div className="right">
            <b className="section-title">Description</b>{" "}
            <div className="modal-description">{props.data.description}</div>
            {!props.data.link && !props.data.githubLink ? null : (
              <div className="links">
                <b className="section-title">Project Links</b>{" "}
                <div className="link">
                  {!props.data.githubLink ? null : (
                    <a target="_blank" href={props.data.githubLink} rel="noreferrer">
                      <img className="github-link" src={Github} alt="Github" />
                    </a>
                  )}
                  {!props.data.link ? null : (
                    <a
                      className="live-link"
                      target="_blank"
                      href={props.data.link}
                      rel="noreferrer"
                    >
                      <img className="github-link" src={www} alt="Live Website" />
                    </a>
                  )}
                </div>
              </div>
            )}
            <b className="section-title">Tech Stack</b>{" "}
            <div className="tech-stack">
              {props.data.tech.map((tech, index) => (
                <div
                  key={index}
                  className={`tech ${tech.length > 10 ? "span-2" : ""}`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </Popup>
);

export default Modal;
