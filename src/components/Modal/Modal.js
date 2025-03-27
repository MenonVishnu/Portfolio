import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

//Icon Import:
import Github from "../../assets/github.png";
import www from "../../assets/www.png";

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
          <div class="modal-title">{props.data.title}</div>
        </div>
        <div className="content-container">
          <div className="left">
            <img
              class="architecture"
              src={props.data.architecture}
              alt="Architecture"
            />
          </div>
          <div className="center"></div>
          <div className="right">
            <b className="section-title">Description</b>{" "}
            <div class="modal-description">{props.data.description}</div>
            <b className="section-title">Project Links</b>{" "}
            <div className="link">
              <a target="_blank" href={props.data.githubLink}>
                <img className="github-link" src={Github} />
              </a>
              <a className="live-link" target="_blank" href={props.data.link}>
                <img className="github-link" src={www} />
              </a>
            </div>
            <b className="section-title">Tech Stack</b>{" "}
            <div class="tech-stack">
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
        {/* <button onClick={() => close()}>Close</button> */}
      </div>
    )}
  </Popup>
);

export default Modal;
