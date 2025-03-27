import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

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
            <b className="tech-title">Tech Stack</b>{" "}
            <div class="tech-stack">
              {props.data.tech.map((tech, index) => {
                console.log(tech.length);
                return (
                  <div
                    key={index}
                    className={`tech ${tech.length > 10 ? "span-2" : ""}`}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="other-description">
              <div class="modal-description">{props.data.description}</div>
              <div class="modal-description">github link</div>
              <div class="modal-description">full description</div>
            </div>
          </div>
        </div>
        {/* <button onClick={() => close()}>Close</button> */}
      </div>
    )}
  </Popup>
);

export default Modal;
